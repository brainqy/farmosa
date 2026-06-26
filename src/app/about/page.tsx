import { Navigation } from "@/components/Navigation";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navigation />
      <About />
      <Footer />
    </main>
  );
}
