import { motion } from "framer-motion";

const Blog = () => {
  return (
    <div className="pt-20">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-hero mb-6">Insights</h1>
          <p className="text-large text-muted-foreground max-w-2xl mx-auto">
            Thoughts on design, technology, and building better digital experiences.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;