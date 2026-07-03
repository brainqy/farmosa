"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useLocale } from "@/hooks/use-locale";
import { translate } from "@/lib/i18n";

export function Hero() {
  const { locale } = useLocale();
  const heroImages = PlaceHolderImages.filter((img) =>
    ["hero-farm", "hero-tractor"].includes(img.id)
  );

  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  return (
    <section id="home" className="relative w-full mt-[70px] h-[40vh] sm:h-[55vh] md:h-[68vh] lg:h-[75vh]">
      <div className="w-full h-full">
        <Carousel
          plugins={[plugin.current]}
          className="w-full h-full"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="h-full m-0">
            {heroImages.map((hero, index) => (
              <CarouselItem key={hero.id} className="relative h-full pl-0">
                {hero.imageUrl && (
                  <Image
                    src={hero.imageUrl}
                    alt={hero.description || translate(locale, "hero.imageAlt")}
                    fill
                    sizes="100vw"
                    unoptimized
                    className="object-contain sm:object-cover object-center"
                    priority={index === 0}
                    data-ai-hint={hero.imageHint}
                  />
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/10 pointer-events-none" />
    </section>
  );
}
