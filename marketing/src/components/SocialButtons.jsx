import React from 'react';

const SocialButtons = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <a 
        href="https://www.facebook.com/profile.php?id=61570160061839"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-8 py-3 text-center flex items-center gap-2"
      >
        <i className="fab fa-facebook"></i>
        Facebook
      </a>
      
      <a 
        href="https://www.instagram.com/studyhive_edu/profilecard/?igsh=Zmo1cHlrc3E5dGht"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 shadow-lg shadow-pink-500/50 font-medium rounded-lg text-sm px-8 py-3 text-center flex items-center gap-2"
      >
        <i className="fab fa-instagram"></i>
        Instagram
      </a>

      <a 
        href="https://www.linkedin.com/company/studyhive/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-8 py-3 text-center flex items-center gap-2"
      >
        <i className="fab fa-linkedin"></i>
        LinkedIn
      </a>

      <a 
        href="https://wa.link/4ciq1z"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/50 font-medium rounded-lg text-sm px-8 py-3 text-center flex items-center gap-2"
      >
        <i className="fab fa-whatsapp"></i>
        WhatsApp
      </a>

      <a 
        href="https://github.com/StudyHive-CS47"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 shadow-lg shadow-gray-500/50 font-medium rounded-lg text-sm px-8 py-3 text-center flex items-center gap-2"
      >
        <i className="fab fa-github"></i>
        GitHub
      </a>
    </div>
  );
}

export default SocialButtons; 