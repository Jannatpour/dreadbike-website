'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import {
  Star,
  ShoppingCart,
  ArrowLeft,
  Heart,
  Share2,
  Eye,
} from 'lucide-react';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { useCart } from '@/lib/cart-context';
import { useWishlist } from '@/lib/wishlist-simple';
import { useRecentlyViewed } from '@/lib/recently-viewed-context';
import { useToast, createToastHelpers } from '../../../components/Toast';
import { Button } from '@/components/ui/button';
import ImageZoomModal from '../../../components/ImageZoomModal';
import QuantitySelector from '../../../components/QuantitySelector';
import { Product } from '../../page';

// Mock data - in production, this would come from your backend API
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'DreadBike Racing Jacket',
    price: 299.99,
    image: '/images/gallery-bike-1.jpg',
    category: 'apparel',
    description:
      'High-performance racing jacket with advanced protection and ventilation.',
    inStock: true,
    rating: 4.8,
    reviews: 124,
    features: [
      'CE Level 2 Protection',
      'Ventilation System',
      'Reflective Panels',
    ],
  },
  {
    id: '2',
    name: 'Steel Skull Helmet',
    price: 449.99,
    image: '/images/gallery-bike-2.jpg',
    category: 'gear',
    description: 'Custom steel skull design helmet with maximum protection.',
    inStock: true,
    rating: 4.9,
    reviews: 89,
    features: ['DOT Approved', 'Custom Design', 'Lightweight Construction'],
  },
  {
    id: '3',
    name: 'Performance Exhaust System',
    price: 799.99,
    image: '/images/gallery-bike-3.jpg',
    category: 'parts',
    description: 'High-flow exhaust system for maximum power and sound.',
    inStock: true,
    rating: 4.7,
    reviews: 156,
    features: ['Stainless Steel', 'High Flow Design', 'Easy Installation'],
  },
  {
    id: '4',
    name: 'DreadBike Gloves',
    price: 89.99,
    image: '/images/gallery-bike-4.jpg',
    category: 'apparel',
    description: 'Premium leather gloves with reinforced knuckle protection.',
    inStock: true,
    rating: 4.6,
    reviews: 203,
    features: [
      'Premium Leather',
      'Knuckle Protection',
      'Touchscreen Compatible',
    ],
  },
  {
    id: '5',
    name: 'Racing Boots',
    price: 199.99,
    image: '/images/gallery-bike-5.jpg',
    category: 'gear',
    description: 'Professional racing boots with ankle protection.',
    inStock: false,
    rating: 4.5,
    reviews: 67,
    features: ['Ankle Protection', 'Slip Resistant', 'Comfortable Fit'],
  },
  {
    id: '6',
    name: 'Performance Brake Pads',
    price: 129.99,
    image: '/images/gallery-bike-6.jpg',
    category: 'parts',
    description: 'High-performance brake pads for superior stopping power.',
    inStock: true,
    rating: 4.8,
    reviews: 98,
    features: ['High Performance', 'Long Lasting', 'Easy Installation'],
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const { dispatch } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToRecentlyViewed } = useRecentlyViewed();
  const { addToast } = useToast();
  const toast = createToastHelpers(addToast);
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  useEffect(() => {
    const loadProduct = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/products/${params.id}`);
        if (response.ok) {
          const productData = await response.json();
          setProduct(productData);
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error('Error loading product:', error);
        // Fallback to mock data
        const foundProduct = mockProducts.find(p => p.id === params.id);
        setProduct(foundProduct || null);
      }
      setIsLoading(false);
    };

    if (params.id) {
      loadProduct();
    }
  }, [params.id]);

  // Track recently viewed products
  useEffect(() => {
    if (product) {
      addToRecentlyViewed(product);
    }
  }, [product, addToRecentlyViewed]);

  const addToCart = async () => {
    if (!product || !product.inStock || isAddingToCart) return;

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

  const handleWishlistToggle = () => {
    if (!product) return;

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

  const handleShare = async () => {
    if (!product) return;

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
      try {
        await navigator.clipboard.writeText(shareData.url);
        toast.success('Link Copied', 'Product link copied to clipboard');
      } catch {
        toast.error('Error', 'Failed to copy link');
      }
    }
  };

  const handleImageClick = () => {
    setIsZoomOpen(true);
  };

  if (isLoading) {
    return (
      <div className='min-h-screen bg-background text-foreground'>
        <Header />
        <div className='pt-16 sm:pt-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
            <div className='animate-pulse'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                <div className='space-y-4'>
                  <div className='w-full h-96 bg-gray-800 rounded-lg' />
                  <div className='flex space-x-4'>
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className='w-20 h-20 bg-gray-800 rounded-lg'
                      />
                    ))}
                  </div>
                </div>
                <div className='space-y-6'>
                  <div className='h-8 bg-gray-800 rounded w-3/4' />
                  <div className='h-4 bg-gray-800 rounded w-1/2' />
                  <div className='h-4 bg-gray-800 rounded w-full' />
                  <div className='h-4 bg-gray-800 rounded w-2/3' />
                  <div className='h-12 bg-gray-800 rounded w-1/3' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className='min-h-screen bg-background text-foreground'>
        <Header />
        <div className='pt-16 sm:pt-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center'>
            <h1 className='text-4xl font-bold text-white mb-4'>
              Product Not Found
            </h1>
            <p className='text-gray-400 mb-8'>
              The product you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link href='/shop'>
              <Button className='bg-yellow-400 text-black hover:bg-yellow-500'>
                Back to Shop
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const images = [product.image, product.image, product.image, product.image]; // In production, this would be an array of product images

  return (
    <div className='min-h-screen bg-background text-foreground'>
      {/* Global Background Effects */}
      <div
        className='fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pointer-events-none'
        style={{ zIndex: -2 }}
      />
      <div
        className="fixed inset-0 bg-[url('/images/texture-overlay.png')] opacity-5 mix-blend-overlay pointer-events-none"
        style={{ zIndex: -1 }}
      />

      <Header />

      <div className='pt-16 sm:pt-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='mb-8'
          >
            <Link href='/shop'>
              <Button
                variant='ghost'
                className='text-gray-400 hover:text-yellow-400'
              >
                <ArrowLeft className='w-4 h-4 mr-2' />
                Back to Shop
              </Button>
            </Link>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='space-y-4'
            >
              {/* Main Image */}
              <div
                className='aspect-square relative overflow-hidden rounded-lg bg-gray-800 cursor-zoom-in group'
                onClick={handleImageClick}
              >
                <Image
                  src={images[selectedImage]}
                  alt={product.name}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-300'
                />

                {/* Zoom Overlay */}
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center'>
                  <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <Button
                      size='icon'
                      variant='secondary'
                      className='w-12 h-12 bg-black/70 hover:bg-black/90 backdrop-blur-sm'
                      onClick={e => {
                        e.stopPropagation();
                        handleImageClick();
                      }}
                    >
                      <Eye className='w-6 h-6' />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className='flex space-x-4'>
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index
                        ? 'border-yellow-400'
                        : 'border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className='object-cover'
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='space-y-6'
            >
              {/* Category and Rating */}
              <div className='flex items-center justify-between'>
                <span className='bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded uppercase tracking-wide'>
                  {product.category}
                </span>
                {product.rating && (
                  <div className='flex items-center space-x-2'>
                    <div className='flex'>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating!)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className='text-gray-400'>
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                )}
              </div>

              {/* Product Name */}
              <h1 className='text-4xl font-bold text-white'>{product.name}</h1>

              {/* Price */}
              <div className='text-3xl font-bold text-yellow-400'>
                ${product.price.toFixed(2)}
              </div>

              {/* Description */}
              <p className='text-gray-300 text-lg leading-relaxed'>
                {product.description}
              </p>

              {/* Features */}
              {product.features && (
                <div className='space-y-3'>
                  <h3 className='text-xl font-semibold text-white'>Features</h3>
                  <ul className='space-y-2'>
                    {product.features.map((feature, index) => (
                      <li key={index} className='flex items-center space-x-3'>
                        <div className='w-2 h-2 bg-yellow-400 rounded-full' />
                        <span className='text-gray-300'>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quantity and Add to Cart */}
              <div className='space-y-4'>
                <div className='flex items-center justify-between'>
                  <label className='text-white font-semibold'>Quantity:</label>
                  <QuantitySelector
                    value={quantity}
                    onChange={setQuantity}
                    min={1}
                    max={10}
                    disabled={!product.inStock}
                    size='md'
                  />
                </div>

                <div className='flex space-x-4'>
                  <Button
                    onClick={addToCart}
                    disabled={!product.inStock || isAddingToCart}
                    className='flex-1 bg-yellow-400 text-black hover:bg-yellow-500 disabled:bg-gray-600 disabled:text-gray-400'
                    size='lg'
                  >
                    {isAddingToCart ? (
                      <div className='flex items-center'>
                        <div className='w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2' />
                        Adding...
                      </div>
                    ) : (
                      <div className='flex items-center'>
                        <ShoppingCart className='w-5 h-5 mr-2' />
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </div>
                    )}
                  </Button>

                  <Button
                    variant='outline'
                    size='icon'
                    className={`w-12 h-12 ${
                      isInWishlist(product.id)
                        ? 'bg-red-500/20 border-red-500 text-red-400 hover:bg-red-500/30'
                        : 'hover:bg-gray-700'
                    }`}
                    onClick={handleWishlistToggle}
                    title={
                      isInWishlist(product.id)
                        ? 'Remove from wishlist'
                        : 'Add to wishlist'
                    }
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        isInWishlist(product.id) ? 'fill-current' : ''
                      }`}
                    />
                  </Button>

                  <Button
                    variant='outline'
                    size='icon'
                    className='w-12 h-12 hover:bg-gray-700'
                    onClick={handleShare}
                    title='Share product'
                  >
                    <Share2 className='w-5 h-5' />
                  </Button>
                </div>
              </div>

              {/* Stock Status */}
              <div className='pt-4 border-t border-gray-700'>
                <div className='flex items-center space-x-2'>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      product.inStock ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  />
                  <span className='text-gray-300'>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>

      {/* Image Zoom Modal */}
      <ImageZoomModal
        isOpen={isZoomOpen}
        onClose={() => setIsZoomOpen(false)}
        images={images}
        currentIndex={selectedImage}
        onIndexChange={setSelectedImage}
        productName={product.name}
      />
    </div>
  );
}
