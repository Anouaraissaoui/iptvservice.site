import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Experience the Future of Television
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join us for high-quality streaming of your favorite channels, movies, and shows with seamless performance.
          </p>
          <div className="mt-8 flex gap-x-4">
            <Button>Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <OptimizedImage
              src="/images/IPTV-Service.webp"
              alt="IPTV Service Interface"
              className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
              sizes="(min-width: 1280px) 76rem, (min-width: 1024px) 64rem, (min-width: 768px) 48rem, (min-width: 640px) 32rem, 100vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
