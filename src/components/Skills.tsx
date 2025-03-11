
import { useEffect, useRef } from "react";
import { Code, Cpu, Wrench, Search } from "lucide-react";

const Skills = () => {
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

  const skillsData = [
    {
      name: "Java",
      level: "Basic",
      icon: Code,
      description: "Fundamentals of Java programming language"
    },
    {
      name: "Python",
      level: "Basic",
      icon: Code,
      description: "Python programming and script development"
    },
    {
      name: "Arduino",
      level: "Basic",
      icon: Cpu,
      description: "Electronics programming and basic circuit design"
    },
    {
      name: "PC Troubleshooting",
      level: "Intermediate",
      icon: Wrench,
      description: "Hardware and software diagnostics and problem-solving"
    }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-24 px-6 opacity-0"
    >
      <div className="max-w-4xl mx-auto">
        <div className="section-badge">What I Know</div>
        <h2 className="section-title mb-12">Technical Skills</h2>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              className="card-glass group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center mb-5 group-hover:bg-black/10">
                <skill.icon className="text-gray-700" size={22} />
              </div>
              
              <h3 className="text-xl font-medium mb-2">{skill.name}</h3>
              
              <div className="flex items-center gap-2 mb-3">
                <div className="text-sm text-gray-500">Proficiency:</div>
                <div className="px-2 py-0.5 text-xs bg-black/5 rounded-full">
                  {skill.level}
                </div>
              </div>
              
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-3 bg-black/5 rounded-lg text-gray-700">
            <Search size={18} />
            <span>Always learning new technologies</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
