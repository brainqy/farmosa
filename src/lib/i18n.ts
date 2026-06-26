export type Locale = 'en' | 'hi';

export const locales: Locale[] = ['en', 'hi'];
export const defaultLocale: Locale = 'en';

const translations: Record<Locale, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.products': 'Products',
    'nav.contact': 'Contact',
    'nav.enquire': 'Enquire Now',
    'hero.title': 'Explore Our Machinery Catalog',
    'hero.description': 'From high-performance rotavators to precision laser levelers, find the industrial-grade tools designed for Punjab\'s diverse soil types.',
    'hero.button': 'View All Products',
    'footer.quickLinks': 'Quick Links',
    'footer.aboutCompany': 'About Company',
    'footer.productCatalog': 'Product Catalog',
    'footer.contactUs': 'Contact Us',
    'language.label': 'Language',
  },
  hi: {
    'nav.home': 'होम',
    'nav.about': 'हमारे बारे में',
    'nav.products': 'उत्पाद',
    'nav.contact': 'संपर्क',
    'nav.enquire': 'अभी पूछें',
    'hero.title': 'हमारे मशीनरी कैटलॉग की खोज करें',
    'hero.description': 'उच्च प्रदर्शन रो़टावेटरों से लेकर सटीक लेज़र लेवलरों तक, पंजाब की विविध मिट्टी के लिए डिज़ाइन किए गए औद्योगिक स्तरीय उपकरण प्राप्त करें।',
    'hero.button': 'सभी उत्पाद देखें',
    'footer.quickLinks': 'त्वरित लिंक',
    'footer.aboutCompany': 'कंपनी के बारे में',
    'footer.productCatalog': 'उत्पाद कैटलॉग',
    'footer.contactUs': 'संपर्क करें',
    'language.label': 'भाषा',
  },
};

export function translate(locale: Locale, key: string) {
  return translations[locale]?.[key] ?? translations[defaultLocale][key] ?? key;
}

export function getAltLocale(locale: Locale) {
  return locale === 'en' ? 'hi' : 'en';
}
