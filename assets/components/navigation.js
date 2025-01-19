import React from 'react';

const Navigation = ({ currentPage = 'home' }) => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-xl font-bold mb-4 md:mb-0">Josh Curry - Pierce College BAS Student</h1>
        <div className="flex space-x-6">
          <a 
            href="/" 
            className={`hover:text-gray-200 transition-colors duration-200 ${
              currentPage === 'home' ? 'border-b-2' : ''
            }`}
          >
            Course Overview
          </a>
          <a 
            href="/about.html" 
            className={`hover:text-gray-200 transition-colors duration-200 ${
              currentPage === 'about' ? 'border-b-2' : ''
            }`}
          >
            About Me
          </a>
          <a 
            href="/ai-project.html" 
            className={`hover:text-gray-200 transition-colors duration-200 ${
              currentPage === 'ai-project' ? 'border-b-2' : ''
            }`}
          >
            AI Project
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;