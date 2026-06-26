import { Navigation } from "@/components/Navigation";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navigation />
      <ProductGrid />
      <Footer />
    </main>
  );
}
