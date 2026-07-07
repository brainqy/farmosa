"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useLocale } from "@/hooks/use-locale";
import { translate } from "@/lib/i18n";

export function Contact() {
  const { locale } = useLocale();
  const { toast } = useToast();

  const info = [
    { icon: MapPin, titleKey: "contact.info.factory.title", valueKey: "contact.info.factory.value" },
    { icon: Phone, titleKey: "contact.info.sales.title", valueKey: "contact.info.sales.value" },
    { icon: Mail, titleKey: "contact.info.email.title", valueKey: "contact.info.email.value" },
    { icon: Clock, titleKey: "contact.info.timing.title", valueKey: "contact.info.timing.value" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get form data
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value || '';
    const phone = (form.elements.namedItem('phone') as HTMLInputElement)?.value || '';
    const location = (form.elements.namedItem('location') as HTMLInputElement)?.value || '';
    const equipment = (form.elements.namedItem('interest') as HTMLInputElement)?.value || '';
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || '';
    
    // Create WhatsApp message
    const whatsappMessage = `*Service Request from SB AGROTECH Website*\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Location:* ${location}\n` +
      `*Equipment Interest:* ${equipment}\n` +
      `*Message:* ${message}`;
    
    // Send to WhatsApp
    const phoneNumber = '919001900613';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: translate(locale, "contact.toast.title"),
      description: translate(locale, "contact.toast.description"),
    });
    form.reset();
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          <div className="animate-fade-in-up">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">{translate(locale, "contact.badge")}</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold text-primary mb-8 leading-tight">
              {translate(locale, "contact.title")}
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-lg leading-relaxed">
              {translate(locale, "contact.description")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {info.map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="shrink-0 w-14 h-14 bg-muted rounded-2xl flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h5 className="font-bold text-primary text-sm uppercase tracking-widest mb-2">{translate(locale, item.titleKey)}</h5>
                    <p className="text-muted-foreground text-sm font-medium leading-relaxed">{translate(locale, item.valueKey)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 md:p-12 bg-primary rounded-[2rem] text-white relative overflow-hidden shadow-2xl shadow-primary/30">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h4 className="text-2xl md:text-3xl font-headline font-bold mb-4">{translate(locale, "contact.bulk.title")}</h4>
              <p className="text-white/70 mb-8 max-w-sm">{translate(locale, "contact.bulk.description")}</p>
              <Button className="bg-white text-primary hover:bg-white/90 font-bold h-14 px-10 rounded-xl text-lg w-full sm:w-auto" asChild>
                <a href="https://wa.me/919001900613" target="_blank" className="flex items-center justify-center gap-2">
                  <Phone size={20} />
                  {translate(locale, "contact.bulk.cta")}
                </a>
              </Button>
            </div>
          </div>

          <div className="animate-fade-in-up [animation-delay:200ms]">
            <div className="bg-muted/30 p-6 md:p-10 rounded-[2.5rem] border border-border shadow-inner">
              <h3 className="text-2xl font-headline font-bold text-primary mb-6">{translate(locale, "contact.form.title")}</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-bold text-sm">{translate(locale, "contact.form.nameLabel")}</Label>
                    <Input id="name" name="name" placeholder={translate(locale, "contact.form.namePlaceholder")} required className="h-12 bg-white rounded-xl border-muted px-4" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-bold text-sm">{translate(locale, "contact.form.phoneLabel")}</Label>
                    <Input id="phone" name="phone" type="tel" placeholder={translate(locale, "contact.form.phonePlaceholder")} required className="h-12 bg-white rounded-xl border-muted px-4" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location" className="font-bold text-sm">{translate(locale, "contact.form.locationLabel")}</Label>
                  <Input id="location" name="location" placeholder={translate(locale, "contact.form.locationPlaceholder")} required className="h-12 bg-white rounded-xl border-muted px-4" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="interest" className="font-bold text-sm">{translate(locale, "contact.form.equipmentLabel")}</Label>
                  <Input id="interest" name="interest" placeholder={translate(locale, "contact.form.equipmentPlaceholder")} className="h-12 bg-white rounded-xl border-muted px-4" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-bold text-sm">{translate(locale, "contact.form.messageLabel")}</Label>
                  <Textarea id="message" name="message" placeholder={translate(locale, "contact.form.messagePlaceholder")} rows={4} className="bg-white rounded-xl border-muted px-4 py-3" />
                </div>
                <Button type="submit" className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-black text-base rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-95">
                  <Send className="mr-2 h-5 w-5" />
                  {translate(locale, "contact.form.submit")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}