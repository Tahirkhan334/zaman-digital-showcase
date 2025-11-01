import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-primary text-lg md:text-xl mb-4"
            >
              Hi, I'm
            </motion.p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="gradient-text">Tahir Zaman</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-3xl text-muted-foreground mb-6"
            >
              A Passionate <span className="text-primary font-semibold">MERN Stack</span> Web Developer 👋
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Currently studying 2nd year at GHSS Palo Dheri and learning at SMIT Peshawar.
              Building modern web applications with React, Node.js, and MongoDB.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/resume.pdf";
                link.download = "Tahir_Zaman_Resume.pdf";
                link.click();
              }}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Get in Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="mx-auto text-primary" size={32} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
