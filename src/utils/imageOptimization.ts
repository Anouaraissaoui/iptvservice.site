export const getImageUrl = (src: string, quality: number = 75): string => {
  if (src.startsWith('data:') || src.startsWith('blob:')) return src;
  
  const url = new URL('/_vercel/image', window.location.origin);
  url.searchParams.set('url', src);
  url.searchParams.set('q', quality.toString());
  url.searchParams.set('w', '1200');
  return url.toString();
};

export const generateSrcSet = (src: string, quality: number = 75): string => {
  const widths = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];
  return widths
    .map(w => `${getImageUrl(src, quality)} ${w}w`)
    .join(', ');
};

export const getSizes = (sizes?: string): string => {
  return sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
};

export const getBlurDataURL = async (src: string): Promise<string> => {
  try {
    const response = await fetch(getImageUrl(src, 10));
    const buffer = await response.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');
    return `data:image/jpeg;base64,${base64}`;
  } catch (error) {
    console.error('Error generating blur data URL:', error);
    return 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHSIeHx8dIigjJCUmJSQkIiYoLTAqKC4rIiYtLjcyMi43QEBAQEBAQEBAQEDj2wBDAR';
  }
};