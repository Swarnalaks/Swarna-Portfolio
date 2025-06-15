
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      institution: "Panimalar Engineering College",
      degree: "Bachelor of Technology - BTech, Artificial Intelligence and Data Science",
      period: "Sep 2023 - Apr 2027",
      grade: "8.9555",
      skills: ["Networking", "Volunteering", "Communication", "Leadership", "Problem Solving", "Team Collaboration"],
      logo: "/lovable-uploads/71b5cff7-cbba-4fe0-8f2d-427e88e12e86.png"
    },
    {
      institution: "Sri Sankara Vidyalaya Matriculation Higher Secondary School",
      degree: "Higher Secondary Education",
      period: "2012 - 2023",
      grade: "Excellent",
      description: "School life was a transformative phase that laid the foundation for my personal and professional journey. As an academically driven and socially active student, I developed strong communication and networking skills.",
      skills: ["Communication", "Networking", "Academic Excellence", "Social Skills", "Leadership", "Time Management"],
      logo: "/lovable-uploads/71b5cff7-cbba-4fe0-8f2d-427e88e12e86.png"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black/90 to-gray-900/90 perspective-1000" id="education">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in drop-shadow-2xl transform-style-3d hover:rotateX-12 transition-transform duration-700">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 animate-fade-in shadow-lg animate-glow"></div>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto animate-fade-in animate-shimmer">
            Academic journey that shaped my technical expertise and professional foundation
          </p>
        </div>
        
        <div className="space-y-8 transform-style-3d">
          {education.map((edu, index) => (
            <Card 
              key={edu.institution}
              className="group hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:-translate-y-2 hover:rotateY-12 bg-black/30 backdrop-blur-xl border border-white/20 overflow-hidden animate-fade-in transform-gpu transform-style-3d perspective-1000"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
                transformOrigin: 'center'
              }}
            >
              <CardHeader className="relative overflow-hidden">
                {/* 3D floating background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-rotate3d"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 group-hover:rotateY-180 transition-all duration-700 shadow-xl animate-float">
                    <GraduationCap className="h-8 w-8 text-white group-hover:animate-bounce" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start flex-col lg:flex-row gap-2">
                      <div className="group-hover:translate-x-2 transition-transform duration-500">
                        <CardTitle className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 group-hover:animate-pulse">
                          {edu.institution}
                        </CardTitle>
                        <CardDescription className="text-blue-300 font-medium text-lg group-hover:text-cyan-300 transition-colors duration-300">
                          {edu.degree}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col items-end gap-2 group-hover:-translate-x-2 transition-transform duration-500">
                        <Badge className="bg-purple-100/20 text-purple-200 hover:bg-purple-200/30 border border-purple-300/30 shadow-lg flex items-center gap-1 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <Calendar className="h-3 w-3" />
                          {edu.period}
                        </Badge>
                        <Badge className="bg-green-100/20 text-green-200 hover:bg-green-200/30 border border-green-300/30 shadow-lg flex items-center gap-1 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                          <Award className="h-3 w-3" />
                          Grade: {edu.grade}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="relative z-10 group-hover:translate-y-1 transition-transform duration-500">
                {edu.description && (
                  <p className="text-gray-200 mb-4 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                    {edu.description}
                  </p>
                )}
                
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide group-hover:text-blue-300 transition-colors duration-300">Key Skills Developed</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skill}
                        variant="secondary" 
                        className="bg-blue-100/20 text-blue-200 hover:bg-blue-200/30 transition-all duration-300 hover:scale-105 border border-blue-300/30 shadow-md group-hover:animate-bounce"
                        style={{ 
                          animationDelay: `${skillIndex * 0.1}s`,
                          transform: `rotateZ(${Math.sin(skillIndex) * 3}deg)`
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              
              {/* 3D depth effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
