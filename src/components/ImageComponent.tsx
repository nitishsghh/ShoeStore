'use client';

import Image from 'next/image';
import { useState, useCallback } from 'react';

interface ImageComponentProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  fallbackImage?: string;
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f6f7f8" offset="0%" />
      <stop stop-color="#edeef1" offset="20%" />
      <stop stop-color="#f6f7f8" offset="40%" />
      <stop stop-color="#f6f7f8" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f6f7f8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export default function ImageComponent({ 
  src, 
  alt, 
  priority = false,
  className = '',
  fallbackImage = '/shoe-icon.svg'
}: ImageComponentProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;

  // Validate src and provide fallback
  const defaultImage = fallbackImage;
  const isSvg = typeof src === 'string' && src.endsWith('.svg');
  const imageSrc = !src || hasError ? defaultImage : src;
  const isRemoteImage = typeof src === 'string' && src.startsWith('http');

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    setRetryCount(0); // Reset retry count on successful load
  }, []);

  const handleError = useCallback(() => {
    console.error(`Error loading image: ${src}`);
    
    // Attempt to retry loading the image
    if (retryCount < MAX_RETRIES && src) {
      setRetryCount(prev => prev + 1);
      // Add a small delay before retry
      setTimeout(() => {
        setHasError(false);
      }, 1000 * (retryCount + 1)); // Exponential backoff
    } else {
      setHasError(true);
    }
    
    setIsLoading(false);
  }, [src, retryCount]);

  // Early return with error UI if no valid src and no fallback
  if (!src && !fallbackImage) {
    return (
      <div className={`relative w-full h-full bg-gray-100 flex items-center justify-center ${className}`}>
        <span className="text-gray-500 text-sm">Image not available</span>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full bg-gray-50 overflow-hidden ${className}`}>
      {/* Loading spinner */}
      {!priority && isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Error state UI */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <svg 
              className="mx-auto h-8 w-8 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
              />
            </svg>
            <p className="mt-1 text-sm text-gray-500">Failed to load image</p>
          </div>
        </div>
      )}

      <Image
        src={imageSrc}
        alt={alt}
        fill
        quality={isSvg ? 100 : 80}
        className={`object-cover transition-all duration-300 ${
          isLoading ? 'scale-110 blur-2xl' : 'scale-100 blur-0'
        }`}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        {...(isRemoteImage ? {
          placeholder: "blur",
          blurDataURL: `data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`
        } : {})}
      />
    </div>
  );
} 