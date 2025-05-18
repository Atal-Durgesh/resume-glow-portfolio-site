
import React from "react";
import { Briefcase, Calendar } from "lucide-react";

interface WorkExperience {
  title: string;
  company: string;
  period: string;
  location: string;
  product?: string;
  description: string[];
  techStack: string;
}

const Experience: React.FC = () => {
  const experiences: WorkExperience[] = [
    {
      title: "Staff Software Engineer",
      company: "Zscaler",
      period: "June 2024 - Current",
      location: "Pune, India",
      product: "ONEAPI",
      description: [
        "Lead technical design and implementation of ONEAPI, Zscaler's unified API platform serving as a single access point for security services across product lines.",
        "Architect and develop scalable RESTful APIs, ensuring robust authentication, authorization, and seamless integration for enterprise clients.",
        "Collaborate closely with cross-functional teams including Product, Security, and Operations to define requirements, prioritize feature delivery, and optimize system performance.",
        "Mentor and guide a team of junior engineers, conducting regular code reviews and promoting best practices in secure software development, code quality, and testing automation.",
        "Champion continuous improvement by driving adoption of CI/CD pipelines, infrastructure-as-code, and cloud-native deployment strategies.",
        "Monitor production systems, troubleshoot high-impact incidents, and deliver timely resolutions to ensure enterprise-grade availability and reliability.",
        "Influence product roadmap by evaluating emerging technologies, driving engineering initiatives, and representing technical interests in cross-team discussions.",
      ],
      techStack: "Golang, DocumentDB, Redis, AWS SQS, Docker, Kubernetes, Jenkins, AWS, Argo Workflows, Valkey"
    },
    {
      title: "Senior Software Engineer",
      company: "Zscaler",
      period: "March 2022 - Current",
      location: "Pune, India",
      product: "ZFabric",
      description: [
        "Designed and developed a data platform that streamlines ingestion, filtering, selection, and storage within a data lake, supporting robust data utilization for current and future company products.",
        "Developed a proof-of-concept (POC) framework leveraging gRPC protocols to enable seamless communication between multiple services, independent of source languages.",
        "Implemented the Sidecar pattern to efficiently co-locate framework and data connector services within the same Kubernetes pod, improving resource utilization and resilience.",
        "Built a POC using PyAirbyte to integrate Airbyte libraries, simplifying and accelerating data collection capabilities.",
      ],
      techStack: "Python, Java, MongoDB, PostgreSQL, Redis, Apache Kafka, Docker, Kubernetes, Jenkins, AWS, GCP, OCI, IAM, S3, Airbyte, Iceberg, Minio, Temporal"
    },
    {
      title: "Software Engineer 2",
      company: "Zscaler",
      period: "March 2022 - January 2024",
      location: "Pune, India",
      product: "Zscaler Posture Control",
      description: [
        "Contributed to Zscaler Posture Control, an agentless Cloud Native Application Protection Platform (CNAPP) by building scalable microservices for GCP and AWS, supporting thousands of cloud accounts simultaneously.",
        "Automated customer onboarding for cloud service provider (CSP) integrations by provisioning secure cloud connections with Terraform.",
        "Developed high-throughput data collection services within the platform, architected to handle millions of events per minute leveraging Golang and Kafka.",
        "Designed and implemented event-driven, scalable microservices architectures for secure and efficient cloud operations.",
        "Collaborated in both Low-Level and High-Level Design (LLD/HLD) phases for core services and features.",
      ],
      techStack: "Golang, MongoDB, PostgreSQL, Redis, Apache Kafka, Docker, Kubernetes, Jenkins, AWS, GCP, OCI, IAM, S3"
    },
    {
      title: "Senior Software Engineer",
      company: "Globant",
      period: "April 2021 - March 2022",
      location: "Pune, Maharashtra",
      product: "HSBC Bank – KYC Application",
      description: [
        "Developed key microservices for the Know Your Customer (KYC) onboarding system to streamline account opening processes for new customers.",
        "Built and deployed event-driven notification services to improve communication and responsiveness within the KYC workflow.",
        "Designed and implemented stateless microservices using Spring Boot and Spring Cloud, ensuring high scalability and ease of deployment.",
        "Exposed RESTful APIs for frontend integration, enabling seamless interactions across multiple microservices.",
      ],
      techStack: "Java 1.8, Spring Boot, Spring Cloud, Netflix OSS, Hibernate, JPA, PostgreSQL, Redis, Apache Kafka, Docker, Kubernetes, Mockito, JUnit"
    },
    {
      title: "System Engineer",
      company: "Tata Consultancy Services",
      period: "August 2018 - March 2021",
      location: "Pune, Maharashtra",
      product: "Citi – Liquidity Risk Management System",
      description: [
        "Built a comprehensive liquidity risk tracking application from the ground up to monitor and manage liquidity risks across Citibank's global operations. The system featured a robust multi-step approval workflow.",
        "Designed and developed high-quality microservices using Java 1.8, Spring Boot, and RESTful APIs to meet complex business requirements.",
        "Applied strong object-oriented programming (OOP) principles and software design patterns to ensure maintainability and scalability.",
        "Implemented event-driven microservices for handling approval processes and real-time notification delivery.",
      ],
      techStack: "Java 1.8, Spring Boot, Microservices, Hibernate, JPA, Oracle, Docker, Kubernetes, Jenkins, Jira, Git, Swagger"
    }
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Work Experience</h2>

        <div className="max-w-4xl mx-auto mt-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="timeline-item"
            >
              <div className="mb-6">
                <div className="flex flex-wrap items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {exp.period}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase size={16} className="text-primary" />
                  <span className="text-lg font-medium">{exp.company}</span>
                  <span className="text-sm text-gray-500">| {exp.location}</span>
                </div>
                
                {exp.product && (
                  <div className="text-gray-700 dark:text-gray-300 mb-2 font-medium">
                    Product: {exp.product}
                  </div>
                )}

                <div className="mt-4 space-y-3">
                  {exp.description.map((item, i) => (
                    <p 
                      key={i} 
                      className="text-gray-600 dark:text-gray-400"
                    >
                      • {item}
                    </p>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-primary mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.split(", ").map((tech, i) => (
                      <span 
                        key={i} 
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
