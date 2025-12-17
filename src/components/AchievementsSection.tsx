import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Star, Award, Target, Zap } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "LeetCode Knight",
    description: "Achieved Knight badge with 500+ problems solved",
    metric: "Top 5%",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Medal,
    title: "Codeforces Expert",
    description: "Reached Expert rating in competitive programming",
    metric: "1600+ Rating",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Star,
    title: "CodeChef 4-Star",
    description: "Consistent performance in monthly contests",
    metric: "1800+ Rating",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Award,
    title: "Hackathon Winner",
    description: "First place in national coding hackathon",
    metric: "1st Place",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Target,
    title: "Open Source",
    description: "Contributed to major open-source projects",
    metric: "50+ PRs",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Zap,
    title: "DSA Streak",
    description: "Maintained consistent daily coding streak",
    metric: "365 Days",
    color: "from-cyan-500 to-blue-500",
  },
];

const stats = [
  { value: "500+", label: "Problems Solved" },
  { value: "50+", label: "Contests" },
  { value: "15+", label: "Projects" },
  { value: "3+", label: "Years Experience" },
];

export const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-mono text-primary mb-4">
            // achievements.log()
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Milestones & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition and accomplishments from the competitive programming 
            journey and professional experience.
          </p>
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text text-glow mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 rounded-2xl relative overflow-hidden group"
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${achievement.color} opacity-10 
                           rounded-full -translate-y-1/2 translate-x-1/2 group-hover:opacity-20 transition-opacity`}
              />
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.color} 
                               flex items-center justify-center mb-4`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {achievement.description}
                </p>
                
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold 
                                  bg-gradient-to-r ${achievement.color} text-white`}>
                    {achievement.metric}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
