export const getImageUrl = (src: string): string => {
  if (!src) return '';
  return src.startsWith('http') ? src : src.startsWith('/') ? src : `/${src}`;
};

export const generateSrcSet = (src: string): string => {
  const widths = [320, 640, 768, 1024, 1280, 1536];
  const baseUrl = getImageUrl(src);
  
  return widths
    .map(width => `${baseUrl} ${width}w`)
    .join(', ');
};

export const getSizes = (): string => {
  return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
};