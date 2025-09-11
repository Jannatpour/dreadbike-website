'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingCart, Eye, Heart, Zap, Shield, Share2 } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { useWishlist } from '@/lib/wishlist-simple';
import { useToast, createToastHelpers } from '../Toast';
import { Product } from '../../shop/page';
import { Button } from '@/components/ui/button';
import QuantitySelector from '../QuantitySelector';
import ImageZoomModal from '../ImageZoomModal';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToast } = useToast();
  const toast = createToastHelpers(addToast);
  const [quantity, setQuantity] = useState(1);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const addToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!product.inStock || isAddingToCart) return;
    
    setIsAddingToCart(true);
    
    try {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          category: product.category,
          description: product.description,
          quantity,
        },
      });
      
      toast.cart('add', product.name);
    } catch {
      toast.error('Error', 'Failed to add item to cart');
    } finally {
      setIsAddingToCart(false);
    }
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const action = toggleWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      description: product.description,
    });
    
    toast.wishlist(action === 'added' ? 'add' : 'remove', product.name);
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const shareData = {
      title: product.name,
      text: `Check out this ${product.name} - $${product.price}`,
      url: `${window.location.origin}/shop/product/${product.id}`,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        console.log('Error sharing');
      }
    } else {
      // Fallback to copying URL
      try {
        await navigator.clipboard.writeText(shareData.url);
        toast.success('Link Copied', 'Product link copied to clipboard');
      } catch {
        toast.error('Error', 'Failed to copy link');
      }
    }
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsZoomOpen(true);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'apparel':
        return Shield;
      case 'gear':
        return Zap;
      case 'parts':
        return ShoppingCart;
      default:
        return ShoppingCart;
    }
  };

  const CategoryIcon = getCategoryIcon(product.category);

  return (
    <motion.div
      className="group bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-400/50 transition-all duration-500 relative"
      whileHover={{ y: -8, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />

      <Link href={`/shop/product/${product.id}`}>
        <div 
          className="relative aspect-square overflow-hidden cursor-zoom-in"
          onClick={handleImageClick}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Enhanced Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500" />
          
          {/* Quick Actions */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <div className="flex flex-col space-y-2">
              <Button
                size="icon"
                variant="secondary"
                className="w-10 h-10 bg-black/70 hover:bg-black/90 backdrop-blur-sm"
                onClick={handleImageClick}
                title="Zoom image"
              >
                <Eye className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                className={`w-10 h-10 backdrop-blur-sm ${
                  isInWishlist(product.id)
                    ? 'bg-red-500/80 hover:bg-red-500' 
                    : 'bg-black/70 hover:bg-black/90'
                }`}
                onClick={handleWishlistToggle}
                title={isInWishlist(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                className="w-10 h-10 bg-black/70 hover:bg-black/90 backdrop-blur-sm"
                onClick={handleShare}
                title="Share product"
              >
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Stock Status */}
          {!product.inStock && (
            <motion.div
              className="absolute top-4 left-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Out of Stock
              </span>
            </motion.div>
          )}

          {/* Category Badge with Icon */}
          <motion.div
            className="absolute bottom-4 left-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="flex items-center space-x-1 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg">
              <CategoryIcon className="w-3 h-3" />
              <span>{product.category}</span>
            </span>
          </motion.div>

          {/* Price Badge */}
          <motion.div
            className="absolute top-4 left-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
              ${product.price.toFixed(2)}
            </span>
          </motion.div>
        </div>

        <div className="p-4">
          {/* Product Name */}
          <motion.h3
            className="font-bold text-white mb-2 line-clamp-2 group-hover:text-yellow-400 transition-colors duration-300 text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {product.name}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-gray-400 text-sm mb-3 line-clamp-2 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {product.description}
          </motion.p>

          {/* Rating */}
          {product.rating && (
            <motion.div
              className="flex items-center space-x-1 mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(product.rating!)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-400 font-medium">
                {product.rating} ({product.reviews})
              </span>
            </motion.div>
          )}

          {/* Quantity Selector */}
          <motion.div
            className="flex items-center justify-between mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <span className="text-sm text-gray-300 font-medium">Quantity:</span>
            <QuantitySelector
              value={quantity}
              onChange={setQuantity}
              min={1}
              max={10}
              disabled={!product.inStock}
              size="sm"
            />
          </motion.div>

          {/* Price and Add to Cart */}
          <motion.div
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <div className="flex flex-col">
              <span className="text-xl font-bold text-yellow-400">
                ${product.price.toFixed(2)}
              </span>
              {product.inStock && (
                <span className="text-xs text-green-400 font-medium">In Stock</span>
              )}
            </div>
            
            <Button
              onClick={addToCart}
              disabled={!product.inStock || isAddingToCart}
              className="bg-yellow-400 text-black hover:bg-yellow-500 disabled:bg-gray-600 disabled:text-gray-400 font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 disabled:hover:scale-100 text-sm"
              size="sm"
            >
              {isAddingToCart ? (
                <div className="flex items-center">
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-1" />
                  Adding...
                </div>
              ) : (
                <div className="flex items-center">
                  <ShoppingCart className="w-4 h-4 mr-1" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </div>
              )}
            </Button>
          </motion.div>
        </div>
      </Link>

      {/* Image Zoom Modal */}
      <ImageZoomModal
        isOpen={isZoomOpen}
        onClose={() => setIsZoomOpen(false)}
        images={[product.image, product.image, product.image, product.image]} // In production, this would be an array of product images
        currentIndex={0}
        onIndexChange={() => {}}
        productName={product.name}
      />
    </motion.div>
  );
}
