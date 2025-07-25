import { Download, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <section id="home" className="pt-20 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-1 gap-8 sm:gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/30 dark:to-blue-900/30 text-emerald-700 dark:text-emerald-300 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-emerald-200/50 dark:border-emerald-700/50 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-2 h-2 bg-emerald-400 dark:bg-emerald-300 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
              Available for work
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-4 sm:mb-6">
              <span className="inline-block animate-slide-in-left">Anupam</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent inline-block animate-slide-in-right">
                Ojha
              </span>
            </h1>

            <div className="space-y-2 text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-200">
              <p className="overflow-hidden border-r-2 border-gray-600 animate-typewriter-delay-1">
                <span className="inline-block">
                  Backend Engineer | Spring Boot Developer
                </span>
                <br className="sm:hidden" />
                <span className="inline-block">
                  Dev ops | Competitive Programmer
                </span>
              </p>
              <p className="overflow-hidden border-r-2 border-gray-600 animate-typewriter-delay-2">
                System Design Enthusiast
              </p>
            </div>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-lg animate-fade-in-delay-4 my-2">
              Crafting modern web solutions that merge design, performance, and
              function.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-delay-5 w-full">
              <Button
                onClick={() => scrollToSection("portfolio")}
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group text-sm sm:text-base w-full sm:w-auto"
              >
                View My Work
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a
                href="https://drive.google.com/file/d/1GTim8YFMh0te1N8FZrHdsIDzDhPhCzfC/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 group text-sm sm:text-base w-full"
                >
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  View Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12 sm:mt-16">
        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce hover:animate-pulse transition-all duration-300 p-2 rounded-full hover:bg-emerald-400 dark:hover:bg-emerald-900/30"
        >
          <ChevronDown className="w-6 h-6 text-gray-400 dark:text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
