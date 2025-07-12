import {
  Code,
  ShieldCheck,
  Cloud,
  Server,
  MonitorCheck,
  Bug,
  Database,
  Loader,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Full Stack Web Development",
      description:
        "Build scalable and modern web apps using Spring Boot, React.js, and Node.js with solid backend architecture and clean frontend design.",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: Server,
      title: "Backend API & Microservices",
      description:
        "Design and develop enterprise-grade RESTful APIs and microservices with Spring Boot, JPA, Kafka, SQS, and PostgreSQL/MySQL.",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: Database,
      title: "Database Design & Optimization",
      description:
        "Design normalized, efficient, and scalable schemas in MySQL, PostgreSQL, MongoDB, and DynamoDB with query optimization and migrations.",
      gradient: "from-amber-500 to-yellow-600",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Solutions",
      description:
        "Deploy applications with Docker, Jenkins, Kubernetes on AWS (S3, EC2, RDS, SQS) with CI/CD pipelines and infrastructure automation.",
      gradient: "from-cyan-500 to-sky-600",
    },
    {
      icon: ShieldCheck,
      title: "System Design & Architecture",
      description:
        "Architect robust, scalable, and fault-tolerant backend systems with event-driven, microservices-based, and domain-driven design.",
      gradient: "from-violet-500 to-fuchsia-600",
    },
    {
      icon: Bug,
      title: "Testing & Quality Assurance",
      description:
        "Write and maintain unit, integration, and behavior-driven tests using JUnit, Mockito, and Behave to ensure bug-free releases.",
      gradient: "from-red-500 to-rose-600",
    },
    {
      icon: MonitorCheck,
      title: "Observability & Monitoring",
      description:
        "Integrate logging and monitoring with Logback, Grafana, and ELK stack to ensure visibility, traceability, and root-cause analysis. Implement health checks and fault-tolerant architectures for resilient services.",
      gradient: "from-lime-500 to-green-600",
    },
    {
      icon: Loader,
      title: "Asynchronous & Resilient Systems",
      description:
        "Design background job, workflow management systems using Kafka or AWS SQS for offloading tasks, retry mechanisms, messeging or notification service and async analytics pipelines.",
      gradient: "from-indigo-500 to-blue-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const zoomInFade = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
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
      id="services"
      className="py-20 px-6 bg-background dark:bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent">
            My Services
          </span>
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={zoomInFade}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="p-8 hover:shadow-2xl dark:hover:shadow-emerald-500/10 transition-all duration-500 border border-l-4 border-gray-300 dark:border-gray-700 group overflow-hidden relative bg-white dark:bg-gray-800 hover:border-green-600 dark:hover:border-blue-400">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                <CardContent className="p-0 relative z-10">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      className={`p-4 bg-gradient-to-br ${service.gradient} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {service.description}
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

export default Services;
