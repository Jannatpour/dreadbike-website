'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, ArrowRight, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useCart } from '@/lib/cart-context';
import { useWishlist } from '@/lib/wishlist-simple';
import { useToast } from './Toast';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
  rating?: number;
  reviews?: number;
  features?: string[];
  specifications?: Record<string, string>;
}

interface ProductComparisonProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onRemoveProduct: (productId: string) => void;
  onAddProduct: () => void;
}

export default function ProductComparison({
  isOpen,
  onClose,
  products,
  onRemoveProduct,
  onAddProduct,
}: ProductComparisonProps) {
  const { dispatch } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToast } = useToast();
  const [isAddingToCart, setIsAddingToCart] = useState<string | null>(null);

  const handleAddToCart = async (product: Product) => {
    setIsAddingToCart(product.id);
    try {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
          category: product.category,
          description: product.description,
        },
      });
      addToast({
        type: 'success',
        title: 'Added to Cart',
        message: `${product.name} has been added to your cart.`,
      });
    } catch {
      addToast({
        type: 'error',
        title: 'Error',
        message: 'Failed to add item to cart. Please try again.',
      });
    } finally {
      setIsAddingToCart(null);
    }
  };

  const handleWishlistToggle = (product: Product) => {
    const action = isInWishlist(product.id) ? 'remove' : 'add';
    toggleWishlist(product);
    addToast({
      type: 'success',
      title: action === 'add' ? 'Added to Wishlist' : 'Removed from Wishlist',
      message: `${product.name} has been ${action === 'add' ? 'added to' : 'removed from'} your wishlist.`,
    });
  };

  // Get all unique specification keys
  const allSpecs = products.reduce((acc, product) => {
    if (product.specifications) {
      Object.keys(product.specifications).forEach(key => {
        if (!acc.includes(key)) {
          acc.push(key);
        }
      });
    }
    return acc;
  }, [] as string[]);

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
          className="bg-gray-900 rounded-2xl border border-gray-700 w-full max-w-7xl max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-white">Product Comparison</h2>
              <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                {products.length} products
              </span>
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
          <div className="overflow-auto max-h-[calc(90vh-120px)]">
            {products.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 px-6">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                  <Plus className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No Products to Compare</h3>
                <p className="text-gray-400 text-center mb-6">
                  Add products to compare their features, specifications, and prices.
                </p>
                <Button onClick={onAddProduct} className="bg-yellow-400 text-gray-900 hover:bg-yellow-300">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Products
                </Button>
              </div>
            ) : (
              <div className="p-6">
                {/* Product Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                  {products.map((product) => (
                    <Card key={product.id} className="bg-gray-800 border-gray-700 overflow-hidden">
                      <div className="relative">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover"
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onRemoveProduct(product.id)}
                          className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                        <div className="absolute top-2 left-2">
                          {product.inStock ? (
                            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                              In Stock
                            </span>
                          ) : (
                            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                              Out of Stock
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <h3 className="font-semibold text-white mb-2 line-clamp-2">{product.name}</h3>
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < (product.rating || 0)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-gray-400 text-sm">
                            {product.rating} ({product.reviews} reviews)
                          </span>
                        </div>
                        
                        <div className="text-2xl font-bold text-yellow-400 mb-4">
                          ${product.price.toFixed(2)}
                        </div>
                        
                        <div className="space-y-2">
                          <Button
                            onClick={() => handleAddToCart(product)}
                            disabled={!product.inStock || isAddingToCart === product.id}
                            className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 disabled:opacity-50"
                          >
                            {isAddingToCart === product.id ? 'Adding...' : 'Add to Cart'}
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => handleWishlistToggle(product)}
                            className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
                          >
                            {isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                  
                  {/* Add Product Card */}
                  <Card className="bg-gray-800 border-gray-700 border-dashed flex items-center justify-center min-h-[400px]">
                    <Button
                      onClick={onAddProduct}
                      variant="ghost"
                      className="flex flex-col items-center space-y-3 text-gray-400 hover:text-white hover:bg-gray-700 p-8"
                    >
                      <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                        <Plus className="w-6 h-6" />
                      </div>
                      <span className="font-medium">Add Product</span>
                    </Button>
                  </Card>
                </div>

                {/* Specifications Comparison */}
                {allSpecs.length > 0 && (
                  <div className="bg-gray-800 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-6">Specifications</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-700">
                            <th className="text-left py-3 px-4 text-gray-300 font-medium">Feature</th>
                            {products.map((product) => (
                              <th key={product.id} className="text-center py-3 px-4 text-gray-300 font-medium min-w-[200px]">
                                {product.name}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {allSpecs.map((spec) => (
                            <tr key={spec} className="border-b border-gray-700/50">
                              <td className="py-3 px-4 text-gray-300 font-medium">{spec}</td>
                              {products.map((product) => (
                                <td key={product.id} className="py-3 px-4 text-center text-gray-400">
                                  {product.specifications?.[spec] || '-'}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Features Comparison */}
                <div className="bg-gray-800 rounded-xl p-6 mt-6">
                  <h3 className="text-xl font-semibold text-white mb-6">Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product) => (
                      <div key={product.id} className="space-y-3">
                        <h4 className="font-medium text-white">{product.name}</h4>
                        <ul className="space-y-2">
                          {product.features?.map((feature, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </li>
                          )) || (
                            <li className="text-gray-500 text-sm">No features listed</li>
                          )}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
