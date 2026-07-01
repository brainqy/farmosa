"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Tractor, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/hooks/use-locale";
import { translate, getAltLocale } from "@/lib/i18n";

const NAV_LINKS = [
  { key: "nav.home", href: "/" },
  { key: "nav.about", href: "/about" },
  { key: "nav.products", href: "/products" },
  { key: "nav.contact", href: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { locale, setLocale } = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 py-4 md:px-8",
        isScrolled || !isHomePage
          ? "bg-white/95 backdrop-blur-xl shadow-lg py-3 translate-y-0"
          : "bg-slate-950/10 backdrop-blur-xl py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-xl text-white transition-transform group-hover:rotate-12 group-hover:scale-110 shadow-lg">
            <Tractor size={24} />
          </div>
          <span className={cn(
            "font-headline font-bold text-xl md:text-2xl tracking-tight transition-all",
            isScrolled || !isHomePage ? "text-primary" : "text-white"
          )}>
            SB AGROTECH
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={cn(
                "text-sm font-bold transition-all hover:text-secondary relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-secondary after:transition-all hover:after:w-full",
                isScrolled || !isHomePage ? "text-foreground" : "text-white",
                pathname === link.href && "text-secondary after:w-full"
              )}
            >
              {translate(locale, link.key)}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => setLocale(getAltLocale(locale))}
            className="text-sm font-bold border border-white/30 text-foreground bg-white/10 px-4 py-2 rounded-full hover:bg-white/90 hover:text-primary transition-all"
          >
            {locale === 'en' ? translate(locale, 'nav.toggleToHindi') : translate(locale, 'nav.toggleToEnglish')}
          </button>
          <Link
            href="https://wa.me/919001900613"
            className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-black flex items-center gap-2 hover:bg-secondary transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
          >
            <Phone size={16} />
            {translate(locale, 'nav.enquire')}
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-xl transition-all active:scale-90",
            isScrolled || !isHomePage ? "text-primary bg-primary/5" : "text-white bg-white/10"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={translate(locale, 'nav.menuToggle')}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-white border-b shadow-2xl transition-all duration-500 ease-in-out overflow-hidden transform",
          isOpen ? "translate-y-0 opacity-100 max-h-[600px]" : "-translate-y-4 opacity-0 max-h-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col p-8 gap-6">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: `${i * 50}ms` }}
              className={cn(
                "text-foreground text-xl font-bold hover:text-primary transition-all py-3 border-b border-muted last:border-0 flex justify-between items-center group",
                isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              )}
            >
              {translate(locale, link.key)}
              <ArrowRight size={20} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-secondary" />
            </Link>
          ))}
          <button
            type="button"
            onClick={() => setLocale(getAltLocale(locale))}
            className={cn(
              "text-foreground bg-muted/20 border border-muted rounded-full py-3 px-4 font-bold transition-all hover:bg-primary hover:text-white",
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
          >
            {locale === 'en' ? translate(locale, 'nav.toggleToHindi') : translate(locale, 'nav.toggleToEnglish')}
          </button>
          <Link
            href="https://wa.me/919001900613"
            className={cn(
              "bg-primary text-white text-center py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-2 mt-4 shadow-xl shadow-primary/20 hover:bg-secondary transition-all active:scale-95",
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
          >
            <Phone size={24} />
            {translate(locale, 'nav.whatsappUs')}
          </Link>
        </div>
      </div>
    </header>
  );
}
