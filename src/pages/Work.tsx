import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { useState } from "react";

const Work = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding-sm bg-gradient-hero">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-caption text-primary font-semibold bg-primary-muted px-4 py-2 rounded-full">
                Portfolio
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-hero mb-6"
            >
              Our <span className="text-gradient">Creative Work</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-large text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              Explore our portfolio of digital experiences, brand identities, and innovative solutions 
              that have transformed businesses across industries.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-md mx-auto relative"
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search projects, clients, or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-3 rounded-full border-border/50 bg-white/50 backdrop-blur-sm"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <PortfolioGrid showFilter={true} />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-sm bg-surface">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-heading mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-large text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next project and bring your vision to life with our expertise and creativity.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="/contact" 
                className="btn-primary inline-flex items-center"
              >
                Start Your Project
                <Filter className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Work;