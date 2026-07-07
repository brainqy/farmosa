"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/hooks/use-locale";
import { translate } from "@/lib/i18n";

export function Hero() {
  const { locale } = useLocale();

  return (
    <section id="home" className="relative w-full mt-[70px] h-[40vh] sm:h-[55vh] md:h-[68vh] lg:h-[75vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/main_header.PNG"
        alt="SB AGROTECH Rotavator Manufacturing"
        fill
        sizes="100vw"
        unoptimized
        className="object-cover object-center"
        priority
        data-ai-hint="agricultural machinery tractor in field"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/30 to-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-4xl">
          <h1 className="font-headline font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 md:mb-6 drop-shadow-lg">
            SB AGROTECH Rotavator
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white font-semibold mb-8 md:mb-10 drop-shadow-md">
            Powerful • Reliable • Manufacturing by Shree Balaji Agrotech
          </p>

          <Link
            href="https://wa.me/919001900613"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-black text-base md:text-lg px-8 md:px-12 py-3 md:py-4 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/30"
          >
            {translate(locale, "nav.enquire")}
          </Link>
        </div>
      </div>
    </section>
  );
}
