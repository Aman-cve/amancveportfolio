import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "C++", level: 95, category: "Languages" },
  { name: "Python", level: 85, category: "Languages" },
  { name: "JavaScript", level: 80, category: "Languages" },
  { name: "Data Structures", level: 95, category: "DSA" },
  { name: "Algorithms", level: 90, category: "DSA" },
  { name: "System Design", level: 75, category: "DSA" },
  { name: "React", level: 80, category: "Frameworks" },
  { name: "Node.js", level: 75, category: "Frameworks" },
  { name: "Git", level: 85, category: "Tools" },
  { name: "Docker", level: 70, category: "Tools" },
];

const dsaTopics = [
  "Arrays", "Strings", "Linked Lists", "Trees", "Graphs",
  "Dynamic Programming", "Greedy", "Backtracking", "Sorting",
  "Searching", "Hashing", "Heaps", "Stacks", "Queues",
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-mono text-primary mb-4">
            // skills.cpp
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through years of dedicated learning and practice.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills with Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-6 font-mono text-primary">
              {">"} proficiency_levels
            </h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground font-mono">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* DSA Topics Cloud */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="text-xl font-semibold mb-6 font-mono text-primary">
              {">"} dsa_expertise
            </h3>
            <div className="flex flex-wrap gap-3">
              {dsaTopics.map((topic, index) => (
                <motion.span
                  key={topic}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-4 py-2 rounded-full bg-secondary hover:bg-primary/20 
                           text-sm font-medium cursor-default transition-colors"
                >
                  {topic}
                </motion.span>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-code-bg font-mono text-sm">
              <div className="text-muted-foreground">
                <span className="text-primary">// Time Complexity Analysis</span>
                {"\n"}
                <span className="text-accent">Binary Search:</span> O(log n)
                {"\n"}
                <span className="text-accent">Merge Sort:</span> O(n log n)
                {"\n"}
                <span className="text-accent">DP Optimization:</span> O(n²) → O(n)
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
