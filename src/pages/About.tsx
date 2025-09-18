import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="pt-20">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-hero mb-6">About Aedee</h1>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto">
            Aedee Design Studio is a design-led product studio in Hyderabad. We combine strategy, user-centered design, and engineering to build digital products and brand systems that scale.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;