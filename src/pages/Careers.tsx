import { motion } from "framer-motion";

const Careers = () => {
  return (
    <div className="pt-20">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-hero mb-6">Careers</h1>
          <p className="text-large text-muted-foreground max-w-2xl mx-auto">
            Join our creative team and help shape the future of digital experiences.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Careers;