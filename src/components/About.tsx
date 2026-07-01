"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Factory, Truck, History, Star, Globe, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLocale } from "@/hooks/use-locale";
import { translate } from "@/lib/i18n";

export function About() {
  const { locale } = useLocale();

  const facts = [
    { labelKey: "about.facts.businessType.label", valueKey: "about.facts.businessType.value" },
    { labelKey: "about.facts.foundingYear.label", valueKey: "about.facts.foundingYear.value" },
    { labelKey: "about.facts.headquarters.label", valueKey: "about.facts.headquarters.value" },
    { labelKey: "about.facts.manufacturing.label", valueKey: "about.facts.manufacturing.value" },
    { labelKey: "about.facts.production.label", valueKey: "about.facts.production.value" },
    { labelKey: "about.facts.marketReach.label", valueKey: "about.facts.marketReach.value" },
  ];

  const features = [
    { icon: ShieldCheck, titleKey: "about.features.boron.title", descKey: "about.features.boron.desc" },
    { icon: Factory, titleKey: "about.features.precision.title", descKey: "about.features.precision.desc" },
    { icon: Truck, titleKey: "about.features.logistics.title", descKey: "about.features.logistics.desc" },
  ];

  const milestones = [
    { year: "1998", titleKey: "about.milestones.1998.title", descKey: "about.milestones.1998.desc", icon: History },
    { year: "2014", titleKey: "about.milestones.2005.title", descKey: "about.milestones.2005.desc", icon: Star },
    { year: "2022", titleKey: "about.milestones.2022.title", descKey: "about.milestones.2022.desc", icon: CheckCircle2 },
    { year: "2023", titleKey: "about.milestones.2023.title", descKey: "about.milestones.2023.desc", icon: Globe },
    { year: "2026", titleKey: "about.milestones.2026.title", descKey: "about.milestones.2026.desc", icon: TrendingUp },
  ];

  const supportTags = ["about.tags.rtgs", "about.tags.spareParts", "about.tags.demo", "about.tags.calibration"];

  return (
    <div className="pb-20">
      <section id="about" className="pt-12 md:pt-20 pb-16 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="animate-fade-in-up order-2 lg:order-1">
              <span className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block animate-pulse">{translate(locale, "about.legacyBadge")}</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold text-primary mb-6 leading-tight">
                {translate(locale, "about.title")}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
                {translate(locale, "about.description")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
                {features.map((f, i) => (
                  <div key={i} className="flex flex-col items-center sm:items-start text-center sm:text-left group cursor-default">
                    <div className="bg-primary/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-3 shadow-sm group-hover:shadow-lg">
                      <f.icon className="text-secondary group-hover:text-white transition-colors" size={32} />
                    </div>
                    <h4 className="font-bold text-primary mb-2 text-lg group-hover:text-secondary transition-colors">{translate(locale, f.titleKey)}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{translate(locale, f.descKey)}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm border border-border flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left transition-all hover:shadow-md hover:border-primary/20 cursor-default">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0 animate-pulse">
                  <CheckCircle2 size={28} />
                </div>
                <p className="text-primary font-semibold text-sm md:text-base">
                  {translate(locale, "about.supportNote")}
                </p>
              </div>
            </div>

            <div className="animate-fade-in-up animate-delay-200 order-1 lg:order-2">
              <Card className="border-none shadow-2xl overflow-hidden rounded-[2.5rem] transition-transform hover:scale-[1.02] duration-500">
                <div className="bg-primary p-6 md:p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl translate-x-10 -translate-y-10" />
                  <h3 className="text-white text-2xl md:text-3xl font-headline font-bold relative z-10">{translate(locale, "about.factSheet.title")}</h3>
                  <p className="text-white/70 text-sm mt-2 relative z-10">{translate(locale, "about.factSheet.subtitle")}</p>
                </div>
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 divide-y divide-border">
                    {facts.map((fact, i) => (
                      <div key={i} className="grid grid-cols-2 p-4 md:p-6 hover:bg-muted/50 transition-all duration-300 group">
                        <span className="text-muted-foreground font-medium text-sm md:text-base group-hover:text-primary transition-colors">{translate(locale, fact.labelKey)}</span>
                        <span className="text-primary font-bold text-sm md:text-base text-right group-hover:scale-105 transition-transform">{translate(locale, fact.valueKey)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-6 md:p-8 bg-muted/50 border-t">
                    <h4 className="font-bold text-xs uppercase tracking-widest text-muted-foreground mb-4">{translate(locale, "about.supportTitle")}</h4>
                    <div className="flex flex-wrap gap-2">
                      {supportTags.map((tag) => (
                        <span key={tag} className="px-3 py-1.5 bg-white border text-xs rounded-lg text-primary font-bold shadow-sm transition-all hover:bg-primary hover:text-white cursor-default">
                          {translate(locale, tag)}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">{translate(locale, "about.journeyBadge")}</span>
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary mb-6">{translate(locale, "about.milestonesTitle")}</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 hidden lg:block -translate-x-1/2" />

            <div className="space-y-12 lg:space-y-0">
              {milestones.map((m, i) => (
                <div key={i} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''} animate-fade-in-up`} style={{ animationDelay: `${i * 150}ms` }}>
                  <div className="lg:w-1/2 flex justify-center lg:justify-start lg:px-12">
                    <Card className="border-none shadow-xl rounded-[2rem] overflow-hidden group hover:scale-[1.05] transition-transform duration-500 max-w-md w-full">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="bg-primary/10 p-3 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                            <m.icon size={24} />
                          </div>
                          <span className="text-2xl font-black text-secondary">{m.year}</span>
                        </div>
                        <h4 className="text-xl font-bold text-primary mb-3">{translate(locale, m.titleKey)}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{translate(locale, m.descKey)}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="relative z-10 w-12 h-12 bg-white rounded-full border-4 border-primary items-center justify-center shadow-lg hidden lg:flex">
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
                  </div>

                  <div className="lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
