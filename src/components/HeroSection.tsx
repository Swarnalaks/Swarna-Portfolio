import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

const HeroSection = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/6aae46c3-9cc0-46f7-be17-d10ad5f88a1b.png';
    link.download = 'Swarnalakshmi_S_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-12 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <div className="relative w-48 h-48 mx-auto mb-8 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse opacity-80"></div>
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-gray-900 to-black"></div>
            
            <div className="absolute inset-3 rounded-full overflow-hidden border border-white/20 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <img 
                src="/lovable-uploads/71b5cff7-cbba-4fe0-8f2d-427e88e12e86.png"
                alt="Swarnalakshmi S"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Swarnalakshmi S
          </h1>
          
          <div className="mb-8">
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text mb-6">
              Python Full Stack Developer | Web Developer | UI/UX Designer | Data Analyst
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-2 text-lg text-gray-300">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span>Chennai, India</span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <div className="flex items-center gap-2 text-base text-gray-300">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>swarna.singaravelan@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-2 text-base text-gray-300">
                <Phone className="h-4 w-4 text-green-400" />
                <span>+91 7904673194</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-12 animate-fade-in relative z-20" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text leading-tight">
            Creating Tomorrow's Tech Today
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed professional-card rounded-2xl p-6 border border-white/10">
              Bridging Innovation, Intelligence & Impact through Full Stack Development, 
              Data Analysis, and AI solutions. Passionate about transforming complex data 
              into actionable insights and building scalable applications.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg text-base font-medium"
            onClick={handleDownloadResume}
          >
            <Download className="mr-3 h-5 w-5" />
            Download Resume
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-blue-400 text-blue-300 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 professional-card text-base font-medium"
            onClick={() => window.open('https://linkedin.com/in/swarnalakshmi-s', '_blank')}
          >
            <Linkedin className="mr-3 h-5 w-5" />
            Connect on LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
