"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  
  const info = [
    { icon: MapPin, title: "Factory Address", value: "Plot No. 42-B, Focal Point, Phase VIII, Ludhiana, Punjab 141010" },
    { icon: Phone, title: "Sales Hotline", value: "+91 90019 00613" },
    { icon: Mail, title: "Direct Email", value: "sales@agromachines-equipments.com" },
    { icon: Clock, title: "Factory Timing", value: "Mon-Sat: 09:30 AM - 06:30 PM" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted",
      description: "Our technical team will contact you shortly regarding your farming needs.",
    });
    // @ts-ignore
    e.target.reset();
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          <div className="animate-fade-in-up">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">Connect with Us</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold text-primary mb-8 leading-tight">
              Expert Consultation for Your Farm
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-lg leading-relaxed">
              Our technical team is ready to assist you with equipment selection, dealership inquiries, or spare part support. Visit our state-of-the-art facility in Ludhiana.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {info.map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="shrink-0 w-14 h-14 bg-muted rounded-2xl flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h5 className="font-bold text-primary text-sm uppercase tracking-widest mb-2">{item.title}</h5>
                    <p className="text-muted-foreground text-sm font-medium leading-relaxed">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 p-8 md:p-12 bg-primary rounded-[2rem] text-white relative overflow-hidden shadow-2xl shadow-primary/30">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h4 className="text-2xl md:text-3xl font-headline font-bold mb-4">Bulk B2B Inquiry</h4>
              <p className="text-white/70 mb-8 max-w-sm">Interested in becoming an SB AGROTECH dealer in your region? Connect directly for wholesale pricing and territory protection.</p>
              <Button className="bg-white text-primary hover:bg-white/90 font-bold h-14 px-10 rounded-xl text-lg w-full sm:w-auto" asChild>
                <a href="https://wa.me/919001900613" target="_blank" className="flex items-center justify-center gap-2">
                  <Phone size={20} />
                  WhatsApp Sales Desk
                </a>
              </Button>
            </div>
          </div>

          <div className="animate-fade-in-up [animation-delay:200ms]">
            <div className="bg-muted/30 p-8 md:p-14 rounded-[2.5rem] border border-border shadow-inner">
              <h3 className="text-2xl md:text-3xl font-headline font-bold text-primary mb-8">Service Request</h3>
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="font-bold">Contact Person</Label>
                    <Input id="name" placeholder="Enter name" required className="h-14 bg-white rounded-xl border-muted px-6" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="font-bold">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91 XXXX XXXX" required className="h-14 bg-white rounded-xl border-muted px-6" />
                  </div>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="location" className="font-bold">Farm Location (City/Tehsil)</Label>
                  <Input id="location" placeholder="e.g. Sangrur, Punjab" required className="h-14 bg-white rounded-xl border-muted px-6" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="interest" className="font-bold">Select Equipment</Label>
                  <Input id="interest" placeholder="e.g. Regular Plus Rotavator" className="h-14 bg-white rounded-xl border-muted px-6" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="message" className="font-bold">Requirement Details</Label>
                  <Textarea id="message" placeholder="Acreage, Soil type, Tractor HP..." rows={4} className="bg-white rounded-xl border-muted px-6 py-4" />
                </div>
                <Button type="submit" className="w-full h-16 bg-primary hover:bg-primary/90 text-white font-black text-xl rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-95">
                  <Send className="mr-3 h-6 w-6" />
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}