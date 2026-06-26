"use client";

import React, { useState } from "react";
import { Sparkles, Loader2, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { farmingGearConcierge, type FarmingGearConciergeOutput } from "@/ai/flows/farming-gear-concierge";

export function GearConcierge() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FarmingGearConciergeOutput | null>(null);
  const [formData, setFormData] = useState({
    soilType: "",
    cropVariety: "",
    acreage: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const output = await farmingGearConcierge({
        soilType: formData.soilType,
        cropVariety: formData.cropVariety,
        acreage: parseFloat(formData.acreage),
      });
      setResult(output);
    } catch (error) {
      console.error("Advisor failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="concierge" className="py-20 md:py-32 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-secondary text-xs md:text-sm font-bold mb-6">
              <Sparkles size={16} className="animate-pulse" />
              AI Farming Assistant
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold mb-6 leading-tight">
              Smart Farm <span className="text-secondary">Advisor</span>
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
              Not sure which machine fits your land? Our AI analyzes your farm's unique profile to recommend the perfect SB AGROTECH solution.
            
            <ul className="space-y-6 mb-10">
              {["Tailored Recommendations", "Soil-Specific Guidance", "Acreage-Optimized Gear"].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="bg-secondary p-1 rounded-full text-white shadow-lg shadow-secondary/20">
                    <CheckCircle size={20} />
                  </div>
                  <span className="font-bold text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in-up [animation-delay:200ms]">
            <Card className="bg-white text-primary border-none shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] rounded-3xl overflow-hidden">
              <CardHeader className="bg-muted/30 pb-8 pt-8 px-6 md:px-10">
                <CardTitle className="font-headline text-2xl md:text-3xl">Get Expert Advice</CardTitle>
                <CardDescription className="text-base">Tell us about your farm for a quick machinery match</CardDescription>
              </CardHeader>
              <CardContent className="p-6 md:p-10">
                {!result ? (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-3">
                      <Label htmlFor="soilType" className="text-base font-bold">Soil Type</Label>
                      <Input
                        id="soilType"
                        placeholder="e.g. Clay, Sandy, Black Loam"
                        value={formData.soilType}
                        onChange={(e) => setFormData({ ...formData, soilType: e.target.value })}
                        required
                        className="h-14 border-muted text-base rounded-xl focus-visible:ring-secondary px-6"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="cropVariety" className="text-base font-bold">Primary Crop</Label>
                      <Input
                        id="cropVariety"
                        placeholder="e.g. Wheat, Basmati Rice"
                        value={formData.cropVariety}
                        onChange={(e) => setFormData({ ...formData, cropVariety: e.target.value })}
                        required
                        className="h-14 border-muted text-base rounded-xl focus-visible:ring-secondary px-6"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="acreage" className="text-base font-bold">Total Acreage</Label>
                      <Input
                        id="acreage"
                        type="number"
                        placeholder="Total acres"
                        value={formData.acreage}
                        onChange={(e) => setFormData({ ...formData, acreage: e.target.value })}
                        required
                        className="h-14 border-muted text-base rounded-xl focus-visible:ring-secondary px-6"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full h-16 bg-primary hover:bg-primary/90 text-white font-black text-xl rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-95"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                          Analyzing Farm Data...
                        </>
                      ) : (
                        <>
                          <Send className="mr-3 h-6 w-6" />
                          Get Recommendation
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="space-y-8">
                    <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                      <h4 className="font-bold text-xl mb-6 text-primary flex items-center gap-2">
                        <Sparkles size={24} className="text-secondary" />
                        Expert Recommendations:
                      </h4>
                      <div className="space-y-6">
                        {result.recommendations.map((rec, idx) => (
                          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-border group hover:border-secondary transition-colors">
                            <h5 className="font-bold text-secondary text-lg mb-2">{rec.productName}</h5>
                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{rec.reasoning}</p>
                            <div className="flex flex-wrap gap-2">
                              {rec.keyFeatures.map((feat, fIdx) => (
                                <span key={fIdx} className="text-[10px] md:text-[11px] px-3 py-1 bg-muted rounded-full font-bold uppercase tracking-wider">
                                  {feat}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {result.additionalAdvice && (
                      <div className="text-sm md:text-base italic text-muted-foreground bg-secondary/10 p-5 rounded-2xl border-l-4 border-secondary leading-relaxed">
                        <strong className="text-secondary block mb-1 not-italic uppercase tracking-widest text-xs">AI Maintenance Tip:</strong> {result.additionalAdvice}
                      </div>
                    )}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button onClick={() => setResult(null)} variant="outline" className="flex-1 h-14 rounded-xl font-bold text-lg">
                        Start Over
                      </Button>
                      <Button className="flex-1 h-14 bg-secondary hover:bg-secondary/90 text-white rounded-xl font-bold text-lg shadow-lg shadow-secondary/20" asChild>
                        <a href="https://wa.me/919001900613">
                          Enquire Details
                        </a>
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
