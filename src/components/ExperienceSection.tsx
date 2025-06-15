import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full Stack Developer & Digital Marketing Intern",
      company: "Hejex Technology",
      period: "2024",
      description: "Built responsive web applications and contributed to SEO and content strategies. Developed end-to-end solutions using modern web technologies.",
      skills: ["React", "Django", "SEO", "Content Strategy"]
    },
    {
      title: "Data Analyst Intern",
      company: "Botcode Web Integration Solutions Pvt. Ltd.",
      period: "2024",
      description: "Analyzed and visualized operational data, contributing to strategic decision-making processes. Worked with large datasets to extract meaningful insights.",
      skills: ["Data Analysis", "Visualization", "Strategic Planning"]
    },
    {
      title: "Data Management Intern",
      company: "PACCS (Govt.-Affiliated)",
      period: "2023",
      description: "Handled data entry, verification, and integrity maintenance using Excel and SQL. Ensured data quality and consistency across systems.",
      skills: ["Excel", "SQL", "Data Integrity", "Quality Assurance"]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black/30 to-gray-900/30" id="experience">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl animate-fade-in">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 animate-fade-in shadow-lg animate-glow"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line - centered with slightly increased width */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 transform -translate-x-1/2 hidden md:block shadow-lg"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.title}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot - moved even further to the left */}
                <div className="absolute left-[calc(50%-12px)] top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 border-4 border-white rounded-full z-10 shadow-lg animate-float hover:scale-125 transition-all duration-500 hidden md:block"
                     style={{ animationDelay: `${index * 0.3}s` }}>
                </div>
                
                {/* Content card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="group hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:-translate-y-4 bg-white/5 backdrop-blur-xl border border-white/10 transform-gpu overflow-hidden">
                    {/* Background effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                    
                    <CardHeader className="relative z-10">
                      <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
                        <div className="group-hover:translate-x-2 transition-transform duration-500">
                          <CardTitle className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="text-blue-300 font-medium text-lg group-hover:text-cyan-300 transition-colors duration-300">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <Badge className="bg-purple-100/20 text-purple-200 hover:bg-purple-200/30 border border-purple-300/30 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="relative z-10 group-hover:translate-y-1 transition-transform duration-500">
                      <p className="text-gray-200 mb-4 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skill}
                            variant="secondary" 
                            className="bg-blue-100/20 text-blue-200 hover:bg-blue-200/30 transition-all duration-300 hover:scale-105 border border-blue-300/30 shadow-md group-hover:animate-bounce"
                            style={{ 
                              animationDelay: `${skillIndex * 0.1}s`,
                            }}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    
                    {/* Depth overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  </Card>
                </div>
                
                {/* Spacer for the other side */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
