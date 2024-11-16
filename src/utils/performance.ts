export const optimizeImages = (imageUrl: string, width: number = 1200): string => {
  if (!imageUrl) return '';
  
  const quality = 75;
  const encodedUrl = encodeURIComponent(imageUrl);
  return `/_vercel/image?url=${encodedUrl}&w=${width}&q=${quality}`;
};

export const generateImageSrcSet = (imageUrl: string): string => {
  const sizes = [320, 640, 768, 1024, 1280, 1536];
  const quality = 75;
  const encodedUrl = encodeURIComponent(imageUrl);
  
  return sizes
    .map(size => {
      const optimizedUrl = `/_vercel/image?url=${encodedUrl}&w=${size}&q=${quality}`;
      return `${optimizedUrl} ${size}w`;
    })
    .join(', ');
};

export const deferNonCriticalResources = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLImageElement | HTMLIFrameElement;
        if (element.dataset.src) {
          element.src = element.dataset.src;
          observer.unobserve(element);
        }
      }
    });
  });

  return observer;
};

export const preloadCriticalAssets = () => {
  const criticalAssets = [
    '/fonts/inter-var.woff2',
    '/images/IPTV-Service.webp',
    '/images/logo.png'
  ];

  criticalAssets.forEach(asset => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = asset;
    link.as = asset.includes('.woff2') ? 'font' : 'image';
    if (asset.includes('.woff2')) {
      link.setAttribute('crossorigin', 'anonymous');
    }
    document.head.appendChild(link);
  });
};

export const lazyLoadImage = (imageSrc: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => resolve(imageSrc);
    img.onerror = () => reject(new Error(`Failed to load image: ${imageSrc}`));
  });
};