
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Team</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over 5 years of experience in content creation, we've helped hundreds of businesses 
              tell their stories and achieve their marketing goals through powerful, engaging content.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Expert writers with industry specializations",
                "SEO-optimized content that ranks",
                "Fast turnaround without compromising quality",
                "Unlimited revisions until you're satisfied"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Us
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Award Winning</h3>
              <p className="text-gray-600">Recognized for excellence in content marketing</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Professional writers and content strategists</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <Clock className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick turnaround times without quality compromise</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <CheckCircle className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600">Rigorous quality control and editing process</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
