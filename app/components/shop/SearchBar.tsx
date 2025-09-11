'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Zap } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export default function SearchBar({
  onSearch,
  placeholder = 'Search for gear, parts, and apparel...',
  className = '',
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(query);
    }, 300); // Debounce search

    return () => clearTimeout(timeoutId);
  }, [query, onSearch]);

  const clearSearch = () => {
    setQuery('');
    onSearch('');
  };

  const quickSearches = ['helmet', 'jacket', 'gloves', 'boots', 'exhaust'];

  return (
    <motion.div
      className={`relative ${className}`}
      {...(isMounted && {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      })}
    >
      {/* Main Search Input */}
      <div className='relative'>
        <motion.div
          className='absolute left-4 top-1/2 transform -translate-y-1/2 z-10'
          animate={{
            scale: isFocused ? 1.1 : 1,
            color: isFocused ? '#fbbf24' : '#9ca3af',
          }}
          transition={{ duration: 0.2 }}
        >
          <Search className='w-5 h-5' />
        </motion.div>

        <Input
          type='text'
          placeholder={placeholder}
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`pl-12 pr-12 py-4 bg-gray-800/70 border-2 border-gray-600 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20 rounded-xl text-lg transition-all duration-300 ${
            isFocused
              ? 'ring-4 ring-yellow-400/20 shadow-lg shadow-yellow-400/10'
              : ''
          }`}
        />

        <AnimatePresence>
          {query && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={clearSearch}
              className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-gray-700/50'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className='w-4 h-4' />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Focus Glow Effect */}
        <motion.div
          className='absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20 opacity-0 pointer-events-none'
          animate={{
            opacity: isFocused ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Quick Search Suggestions */}
      <AnimatePresence>
        {isFocused && !query && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className='absolute top-full left-0 right-0 mt-2 bg-gray-800/95 backdrop-blur-sm rounded-xl border border-gray-700 p-4 z-20'
          >
            <div className='flex items-center space-x-2 mb-3'>
              <Zap className='w-4 h-4 text-yellow-400' />
              <span className='text-sm font-semibold text-gray-300'>
                Quick Search
              </span>
            </div>
            <div className='flex flex-wrap gap-2'>
              {quickSearches.map((term, index) => (
                <motion.button
                  key={term}
                  onClick={() => setQuery(term)}
                  className='px-3 py-1 bg-gray-700/50 hover:bg-yellow-400/20 text-gray-300 hover:text-yellow-400 text-sm rounded-full transition-all duration-200 border border-gray-600 hover:border-yellow-400/50'
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {term}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Results Counter */}
      <AnimatePresence>
        {query && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className='absolute top-full left-0 right-0 mt-2 text-center'
          >
            <span className='inline-flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-gray-300 border border-gray-700'>
              <Search className='w-3 h-3' />
              <span>Searching for &quot;{query}&quot;</span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
