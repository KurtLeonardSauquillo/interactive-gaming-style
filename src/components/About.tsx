
import { useEffect, useRef } from "react";

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
      className="py-24 px-6 opacity-0"
    >
      <div className="max-w-4xl mx-auto">
        <div className="section-badge">About Me</div>
        <h2 className="section-title mb-12">Who am I?</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="card-glass">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I am <span className="font-semibold">Kurt Leonard A. Sauquillo</span>, also known as KL. I have a deep passion for music, gaming, and technology.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Currently, I'm a 3rd-year Bachelor's degree student in Information Technology with a specialization in Mobile and Internet Technologies at Asia Pacific College.
            </p>
          </div>
          
          <div className="aspect-square rounded-3xl overflow-hidden shadow-lg transition-all hover:shadow-xl">
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
              <div className="text-6xl font-bold text-gray-300">KL</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
