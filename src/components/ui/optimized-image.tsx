import React from 'react';
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}

export function OptimizedImage({
  src,
  alt,
  className,
  sizes = "100vw",
  ...props
}: OptimizedImageProps) {
  // Generate srcSet for different viewport widths
  const generateSrcSet = () => {
    const widths = [320, 640, 768, 1024, 1280, 1536];
    return widths
      .map(width => {
        const imageUrl = new URL(src, window.location.origin);
        imageUrl.searchParams.set('w', width.toString());
        return `${imageUrl.toString()} ${width}w`;
      })
      .join(', ');
  };

  return (
    <img
      src={src}
      alt={alt}
      className={cn("w-full h-auto", className)}
      loading="lazy"
      decoding="async"
      sizes={sizes}
      srcSet={generateSrcSet()}
      {...props}
    />
  );
}