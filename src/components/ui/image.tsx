import { useState } from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  src: string;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  priority?: boolean;
}

export const Image = ({ 
  alt, 
  src, 
  width,
  height,
  sizes,
  className = "", 
  priority = false,
  ...props 
}: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const optimizedSrc = width ? getOptimizedSrc(src, width) : src;
  const srcSet = generateSrcSet(src);
  const imageSizes = getSizes(sizes);

  return (
    <div 
      className="relative overflow-hidden" 
      style={{ 
        aspectRatio: width && height ? `${width}/${height}` : undefined 
      }}
    >
      {/* Loading skeleton */}
      {isLoading && (
        <div 
          className="absolute inset-0 bg-navy animate-pulse" 
          aria-hidden="true"
        />
      )}

      {/* Main image */}
      <img
        alt={alt}
        src={optimizedSrc}
        srcSet={srcSet}
        sizes={imageSizes}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${className}`}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setError(true);
          setIsLoading(false);
        }}
        {...props}
      />

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-navy">
          <div className="text-center">
            <p className="text-gray-400 mb-2">Failed to load image</p>
            <button
              onClick={() => window.location.reload()}
              className="text-primary hover:text-primary/80 text-sm underline"
            >
              Retry
            </button>
          </div>
        </div>
      )}
    </div>
  );
};