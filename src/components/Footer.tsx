"use client";

import React from "react";
import Link from "next/link";
import { Tractor, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";
import { translate } from "@/lib/i18n";

export function Footer() {
  const { locale } = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2 group">
              
              <span className="font-headline font-bold text-3xl tracking-tight">
                SB AGROTECH
              </span>
            </Link>
            <p className="text-primary-foreground/60 text-base leading-relaxed">
              {translate(locale, "footer.description")}
            </p>
            <div className="flex gap-4">
              <Link href="https://www.instagram.com/shree_balaji_agrotech_2023" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 group" aria-label="Instagram">
                <Instagram size={24} className="group-hover:scale-110" />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 group" aria-label="Facebook">
                <Facebook size={24} className="group-hover:scale-110" />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 group" aria-label="Twitter">
                <Twitter size={24} className="group-hover:scale-110" />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 group" aria-label="LinkedIn">
                <Linkedin size={24} className="group-hover:scale-110" />
              </Link>
            </div>
          </div>

          <div className="sm:pl-8 lg:pl-12">
            <h5 className="font-bold text-primary-foreground uppercase tracking-widest text-xs mb-8">{translate(locale, "footer.quickLinks")}</h5>
            <ul className="space-y-5 text-base text-primary-foreground/80">
              <li><Link href="/" className="hover:text-primary-foreground transition-colors">{translate(locale, "footer.home")}</Link></li>
              <li><Link href="/about" className="hover:text-primary-foreground transition-colors">{translate(locale, "footer.about")}</Link></li>
              <li><Link href="/products" className="hover:text-primary-foreground transition-colors">{translate(locale, "footer.products")}</Link></li>
              <li><Link href="/contact" className="hover:text-primary-foreground transition-colors">{translate(locale, "footer.contact")}</Link></li>
            </ul>
          </div>

          <div className="lg:pl-8">
            <h5 className="font-bold text-primary-foreground uppercase tracking-widest text-xs mb-8">{translate(locale, "footer.coreRange")}</h5>
            <ul className="space-y-5 text-base text-primary-foreground/80">
              <li>Regular Rotavator</li>
              <li>HD Rotavator</li>
              <li>Zero Drill Machine</li>
              <li>Laser Land Leveler</li>
              <li>Disk Harrows</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-primary-foreground uppercase tracking-widest text-xs mb-8">{translate(locale, "footer.businessSupport")}</h5>
            <ul className="space-y-5 text-base text-primary-foreground/80">
              <li><Link href="/contact" className="hover:text-primary-foreground transition-colors">{translate(locale, "footer.dealershipInquiry")}</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground transition-colors">{translate(locale, "footer.spareParts")}</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground transition-colors">{translate(locale, "footer.serviceCenters")}</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground transition-colors">{translate(locale, "footer.privacyPolicy")}</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground transition-colors">{translate(locale, "footer.exportDocs")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-primary-foreground/10 flex flex-col lg:flex-row justify-between items-center gap-6 text-primary-foreground/40 text-sm font-medium">
          <p className="text-center lg:text-left w-full lg:w-1/3">{translate(locale, "footer.copyright").replace('{year}', String(currentYear))}</p>
          <div className="w-full lg:w-1/3 text-center">
            <a href="https://www.jobtraq.in/contact-us" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Proudly created By JobTraq
              <span className="text-red-500 animate-heartbeat text-lg">❤️</span>
            </a>
          </div>
          <p className="text-center lg:text-right w-full lg:w-1/3">{translate(locale, "footer.location")}</p>
        </div>
      </div>
    </footer>
  );
}
