
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Portfolio = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Marketing Manager",
      company: "TechFlow Solutions",
      content: "Their blog writing transformed our content strategy completely. We went from 2,000 to 25,000 monthly visitors in just 8 months. The quality and SEO optimization are exceptional.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "E-commerce Director", 
      company: "StyleHub Online",
      content: "The product descriptions they wrote increased our conversion rate by 38%. Their copywriting captures our brand voice perfectly and drives real sales results.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "CEO",
      company: "GreenTech Startup",
      content: "Their email marketing copy helped us achieve a 28% open rate and 12% click-through rate. Professional, creative, and results-driven content every time.",
      rating: 5
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce Sales Copy",
      description: "Increased conversion rates by 45% with persuasive product descriptions",
      result: "+45% Conversions",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Blog Content Strategy",
      description: "Grew organic traffic from 10K to 100K monthly visitors",
      result: "+900% Traffic",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Email Campaign Series",
      description: "Achieved 32% open rate with engaging newsletter content",
      result: "32% Open Rate",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our content has helped businesses achieve remarkable results and exceed their marketing goals.
          </p>
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {caseStudies.map((study, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${study.color}`}></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {study.description}
                </p>
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${study.color} text-white font-semibold text-sm`}>
                  {study.result}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-indigo-200 mb-4" />
                
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-sm font-medium text-indigo-600">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
