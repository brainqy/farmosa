import { Navigation } from "@/components/Navigation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navigation />
      <Contact />
      <Footer />
    </main>
  );
}
