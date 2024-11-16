export const getImageUrl = (src: string, width?: number): string => {
  if (!src) return '';
  
  // If it's already a full URL, use it directly
  const imageUrl = src.startsWith('http') ? src : `${src.startsWith('/') ? '' : '/'}${src}`;
  
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