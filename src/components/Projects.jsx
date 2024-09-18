import React from 'react';

const services = [
  {
    id: 1,
    title: "Portfolio",
    technologies: "React, Vite, Tailwind CSS",
    github: "https://github.com/Saideep0808/Portfolio",
    // Placeholder image URL, replace with actual
  },
  {
    id: 2,
    title: "Anime Website",
    technologies: "React, Vite",
    github: "https://github.com/Saideep0808/Anime",
    // Placeholder image URL, replace with actual
  },
  {
    id: 3,
    title: "TravelHomePage",
    technologies: "HTML & CSS, Javascript",
    github: "https://github.com/Saideep0808/TravelHome",
     // Placeholder image URL, replace with actual
  },
  {
    id: 4,
    title: "JobbyApp",
    technologies: "React,Bootstrap",
    github: "https://github.com/Saideep0808/JobbyAppReact", 
  },
  {
    id: 5,
    title: "UI Alaram clock",
    technologies: "Python",
    github: "https://github.com/Saideep0808/PythonAlaram", 
  },
  {
  id: 6,
  title: "Netflix",
  technologies: "React,Bootstrap",
  github: "https://github.com/Saideep0808/Netflix", 
  
  }

   // Placeholder image URL, replace with actual
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              {/* <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              /> */}
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
