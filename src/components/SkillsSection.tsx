
import React from 'react';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Figma"],
      color: "from-orange-500 to-red-500"
    },
    {
      category: "Backend",
      skills: ["Python", "Django", "REST APIs"],
      color: "from-green-500 to-teal-500"
    },
    {
      category: "Database",
      skills: ["SQL", "PostgreSQL"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      category: "Data Tools",
      skills: ["Pandas", "NumPy", "Excel", "Power BI"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Others",
      skills: ["Git", "Agile Methodology", "AI/ML"],
      color: "from-gray-500 to-slate-500"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/50 to-black/50" id="technical-skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in drop-shadow-2xl">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 animate-fade-in shadow-lg"></div>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto animate-fade-in">
            A comprehensive toolkit for building modern applications and analyzing complex data
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.category}
              className="group hover:shadow-2xl transition-all duration-700 hover:scale-110 hover:-translate-y-2 bg-black/30 backdrop-blur-xl border border-white/20 rounded-xl p-6 animate-fade-in transform-gpu"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
            >
              <div className={`w-full h-2 bg-gradient-to-r ${category.color} rounded-full mb-4 group-hover:scale-105 transition-transform duration-300`}></div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill}
                    className="bg-white/10 text-gray-200 hover:bg-white/20 hover:text-blue-200 transition-all duration-300 hover:scale-105 border border-white/20 shadow-md"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
