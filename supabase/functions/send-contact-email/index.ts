
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  projectType?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormRequest = await req.json();
    
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Store form submission in database
    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        name: formData.name,
        email: formData.email,
        company: formData.company || null,
        subject: formData.subject,
        message: formData.message,
        project_type: formData.projectType || null
      });

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to store form submission");
    }

    // Send email to company
    const emailToCompany = await resend.emails.send({
      from: "PWS Contact Form <onboarding@resend.dev>",
      to: ["elijahmurphy2428@gmail.com"],
      subject: `New Contact Form Submission: ${formData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
        <p><strong>Subject:</strong> ${formData.subject}</p>
        ${formData.projectType ? `<p><strong>Project Type:</strong> ${formData.projectType}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This email was sent from the PWS contact form.</em></p>
      `,
    });

    // Send confirmation email to user
    const emailToUser = await resend.emails.send({
      from: "PWS Team <onboarding@resend.dev>",
      to: [formData.email],
      subject: "Thank you for contacting PWS!",
      html: `
        <h2>Thank you for contacting us, ${formData.name}!</h2>
        <p>We have received your message and will get back to you within 24 hours.</p>
        <p><strong>Your message details:</strong></p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        ${formData.projectType ? `<p><strong>Project Type:</strong> ${formData.projectType}</p>` : ''}
        <p><strong>Message:</strong> ${formData.message}</p>
        <hr>
        <p>Best regards,<br>The PWS Team</p>
        <p><em>Your Success, Our Priority!</em></p>
      `,
    });

    console.log("Emails sent successfully:", { emailToCompany, emailToUser });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Form submitted and emails sent successfully" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
