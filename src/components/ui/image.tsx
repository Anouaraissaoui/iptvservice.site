import { useState, useEffect } from "react";
import { encode, decode } from "blurhash";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  className?: string;
  priority?: boolean;
  blurhash?: string;
  aspectRatio?: number;
}

export const Image = ({ 
  alt, 
  src = "", 
  className = "", 
  priority = false,
  blurhash = "LKO2:N%2Tw=w]~RBVZRi};RPxuwH",
  aspectRatio = 16/9,
  ...props 
}: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [blurDataUrl, setBlurDataUrl] = useState<string>("");

  useEffect(() => {
    // Generate placeholder canvas with blurhash
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    
    if (ctx) {
      const pixels = decode(blurhash, 32, 32);
      const imageData = ctx.createImageData(32, 32);
      imageData.data.set(pixels);
      ctx.putImageData(imageData, 0, 0);
      setBlurDataUrl(canvas.toDataURL());
    }
  }, [blurhash]);

  return (
    <div 
      className="relative overflow-hidden" 
      style={{ aspectRatio: aspectRatio }}
    >
      {/* Blur placeholder */}
      {isLoading && blurDataUrl && (
        <div 
          className="absolute inset-0 bg-cover bg-center animate-pulse"
          style={{ 
            backgroundImage: `url(${blurDataUrl})`,
            filter: "blur(20px)",
            transform: "scale(1.2)"
          }}
          aria-hidden="true"
        />
      )}

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
        src={src}
        className={`transition-all duration-500 ${
          isLoading ? "scale-110 blur-2xl" : "scale-100 blur-0"
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
        <div className="absolute inset-0 flex items-center justify-center bg-navy rounded-inherit">
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