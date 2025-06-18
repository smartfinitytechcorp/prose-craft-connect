
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Portfolio = () => {
  const testimonials = [
    {
      name: "Emily Johnson",
      role: "Graduate Student",
      company: "University of Manchester",
      content: "Their dissertation writing service was exceptional. They helped me structure my research methodology and delivered a high-quality thesis that exceeded my professor's expectations. Highly recommended!",
      rating: 5
    },
    {
      name: "Marcus Thompson",
      role: "MBA Student", 
      company: "London Business School",
      content: "The assignment writing quality is outstanding. They completed my business analysis paper with proper citations and formatting. Received an A+ grade and couldn't be happier with the results.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Undergraduate Student",
      company: "King's College London",
      content: "PWS saved my semester! Their essay writing service delivered my literature review on time with excellent research and analysis. The plagiarism report gave me complete confidence.",
      rating: 5
    }
  ];

  const caseStudies = [
    {
      title: "Dissertation Writing",
      description: "Comprehensive dissertation support including research, methodology, analysis, and professional formatting",
      result: "95% A+ Grades",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Assignment Excellence",
      description: "Custom assignment writing across all subjects with proper citations and academic standards",
      result: "100% On-Time Delivery",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Research Papers",
      description: "In-depth research papers with thorough analysis, proper methodology, and plagiarism-free content",
      result: "Zero Plagiarism",
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
            See how our academic writing services have helped students achieve outstanding results in their assignments, dissertations, and research papers.
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
          <h3 className="text-3xl font-bold text-gray-900 mb-4">What Our Students Say</h3>
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
