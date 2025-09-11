'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, X, ChevronDown, ChevronUp, Star, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface FilterOptions {
  priceRange: [number, number];
  rating: number;
  inStock: boolean | null;
  categories: string[];
  brands: string[];
  sortBy: 'price-low' | 'price-high' | 'rating' | 'newest' | 'name';
}

interface ProductFilterProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: FilterOptions) => void;
  categories: Array<{ id: string; name: string; slug: string }>;
  brands: string[];
  maxPrice: number;
  minPrice: number;
}

export default function ProductFilter({
  isOpen,
  onClose,
  onApplyFilters,
  categories,
  brands,
  maxPrice,
  minPrice,
}: ProductFilterProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: [minPrice, maxPrice],
    rating: 0,
    inStock: null,
    categories: [],
    brands: [],
    sortBy: 'newest',
  });

  const [expandedSections, setExpandedSections] = useState({
    price: true,
    rating: true,
    availability: true,
    categories: true,
    brands: true,
    sort: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handlePriceChange = (index: 0 | 1, value: number) => {
    const newRange: [number, number] = [...filters.priceRange];
    newRange[index] = value;
    
    // Ensure min doesn't exceed max and vice versa
    if (index === 0 && value > newRange[1]) {
      newRange[1] = value;
    } else if (index === 1 && value < newRange[0]) {
      newRange[0] = value;
    }
    
    setFilters(prev => ({ ...prev, priceRange: newRange }));
  };

  const handleCategoryToggle = (categoryId: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter(id => id !== categoryId)
        : [...prev.categories, categoryId],
    }));
  };

  const handleBrandToggle = (brand: string) => {
    setFilters(prev => ({
      ...prev,
      brands: prev.brands.includes(brand)
        ? prev.brands.filter(b => b !== brand)
        : [...prev.brands, brand],
    }));
  };

  const handleApplyFilters = () => {
    onApplyFilters(filters);
    onClose();
  };

  const handleClearFilters = () => {
    const clearedFilters: FilterOptions = {
      priceRange: [minPrice, maxPrice],
      rating: 0,
      inStock: null,
      categories: [],
      brands: [],
      sortBy: 'newest',
    };
    setFilters(clearedFilters);
    onApplyFilters(clearedFilters);
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.priceRange[0] !== minPrice || filters.priceRange[1] !== maxPrice) count++;
    if (filters.rating > 0) count++;
    if (filters.inStock !== null) count++;
    if (filters.categories.length > 0) count++;
    if (filters.brands.length > 0) count++;
    return count;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-gray-900 rounded-2xl border border-gray-700 w-full max-w-2xl max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <div className="flex items-center space-x-3">
              <SlidersHorizontal className="w-6 h-6 text-yellow-400" />
              <h2 className="text-xl font-bold text-white">Filter & Sort</h2>
              {getActiveFiltersCount() > 0 && (
                <span className="bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-sm font-medium">
                  {getActiveFiltersCount()}
                </span>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-400 hover:text-white hover:bg-gray-800"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6 max-h-[calc(90vh-200px)] overflow-y-auto">
            {/* Price Range */}
            <div>
              <button
                onClick={() => toggleSection('price')}
                className="flex items-center justify-between w-full text-left"
              >
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-5 h-5 text-yellow-400" />
                  <h3 className="font-semibold text-white">Price Range</h3>
                </div>
                {expandedSections.price ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              <AnimatePresence>
                {expandedSections.price && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-4 space-y-4"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-1">
                        <label className="block text-sm text-gray-300 mb-1">Min Price</label>
                        <Input
                          type="number"
                          value={filters.priceRange[0]}
                          onChange={(e) => handlePriceChange(0, Number(e.target.value))}
                          min={minPrice}
                          max={maxPrice}
                          className="bg-gray-800 border-gray-600 text-white"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm text-gray-300 mb-1">Max Price</label>
                        <Input
                          type="number"
                          value={filters.priceRange[1]}
                          onChange={(e) => handlePriceChange(1, Number(e.target.value))}
                          min={minPrice}
                          max={maxPrice}
                          className="bg-gray-800 border-gray-600 text-white"
                        />
                      </div>
                    </div>
                    
                    <div className="text-center text-gray-400 text-sm">
                      ${filters.priceRange[0]} - ${filters.priceRange[1]}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Rating */}
            <div>
              <button
                onClick={() => toggleSection('rating')}
                className="flex items-center justify-between w-full text-left"
              >
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <h3 className="font-semibold text-white">Minimum Rating</h3>
                </div>
                {expandedSections.rating ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              <AnimatePresence>
                {expandedSections.rating && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-4"
                  >
                    <div className="flex items-center space-x-2">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                          key={rating}
                          onClick={() => setFilters(prev => ({ ...prev, rating: prev.rating === rating ? 0 : rating }))}
                          className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                            filters.rating >= rating
                              ? 'bg-yellow-400 text-gray-900'
                              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                          }`}
                        >
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm font-medium">{rating}+</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Availability */}
            <div>
              <button
                onClick={() => toggleSection('availability')}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="font-semibold text-white">Availability</h3>
                {expandedSections.availability ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              <AnimatePresence>
                {expandedSections.availability && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-4 space-y-2"
                  >
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="availability"
                        checked={filters.inStock === null}
                        onChange={() => setFilters(prev => ({ ...prev, inStock: null }))}
                        className="w-4 h-4 text-yellow-400 bg-gray-800 border-gray-600 focus:ring-yellow-400"
                      />
                      <span className="text-gray-300">All Products</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="availability"
                        checked={filters.inStock === true}
                        onChange={() => setFilters(prev => ({ ...prev, inStock: true }))}
                        className="w-4 h-4 text-yellow-400 bg-gray-800 border-gray-600 focus:ring-yellow-400"
                      />
                      <span className="text-gray-300">In Stock Only</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="availability"
                        checked={filters.inStock === false}
                        onChange={() => setFilters(prev => ({ ...prev, inStock: false }))}
                        className="w-4 h-4 text-yellow-400 bg-gray-800 border-gray-600 focus:ring-yellow-400"
                      />
                      <span className="text-gray-300">Out of Stock</span>
                    </label>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Categories */}
            <div>
              <button
                onClick={() => toggleSection('categories')}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="font-semibold text-white">Categories</h3>
                {expandedSections.categories ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              <AnimatePresence>
                {expandedSections.categories && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-4 space-y-2"
                  >
                    {categories.map((category) => (
                      <label key={category.id} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={filters.categories.includes(category.id)}
                          onChange={() => handleCategoryToggle(category.id)}
                          className="w-4 h-4 text-yellow-400 bg-gray-800 border-gray-600 rounded focus:ring-yellow-400"
                        />
                        <span className="text-gray-300">{category.name}</span>
                      </label>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Brands */}
            <div>
              <button
                onClick={() => toggleSection('brands')}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="font-semibold text-white">Brands</h3>
                {expandedSections.brands ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              <AnimatePresence>
                {expandedSections.brands && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-4 space-y-2"
                  >
                    {brands.map((brand) => (
                      <label key={brand} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={filters.brands.includes(brand)}
                          onChange={() => handleBrandToggle(brand)}
                          className="w-4 h-4 text-yellow-400 bg-gray-800 border-gray-600 rounded focus:ring-yellow-400"
                        />
                        <span className="text-gray-300">{brand}</span>
                      </label>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sort By */}
            <div>
              <button
                onClick={() => toggleSection('sort')}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="font-semibold text-white">Sort By</h3>
                {expandedSections.sort ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              <AnimatePresence>
                {expandedSections.sort && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-4 space-y-2"
                  >
                    {[
                      { value: 'newest', label: 'Newest First' },
                      { value: 'price-low', label: 'Price: Low to High' },
                      { value: 'price-high', label: 'Price: High to Low' },
                      { value: 'rating', label: 'Highest Rated' },
                      { value: 'name', label: 'Name A-Z' },
                    ].map((option) => (
                      <label key={option.value} className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="sortBy"
                          value={option.value}
                          checked={filters.sortBy === option.value}
                          onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value as 'price-low' | 'price-high' | 'rating' | 'newest' | 'name' }))}
                          className="w-4 h-4 text-yellow-400 bg-gray-800 border-gray-600 focus:ring-yellow-400"
                        />
                        <span className="text-gray-300">{option.label}</span>
                      </label>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-700 flex justify-between">
            <Button
              variant="outline"
              onClick={handleClearFilters}
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              Clear All
            </Button>
            <Button
              onClick={handleApplyFilters}
              className="bg-yellow-400 text-gray-900 hover:bg-yellow-300"
            >
              Apply Filters
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
