import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex gap-4"
          >
            <Button
              variant="outline"
              size="icon"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open("https://github.com/tahirkhan334", "_blank")}
            >
              <Github size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open("https://linkedin.com/in/tahirkhan334", "_blank")}
            >
              <Linkedin size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.location.href = "mailto:tahirkhan334@example.com"}
            >
              <Mail size={20} />
            </Button>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-center"
          >
            © 2025 Tahir Zaman | MERN Stack Developer
          </motion.p>

          {/* Made with love */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm text-muted-foreground"
          >
            Built with <span className="text-primary">React</span> & <span className="text-primary">Framer Motion</span>
          </motion.p>
        </div>

        {/* Scroll to Top Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8"
        >
          <Button
            size="icon"
            onClick={scrollToTop}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg"
          >
            <ArrowUp size={20} />
          </Button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
