"use client";

import React from "react";
import {
  Award,
  IndianRupee,
  Zap,
  HeartHandshake,
  Settings2,
  Headphones,
  ShieldCheck,
  TrendingUp,
  Globe
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLocale } from "@/hooks/use-locale";
import { translate } from "@/lib/i18n";

const VALUES = [
  {
    icon: ShieldCheck,
    titleKey: "why.values.boron.title",
    descKey: "why.values.boron.desc"
  },
  {
    icon: IndianRupee,
    titleKey: "why.values.direct.title",
    descKey: "why.values.direct.desc"
  },
  {
    icon: Zap,
    titleKey: "why.values.fuel.title",
    descKey: "why.values.fuel.desc"
  },
  {
    icon: HeartHandshake,
    titleKey: "why.values.support.title",
    descKey: "why.values.support.desc"
  },
  {
    icon: Settings2,
    titleKey: "why.values.spares.title",
    descKey: "why.values.spares.desc"
  },
  {
    icon: Headphones,
    titleKey: "why.values.calibration.title",
    descKey: "why.values.calibration.desc"
  },
];

const STATS = [
  { labelKey: "why.stats.farmers.label", valueKey: "why.stats.farmers.value", icon: Globe },
  { labelKey: "why.stats.units.label", valueKey: "why.stats.units.value", icon: TrendingUp },
  { labelKey: "why.stats.awards.label", valueKey: "why.stats.awards.value", icon: Award },
];

export function WhyChooseUs() {
  const { locale } = useLocale();

  return (
    <section id="why-us" className="py-24 md:py-32 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="lg:w-1/2 animate-fade-in-up">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">{translate(locale, "why.badge")}</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold text-primary mb-8 leading-tight">
              {translate(locale, "why.title")}
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-xl">
              {translate(locale, "why.description")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {STATS.map((stat, i) => (
                <div key={i} className="bg-muted/30 p-6 rounded-2xl border border-border/50 group hover:border-primary/20 transition-all">
                  <stat.icon className="text-secondary mb-3 group-hover:scale-110 transition-transform" size={24} />
                  <div className="text-2xl font-black text-primary mb-1">{translate(locale, stat.valueKey)}</div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{translate(locale, stat.labelKey)}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-up [animation-delay:200ms]">
            {VALUES.slice(0, 4).map((val, i) => (
              <Card key={i} className="border-none shadow-sm bg-muted/20 rounded-[2rem] overflow-hidden group hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-inner group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:rotate-3 group-hover:scale-110">
                    <val.icon size={28} />
                  </div>
                  <h4 className="text-xl font-headline font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{translate(locale, val.titleKey)}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {translate(locale, val.descKey)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up [animation-delay:400ms]">
          {VALUES.slice(4, 6).map((val, i) => (
            <div key={i} className="flex flex-col sm:flex-row gap-8 p-10 bg-primary rounded-[2.5rem] text-white group hover:scale-[1.02] transition-transform duration-500 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
               <div className="shrink-0 w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center text-secondary">
                 <val.icon size={40} />
               </div>
               <div className="space-y-3">
                 <h4 className="text-2xl font-headline font-bold">{translate(locale, val.titleKey)}</h4>
                 <p className="text-white/70 leading-relaxed text-sm">
                   {translate(locale, val.descKey)}
                 </p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
