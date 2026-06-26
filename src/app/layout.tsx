import type {Metadata} from 'next';
import './globals.css';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { Toaster } from '@/components/ui/toaster';
import { LocaleProvider } from '@/hooks/use-locale';

export const metadata: Metadata = {
  title: 'SB AGROTECH | Premium Farming Equipment Punjab',
  description: 'SB AGROTECH. Premium manufacturer of Rotavators, Zero Drill machines, and Laser Levelers in Punjab, India.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;500;600;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-secondary/30 relative">
        <LocaleProvider>
          {children}
          <FloatingWhatsApp />
          <Toaster />
        </LocaleProvider>
      </body>
    </html>
  );
}