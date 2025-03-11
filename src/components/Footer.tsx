
import { Instagram, Github, Linkedin, MapPin, Gamepad } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      icon: Instagram, 
      url: "https://www.instagram.com/_kurtleo8/",
      label: "Instagram" 
    },
    { 
      icon: Github, 
      url: "https://github.com/KurtLeonardSauquillo",
      label: "GitHub" 
    },
    { 
      icon: Linkedin, 
      url: "https://www.linkedin.com/in/kurt-leonard-sauquillo-779268249/",
      label: "LinkedIn" 
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6 border-t border-green-500/20">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-500 rounded-md flex items-center justify-center text-gray-900 font-bold text-xl border-b-2 border-green-700">
                K
              </div>
              <span className="font-bold text-lg text-green-400">Kurt Leonard</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={16} className="text-green-500" />
              <span>Taguig, 1630</span>
            </div>
          </div>
          
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a 
                key={link.label}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-md border border-green-500/30 flex items-center justify-center text-green-400 hover:text-green-300 hover:border-green-500/50 transition-all hover:bg-green-500/10"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="pt-8 border-t border-green-500/20 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Gamepad className="text-green-500" />
            <span className="text-green-400 font-bold">PLAYER PROFILE</span>
            <Gamepad className="text-green-500" />
          </div>
          <p className="text-gray-400 text-sm">&copy; {currentYear} Kurt Leonard A. Sauquillo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
