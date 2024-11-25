import { Image } from "@/components/ui/image";
import { optimizeImages, generateImageSrcSet } from "@/utils/performance";

interface HeroImageProps {
  alt: string;
}

const HeroImage = ({ alt }: HeroImageProps) => {
  const imageUrl = "/images/IPTV-Service.webp";
  const optimizedImageUrl = optimizeImages(imageUrl);

  return (
    <figure className="relative mt-8 lg:mt-0">
      <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full animate-pulse" aria-hidden="true" />
      <div className="relative bg-navy-light rounded-3xl border border-white/10 p-2 md:p-3 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 hover:border-primary/50">
        <div className="relative aspect-[16/9] w-full">
          <Image 
            src={optimizedImageUrl}
            alt={alt}
            className="relative rounded-2xl shadow-2xl w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            width={610}
            height={343}
            decoding="async"
            sizes="(max-width: 768px) 100vw, 610px"
            srcSet={generateImageSrcSet(imageUrl)}
          />
        </div>
        <figcaption className="absolute -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 bg-navy-light/90 border border-white/10 rounded-2xl p-3 md:p-4 shadow-xl backdrop-blur-xl w-max">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            <span className="text-white font-medium whitespace-nowrap text-sm md:text-base">Live Streaming Available</span>
          </div>
        </figcaption>
      </div>
    </figure>
  );
};

export default HeroImage;