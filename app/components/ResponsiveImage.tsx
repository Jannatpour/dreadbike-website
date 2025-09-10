'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  mobileWidth?: number;
  mobileHeight?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  fill?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

export default function ResponsiveImage({
  src,
  alt,
  width,
  height,
  mobileWidth,
  mobileHeight,
  className = '',
  priority = false,
  quality = 85,
  placeholder = 'empty',
  blurDataURL,
  sizes,
  fill = false,
  objectFit = 'contain',
  loading = 'lazy',
  onLoad,
  onError,
}: ResponsiveImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  // Generate responsive sizes if not provided
  const responsiveSizes =
    sizes ||
    `
    (max-width: 475px) ${mobileWidth || Math.round(width * 0.8)}px,
    (max-width: 768px) ${Math.round(width * 0.9)}px,
    ${width}px
  `;

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-800 border border-gray-700 rounded-lg ${className}`}
        style={{
          width: mobileWidth || width,
          height: mobileHeight || height,
          minWidth: mobileWidth || width,
          minHeight: mobileHeight || height,
        }}
      >
        <span className='text-gray-400 text-sm'>Image not available</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Loading skeleton */}
      {isLoading && (
        <motion.div
          className='absolute inset-0 bg-gray-800 rounded-lg animate-pulse'
          initial={{ opacity: 1 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: fill ? '100%' : mobileWidth || width,
            height: fill ? '100%' : mobileHeight || height,
          }}
        />
      )}

      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        sizes={responsiveSizes}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        className={`
          transition-opacity duration-300
          ${isLoading ? 'opacity-0' : 'opacity-100'}
          ${fill ? 'object-cover' : ''}
          ${objectFit && !fill ? `object-${objectFit}` : ''}
        `}
        style={{
          objectFit: fill ? objectFit : undefined,
          width: fill ? undefined : '100%',
          height: fill ? undefined : 'auto',
          maxWidth: fill ? undefined : mobileWidth || width,
          maxHeight: fill ? undefined : mobileHeight || height,
        }}
      />
    </div>
  );
}
