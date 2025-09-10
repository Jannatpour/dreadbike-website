'use client';

import Image from 'next/image';
import { useState, useCallback } from 'react';
import { useLazyImage } from '@/hooks/useIntersectionObserver';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  sizes,
  placeholder = 'empty',
  blurDataURL,
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { ref, src: lazySrc, isLoaded, onLoad: handleLazyLoad } = useLazyImage(src, {
    threshold: 0.1,
    rootMargin: '50px',
  });

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    handleLazyLoad();
    onLoad?.();
  }, [handleLazyLoad, onLoad]);

  const handleError = useCallback(() => {
    setImageError(true);
    setIsLoading(false);
    onError?.();
  }, [onError]);

  // If priority is true, load immediately
  const imageSrc = priority ? src : lazySrc;

  if (imageError) {
    return (
      <div
        className={`bg-gray-800 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-400 text-sm">Failed to load</span>
      </div>
    );
  }

  if (!imageSrc && !priority) {
    return (
      <div
        ref={ref}
        className={`bg-gray-800 animate-pulse ${className}`}
        style={{ width, height }}
      >
        <div className="w-full h-full bg-gray-700 rounded" />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse rounded">
          <div className="w-full h-full bg-gray-700 rounded" />
        </div>
      )}
      
      <Image
        src={imageSrc || src}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        sizes={sizes}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}
