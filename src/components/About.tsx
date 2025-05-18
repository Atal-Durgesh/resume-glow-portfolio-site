
import React from "react";
import { User, Briefcase, Mail, Phone, Github, Linkedin } from "lucide-react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">About Me</h2>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 text-center">
            Experienced Software Engineer (6+ years) with a proven track record of building highly 
            scalable and reliable backend systems using Go lang, Java, Kubernetes, Kafka, and MongoDB. 
            Expertise in designing microservices architectures, implementing event-driven systems, 
            and deploying cloud-native solutions across AWS, GCP, and OCI. Strong proponent of clean code, 
            automation, and continuous learning.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
                <User size={20} /> Personal Details
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Briefcase size={18} className="text-gray-500 mt-1" />
                  <div>
                    <span className="font-medium">Current Role:</span> 
                    <p className="text-gray-600 dark:text-gray-400">Staff Software Engineer at Zscaler</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-gray-500 mt-1" />
                  <div>
                    <span className="font-medium">Phone:</span> 
                    <p className="text-gray-600 dark:text-gray-400">7999281687</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-gray-500 mt-1" />
                  <div>
                    <span className="font-medium">Email:</span> 
                    <p className="text-gray-600 dark:text-gray-400">durgeshatal1995@gmail.com</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
                <User size={20} /> Connect With Me
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="https://linkedin.com/in/durgesh-atal/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  <Linkedin size={22} />
                  <span>linkedin.com/in/durgesh-atal/</span>
                </a>
                <a 
                  href="https://github.com/Atal-Durgesh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  <Github size={22} />
                  <span>github.com/Atal-Durgesh</span>
                </a>
                <a 
                  href="mailto:durgeshatal1995@gmail.com" 
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  <Mail size={22} />
                  <span>durgeshatal1995@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
