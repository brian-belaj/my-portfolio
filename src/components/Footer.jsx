import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <a href="https://github.com/brian-belaj/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/brian-belaj/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-500">
            <FaLinkedin />
          </a>
          <a href="https://t.me/brianbelaj" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400">
            <FaTelegram />
          </a>
        </div>
        <p className="text-sm text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} Brian Belaj. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
