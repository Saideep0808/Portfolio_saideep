import React from 'react'

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "RFCHH Software Pvt. Ltd",
      location: "Hyderabad, Telangana",
      date: "July 2024 - Present",
      responsibilities: [
        "Developed and maintained responsive web applications using React and Tailwind CSS.",
        "Collaborated with cross-functional teams to define, design, and ship new features.",
        "Optimized application performance and user experience through code reviews and testing."
      ]
    },
    
  ];

  return (
    <div className="bg-black text-white py-20" id="experience">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-green-400 pl-4 mb-8">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-lg font-medium">{exp.company}</p>
              <p className="text-sm text-gray-400">{exp.location}</p>
              <p className="text-sm text-gray-500 mb-4">{exp.date}</p>
              <ul className="list-disc list-inside text-gray-300">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="mb-2">{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
