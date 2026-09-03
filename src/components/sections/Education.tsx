import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, type Variants } from "framer-motion";

const Education = () => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="education"
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
            Education
          </span>
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <Card className="p-8 border border-l-4 border-gray-300 dark:border-gray-700 hover:border-green-600 dark:hover:border-blue-400 hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-white to-emerald-50/20 dark:from-gray-800 dark:to-emerald-900/10">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl shadow-lg w-fit">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        Institute of Engineering and Technology (IET), Lucknow
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">
                        Bachelor of Technology in Computer Science and
                        Engineering
                      </p>
                    </div>
                    <Badge className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white border-0">
                      2021 - 2025
                    </Badge>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    GPA: <strong>8.22/10.0</strong>. The degree is supported by
                    strong competitive-programming performance, hands-on backend
                    projects, and mentorship in DSA, low-level design, and
                    system design.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "Computer Science",
                      "Data Structures & Algorithms",
                      "Database Systems",
                      "System Design",
                      "Backend Engineering",
                    ].map((topic) => (
                      <Badge
                        key={topic}
                        variant="secondary"
                        className="bg-muted text-muted-foreground"
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
