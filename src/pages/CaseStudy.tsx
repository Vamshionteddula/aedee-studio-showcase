import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

const CaseStudy = () => {
  const { id } = useParams();

  return (
    <div className="pt-20">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-hero mb-6">Case Study</h1>
          <p className="text-large text-muted-foreground max-w-2xl mx-auto">
            Project ID: {id}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudy;