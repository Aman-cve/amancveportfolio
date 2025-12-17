import { motion } from "framer-motion";

const codeSnippets = [
  { text: "int arr[10];", x: "10%", y: "20%", delay: 0 },
  { text: "vector<int> v;", x: "80%", y: "15%", delay: 0.5 },
  { text: "string s = \"code\";", x: "15%", y: "70%", delay: 1 },
  { text: "sort(arr, arr+n);", x: "75%", y: "75%", delay: 1.5 },
  { text: "{ }", x: "5%", y: "45%", delay: 2 },
  { text: "[ ]", x: "90%", y: "50%", delay: 2.5 },
  { text: "O(n log n)", x: "60%", y: "30%", delay: 3 },
  { text: "stack<int>", x: "25%", y: "85%", delay: 3.5 },
  { text: "queue<>", x: "85%", y: "90%", delay: 4 },
  { text: "tree->left", x: "40%", y: "10%", delay: 4.5 },
];

export const FloatingCode = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={index}
          className="absolute font-mono text-sm md:text-base text-primary/30 select-none"
          style={{ left: snippet.x, top: snippet.y }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            delay: snippet.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {snippet.text}
        </motion.div>
      ))}
      
      {/* Gradient Orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        style={{ left: "10%", top: "20%" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-accent/5 blur-3xl"
        style={{ right: "10%", bottom: "20%" }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </div>
  );
};
