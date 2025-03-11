
import { useEffect, useRef } from "react";
import { GraduationCap, BookOpen, School } from "lucide-react";

const Education = () => {
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

  const educationData = [
    {
      level: "College",
      institution: "Asia Pacific College",
      program: "BS Information Technology – Mobile & Internet Technologies",
      icon: GraduationCap,
      current: true
    },
    {
      level: "Senior High School",
      institution: "Sto. Niño Catholic School",
      program: "",
      icon: BookOpen,
      current: false
    },
    {
      level: "Junior High School",
      institution: "Sto. Niño Catholic School",
      program: "",
      icon: School,
      current: false
    }
  ];

  return (
    <section 
      id="education" 
      ref={sectionRef}
      className="py-24 px-6 bg-gray-50 opacity-0"
    >
      <div className="max-w-4xl mx-auto">
        <div className="section-badge">My Journey</div>
        <h2 className="section-title mb-12">Education</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 ml-1"></div>
          
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div 
                key={index} 
                className="relative pl-14"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 top-2 w-10 h-10 rounded-full flex items-center justify-center ${
                  item.current ? "bg-black text-white" : "bg-white text-black border border-gray-200"
                }`}>
                  <item.icon size={18} />
                </div>
                
                <div className="card-glass">
                  <div className={`text-sm uppercase tracking-wider font-medium mb-1 ${
                    item.current ? "text-black" : "text-gray-500"
                  }`}>
                    {item.level}
                  </div>
                  
                  <h3 className="text-xl font-medium mb-1">{item.institution}</h3>
                  
                  {item.program && (
                    <p className="text-gray-600">{item.program}</p>
                  )}
                  
                  {item.current && (
                    <div className="mt-3 inline-block px-2 py-1 text-xs font-medium bg-black/5 rounded-full">
                      Current
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
