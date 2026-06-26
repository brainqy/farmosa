"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Phone, ChevronLeft, ChevronRight, Eye, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PRODUCTS = [
  { 
    id: "rotavator-regular", 
    name: "Regular Model Rotavator", 
    description: "Our flagship entry-level rotavator designed for small to medium scale farmers. It provides excellent soil pulverization with minimum tractor power requirement. Built with high-grade steel for long-lasting durability in standard Punjab soil conditions.",
    imageIds: ["rotavator-regular", "rotavator-regular-2"],
    features: ["Single Speed Gearbox", "Heavy Duty Drive", "Boron Steel Blades", "Adjustable Side Skids", "Double Lip Oil Seals"] 
  },
  { 
    id: "rotavator-plus", 
    name: "Regular Plus Rotavator", 
    description: "An upgraded version of our standard model featuring a multi-speed gearbox. This allows the farmer to adjust the rotor speed based on soil hardness and tractor power, optimizing fuel efficiency and tillage quality.",
    imageIds: ["rotavator-plus", "rotavator-plus-2"],
    features: ["Multi-Speed Gears", "Adjustable Cover", "60+ Blade Config", "Tough Gearbox Housing", "Reinforced Frame"] 
  },
  { 
    id: "disk-harrow", 
    name: "Rotary Disk Harrow", 
    description: "Designed for deep tillage and effective weed control. Our disk harrows use self-sharpening boron steel disks that can penetrate even the toughest dry soil, making it ideal for primary soil preparation.",
    imageIds: ["disk-harrow"],
    features: ["Self-Sharpening Disks", "Deep Soil Tillage", "Tubular Main Frame", "Heavy Duty Bearings", "Easy Angle Adjustment"] 
  },
  { 
    id: "hd-rotavator", 
    name: "HD Rotavator", 
    description: "The 'Heavy Duty' specialist. Built for commercial farming and hard, stony soils. It features thicker side plates and a massive vibration-free shaft to handle the most demanding agricultural tasks.",
    imageIds: ["hd-rotavator"],
    features: ["Industrial Puddling", "Thick Side Plates", "Vibration Free Shaft", "Large Diameter Rotor", "Premium Drive Chain"] 
  },
  { 
    id: "double-frame", 
    name: "Double Tubular Frame", 
    description: "Engineered for maximum rigidity. The double tubular frame prevents any bending or warping even during deep tillage operations in heavy clay. This is the preferred choice for large-scale sugar cane and wheat farmers.",
    imageIds: ["double-frame"],
    features: ["Zero Bend Warranty", "Superior Depth", "Ideal for Sugar Mills", "Twin-Tube Construction", "Enhanced Stability"] 
  },
  { 
    id: "zero-drill", 
    name: "Zero Drill Machine", 
    description: "Precision seeding at its best. This machine allows for direct sowing without the need for prior tillage, conserving soil moisture and significantly reducing fuel and labor costs.",
    imageIds: ["zero-drill"],
    features: ["Moisture Lock Tech", "Precise Spacing", "Multi-Row Models", "Depth Control Wheels", "Anti-Clog Seed Tubes"] 
  },
  { 
    id: "laser-leveler", 
    name: "Laser Land Leveler", 
    description: "Achieve perfect field uniformity. Our laser levelers improve irrigation efficiency by up to 40%, ensuring every corner of your field receives the right amount of water for uniform crop growth.",
    imageIds: ["laser-leveler"],
    features: ["Dual Slope Support", "High Precision Sensor", "Fuel Saving Mode", "User Friendly Control Box", "Rugged Scraper Blade"] 
  },
  { 
    id: "mud-loader", 
    name: "Mud Loader Machine", 
    description: "A versatile tractor-mounted solution for heavy lifting and loading. Perfect for pond desilting, field leveling, and transporting loose materials across the farm with ease.",
    imageIds: ["mud-loader"],
    features: ["High Lift Hydraulics", "Anti-Clog Bucket", "Tractor Mounted", "Quick Attachment System", "Heavy Duty Boom"] 
  },
];

const ITEMS_PER_PAGE = 8;

export function ProductGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(PRODUCTS.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return PRODUCTS.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getWhatsAppLink = (productName: string) => {
    const phoneNumber = "919001900613";
    const message = `Hello SB AGROTECH, I'm interested in the ${productName}. Could you please share more information and pricing?`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="products" className="py-20 md:py-32 bg-muted/40 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 animate-fade-in-up">
          <span className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">Product Catalog</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold text-primary mb-6 leading-tight">
            Engineering for <br className="hidden sm:block" /> Field Performance
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Every ROBUTA machine is built to minimize downtime during critical sowing seasons. 
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {paginatedProducts.map((prod, i) => {
            return (
              <Card 
                key={prod.id} 
                className="group border-none shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col rounded-2xl animate-fade-in-up opacity-0" 
                style={{ 
                  animationDelay: `${i * 100}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="relative aspect-[5/4] overflow-hidden bg-white">
                  <Carousel className="w-full h-full">
                    <CarouselContent className="-ml-0">
                      {prod.imageIds.map((imgId) => {
                        const img = PlaceHolderImages.find((p) => p.id === imgId);
                        return (
                          <CarouselItem key={imgId} className="relative aspect-[5/4] pl-0">
                            {img?.imageUrl ? (
                              <Image
                                src={img.imageUrl}
                                alt={prod.name}
                                fill
                                className="object-contain p-3 sm:p-5 transition-transform duration-700 hover:scale-105"
                                data-ai-hint={img.imageHint}
                              />
                            ) : (
                              <div className="w-full h-full bg-muted flex items-center justify-center">
                                <span className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Image Coming Soon</span>
                              </div>
                            )}
                          </CarouselItem>
                        );
                      })}
                    </CarouselContent>
                    {prod.imageIds.length > 1 && (
                      <>
                        <CarouselPrevious className="left-2 h-8 w-8 bg-white/20 backdrop-blur-md border-none text-white hover:bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <CarouselNext className="right-2 h-8 w-8 bg-white/20 backdrop-blur-md border-none text-white hover:bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </>
                    )}
                  </Carousel>
                  
                  <div className="absolute top-4 left-4 z-10 transition-transform group-hover:scale-110 pointer-events-none">
                    <span className="bg-primary/90 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-black text-white uppercase tracking-tighter shadow-lg">
                      Pro Series
                    </span>
                  </div>
                </div>
                <CardHeader className="pb-4 pt-6">
                  <CardTitle className="text-xl font-headline text-primary group-hover:text-secondary transition-colors leading-tight min-h-[3rem] flex items-center">
                    {prod.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow pt-0 pb-6 px-6">
                  <ul className="space-y-2 mb-4">
                    {prod.features.slice(0, 3).map((f, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check size={14} className="text-secondary mt-1 shrink-0" />
                        <span className="leading-tight">{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-0 pb-8 px-6 grid grid-cols-1 gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                   {/*    <Button variant="outline" className="w-full border-primary/20 text-primary hover:bg-primary/5 font-bold h-12 flex items-center justify-center gap-2 rounded-xl transition-all">
                        <Eye size={18} />
                        View Details
                      </Button> */}
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl p-0 overflow-y-auto max-h-[95vh] border-none rounded-[2rem] sm:rounded-[2rem]">
                      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                        <div className="relative aspect-square lg:aspect-auto lg:min-h-[600px] bg-white">
                           <Carousel className="w-full h-full">
                            <CarouselContent className="-ml-0 h-full">
                              {prod.imageIds.map((imgId) => {
                                const img = PlaceHolderImages.find((p) => p.id === imgId);
                                return (
                                  <CarouselItem key={imgId} className="relative h-full aspect-square lg:aspect-auto pl-0">
                                    {img?.imageUrl ? (
                                      <Image
                                        src={img.imageUrl}
                                        alt={prod.name}
                                        fill
                                        className="object-contain p-4 md:p-6"
                                        data-ai-hint={img.imageHint}
                                      />
                                    ) : (
                                      <div className="w-full h-full flex items-center justify-center">
                                        <span className="text-xs text-muted-foreground uppercase font-bold tracking-widest">No Image</span>
                                      </div>
                                    )}
                                  </CarouselItem>
                                );
                              })}
                            </CarouselContent>
                            {prod.imageIds.length > 1 && (
                              <>
                                <CarouselPrevious className="left-4 bg-black/20 hover:bg-black/40 text-white border-none" />
                                <CarouselNext className="right-4 bg-black/20 hover:bg-black/40 text-white border-none" />
                              </>
                            )}
                          </Carousel>
                        </div>
                        <div className="p-6 md:p-10 flex flex-col justify-between bg-white">
                          <div className="space-y-6">
                            <div>
                              <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-2 block">Product Specifications</span>
                              <DialogTitle className="text-2xl md:text-4xl font-headline font-bold text-primary mb-4 leading-tight">{prod.name}</DialogTitle>
                              <DialogDescription className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                {prod.description}
                              </DialogDescription>
                            </div>
                            
                            <div className="space-y-4">
                              <h4 className="font-bold text-primary flex items-center gap-2 text-sm md:text-base">
                                <Info size={18} className="text-secondary" />
                                Key Technical Features:
                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {prod.features.map((f, idx) => (
                                  <div key={idx} className="flex items-center gap-2 bg-muted/50 p-2.5 rounded-xl border border-border/50">
                                    <Check size={14} className="text-secondary shrink-0" />
                                    <span className="text-xs md:text-sm font-medium">{f}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="mt-8 pt-6 border-t">
                            <Button className="w-full bg-primary hover:bg-secondary text-white font-bold h-14 rounded-2xl transition-all shadow-xl shadow-primary/20" asChild>
                              <Link href={getWhatsAppLink(prod.name)} target="_blank">
                                <Phone size={20} className="mr-2" />
                                Enquire for Price
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button className="w-full bg-primary hover:bg-secondary text-white font-bold h-12 flex items-center justify-center gap-2 rounded-xl transition-all shadow-lg shadow-primary/10" asChild>
                    <Link href={getWhatsAppLink(prod.name)} target="_blank">
                      <Phone size={18} />
                      Request Quote
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-20 flex justify-center items-center gap-2 animate-fade-in-up">
            <Button
              variant="outline"
              size="icon"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="rounded-xl border-primary/20 hover:border-primary text-primary"
            >
              <ChevronLeft size={20} />
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => handlePageChange(page)}
                className={cn(
                  "w-12 h-12 rounded-xl font-bold transition-all",
                  currentPage === page 
                    ? "bg-primary text-white shadow-lg shadow-primary/20 scale-110" 
                    : "border-primary/20 hover:border-primary text-primary"
                )}
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              size="icon"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="rounded-xl border-primary/20 hover:border-primary text-primary"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
