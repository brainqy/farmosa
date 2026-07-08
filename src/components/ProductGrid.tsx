"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Phone, Eye, Info } from "lucide-react";
import { translate } from "@/lib/i18n";
import { useLocale } from "@/hooks/use-locale";
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
    nameKey: "product.rotavatorRegular.name", 
    descriptionKey: "product.rotavatorRegular.description",
    imageIds: ["rotavator-regular", "rotavator-regular-2"],
    features: [
      "product.rotavatorRegular.feature1",
      "product.rotavatorRegular.feature2",
      "product.rotavatorRegular.feature3",
      "product.rotavatorRegular.feature4",
      "product.rotavatorRegular.feature5",
    ],
  },
  { 
    id: "rotavator-plus", 
    nameKey: "product.rotavatorPlus.name", 
    descriptionKey: "product.rotavatorPlus.description",
    imageIds: ["rotavator-plus", "rotavator-plus-2"],
    features: [
      "product.rotavatorPlus.feature1",
      "product.rotavatorPlus.feature2",
      "product.rotavatorPlus.feature3",
      "product.rotavatorPlus.feature4",
      "product.rotavatorPlus.feature5",
    ],
  },
  { 
    id: "disk-harrow", 
    nameKey: "product.diskHarrow.name", 
    descriptionKey: "product.diskHarrow.description",
    imageIds: ["disk-harrow"],
    features: [
      "product.diskHarrow.feature1",
      "product.diskHarrow.feature2",
      "product.diskHarrow.feature3",
      "product.diskHarrow.feature4",
      "product.diskHarrow.feature5",
    ],
  },
  { 
    id: "hd-rotavator", 
    nameKey: "product.hdRotavator.name", 
    descriptionKey: "product.hdRotavator.description",
    imageIds: ["hd-rotavator"],
    features: [
      "product.hdRotavator.feature1",
      "product.hdRotavator.feature2",
      "product.hdRotavator.feature3",
      "product.hdRotavator.feature4",
      "product.hdRotavator.feature5",
    ],
  },
  { 
    id: "double-frame", 
    nameKey: "product.doubleFrame.name", 
    descriptionKey: "product.doubleFrame.description",
    imageIds: ["double-frame"],
    features: [
      "product.doubleFrame.feature1",
      "product.doubleFrame.feature2",
      "product.doubleFrame.feature3",
      "product.doubleFrame.feature4",
      "product.doubleFrame.feature5",
    ],
  },
  { 
    id: "zero-drill", 
    nameKey: "product.zeroDrill.name", 
    descriptionKey: "product.zeroDrill.description",
    imageIds: ["zero-drill"],
    features: [
      "product.zeroDrill.feature1",
      "product.zeroDrill.feature2",
      "product.zeroDrill.feature3",
      "product.zeroDrill.feature4",
      "product.zeroDrill.feature5",
    ],
  },
  { 
    id: "laser-leveler", 
    nameKey: "product.laserLeveler.name", 
    descriptionKey: "product.laserLeveler.description",
    imageIds: ["laser-leveler"],
    features: [
      "product.laserLeveler.feature1",
      "product.laserLeveler.feature2",
      "product.laserLeveler.feature3",
      "product.laserLeveler.feature4",
      "product.laserLeveler.feature5",
    ],
  },
  { 
    id: "mud-loader", 
    nameKey: "product.mudLoader.name", 
    descriptionKey: "product.mudLoader.description",
    imageIds: ["mud-loader"],
    features: [
      "product.mudLoader.feature1",
      "product.mudLoader.feature2",
      "product.mudLoader.feature3",
      "product.mudLoader.feature4",
      "product.mudLoader.feature5",
    ],
  },
  { 
    id: "farmi-dubble-pali-maker", 
    nameKey: "product.farmiDubblePaliMaker.name", 
    descriptionKey: "product.farmiDubblePaliMaker.description",
    imageIds: ["farmi-dubble-pali-maker"],
    features: [
      "product.farmiDubblePaliMaker.feature1",
      "product.farmiDubblePaliMaker.feature2",
      "product.farmiDubblePaliMaker.feature3",
      "product.farmiDubblePaliMaker.feature4",
    ],
  },
  { 
    id: "uj-cross-1210", 
    nameKey: "product.ujCross1210.name", 
    descriptionKey: "product.ujCross1210.description",
    imageIds: ["uj-cross-1210"],
    features: [
      "product.ujCross1210.feature1",
      "product.ujCross1210.feature2",
      "product.ujCross1210.feature3",
      "product.ujCross1210.feature4",
    ],
  },
  { 
    id: "rotavator-blade", 
    nameKey: "product.rotavatorBlade.name", 
    descriptionKey: "product.rotavatorBlade.description",
    imageIds: ["rotavator-blade"],
    features: [
      "product.rotavatorBlade.feature1",
      "product.rotavatorBlade.feature2",
      "product.rotavatorBlade.feature3",
      "product.rotavatorBlade.feature4",
    ],
  },
];

const ITEMS_PER_PAGE = 8;

export function ProductGrid() {
  const { locale } = useLocale();
  const [itemsToShow, setItemsToShow] = useState(ITEMS_PER_PAGE);
  const [expandedProducts, setExpandedProducts] = useState<Set<string>>(new Set());

  const visibleProducts = useMemo(() => {
    return PRODUCTS.filter((product) =>
      product.imageIds.some((imageId) => {
        const image = PlaceHolderImages.find((item) => item.id === imageId);
        return Boolean(image?.imageUrl);
      })
    );
  }, []);

  const paginatedProducts = useMemo(() => {
    return visibleProducts.slice(0, itemsToShow);
  }, [itemsToShow, visibleProducts]);

  const hasMore = itemsToShow < visibleProducts.length;

  const handleLoadMore = () => {
    setItemsToShow(prev => Math.min(prev + ITEMS_PER_PAGE, visibleProducts.length));
  };

  const toggleExpandProduct = (productId: string) => {
    setExpandedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
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
          <span className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">{translate(locale, 'products.catalogBadge')}</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold text-primary mb-6 leading-tight">
            {translate(locale, 'products.title')}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            {translate(locale, 'products.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {paginatedProducts.map((prod, i) => {
            const productName = translate(locale, prod.nameKey);
            const productDescription = translate(locale, prod.descriptionKey);

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
                                alt={productName || "Agricultural equipment product image"}
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
                <CardHeader className="pb-2 pt-4">
                  <CardTitle className="text-lg font-headline text-primary group-hover:text-secondary transition-colors leading-tight min-h-[2.5rem] flex items-center">
                    {productName}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow pt-0 pb-4 px-4 sm:px-5">
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{productDescription}</p>
                  <ul className="space-y-1.5 mb-3">
                    {prod.features.slice(0, expandedProducts.has(prod.id) ? prod.features.length : 3).map((f, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check size={14} className="text-secondary mt-1 shrink-0" />
                        <span className="leading-tight">{translate(locale, f)}</span>
                      </li>
                    ))}
                  </ul>
                  {prod.features.length > 3 && (
                    <button
                      onClick={() => toggleExpandProduct(prod.id)}
                      className="text-xs font-bold text-secondary hover:text-primary transition-colors mt-2"
                    >
                      {expandedProducts.has(prod.id) ? translate(locale, 'products.showLess') : translate(locale, 'products.showMore')}
                    </button>
                  )}
                </CardContent>
                <CardFooter className="pt-0 pb-4 px-4 sm:px-5 grid grid-cols-1 gap-2">
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
                                        alt={productName || "Agricultural equipment product image"}
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
                              <DialogTitle className="text-2xl md:text-4xl font-headline font-bold text-primary mb-4 leading-tight">{productName}</DialogTitle>
                              <DialogDescription className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                {productDescription}
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
                            <Button className="w-full bg-primary hover:bg-secondary text-white font-bold h-12 rounded-2xl transition-all shadow-xl shadow-primary/20" asChild>
                              <Link href={getWhatsAppLink(productName)} target="_blank">
                                <Phone size={20} className="mr-2" />
                                Enquire for Price
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button className="w-full bg-primary hover:bg-secondary text-white font-bold h-10 flex items-center justify-center gap-2 rounded-xl transition-all shadow-lg shadow-primary/10" asChild>
                    <Link href={getWhatsAppLink(productName)} target="_blank">
                      <Phone size={18} />
                      Request Quote
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-20 flex justify-center animate-fade-in-up">
            <Button 
              onClick={handleLoadMore}
              className="bg-primary hover:bg-secondary text-white font-bold px-8 md:px-12 py-6 h-auto text-base md:text-lg rounded-2xl transition-all shadow-lg shadow-primary/20 hover:scale-105"
            >
              Load More Products
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
