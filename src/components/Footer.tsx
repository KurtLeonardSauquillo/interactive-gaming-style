
import { Instagram, Github, Linkedin, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      icon: Instagram, 
      url: "https://www.instagram.com/kurtleonard_/",
      label: "Instagram" 
    },
    { 
      icon: Github, 
      url: "https://github.com/kurtleonard",
      label: "GitHub" 
    },
    { 
      icon: Linkedin, 
      url: "https://www.linkedin.com/in/kurt-leonard-sauquillo",
      label: "LinkedIn" 
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-900 font-semibold text-xl">
                K
              </div>
              <span className="font-semibold text-lg">Kurt Leonard</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={16} />
              <span>Pasay, 1630</span>
            </div>
          </div>
          
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a 
                key={link.label}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-all"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Kurt Leonard A. Sauquillo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
