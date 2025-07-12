import { Calendar } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const About = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

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
      id="about"
      className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-emerald-50/30 dark:from-gray-900 dark:to-emerald-900/20 font-sans overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-sm sm:text-base md:text-[17px] leading-relaxed sm:leading-[1.7] tracking-tight font-[500]"
        >
          {/* 👤 Identity */}
          <motion.div
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl sm:rounded-2xl border shadow-md hover:shadow-lg transition duration-300 space-y-3 sm:space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-emerald-600 dark:text-emerald-400">
              🚀 Who I Am
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              I'm <strong>Anupam Ojha</strong>, Software Engineering Intern at{" "}
              <strong>HugoHub</strong> and final-year CS undergrad at{" "}
              <strong>IET Lucknow</strong> (GPA 8.22). I'm a systems thinker,
              backend engineer, and competitive programmer focused on building
              scalable, resilient platforms.
            </p>
          </motion.div>

          {/* 🛠️ Technical Work */}
          <motion.div
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl sm:rounded-2xl border shadow-md hover:shadow-lg transition duration-300 space-y-3 sm:space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400">
              🛠️ Engineering Work
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              At HugoHub, I engineered a fault-tolerant{" "}
              <strong>workflow orchestration engine</strong> with retries & DLQs
              that cut operational overhead by 40%. I also designed secure,
              efficient reporting pipelines leveraging{" "}
              <strong>S3, cron, and on-demand scheduling</strong>.
              <br />
              <br />
              <span className="italic text-gray-600 dark:text-gray-400 text-sm">
                Stack: Spring Boot, Java, MySQL, Redis, Docker, SQS, Python,
                Shell
              </span>
            </p>
          </motion.div>

          {/* 🧠 CP Achievements */}
          <motion.div
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl sm:rounded-2xl border shadow-md hover:shadow-lg transition duration-300 space-y-3 sm:space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-600 dark:text-yellow-400">
              🧠 Competitive Edge
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm sm:text-base">
              <li>ICPC Amritapuri 2024 – Rank 37</li>
              <li>IICPC 2025 (IIT-H) – Rank 78</li>
              <li>Codeforces Expert (1634), LeetCode Guardian (2301)</li>
              <li>4★ CodeChef (1995), Meta HackerCup Round 2</li>
              <li>2000+ DSA problems solved</li>
            </ul>
          </motion.div>

          {/* 📚 Skills */}
          <motion.div
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl sm:rounded-2xl border shadow-md hover:shadow-lg transition duration-300 space-y-3 sm:space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-purple-600 dark:text-purple-400">
              📚 Skills & Stack
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Languages:</strong> Java, C++, Python, JavaScript, SQL
              <br />
              <strong>Frameworks:</strong> Spring Boot, Node.js, Express, React
              <br />
              <strong>Infra:</strong> Kafka, Redis, Docker, K8s, SQS, S3
              <br />
              <strong>Databases:</strong> MySQL, MongoDB, PostgreSQL
            </p>
          </motion.div>

          {/* 👨‍🏫 Mentorship */}
          <motion.div
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl sm:rounded-2xl border shadow-md hover:shadow-lg transition duration-300 space-y-3 sm:space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-pink-600 dark:text-pink-400">
              👨‍🏫 Mentorship
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              As Lead at <strong>Fractal Coding Club</strong>, I've mentored
              100+ students in <strong>DSA, low-level design</strong>, and{" "}
              <strong>system design</strong>. I believe in enabling deep
              thinking and fostering a builder's mindset.
            </p>
          </motion.div>

          {/* 👁️ Distinction */}
          <motion.div
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl sm:rounded-2xl border shadow-md hover:shadow-lg transition duration-300 space-y-3 sm:space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-red-600 dark:text-red-400">
              👁️ What Sets Me Apart
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              I bring together strong <strong>CS fundamentals</strong> with
              hands-on product engineering. My edge lies in designing{" "}
              <strong>resilient, performant systems</strong>, debugging tough
              backend flows, and shipping production-grade solutions fast.
            </p>
          </motion.div>

          {/* 📊 Stats */}
          {[
            { number: "10+", label: "Projects Delivered", icon: "🚀" },
            { number: "400+", label: "Global Contests Participated", icon: "📊" },
            { number: "2000+", label: "DSA Problems Solved", icon: "🧩" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition duration-300 border border-b-4 border-gray-300 dark:border-gray-700 hover:border-green-600 dark:hover:border-blue-400"
            >
              <div className="text-2xl sm:text-3xl mb-2">{stat.icon}</div>
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium text-xs sm:text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;