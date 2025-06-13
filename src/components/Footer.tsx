
import { Mail, Phone, MapPin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/90f3935c-c8e6-4c2e-9d09-b13f26c4ddbe.png" 
                alt="PWS Logo" 
                className="w-10 h-10 mr-3"
              />
              <div>
                <h3 className="text-2xl font-bold">PWS</h3>
                <p className="text-sm text-gray-300">Professional Writing Services</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Your Success, Our Priority! We help students and professionals achieve excellence through 
              high-quality writing services that adhere to the highest academic standards.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span>info@pws-writing.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span>+1 (555) PWS-HELP</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Facebook className="w-5 h-5 mr-3 text-blue-400" />
                <a 
                  href="https://www.facebook.com/share/1Eq1U5xfoA/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  Visit our Facebook Page
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Academic Services</h4>
            <ul className="space-y-3">
              {[
                "Assignments",
                "Coursework",
                "Technical Projects",
                "Homework",
                "Dissertations",
                "Essays"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Writing Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Writing Services</h4>
            <ul className="space-y-3">
              {[
                "Content Writing",
                "Creative Writing",
                "Article Writing",
                "Research Papers",
                "Grammar Check",
                "Plagiarism Reports"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 PWS - Professional Writing Services. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
