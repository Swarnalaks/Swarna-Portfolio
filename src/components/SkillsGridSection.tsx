
import React from 'react';
import { Code, Database, BarChart3, GitBranch } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsGridSection = () => {
  const skillsData = [
    {
      title: "Frontend",
      icon: <Code className="h-8 w-8 text-white" />,
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Backend", 
      icon: <Database className="h-8 w-8 text-white" />,
      skills: ["Python", "Django", "Node.js", "REST API"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8 text-white" />,
      skills: ["SQL", "MongoDB"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Data Tools",
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      skills: ["Pandas", "NumPy", "Excel", "Power BI", "Matplotlib", "Seaborn"],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Others",
      icon: <GitBranch className="h-8 w-8 text-white" />,
      skills: ["Git", "AWS", "Figma"],
      color: "from-gray-500 to-slate-600"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/50 to-black/50 perspective-1000" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in drop-shadow-2xl transform-style-3d hover:rotateX-12 transition-transform duration-700">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 animate-fade-in shadow-lg animate-glow"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transform-style-3d">
          {skillsData.map((category, index) => (
            <Card 
              key={category.title}
              className="group hover:shadow-2xl transition-all duration-700 hover:scale-110 hover:-translate-y-4 hover:rotateY-6 bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden animate-fade-in transform-gpu transform-style-3d perspective-1000"
              style={{ 
                animationDelay: `${index * 0.15}s`,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
            >
              {/* 3D Background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-rotate3d"></div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <CardHeader className="text-center pb-4 relative z-10">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-2xl group-hover:scale-125 group-hover:rotate-12 group-hover:rotateY-180 transition-all duration-500 animate-float`}>
                  {category.icon}
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 relative z-10 group-hover:animate-pulse">
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10 group-hover:translate-y-1 transition-transform duration-500">
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-white/10 text-gray-200 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-default backdrop-blur-sm group-hover:animate-bounce"
                      style={{ 
                        animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`,
                        transform: `rotateZ(${Math.sin(skillIndex) * 2}deg)`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              {/* 3D depth overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGridSection;
