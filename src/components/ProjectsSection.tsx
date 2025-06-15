
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "ERP Management System",
      description: "Developed a comprehensive web-based ERP solution tailored for academic institutions, featuring dedicated modules for Faculty, Students, and Administration. Each module encompasses essential functionalities.",
      tech: ["React", "Django", "PostgreSQL", "REST API"],
      category: "Python Full Stack Development",
      tags: ["Full Stack", "Enterprise", "Education"]
    },
    {
      title: "ME-PHYSI",
      description: "A comprehensive healthcare management solution that integrates patient care, medical records, appointment scheduling, and administrative functions into a unified platform. Designed to streamline healthcare operations.",
      tech: ["Full Stack", "Healthcare Tech", "Database Management"],
      category: "Python Full Stack Development",
      tags: ["Full Stack", "Healthcare", "Management"]
    },
    {
      title: "Login Chat App",
      description: "Developed a real-time chat application with user authentication and secure login. Includes group and private messaging functionality using cloud-based backend services.",
      tech: ["React", "Firebase Authentication", "Firestore", "CSS"],
      category: "Python Full Stack Development",
      tags: ["Full Stack", "Real-time", "Authentication"]
    },
    {
      title: "Life Saving Tech",
      description: "An innovative emergency response system built around our custom-developed QuikMed app, integrated with GPS and SIM modules. Designed to reduce ambulance delays in urban areas and minimize patient suffering.",
      tech: ["IoT", "GPS", "Mobile App", "Real-time Tracking"],
      category: "Python Full Stack Development",
      tags: ["IoT", "Healthcare", "Emergency"]
    },
    {
      title: "Hospital Information Management",
      description: "Developed a responsive, user-friendly website delivering comprehensive hospital details such as services, departments, contact information, and patient resources. Features include easy navigation.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      category: "Web Development",
      tags: ["Frontend", "Healthcare", "Responsive"]
    },
    {
      title: "Responsive Landing Page",
      description: "Created a fully responsive and modern landing page with smooth scroll effects, sticky navigation, and hover interactions. Optimized for all screen sizes and devices.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      category: "Web Development",
      tags: ["Frontend", "Responsive", "Landing Page"]
    },
    {
      title: "Education & Government Schemes Portal",
      description: "Built a centralized platform that provides valid and up-to-date information on post offices, banks, scholarships, courses, and educational resources. The platform ensures free access and a user-friendly layout.",
      tech: ["HTML", "CSS", "JavaScript", "Firebase"],
      category: "Web Development",
      tags: ["Frontend", "Education", "Government"]
    },
    {
      title: "Weather App",
      description: "Designed a responsive weather application that displays real-time weather data including temperature, humidity, and forecasts based on location. Integrated with a weather API for live updates.",
      tech: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
      category: "Web Development",
      tags: ["Frontend", "API", "Weather"]
    },
    {
      title: "Travel Planner",
      description: "Developed a smart travel planner web app where users can plan trips, save destinations, and access location insights. Responsive layout with a clean user interface.",
      tech: ["HTML", "CSS", "JavaScript", "Google Maps API"],
      category: "Web Development",
      tags: ["Frontend", "Travel", "API"]
    },
    {
      title: "To-Do List",
      description: "Built a functional to-do list app that allows users to add, update, delete, and mark tasks as complete. Includes local storage for task persistence.",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "Web Development",
      tags: ["Frontend", "Productivity", "Local Storage"]
    },
    {
      title: "Tic Tac Toe",
      description: "Developed a classic two-player Tic Tac Toe game with a clean UI and smooth gameplay. Features real-time result updates, win/draw detection, and a reset option for replay.",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "UI/UX Design",
      tags: ["Game", "Interactive", "UI Design"]
    },
    {
      title: "Stopwatch",
      description: "Created a precise and minimalist stopwatch application with features like start, stop, reset, and lap time. Designed with responsive UI for both desktop and mobile.",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "UI/UX Design",
      tags: ["Utility", "Minimalist", "UI Design"]
    },
    {
      title: "Space Shooter Game",
      description: "Built an interactive space shooter game where players control a spaceship, destroy asteroids, and score points. Includes animations, sound effects, and game-over logic.",
      tech: ["HTML", "CSS", "JavaScript", "Canvas API"],
      category: "UI/UX Design",
      tags: ["Game", "Animation", "Interactive"]
    },
    {
      title: "Course Outcome Management System",
      description: "A robust Excel tool designed to efficiently manage student academic data aligned with Course Outcomes (CO) and Program Outcomes (PO). Automates recording of marks, grade generation, and performance tracking.",
      tech: ["Excel", "Data Analysis", "Automation", "Advanced Formulas"],
      category: "Data Analyst",
      tags: ["Data Analysis", "Education", "Automation"]
    },
    {
      title: "NUMCIPHER TRACKER",
      description: "NumCipher Tracker is a fast and reliable mobile number tracking tool that identifies the SIM card provider and estimates the approximate location from an entered phone number. Built using Telecom APIs.",
      tech: ["Telecom APIs", "Geolocation", "Data Privacy", "Business Intelligence"],
      category: "Data Analyst",
      tags: ["Data Analysis", "API", "Tracking"]
    }
  ];

  // Define filter tags as category names only
  const allTags = ['All', 'Python Full Stack Development', 'Web Development', 'UI/UX Design', 'Data Analyst'];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Group filtered projects by category
  const groupedProjects = filteredProjects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  const getCategoryGradient = (category: string) => {
    switch (category) {
      case "Python Full Stack Development":
        return "from-blue-500 to-purple-600";
      case "Web Development":
        return "from-green-500 to-teal-600";
      case "UI/UX Design":
        return "from-purple-500 to-pink-600";
      case "Data Analyst":
        return "from-orange-500 to-red-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="projects">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-8 -right-4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 animate-fade-in rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in leading-relaxed mb-8">
            Showcasing innovative solutions across multiple domains with cutting-edge technologies
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={activeFilter === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(tag)}
                className={`text-sm transition-all duration-200 ${
                  activeFilter === tag
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
        
        {Object.entries(groupedProjects).map(([category, categoryProjects]) => (
          <div key={category} className="mb-16 last:mb-0">
            <div className="text-center mb-10">
              <h3 className={`text-xl sm:text-3xl font-bold bg-gradient-to-r ${getCategoryGradient(category)} bg-clip-text text-transparent mb-4 animate-fade-in`}>
                {category}
              </h3>
              <div className={`w-16 h-0.5 bg-gradient-to-r ${getCategoryGradient(category)} mx-auto animate-fade-in rounded-full`}></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryProjects.map((project, index) => (
                <Card 
                  key={project.title}
                  className="hover-lift overflow-hidden professional-card animate-fade-in"
                  style={{ 
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className={`h-1 bg-gradient-to-r ${getCategoryGradient(category)}`}></div>
                  
                  <CardHeader className="pb-3 p-4 sm:p-6">
                    <CardTitle className="text-base sm:text-lg font-bold text-white line-clamp-2">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4 p-4 sm:p-6 pt-0">
                    <CardDescription className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                      {project.description}
                    </CardDescription>
                    
                    {/* Project Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag}
                          variant="secondary" 
                          className="bg-purple-100/10 text-purple-200 border border-purple-300/20 text-xs px-2 py-0.5"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge 
                          key={tech}
                          variant="secondary" 
                          className="bg-blue-100/10 text-blue-200 border border-blue-300/20 text-xs px-2.5 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found for the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
