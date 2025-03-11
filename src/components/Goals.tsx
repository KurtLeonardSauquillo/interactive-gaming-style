
import { useEffect, useRef } from "react";
import { GraduationCap, Briefcase, MapPin } from "lucide-react";

const Goals = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0");
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

  const goalsData = [
    {
      title: "Graduate College",
      icon: GraduationCap,
      description: "Complete my degree in Information Technology with a focus on Mobile & Internet Technologies."
    },
    {
      title: "Secure a Tech Job",
      icon: Briefcase,
      description: "Find a fulfilling position in the technology sector that allows me to grow professionally."
    },
    {
      title: "Travel the World",
      icon: MapPin,
      description: "Explore different countries and experience diverse cultures around the globe."
    }
  ];

  return (
    <section 
      id="goals" 
      ref={sectionRef}
      className="py-24 px-6 opacity-0"
    >
      <div className="max-w-4xl mx-auto">
        <div className="section-badge">Looking Forward</div>
        <h2 className="section-title mb-12">Goals in Life</h2>
        
        <div className="space-y-8">
          {goalsData.map((goal, index) => (
            <div 
              key={index} 
              className="flex items-start gap-6 card-glass"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center flex-shrink-0">
                <goal.icon className="text-gray-700" size={22} />
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">{goal.title}</h3>
                <p className="text-gray-600">{goal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;
