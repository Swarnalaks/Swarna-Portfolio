
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="about">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-8 -left-8 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-12 -right-8 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 animate-fade-in rounded-full"></div>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Discover the passion and innovation that drives my journey in technology
            </p>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="professional-card rounded-2xl p-8 md:p-12 hover-lift group">
            <div className="space-y-6 text-center">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed animate-fade-in font-light" style={{ animationDelay: '0.1s' }}>
                I'm <span className="text-blue-400 font-semibold">Swarnalakshmi S</span>, a passionate <span className="text-cyan-400 font-semibold">Full Stack Developer</span>, <span className="text-green-400 font-semibold">Web Developer</span>, and aspiring <span className="text-purple-400 font-semibold">Data Analyst</span>, currently pursuing my <span className="text-pink-400 font-semibold">B.Tech in Artificial Intelligence & Data Science</span> at Panimalar Engineering College, Chennai.
              </p>
              
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed animate-fade-in font-light" style={{ animationDelay: '0.2s' }}>
                I specialize in building <span className="text-yellow-400 font-semibold">intelligent, scalable, and user-centric web applications</span> that blend performance with purpose. With a strong foundation in both <span className="text-blue-400 font-semibold">Frontend</span> and <span className="text-orange-400 font-semibold">Backend development</span>, I create <span className="text-cyan-400 font-semibold">efficient, responsive, and modern digital solutions</span> that ensure seamless user experiences.
              </p>
              
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed animate-fade-in font-light" style={{ animationDelay: '0.3s' }}>
                I also have a growing interest in <span className="text-indigo-400 font-semibold">Data Science and Artificial Intelligence</span>, which inspires me to explore and implement data-driven solutions. I'm deeply curious about the <span className="text-cyan-400 font-semibold">future of AI</span> and its real-world applications, and I thrive on challenges that push me to <span className="text-pink-400 font-semibold">innovate, collaborate, and grow</span> in both Web and Data-centric projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
