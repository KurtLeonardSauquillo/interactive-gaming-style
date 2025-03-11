
import { useEffect, useRef } from "react";
import { Gamepad, Music, Piano, Map } from "lucide-react";

const Hobbies = () => {
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

  const hobbiesData = [
    {
      name: "Gaming",
      icon: Gamepad,
      description: "Exploring virtual worlds and enjoying competitive gameplay"
    },
    {
      name: "Listening to Music",
      icon: Music,
      description: "Discovering new artists and genres across different platforms"
    },
    {
      name: "Playing Instruments",
      icon: Piano,
      description: "Expressing creativity through musical instruments"
    },
    {
      name: "Traveling",
      icon: Map,
      description: "Experiencing new cultures and exploring different places"
    }
  ];

  return (
    <section 
      id="hobbies" 
      ref={sectionRef}
      className="py-24 px-6 bg-gray-50 opacity-0"
    >
      <div className="max-w-4xl mx-auto">
        <div className="section-badge">Things I Enjoy</div>
        <h2 className="section-title mb-12">Hobbies & Interests</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {hobbiesData.map((hobby, index) => (
            <div 
              key={index} 
              className="card-glass text-center group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mx-auto mb-5 group-hover:bg-black/10">
                <hobby.icon className="text-gray-700" size={24} />
              </div>
              
              <h3 className="text-lg font-medium mb-2">{hobby.name}</h3>
              
              <p className="text-sm text-gray-600">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
