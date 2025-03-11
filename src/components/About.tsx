
import { useEffect, useRef } from "react";
import { User, Cpu, Code } from "lucide-react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 px-6 opacity-0 scanlines bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <div className="section-badge">Character Stats</div>
        <h2 className="section-title mb-12">Who am I?</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="card-glass">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I am <span className="font-bold text-green-400">Kurt Leonard A. Sauquillo</span>, also known as KL. I have a deep passion for music, gaming, and technology.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently, I'm a 3rd-year Bachelor's degree student in Information Technology with a specialization in Mobile and Internet Technologies at Asia Pacific College.
            </p>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <User className="text-green-400" size={18} />
                <span className="text-sm text-gray-400">Class: IT Student</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="text-green-400" size={18} />
                <span className="text-sm text-gray-400">Tech Enthusiast</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="text-green-400" size={18} />
                <span className="text-sm text-gray-400">Mobile & Internet</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="pixel-dot"></span>
                <span className="text-sm text-gray-400">Level: 3rd Year</span>
              </div>
            </div>
          </div>
          
          <div className="aspect-square rounded-md overflow-hidden shadow-lg border-2 border-green-500/30 transition-all hover:shadow-xl hover:shadow-green-500/10 relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMCwgMjU1LCAwLCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-50"></div>
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
              <div className="scanlines absolute inset-0"></div>
              <div className="text-6xl font-bold text-green-400 animate-pulse">KL</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
