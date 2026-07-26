import type { Metadata } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/theme-context';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Flourishers',
  description: 'SEO, GEO, and AEO — plus the hands-on social media management and brand identity work that makes sure your site and your social handles say the same great thing.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="emerald"
      suppressHydrationWarning
      className={`${playfairDisplay.variable} ${poppins.variable}`}
    >
      <body>
        <ThemeProvider>
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}