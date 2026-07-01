"use client";

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";
import { translate } from "@/lib/i18n";

export default function Home() {
  const { locale } = useLocale();

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <section className="pt-16 pb-24 bg-muted/40 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block animate-fade-in-up">{translate(locale, "home.precisionBadge")}</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold text-primary mb-8 animate-fade-in-up animate-delay-100">
            {translate(locale, "home.title")}
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-lg leading-relaxed animate-fade-in-up animate-delay-200">
            {translate(locale, "home.description")}
          </p>
          <div className="animate-fade-in-up animate-delay-300">
            <Button asChild size="lg" className="h-16 px-12 rounded-2xl text-xl font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all">
              <Link href="/products">
                {translate(locale, "home.cta")} <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  );
}
