import { useState } from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  className?: string;
  priority?: boolean;
  quality?: number;
}

export const Image = ({ 
  alt, 
  src = "", 
  className = "", 
  priority = false,
  quality = 75,
  width,
  height,
  ...props 
}: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const optimizedSrc = src ? `/_vercel/image?url=${encodeURIComponent(src)}&w=${width || 1200}&q=${quality}` : '';

  return (
    <div className="relative overflow-hidden">
      {isLoading && (
        <div 
          className="absolute inset-0 bg-navy animate-pulse rounded-inherit" 
          aria-hidden="true"
        />
      )}
      <img
        alt={alt}
        src={optimizedSrc}
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
        width={width}
        height={height}
        {...props}
      />
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-navy rounded-inherit">
          <p className="text-gray-400">Failed to load image</p>
        </div>
      )}
    </div>
  );
};