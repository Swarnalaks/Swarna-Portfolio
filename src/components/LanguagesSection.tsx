
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe } from 'lucide-react';

const LanguagesSection = () => {
  const languages = [
    { name: "English", level: "Full professional proficiency" },
    { name: "Hindi", level: "Limited working proficiency" }, 
    { name: "Malayalam", level: "Elementary proficiency" },
    { name: "Tamil", level: "Native or bilingual proficiency" },
    { name: "Telugu", level: "Elementary proficiency" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/30 to-black/30 perspective-1000" id="languages">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl animate-fade-in transform-style-3d hover:rotateX-12 transition-transform duration-700">
            Multilingual Communication
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 animate-fade-in shadow-lg animate-glow"></div>
        </div>
        
        <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl group hover:shadow-blue-500/20 transition-all duration-700 hover:scale-105 hover:-translate-y-2 transform-style-3d">
          <CardHeader className="text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 animate-float">
              <Globe className="h-8 w-8 text-white group-hover:animate-bounce" />
            </div>
            <CardTitle className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 relative z-10">
              Multilingual Communication
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6 relative z-10">
            {languages.map((language, index) => (
              <div 
                key={language.name}
                className="border-b border-gray-700/50 pb-4 last:border-b-0 last:pb-0 group-hover:translate-x-2 transition-transform duration-500 hover:bg-white/5 rounded-lg p-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-white group-hover:text-blue-300 transition-colors duration-300">
                    {language.name}
                  </span>
                </div>
                <div className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors duration-300">
                  {language.level}
                </div>
              </div>
            ))}
          </CardContent>
          
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        </Card>
      </div>
    </section>
  );
};

export default LanguagesSection;
