import { motion } from 'framer-motion';
import { categories } from '@/data/portfolio';

interface PortfolioFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const PortfolioFilter = ({ activeCategory, onCategoryChange }: PortfolioFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
            activeCategory === category.id
              ? 'bg-primary text-primary-foreground shadow-elegant'
              : 'bg-surface text-foreground hover:bg-surface-elevated hover:scale-105'
          }`}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          layout
        >
          <span>{category.label}</span>
          <span className="ml-2 opacity-60">({category.count})</span>
        </motion.button>
      ))}
    </div>
  );
};