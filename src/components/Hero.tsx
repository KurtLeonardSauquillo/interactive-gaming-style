
import { useEffect, useState } from "react";
import { ArrowDown, Gamepad2 } from "lucide-react";

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
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 -z-10" />
      
      {/* Background decorative elements - pixel art style blocks */}
      <div className="absolute top-1/4 right-[10%] w-64 h-64 rounded-md bg-purple-500/20 -z-10 blur-2xl opacity-70" />
      <div className="absolute bottom-1/4 left-[10%] w-80 h-80 rounded-md bg-blue-500/20 -z-10 blur-2xl opacity-50" />
      
      {/* Pixel art grid effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgaWQ9InBpeGVsLWdyaWQiIGZpbGw9Im5vbmUiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMykiIHg9IjAiIHk9IjAiPjwvcmVjdD48L2c+PC9zdmc+')] opacity-10 -z-10" />
      
      <div className="max-w-4xl w-full mx-auto text-center">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex justify-center items-center gap-2">
            <Gamepad2 className="text-green-400" size={24} />
            <div className="section-badge mx-auto mb-6 bg-green-400/20 text-green-400 border border-green-400/30">PLAYER PROFILE</div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white">
            <span className="inline-block">Kurt Leonard A.</span> 
            <span className="inline-block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent animate-text-shimmer">Sauquillo</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Passionate about music, gaming, and technology — currently pursuing Information Technology at Asia Pacific College.
          </p>
          
          <div className="mt-12">
            <a 
              href="#about" 
              className="btn btn-primary inline-flex items-center gap-2 group bg-green-500 hover:bg-green-600 border-b-4 border-green-700 hover:border-green-800"
            >
              Start Adventure
              <ArrowDown className="group-hover:translate-y-1" size={18} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-0.5 h-12 bg-gradient-to-b from-transparent to-green-400/50 rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
