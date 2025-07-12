import { MapPin, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
  {
    title: "SDE Intern",
    company: "Includ",
    period: "July 2025 – Current",
    description:
      "Built a robust tool to automate inventory and order management for a child-wear e-commerce brand, significantly reducing manual errors and operational overhead. Integrated Shopify and Shiprocket APIs to create a unified backend system for real-time syncing of orders, inventory, and logistics. Enabled seamless data flow for business analytics, improving operational visibility and decision-making.",
    icon: "💼",
    linkedin: "https://www.linkedin.com/company/aspiringbrands",
  },
  {
    title: "SWE Intern",
    company: "HugoHub",
    period: "Jan 2025 – June 2025",
    description:
      "Designed and implemented a scalable workflow orchestration framework with asynchronous task handling, exponential backoff, and retry queues to support complex user journeys. Spearheaded development of a modular reporting system with scheduled/on-demand exports and secure cloud storage integration. Proactively identified and patched critical backend security vulnerabilities, improving compliance and resilience. Optimized high-throughput data queries and automated CI/CD pipelines using scripting for faster deployments.",
    icon: "💼",
    linkedin: "https://www.linkedin.com/company/hugohub",
  },
  {
    title: "Problem Setter Intern",
    company: "HackerEarth",
    period: "Oct 2024 – Dec 2024",
    description:
      "Crafted high-quality DSA problems used in technical assessments for top-tier tech firms. Collaborated with the content team to design real-world programming challenges that assess algorithmic thinking and code efficiency. Led multiple programming contests, improving user retention and platform engagement by over 15%.",
    icon: "💼",
    linkedin: "https://www.linkedin.com/company/hackerearth",
  },
];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const slideInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="experience"
      className="py-20 px-6 bg-background dark:bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent">
            Experience
          </span>
        </motion.h3>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={slideInUp}>
              <Card className="relative p-8 border-l-4 hover:border-green-600 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-xl group bg-gradient-to-r from-white to-emerald-50/20 dark:from-gray-800 dark:to-emerald-900/10 dark:border-gray-700">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="text-3xl group-hover:scale-110 transition-transform duration-300"
                    >
                      {exp.icon}
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl flex font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          
                            {exp.title}
                            <div>
                            <a
                            href={exp.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-4 mt-5 ml-2  text-emerald-600 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                          </div>
                        </h3>
                  
                        <div className="flex items-center space-y-1 text-emerald-600 dark:text-emerald-400 font-medium">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium">
                        {exp.company}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
