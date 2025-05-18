
import React from "react";
import { School, Calendar } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  details: string;
}

const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      degree: "Bachelor of Engineering in Electronics And Communication",
      institution: "Government Engineering College of Ujjain",
      year: "June 2018",
      details: "Major in Electronics and communication with 7.70 honours."
    },
    {
      degree: "Higher Secondary in PCM",
      institution: "Nalanda Academy, Ujjain",
      year: "April 2012",
      details: "Completed Higher Secondary in PCM stream with 92.3%."
    }
  ];

  const certifications = [
    "Oracle Certified Java Professional",
    "Java HackerRank Certification",
    "Udemy Course Completion certifications"
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Education & Certifications</h2>

        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-2">
              <School size={24} /> Education
            </h3>
            
            <div className="space-y-6">
              {educationItems.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold">{item.degree}</h4>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {item.year}
                    </div>
                  </div>
                  <p className="text-primary font-medium mb-2">{item.institution}</p>
                  <p className="text-gray-600 dark:text-gray-400">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-2">
              <School size={24} /> Certifications
            </h3>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-3"
                  >
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary">{index + 1}</span>
                    </div>
                    <span className="text-gray-800 dark:text-gray-200">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Accomplishments</h3>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
                <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
                  <li>Developed more than two Client facing PI Projects in order to ensure Process Improvement.</li>
                  <li>Presented seminar on various topics like new features of JAVA 1.8, Restful Webservices etc.</li>
                  <li>Participated actively and managed other extra account level activities like Tech-no-Fest, Sports Events, Cultural Events and Fun Activities etc.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
