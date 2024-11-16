export const getImageUrl = (src: string, width?: number): string => {
  if (!src) return '';
  
  // Handle relative paths and ensure they start with /
  const normalizedPath = src.startsWith('/') ? src : `/${src}`;
  
  // For local images, prepend the current origin
  const imageUrl = src.startsWith('http') 
    ? src 
    : `${typeof window !== 'undefined' ? window.location.origin : ''}${normalizedPath}`;
  
  if (!width) return imageUrl;
  
  // For Vercel Image Optimization
  return `/_vercel/image?url=${encodeURIComponent(imageUrl)}&w=${width}&q=75`;
};

export const generateSrcSet = (src: string): string => {
  const widths = [320, 640, 768, 1024, 1280, 1536, 1920];
  return widths
    .map(w => `${getImageUrl(src, w)} ${w}w`)
    .join(', ');
};

export const getSizes = (): string => {
  return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
};