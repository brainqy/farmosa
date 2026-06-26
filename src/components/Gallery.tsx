"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const GALLERY_IMAGES = [
  {
    src: "/images/testomonials/testomonial1.jpeg",
    alt: "Punjab farmer testimonial photo 1",
    caption: "Harvest season success.",
  },
  {
    src: "/images/testomonials/testomonial2.jpeg",
    alt: "Punjab farmer testimonial photo 2",
    caption: "Trusted equipment in action.",
  },
  {
    src: "/images/testomonials/testomonial3.jpeg",
    alt: "Punjab farmer testimonial photo 3",
    caption: "Field-ready performance.",
  },
];

export function Gallery() {
  const plugin = useRef(
    Autoplay({ delay: 4500, stopOnInteraction: false })
  );

  return (
    <section className="py-24 bg-muted/10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
            Photo Gallery
          </span>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary mb-4">
            See Our Machines and Farmers in the Field
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            A separate gallery showcasing real customer equipment, field setup, and trusted on-farm performance.
          </p>
        </div>

        <div className="relative animate-fade-in-up">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="relative"
          >
            <CarouselContent className="h-full">
              {GALLERY_IMAGES.map((image, index) => (
                <CarouselItem key={index} className="relative h-[28rem] md:h-[34rem] lg:h-[40rem]">
                  <div className="relative w-full h-full overflow-hidden rounded-[2rem] shadow-2xl bg-black/5">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <p className="text-sm uppercase tracking-[0.3em] text-secondary mb-2">Real photo</p>
                      <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                        {image.caption}
                      </h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="h-12 w-12 rounded-full bg-white/90 text-primary shadow-lg border-none absolute left-4 top-1/2 -translate-y-1/2 hover:bg-white transition-colors" />
            <CarouselNext className="h-12 w-12 rounded-full bg-white/90 text-primary shadow-lg border-none absolute right-4 top-1/2 -translate-y-1/2 hover:bg-white transition-colors" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
