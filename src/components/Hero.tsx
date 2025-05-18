
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-green-50 dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Hi, I'm{" "}
              <span className="text-primary">Durgesh Atal</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
              Staff Software Engineer
            </h2>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-lg">
              Experienced Software Engineer with a proven track record of building highly 
              scalable and reliable backend systems using Go lang, Java, Kubernetes, Kafka, and MongoDB.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Me <ArrowRight size={18} />
              </a>
              <a
                href="#experience"
                className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-lg transition-colors duration-300"
              >
                View Experience
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center animate-slide-in-right">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full bg-primary/10"></div>
              <div className="absolute inset-4 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                <div className="text-6xl font-bold text-primary">DA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
