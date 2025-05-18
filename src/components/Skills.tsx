
import React from "react";
import { Code, Database, Server } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: <Code size={24} className="text-primary" />,
      skills: ["Golang", "Java", "Python"]
    },
    {
      title: "Databases & Messaging",
      icon: <Database size={24} className="text-primary" />,
      skills: ["MongoDB", "DocumentDB", "PostgreSQL", "Redis", "Kafka", "SQS"]
    },
    {
      title: "DevOps & Cloud",
      icon: <Server size={24} className="text-primary" />,
      skills: ["Kubernetes", "Docker", "Jenkins", "AWS", "GCP", "OCI", "Envoy Proxy"]
    },
    {
      title: "Other Skills",
      icon: <Code size={24} className="text-primary" />,
      skills: ["Software architecture design", "Technical documentation writing", "HLD and LLD", "Microservices", "Event-driven systems"]
    }
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">My Skills</h2>

        <div className="max-w-5xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                <div className="bg-gray-100 dark:bg-gray-700 p-4 flex items-center gap-3">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="p-5">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 px-3 py-2 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-6">Key Strengths</h3>
            <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Scalable system design",
                "Cloud-native solutions",
                "Event-driven architecture",
                "Microservices",
                "Mentoring & leadership",
                "Problem-solving"
              ].map((strength, i) => (
                <div 
                  key={i} 
                  className="bg-primary/10 p-4 rounded-lg border border-primary/20"
                >
                  <p className="font-medium text-gray-800 dark:text-gray-200">{strength}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
