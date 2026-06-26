"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const phoneNumber = "919001900613";
  const message = "Hello SB AGROTECH, I'm interested in your farming machinery. Could you please share more information and pricing?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 right-8 z-[100] group">
      <div className="absolute -top-12 right-0 bg-white text-primary px-3 py-1.5 rounded-lg text-sm font-bold shadow-xl border border-border opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Enquire on WhatsApp
      </div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 relative overflow-hidden"
        aria-label="Contact us on WhatsApp"
      >
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-white/20 animate-ping duration-1000" />
        <MessageCircle size={32} fill="currentColor" className="relative z-10" />
      </a>
    </div>
  );
}