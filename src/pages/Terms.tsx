import { motion } from "framer-motion";

const Terms = () => {
  return (
    <div className="pt-20">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-heading mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-4xl">
            <p className="text-body text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p className="text-body">
              These terms and conditions outline the rules and regulations for the use of Aedee Design Studio's services.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;