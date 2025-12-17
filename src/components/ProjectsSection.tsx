import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Algorithm Visualizer",
    description:
      "Interactive visualization tool for sorting and pathfinding algorithms with step-by-step animation.",
    tags: ["React", "TypeScript", "Canvas API", "DSA"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Code Compiler",
    description:
      "Online C++ compiler with real-time execution, syntax highlighting, and test case management.",
    tags: ["Node.js", "Docker", "WebSockets", "C++"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "LeetCode Tracker",
    description:
      "Personal dashboard to track competitive programming progress with analytics and visualizations.",
    tags: ["React", "Chart.js", "Firebase", "API"],
    github: "https://github.com",
    featured: false,
  },
  {
    title: "Graph Playground",
    description:
      "Interactive graph editor with BFS, DFS, Dijkstra, and minimum spanning tree algorithms.",
    tags: ["TypeScript", "D3.js", "Algorithms"],
    github: "https://github.com",
    featured: false,
  },
  {
    title: "Memory Allocator",
    description:
      "Custom memory allocator implementation in C++ with different allocation strategies.",
    tags: ["C++", "Systems", "Memory Management"],
    github: "https://github.com",
    featured: false,
  },
  {
    title: "Rate Limiter",
    description:
      "Distributed rate limiting system using Redis with multiple algorithms support.",
    tags: ["Go", "Redis", "Distributed Systems"],
    github: "https://github.com",
    featured: false,
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-mono text-primary mb-4">
            // projects.push()
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in algorithms,
            system design, and full-stack development.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="font-mono text-6xl text-primary/30"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {"{ }"}
                  </motion.div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary rounded-full text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.live && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl font-bold mb-8 text-center"
        >
          Other Noteworthy Projects
        </motion.h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="glass-card p-6 rounded-xl hover:bg-primary/5 transition-all group cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <Folder className="w-10 h-10 text-primary mb-4" />
              <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-muted-foreground font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
