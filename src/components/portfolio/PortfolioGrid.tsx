import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Calendar, Tag } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PortfolioFilter } from './PortfolioFilter';
import { getProjectsByCategory, PortfolioItem } from '@/data/portfolio';
import { useLocalStorage } from '@/hooks/useLocalStorage';

interface PortfolioGridProps {
  showFilter?: boolean;
  limit?: number;
}

export const PortfolioGrid = ({ showFilter = true, limit }: PortfolioGridProps) => {
  const [activeCategory, setActiveCategory] = useLocalStorage('portfolio-filter', 'all');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const projects = getProjectsByCategory(activeCategory);
  const displayProjects = limit ? projects.slice(0, limit) : projects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95
    }
  };

  return (
    <div>
      {showFilter && (
        <PortfolioFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      )}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {displayProjects.map((project: PortfolioItem) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              layout
              transition={{ duration: 0.5 }}
              onHoverStart={() => setHoveredItem(project.id)}
              onHoverEnd={() => setHoveredItem(null)}
              className="group"
            >
              <Link to={`/work/${project.id}`}>
                <Card className="card-elevated overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                      animate={{
                        scale: hoveredItem === project.id ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: hoveredItem === project.id ? 1 : 0 
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Hover Content */}
                    <motion.div
                      className="absolute inset-0 p-6 flex flex-col justify-end text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: hoveredItem === project.id ? 1 : 0,
                        y: hoveredItem === project.id ? 0 : 20
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{project.year}</span>
                        <span className="mx-2">•</span>
                        <span className="text-sm">{project.client}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Case Study
                      </div>
                    </motion.div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge 
                        variant="secondary" 
                        className="bg-white/90 text-foreground backdrop-blur-sm"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {project.category.toUpperCase()}
                      </Badge>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-accent text-accent-foreground">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <motion.h3 
                      className="text-xl font-display font-semibold mb-3 text-foreground group-hover:text-primary transition-colors"
                      animate={{
                        y: hoveredItem === project.id ? -2 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    <p className="text-body text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {displayProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16"
        >
          <p className="text-large text-muted-foreground">
            No projects found in this category.
          </p>
        </motion.div>
      )}
    </div>
  );
};