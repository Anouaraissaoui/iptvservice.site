export const getImageUrl = (src: string, width?: number): string => {
  // Use Vercel's Image Optimization API
  const baseUrl = 'https://www.iptvservice.site';
  const imageUrl = src.startsWith('http') ? src : `${baseUrl}${src}`;
  
  if (!width) return imageUrl;
  
  const url = new URL('/_vercel/image', baseUrl);
  url.searchParams.set('url', imageUrl);
  url.searchParams.set('w', width.toString());
  url.searchParams.set('q', '75'); // Default quality
  
  return url.toString();
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