export const optimizeImages = (imageUrl: string, width: number = 1200): string => {
  if (!imageUrl) return '';
  
  // Add WebP support with fallback
  if (imageUrl.match(/\.(jpg|jpeg|png)$/i)) {
    return imageUrl.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  }
  
  return imageUrl;
};

export const generateImageSrcSet = (imageUrl: string): string => {
  const sizes = [320, 640, 768, 1024, 1280, 1536];
  return sizes
    .map(size => `${optimizeImages(imageUrl, size)} ${size}w`)
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