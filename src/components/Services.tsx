
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, FileText, Code, BookOpen, PenTool, Lightbulb } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Assignments & Coursework",
      description: "Professional assistance with academic assignments and coursework across all subjects and academic levels.",
      features: ["Timely deliveries", "Expert formatting", "Unlimited revisions"]
    },
    {
      icon: Code,
      title: "Technical Projects",
      description: "Comprehensive support for technical writing projects, including documentation and analysis.",
      features: ["Technical accuracy", "Detailed documentation", "Industry standards"]
    },
    {
      icon: BookOpen,
      title: "Homework & Dissertations",
      description: "Complete homework solutions and dissertation writing with meticulous referencing and research.",
      features: ["Thorough research", "Proper citations", "Grammar check"]
    },
    {
      icon: FileText,
      title: "Essays & Research Papers",
      description: "Custom essay writing and research papers that adhere to academic standards and guidelines.",
      features: ["Original content", "Plagiarism reports", "Academic formatting"]
    },
    {
      icon: PenTool,
      title: "Content & Article Writing",
      description: "Engaging content creation and article writing for various purposes and audiences.",
      features: ["SEO optimized", "Engaging content", "Target audience focus"]
    },
    {
      icon: Lightbulb,
      title: "Creative Writing",
      description: "Creative writing services including stories, scripts, and imaginative content creation.",
      features: ["Original creativity", "Compelling narratives", "Unique voice"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All Designed To Make Your Work Stand Out! We provide comprehensive writing solutions for academic and professional success.
          </p>
        </div>

        {/* Service Highlights Banner */}
        <div className="mb-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-6">Why Choose PWS?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/20 rounded-lg p-4">
              <h4 className="font-semibold">Unlimited Revisions</h4>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <h4 className="font-semibold">Timely Deliveries</h4>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <h4 className="font-semibold">Plagiarism Reports</h4>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <h4 className="font-semibold">Meticulous Referencing</h4>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
