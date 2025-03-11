
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10" />
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-gray-100 -z-10 blur-3xl opacity-70" />
      <div className="absolute bottom-1/4 left-[10%] w-80 h-80 rounded-full bg-gray-100 -z-10 blur-3xl opacity-50" />
      
      <div className="max-w-4xl w-full mx-auto text-center">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="section-badge mx-auto mb-6">Portfolio</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="inline-block">Kurt Leonard A.</span> 
            <span className="inline-block bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent animate-text-shimmer">Sauquillo</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Passionate about music, gaming, and technology — currently pursuing Information Technology at Asia Pacific College.
          </p>
          
          <div className="mt-12">
            <a 
              href="#about" 
              className="btn btn-primary inline-flex items-center gap-2 group"
            >
              Discover more
              <ArrowDown className="group-hover:translate-y-1" size={18} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-0.5 h-12 bg-gradient-to-b from-transparent to-black/20 rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
