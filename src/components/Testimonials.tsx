
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useLocale } from "@/hooks/use-locale";
import { translate } from "@/lib/i18n";

const REVIEWS = [
  {
    nameKey: "testimonials.review1.name",
    locKey: "testimonials.review1.loc",
    textKey: "testimonials.review1.text",
    img: "/images/testomonials/testomonial1.jpeg",
  },
  {
    nameKey: "testimonials.review2.name",
    locKey: "testimonials.review2.loc",
    textKey: "testimonials.review2.text",
    img: "/images/testomonials/testomonial2.jpeg",
  },
  {
    nameKey: "testimonials.review3.name",
    locKey: "testimonials.review3.loc",
    textKey: "testimonials.review3.text",
    img: "/images/testomonials/testomonial3.jpeg",
  },
];

export function Testimonials() {
  const { locale } = useLocale();
  const plugin = useRef(
    Autoplay({ delay: 6000, stopOnInteraction: false })
  );

  return (
    <section className="py-24 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">{translate(locale, "testimonials.badge")}</span>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary mb-6">
            {translate(locale, "testimonials.title")}
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1 animate-fade-in-up">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50">
              <Image
                src="/images/testomonials/farmer.jpg"
                alt={translate(locale, "testimonials.ownerTitle")}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-2">{translate(locale, "testimonials.ownerBadge")}</p>
                <h4 className="text-xl font-headline font-bold">{translate(locale, "testimonials.ownerTitle")}</h4>
                <p className="text-xs text-white/80">{translate(locale, "testimonials.ownerSubtitle")}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 animate-fade-in-up [animation-delay:200ms]">
            <Carousel
              plugins={[plugin.current]}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full relative px-4 md:px-12"
            >
              <CarouselContent>
                {REVIEWS.map((rev, i) => (
                  <CarouselItem key={i} className="basis-full">
                    <Card className="border-none shadow-xl bg-white rounded-[2rem] overflow-hidden transition-all hover:shadow-2xl h-full">
                      <CardContent className="p-8 md:p-14 relative flex flex-col h-full justify-between">
                        <Quote className="absolute top-10 right-10 text-primary/5" size={120} />

                        <div>
                          <div className="flex gap-1 mb-8">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star key={s} size={20} className="fill-secondary text-secondary" />
                            ))}
                          </div>

                          <blockquote className="text-xl md:text-2xl text-muted-foreground italic font-medium leading-relaxed mb-10 relative z-10 text-primary/80">
                            "{translate(locale, rev.textKey)}"
                          </blockquote>
                        </div>

                        <div className="flex items-center gap-6 pt-6 border-t border-muted">
                          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border-2 border-primary/10 bg-muted shrink-0 shadow-lg">
                            <Image src={rev.img} alt={translate(locale, rev.nameKey)} fill className="object-cover" />
                          </div>
                          <div>
                            <h5 className="font-bold text-primary text-xl md:text-2xl">{translate(locale, rev.nameKey)}</h5>
                            <p className="text-sm md:text-base text-secondary font-bold uppercase tracking-wider">{translate(locale, rev.locKey)}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="h-14 w-14 -left-6 border-2 border-primary/10 text-primary hover:bg-primary hover:text-white transition-all shadow-lg" />
                <CarouselNext className="h-14 w-14 -right-6 border-2 border-primary/10 text-primary hover:bg-primary hover:text-white transition-all shadow-lg" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
