
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-6">
            <h2 className="text-3xl font-bold">
              Durgesh<span className="text-primary">Atal</span>
            </h2>
          </div>
          
          <div className="flex space-x-4 mb-8">
            <a 
              href="https://linkedin.com/in/durgesh-atal/" 
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/Atal-Durgesh" 
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:durgeshatal1995@gmail.com" 
              className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Durgesh Atal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
