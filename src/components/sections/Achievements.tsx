import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Achievements = () => {
  const codingPlatforms = [
    {
      title: "LeetCode",
      rating: "2301 (Guardian)",
      problemsSolved: "777+",
      contests: "70+",
      profileLink: "https://leetcode.com/u/LessThanExpert/",
      badgeColor: "bg-orange-500/10 text-orange-500",
      notableRanks: "Top 6% globally & AIR 87",
    },
    {
      title: "Codeforces",
      rating: "1632+ (Expert)",
      problemsSolved: "780+",
      contests: "130+",
      profileLink: "https://codeforces.com/profile/LessThanExpert",
      badgeColor: "bg-blue-500/10 text-blue-500",
      notableRanks: "Max Rating: 1650",
    },
    {
      title: "CodeChef",
      rating: "1995+ (4 Star)",
      problemsSolved: "360+",
      contests: "80+",
      profileLink: "https://www.codechef.com/users/conquistador21",
      badgeColor: "bg-yellow-500/10 text-yellow-500",
      notableRanks: "Double digit global rank in multiple contest",
    },
    {
      title: "AtCoder",
      rating: "Green",
      problemsSolved: "100+",
      contests: "50+",
      profileLink: "https://atcoder.jp/users/anupamojha_21",
      badgeColor: "bg-emerald-500/10 text-emerald-500",
      notableRanks: "Rated in Regular Contests",
    },
    {
      title: "ICPC",
      region:"Amritapuri Regionals",
      profileLink: "https://amritaicpc.in/final-rank-list",
      badgeColor: "bg-indigo-500/10 text-indigo-500",
      notableRanks: "All India Rank 37",
    },
    {
      title: "IICPC IIT Hydrabad",
      region: "National Level",
      profileLink: "https://drive.google.com/file/d/12wK-DLbg7MDaVU_wsQOPr_VmawqRtRVZ/view",
      badgeColor: "bg-yellow-500/10 text-yellow-500",
      notableRanks: "Final Round Qualifier with AIR 76",
    },
    {
      title: "Meta Hackercup",
      region: "Globle Level",
      profileLink: "https://www.facebook.com/codingcompetitions/hacker-cup/2023/certificate/1073879700650126/",
      badgeColor: "bg-red-500/10 text-red-500",
      notableRanks: "Qualified to Round 2",
    },
    {
      title: "GeeksforGeeks",
      rating: "Top 5%",
      problemsSolved: "500+",
      contests: "5+",
      profileLink: "https://www.geeksforgeeks.org/user/devanandg9qz/",
      badgeColor: "bg-green-500/10 text-green-500",
      notableRanks: "Got multiple time single digit ranks ie 1,2",
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
      id="achievements"
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
            Coding Achievements
          </span>
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
        >
          My competitive programming profiles and achievements across various
          platforms
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {codingPlatforms.map((platform, index) => (
            <motion.div
              key={index}
              variants={slideInFade}
              whileHover={{ scale: 1.05, y: -5 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col justify-between hover:shadow-lg transition-all duration-500 group border-border/50 bg-card/50 backdrop-blur-sm border border-b-4 border-gray-300 dark:border-gray-700">
                <CardContent className="p-6 flex flex-col justify-between flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {platform.title}
                    </h3>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href={platform.profileLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            size="sm"
                            variant="ghost"
                            className="p-2 h-9 w-9 hover:bg-muted group/btn"
                          >
                            <ExternalLink className="w-4 h-4 group-hover/btn:text-emerald-600 dark:group-hover/btn:text-emerald-400 transition-colors" />
                          </Button>
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View Profile</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>

                  <div className="space-y-3">
                    {platform.rating && (
                      <div>
                        <p className="text-sm text-muted-foreground">Rating</p>
                        <p className="font-medium">{platform.rating}</p>
                      </div>
                    )}

                    {platform.region && (
                      <div>
                        <p className="text-sm text-muted-foreground">Region</p>
                        <p className="font-medium">{platform.region}</p>
                      </div>
                    )}

                    {platform.problemsSolved && (
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Problems Solved
                        </p>
                        <p className="font-medium">{platform.problemsSolved}</p>
                      </div>
                    )}

                    {platform.contests && (
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Contests Participated
                        </p>
                        <p className="font-medium">{platform.contests}</p>
                      </div>
                    )}

                    {platform.notableRanks && (
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Notable Ranks
                        </p>
                        <p className="font-medium">{platform.notableRanks}</p>
                      </div>
                    )}
                  </div>

                  <div className="mt-4">
                    <Badge
                      variant="secondary"
                      className={`${platform.badgeColor} backdrop-blur-sm border-0`}
                    >
                      {platform.title}
                    </Badge>
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

export default Achievements;
