export const getImageUrl = (src: string): string => {
  if (!src) return '';
  return src.startsWith('http') ? src : src.startsWith('/') ? src : `/${src}`;
};

export const generateSrcSet = (src: string): string => {
  // Define standard breakpoints for responsive images
  const widths = [320, 480, 640, 768, 1024, 1280, 1536, 1920];
  const baseUrl = getImageUrl(src);
  
  return widths
    .map(width => {
      // Add width parameter for server-side resizing
      const url = new URL(baseUrl, window.location.origin);
      url.searchParams.set('w', width.toString());
      return `${url.toString()} ${width}w`;
    })
    .join(', ');
};

export const getSizes = (customSizes?: string): string => {
  // Default responsive sizes if not provided
  return customSizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
};

export const getOptimizedSrc = (src: string, width?: number): string => {
  const url = new URL(getImageUrl(src), window.location.origin);
  if (width) {
    url.searchParams.set('w', width.toString());
  }
  return url.toString();
};