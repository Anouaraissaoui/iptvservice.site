export const getImageUrl = (src: string, width?: number): string => {
  // Use Vercel's Image Optimization API
  const baseUrl = 'https://www.iptvservice.site';
  const imageUrl = src.startsWith('http') ? src : `${baseUrl}${src}`;
  
  if (!width) return imageUrl;
  
  const url = new URL('/_vercel/image', baseUrl);
  url.searchParams.set('url', imageUrl);
  url.searchParams.set('w', width.toString());
  url.searchParams.set('q', '75'); // Default quality
  url.searchParams.set('fit', 'contain'); // Maintain aspect ratio
  url.searchParams.set('auto', 'format'); // Auto format conversion
  
  return url.toString();
};

export const generateSrcSet = (src: string): string => {
  const widths = [320, 640, 768, 1024, 1280, 1536, 1920];
  return widths
    .map(w => `${getImageUrl(src, w)} ${w}w`)
    .join(', ');
};

export const getSizes = (sizes?: string): string => {
  return sizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
};

export const getBlurDataURL = async (src: string): Promise<string> => {
  const url = getImageUrl(src, 10);
  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');
    return `data:image/jpeg;base64,${base64}`;
  } catch {
    return 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHSIeHx8dIigjJCUmJSQkIiYoLTAqKC4rIiYtLjcyMi43QEBAQEBAQEBAQEDj2wBDAR';
  }
};