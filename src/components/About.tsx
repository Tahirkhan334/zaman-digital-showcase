import { motion } from "framer-motion";
import { Code2, GraduationCap, Heart, Rocket } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Code2 size={32} />,
      title: "Full Stack Developer",
      description: "Specialized in MERN stack development with expertise in building scalable web applications.",
    },
    {
      icon: <GraduationCap size={32} />,
      title: "Continuous Learner",
      description: "Currently studying at GHSS Palo Dheri and learning advanced web development at SMIT Peshawar.",
    },
    {
      icon: <Rocket size={32} />,
      title: "Problem Solver",
      description: "Passionate about creating efficient solutions and turning ideas into reality through code.",
    },
    {
      icon: <Heart size={32} />,
      title: "Dedicated & Creative",
      description: "Love crafting beautiful, user-friendly interfaces with modern design principles.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A passionate developer dedicated to building exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass-panel p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hello! I'm <span className="text-foreground font-semibold">Tahir Zaman</span>, 
                a dedicated MERN Stack Developer from Peshawar, Pakistan. Currently pursuing my 
                studies in 2nd year at GHSS Palo Dheri while simultaneously expanding my 
                technical expertise at SMIT Peshawar.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My journey in web development started with a curiosity about how websites work, 
                and it has evolved into a passion for creating seamless, user-friendly applications. 
                I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and love 
                bringing ideas to life through clean, efficient code.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, I'm learning new technologies, exploring design trends, 
                and working on personal projects that challenge my skills and creativity.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass-panel p-6 rounded-xl text-center group cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  {feature.icon}
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center glass-panel p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always excited to collaborate on new projects and opportunities. Whether you have 
            a project in mind or just want to connect, feel free to reach out!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
