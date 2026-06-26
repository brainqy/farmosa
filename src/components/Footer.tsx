"use client";

import React from "react";
import Link from "next/link";
import { Tractor, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-white p-2 rounded-xl text-primary transition-transform group-hover:scale-110">
                <Tractor size={28} />
              </div>
              <span className="font-headline font-bold text-3xl tracking-tight">
                SB AGROTECH
              </span>
            </Link>
            <p className="text-white/60 text-base leading-relaxed">
              Premium agricultural machinery manufacturer based in Ludhiana, Punjab. We empower farmers with precision tools built for multi-generational durability.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 group">
                  <Icon size={24} className="group-hover:scale-110" />
                </Link>
              ))}
            </div>
          </div>

          <div className="sm:pl-8 lg:pl-12">
            <h5 className="font-bold text-secondary uppercase tracking-widest text-xs mb-8">Quick Links</h5>
            <ul className="space-y-5 text-base text-white/70">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Company</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Product Catalog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div className="lg:pl-8">
            <h5 className="font-bold text-secondary uppercase tracking-widest text-xs mb-8">Core Range</h5>
            <ul className="space-y-5 text-base text-white/70">
              <li>Regular Rotavator</li>
              <li>HD Rotavator</li>
              <li>Zero Drill Machine</li>
              <li>Laser Land Leveler</li>
              <li>Disk Harrows</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-secondary uppercase tracking-widest text-xs mb-8">Business Support</h5>
            <ul className="space-y-5 text-base text-white/70">
              <li><Link href="/contact" className="hover:text-white transition-colors">Dealership Inquiry</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Spare Parts Hub</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Service Centers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Export Docs</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm font-medium">
          <p className="text-center md:text-left">© {currentYear} SB AGROTECH. All rights reserved.</p>
          <p className="text-center md:text-right">A Division of SB AGROTECH | Ludhiana, Punjab, India</p>
        </div>
      </div>
    </footer>
  );
}
