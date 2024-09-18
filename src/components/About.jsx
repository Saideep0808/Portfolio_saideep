import React from 'react';
import AboutImage from '../assets/aboutme-image.jpg';

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="aboutme">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="About Me"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I'm a passionate frontend developer who loves turning creative ideas
              into responsive and engaging web applications. With a focus on
              React, Vite, and Tailwind CSS, I strive to build seamless user
              experiences. My goal is to deliver high-quality, scalable solutions
              while maintaining clean and efficient code.
            </p>

            <div className="space-y-4">
              {/* HTML & CSS Progress */}
              <div className="flex items-center">
                <div className="w-2/12 text-sm">HTML & CSS</div>
                <div className="grow bg-gray-800 rounded-full h-2.5 ml-4" role="progressbar" aria-label="HTML & CSS" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-full"></div>
                </div>
              </div>

              {/* JavaScript Progress */}
              <div className="flex items-center">
                <div className="w-2/12 text-sm">JavaScript</div>
                <div className="grow bg-gray-800 rounded-full h-2.5 ml-4" role="progressbar" aria-label="JavaScript" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"></div>
                </div>
              </div>

              {/* React Progress */}
              <div className="flex items-center">
                <div className="w-2/12 text-sm">REACT</div>
                <div className="grow bg-gray-800 rounded-full h-2.5 ml-4" role="progressbar" aria-label="React" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"></div>
                </div>
              </div>

              {/* Redux Progress */}
              <div className="flex items-center">
                <div className="w-2/12 text-sm">REDUX</div>
                <div className="grow bg-gray-800 rounded-full h-2.5 ml-4" role="progressbar" aria-label="Redux" aria-valuenow="83" aria-valuemin="0" aria-valuemax="100">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>

              {/* Tailwind CSS Progress */}
              <div className="flex items-center">
                <div className="w-2/12 text-sm">TailwindCSS</div>
                <div className="grow bg-gray-800 rounded-full h-2.5 ml-4" role="progressbar" aria-label="Tailwind CSS" aria-valuenow="83" aria-valuemin="0" aria-valuemax="100">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>

              {/* Python Progress */}
              <div className="flex items-center">
                <div className="w-2/12 text-sm">PYTHON</div>
                <div className="grow bg-gray-800 rounded-full h-2.5 ml-4" role="progressbar" aria-label="Python" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"></div>
                </div>
              </div>

              {/* SQL Progress */}
              <div className="flex items-center">
                <div className="w-2/12 text-sm">MYSQL</div>
                <div className="grow bg-gray-800 rounded-full h-2.5 ml-4" role="progressbar" aria-label="SQL" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
