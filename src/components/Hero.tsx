
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* PWS Logo and Branding */}
        <div className="mb-8 flex flex-col items-center">
          <div className="mb-6">
            <img 
              src="/lovable-uploads/90f3935c-c8e6-4c2e-9d09-b13f26c4ddbe.png" 
              alt="PWS Logo" 
              className="h-24 w-auto mx-auto"
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">PWS</span>
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
            Professional Writing Services
          </p>
          <p className="text-lg md:text-xl text-blue-600 font-medium mb-8">
            Your Success, Our Priority!
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-100">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium text-gray-700">Trusted by 500+ students</span>
          </div>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Ready to Excel in Your
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"> Writing Assignments?</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          Whether you need an Essay or Research Paper, we offer custom Writing Solutions that adhere to the highest standards.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-gray-300 hover:border-indigo-500 text-gray-700 hover:text-indigo-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
            onClick={() => window.open('https://www.facebook.com/share/1Eq1U5xfoA/', '_blank')}
          >
            Visit Our Facebook
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
            <h3 className="text-3xl font-bold text-indigo-600 mb-2">100%</h3>
            <p className="text-gray-600 font-medium">Plagiarism Free</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
            <h3 className="text-3xl font-bold text-purple-600 mb-2">24/7</h3>
            <p className="text-gray-600 font-medium">Expert Support</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
            <h3 className="text-3xl font-bold text-blue-600 mb-2">On-Time</h3>
            <p className="text-gray-600 font-medium">Delivery Guaranteed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
