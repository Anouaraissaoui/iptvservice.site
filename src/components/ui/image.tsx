import { useState, useEffect } from "react";
import { generateSrcSet, getSizes, getImageUrl, getBlurDataURL } from "@/utils/imageOptimization";

interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'loading'> {
  alt: string;
  src: string;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  fill?: boolean;
  onLoadingComplete?: () => void;
  blurDataURL?: string;
  placeholder?: "blur" | "empty";
  fetchPriority?: "high" | "low" | "auto";
  decoding?: "sync" | "async" | "auto";
}

export const Image = ({ 
  alt,
  src,
  className = "",
  priority = false,
  quality = 75,
  sizes,
  fill = false,
  onLoadingComplete,
  blurDataURL,
  placeholder = "empty",
  style,
  ...props 
}: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [blur, setBlur] = useState<string | undefined>(blurDataURL);

  useEffect(() => {
    if (placeholder === "blur" && !blurDataURL) {
      getBlurDataURL(src).then(setBlur);
    }
  }, [src, placeholder, blurDataURL]);

  const handleLoad = () => {
    setIsLoading(false);
    onLoadingComplete?.();
  };

  const imageStyle: React.CSSProperties = {
    ...style,
    ...(fill ? {
      position: 'absolute',
      height: '100%',
      width: '100%',
      inset: 0,
      objectFit: 'cover' as const,
    } : {}),
    ...(isLoading && placeholder === "blur" ? {
      filter: 'blur(20px)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${blur})`,
    } : {})
  };

  const wrapperStyle: React.CSSProperties | undefined = fill ? {
    position: 'relative',
    width: '100%',
    height: '100%',
  } : undefined;

  const Wrapper = fill ? 'div' : 'span';

  return (
    <Wrapper style={wrapperStyle}>
      {isLoading && placeholder === "empty" && (
        <div 
          className="absolute inset-0 bg-navy animate-pulse rounded-inherit" 
          aria-hidden="true"
        />
      )}
      <img
        alt={alt}
        src={getImageUrl(src)}
        srcSet={generateSrcSet(src)}
        sizes={getSizes(sizes)}
        className={`transition-all duration-300 ${
          isLoading ? "scale-110 blur-2xl" : "scale-100 blur-0"
        } ${className}`}
        onLoad={handleLoad}
        onError={() => setError(true)}
        style={imageStyle}
        {...(priority ? { fetchPriority: "high" } : {})}
        {...props}
      />
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-navy rounded-inherit">
          <p className="text-gray-400">Failed to load image</p>
        </div>
      )}
    </Wrapper>
  );
};