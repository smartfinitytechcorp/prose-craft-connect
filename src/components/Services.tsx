
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PenTool, Target, Zap, Globe, BookOpen, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: PenTool,
      title: "Blog Writing",
      description: "Engaging, SEO-optimized blog posts that establish your authority and drive organic traffic to your website.",
      features: ["SEO Optimization", "Research-backed content", "Consistent publishing schedule"]
    },
    {
      icon: Target,
      title: "Copywriting",
      description: "Persuasive sales copy that converts visitors into customers through compelling headlines and calls-to-action.",
      features: ["Sales pages", "Email campaigns", "Ad copy"]
    },
    {
      icon: Globe,
      title: "Website Content",
      description: "Professional website copy that communicates your value proposition and guides users through their journey.",
      features: ["Landing pages", "About pages", "Service descriptions"]
    },
    {
      icon: BookOpen,
      title: "Content Strategy",
      description: "Comprehensive content strategies that align with your business goals and target audience needs.",
      features: ["Content planning", "Editorial calendars", "Brand voice development"]
    },
    {
      icon: Zap,
      title: "Social Media",
      description: "Engaging social media content that builds community and drives engagement across all platforms.",
      features: ["Post creation", "Caption writing", "Content calendars"]
    },
    {
      icon: TrendingUp,
      title: "Email Marketing",
      description: "Email sequences and newsletters that nurture leads and maintain customer relationships.",
      features: ["Welcome sequences", "Newsletter content", "Promotional emails"]
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
            From blog posts to sales copy, we provide comprehensive content solutions that drive results for your business.
          </p>
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
