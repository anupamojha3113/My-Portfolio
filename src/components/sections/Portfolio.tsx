import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Tech stack color mapping
const techStackColors: Record<string, string> = {
  // Backend
  "Spring Boot": "bg-purple-600 hover:bg-purple-700 text-white",
  "Java": "bg-red-600 hover:bg-red-700 text-white",
  "PostgreSQL": "bg-blue-600 hover:bg-blue-700 text-white",
  "Docker": "bg-sky-600 hover:bg-sky-700 text-white",
  "Redis": "bg-red-700 hover:bg-red-800 text-white",
  "JWT": "bg-pink-600 hover:bg-pink-700 text-white",
  "Base62 Encoding": "bg-amber-600 hover:bg-amber-700 text-white",
  "Role Management": "bg-indigo-600 hover:bg-indigo-700 text-white",
  "Security": "bg-emerald-600 hover:bg-emerald-700 text-white",
  "Node.js": "bg-green-600 hover:bg-green-700 text-white",
  "Express.js": "bg-gray-600 hover:bg-gray-700 text-white",
  
  // Frontend
  "React": "bg-cyan-600 hover:bg-cyan-700 text-white",
  "React.js": "bg-cyan-600 hover:bg-cyan-700 text-white",
  "JavaScript": "bg-yellow-500 hover:bg-yellow-600 text-gray-900",
  "HTML": "bg-orange-600 hover:bg-orange-700 text-white",
  "CSS3": "bg-blue-500 hover:bg-blue-600 text-white",
  "Bootstrap": "bg-violet-600 hover:bg-violet-700 text-white",
  "Sherry.js": "bg-fuchsia-600 hover:bg-fuchsia-700 text-white",
  
  // Databases
  "MongoDB": "bg-green-700 hover:bg-green-800 text-white",
  
  // Other
  "Socket.io": "bg-black hover:bg-gray-900 text-white",
  "Multer": "bg-gray-500 hover:bg-gray-600 text-white",
  "WordPress": "bg-blue-800 hover:bg-blue-900 text-white",
  "JavaScript API": "bg-yellow-600 hover:bg-yellow-700 text-gray-900",
  "MERN": "bg-teal-600 hover:bg-teal-700 text-white",
};

const Portfolio = () => {
  const featuredProjects = [
    {
      title: "URL Shortener",
      stack: [
        "Spring Boot",
        "Java",
        "PostgreSQL",
        "Docker",
        "Redis",
        "JWT",
        "Base62 Encoding",
      ],
      description:
        "Engineered a distributed, stateless URL shortening platform optimized for low-latency resolution. URLs are encoded using a custom Base62 algorithm, persisted in PostgreSQL with transaction-safe writes, and cached in Redis to handle high QPS reads. Architected with JWT-secured user sessions and deployed as containerized microservices via Docker. Designed for horizontal scaling, with separation of concerns across routing, encoding, and analytics subsystems.",
      github: "https://github.com/anupamojha3113/UrlShortner",
      demo: null,
    },
    {
      title: "Shikho (Library Management System)",
      stack: [
        "Spring Boot",
        "Java",
        "PostgreSQL",
        "Docker",
        "Redis",
        "JWT",
        "Role Management",
        "Security",
      ],
      description:
        "Designed and built a secure, multi-tenant library management system with fine-grained role-based access control (RBAC) for admins, librarians, and students. Leveraged Spring Security with JWT tokens and password hashing to enforce endpoint-level permissions. Optimized data access using PostgreSQL views, indexes, and batched queries to support efficient book filtering and availability checks. Redis caching reduced redundant DB reads under high user concurrency. Backend services were containerized and CI/CD ready, adhering to 12-factor app principles.",
      github: "https://github.com/anupamojha3113/Shikho",
      demo: null,
    },
    {
      title: "ConnectU (Full-stack Social Media Platform)",
      stack: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "Multer",
      ],
      description:
        "Architected a production-grade social media platform featuring real-time WebSocket-based messaging (Socket.io), post interactions, and intelligent caption generation via prompt-tuned AI models. MongoDB stores normalized user and post schemas using indexes for fast timeline aggregation. Media uploads are handled through Multer with input sanitization. Backend follows controller-service-repository pattern with JWT authentication, refresh token rotation, and rate-limited APIs. The system supports thousands of concurrent connections with graceful socket failovers and stateless scaling using sticky sessions.",
      github: "https://github.com/anupamojha3113/ConnectYou",
      demo: null,
    },
    {
      title: "GetFlyU (Flight Booking System)",
      stack: ["React", "Node.js", "Express.js", "MongoDB"],
      description:
        "Designed and implemented an end-to-end flight reservation system with support for atomic bookings, cancellation, and seat inventory tracking. Built a modular service architecture where frontend (React) communicates via REST APIs with a transaction-safe Node.js backend. MongoDB schema includes compound indexes for multi-key flight search queries (e.g., source, destination, date). System handles edge cases like race conditions during concurrent seat booking via optimistic locking and retry queues. Designed to be fault-tolerant and extensible with modular services like payment gateway integration and dynamic pricing engine.",
      github: "https://github.com/anupamojha3113/getFlyU",
      demo: null,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2 },
    },
  };

  const slideInFade = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section
      id="portfolio"
      className="py-20 px-6 bg-gradient-to-br from-background to-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-4xl font-bold mb-4 text-center"
        >
          <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-blue-400">
            My Work
          </span>
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
        >
          A collection of projects that showcase my skills and passion for
          creating innovative solutions
        </motion.p>

        {/* Featured Projects */}
        <div className="mb-16">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-2xl font-semibold mb-8 text-foreground"
          >
            ⭐ Featured Projects
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.001 }}
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-8"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={slideInFade}
                whileHover={{ scale: 1.02, y: -5 }}
                className="h-full"
              >
                <Card className="h-full hover:shadow-lg hover:shadow-emerald-500/20 dark:hover:shadow-blue-500/20 transition-all duration-500 group border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-card to-card/70 dark:from-card/90 dark:to-card/70 backdrop-blur-sm">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex space-x-2">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button
                                size="sm"
                                variant="ghost"
                                className="p-2 h-9 w-9 hover:bg-muted/50 group/btn"
                              >
                                <Github className="w-4 h-4 group-hover/btn:text-emerald-600 dark:group-hover/btn:text-emerald-400 transition-colors" />
                              </Button>
                            </a>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Github</p>
                          </TooltipContent>
                        </Tooltip>

                        {project.demo && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="p-2 h-9 w-9 hover:bg-muted/50 group/btn"
                                >
                                  <ExternalLink className="w-4 h-4 group-hover/btn:text-emerald-600 dark:group-hover/btn:text-emerald-400 transition-colors" />
                                </Button>
                              </a>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>View Live</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          className={`text-xs font-medium transition-all ${techStackColors[tech] || "bg-gray-600 hover:bg-gray-700 text-white"}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="mt-auto">
                      <Badge
                        className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white border-0"
                      >
                        Featured
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;