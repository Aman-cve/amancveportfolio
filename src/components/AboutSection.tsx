import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cpu, Database, Terminal } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "C++ Expert",
    description: "Proficient in modern C++ standards and STL",
  },
  {
    icon: Database,
    title: "DSA Specialist",
    description: "Deep understanding of data structures & algorithms",
  },
  {
    icon: Terminal,
    title: "Problem Solver",
    description: "500+ problems solved on competitive platforms",
  },
  {
    icon: Cpu,
    title: "System Design",
    description: "Building scalable and efficient architectures",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-mono text-primary mb-4">
            // about_me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate developer with a love for solving complex problems 
            and building efficient solutions using data structures and algorithms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 rounded-2xl">
              <pre className="font-mono text-sm overflow-x-auto">
                <code className="text-muted-foreground">
                  <span className="text-primary">class</span>{" "}
                  <span className="text-foreground">Developer</span> {`{`}
                  {"\n"}
                  {"  "}<span className="text-primary">public:</span>
                  {"\n"}
                  {"    "}<span className="text-muted-foreground">string</span> name = <span className="text-accent">"Aman"</span>;
                  {"\n"}
                  {"    "}<span className="text-muted-foreground">string</span> role = <span className="text-accent">"SDE"</span>;
                  {"\n"}
                  {"    "}<span className="text-muted-foreground">vector</span>&lt;<span className="text-muted-foreground">string</span>&gt; skills;
                  {"\n"}
                  {"    "}
                  {"\n"}
                  {"    "}<span className="text-primary">void</span> <span className="text-foreground">solve</span>() {`{`}
                  {"\n"}
                  {"      "}<span className="text-muted-foreground">// Always optimizing</span>
                  {"\n"}
                  {"    "}{`}`}
                  {"\n"}
                  {`}`};
                </code>
              </pre>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              With a strong foundation in computer science fundamentals, I specialize 
              in algorithmic problem-solving and building performant applications. 
              My journey in coding began with competitive programming, which honed 
              my skills in writing clean, efficient, and well-tested code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:bg-primary/5 transition-colors group"
              >
                <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
