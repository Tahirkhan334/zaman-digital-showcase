import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
}

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/tahirkhan334/repos?sort=updated&per_page=6")
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching repos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">My Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Recent projects I've worked on
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Coming Soon Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            whileHover={{ 
              y: -8,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="glass-panel rounded-xl p-6 relative overflow-hidden group cursor-pointer"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute top-4 right-4"
            >
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                🚧 Coming Soon
              </span>
            </motion.div>
            <div className="mt-8 mb-4">
              <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                E-Commerce Website
              </h3>
              <p className="text-muted-foreground">
                A full-stack MERN e-commerce platform with payment integration, product management, and user authentication.
              </p>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <motion.span 
                whileHover={{ scale: 1.1 }}
                className="text-xs bg-secondary px-2 py-1 rounded"
              >
                React
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.1 }}
                className="text-xs bg-secondary px-2 py-1 rounded"
              >
                Node.js
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.1 }}
                className="text-xs bg-secondary px-2 py-1 rounded"
              >
                MongoDB
              </motion.span>
            </div>
          </motion.div>

          {/* GitHub Projects */}
          {loading ? (
            <>
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="glass-panel rounded-xl p-6 animate-pulse">
                  <div className="h-6 bg-secondary rounded mb-4"></div>
                  <div className="h-4 bg-secondary rounded mb-2"></div>
                  <div className="h-4 bg-secondary rounded w-2/3"></div>
                </div>
              ))}
            </>
          ) : (
            repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: (index + 1) * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="glass-panel rounded-xl p-6 group cursor-pointer hover:border-primary/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {repo.name}
                  </h3>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Github className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                  </motion.div>
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {repo.description || "No description available"}
                </p>
                <div className="flex gap-2 mt-auto">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                    onClick={() => window.open(repo.html_url, "_blank")}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  {repo.homepage && (
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 transition-all"
                      onClick={() => window.open(repo.homepage, "_blank")}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live
                    </Button>
                  )}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
