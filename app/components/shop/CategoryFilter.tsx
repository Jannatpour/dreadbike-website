'use client';

import { motion } from 'framer-motion';

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((category, index) => (
        <motion.button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className="relative px-4 py-2 rounded-lg font-semibold transition-all duration-300 bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-yellow-400 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.4 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Active indicator */}
          {selectedCategory === category.id && (
            <motion.div
              className="absolute inset-0 bg-yellow-400 rounded-lg"
              layoutId="activeCategory"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
          <span className={`relative z-10 ${selectedCategory === category.id ? 'text-black' : ''}`}>
            {category.name}
          </span>
        </motion.button>
      ))}
    </div>
  );
}
