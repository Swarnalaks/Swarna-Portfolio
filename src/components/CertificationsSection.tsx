
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Artificial Intelligence Foundation Certification",
      issuer: "Infosys Springboard",
      date: "Nov 2024",
      icon: "🤖",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Introduction to Deep Learning",
      issuer: "Infosys Springboard", 
      date: "Oct 2024",
      icon: "🧠",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Python Fullstack Development",
      issuer: "Hejex Technology",
      date: "Oct 2024",
      icon: "🐍",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cybersecurity Fundamentals",
      issuer: "nasscom",
      date: "Sep 2024",
      icon: "🔒",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Generative AI Certified Professional",
      issuer: "Oracle",
      date: "Jul 2024",
      icon: "⚡",
      color: "from-yellow-500 to-amber-500"
    },
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "Infosys Springboard",
      date: "Jul 2024",
      icon: "🎯",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Artificial Intelligence Job Simulation",
      issuer: "Cognizant",
      date: "Jun 2024",
      icon: "💼",
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft",
      date: "Jun 2024",
      icon: "🌟",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Career Essentials in Software Development", 
      issuer: "Microsoft",
      date: "Jun 2024",
      icon: "💻",
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "Master in Artificial Intelligence (AI)",
      issuer: "Udemy",
      date: "Jun 2024",
      icon: "🎓",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Project Management Job Simulation",
      issuer: "Accenture",
      date: "Jun 2024",
      icon: "📊",
      color: "from-lime-500 to-green-500"
    },
    {
      title: "Robotics and AI",
      issuer: "Great Learning",
      date: "Jun 2024",
      icon: "🤖",
      color: "from-slate-500 to-gray-500"
    },
    {
      title: "Data Science for Engineers",
      issuer: "NPTEL",
      date: "Mar 2024",
      icon: "📈",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Data Science for the Beginners",
      issuer: "nasscom",
      date: "Dec 2023",
      icon: "📊",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Native Accent",
      issuer: "Carnegie Mellon University",
      date: "Mar 2023",
      icon: "🗣️",
      color: "from-rose-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black/30 to-gray-900/30 perspective-1000" id="certifications">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl animate-fade-in transform-style-3d hover:rotateX-12 transition-transform duration-700">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 animate-fade-in shadow-lg animate-glow"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 transform-style-3d">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title}
              className="group hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:-translate-y-2 hover:rotateY-3 bg-gray-900/40 backdrop-blur-xl border border-white/10 overflow-hidden animate-fade-in transform-gpu transform-style-3d perspective-1000"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
              }}
            >
              {/* Enhanced 3D floating background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-5 group-hover:opacity-10 transition-all duration-700`}></div>
              
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-14 h-14 bg-gradient-to-r ${cert.color} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl border border-white/20 backdrop-blur-sm relative overflow-hidden`}>
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></div>
                    <span className="relative z-10 drop-shadow-lg">{cert.icon}</span>
                  </div>
                  <Badge className={`bg-gradient-to-r ${cert.color} text-white hover:scale-110 border-0 shadow-lg flex items-center gap-1 group-hover:rotate-3 transition-all duration-300 backdrop-blur-sm`}>
                    <Calendar className="h-3 w-3" />
                    {cert.date}
                  </Badge>
                </div>
                
                <CardTitle className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-300 leading-tight group-hover:drop-shadow-lg">
                  {cert.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10 pt-0">
                <div className="text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  {cert.issuer}
                </div>
              </CardContent>
              
              {/* Enhanced 3D depth overlay with glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <div className={`absolute -inset-1 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 pointer-events-none`}></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
