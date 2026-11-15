import type { Metadata, Viewport } from "next";
import {
  Caveat,
  Playfair_Display,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import MotionProvider from "@/components/MotionProvider";
import SiteFooter from "@/components/SiteFooter";
import SmoothScroll from "@/components/SmoothScroll";
import { pandit, sections, siteMeta } from "@/config/panditData";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: {
    default: siteMeta.title,
    template: `%s · ${pandit.fullName}`,
  },
  description: siteMeta.description,
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    type: "website",
    locale: "en_IN",
    siteName: pandit.fullName,
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F5F0",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} ${caveat.variable}`}
    >
      <body className="min-h-screen bg-sand font-sans text-ink antialiased">
        <SmoothScroll />
        <div className="grain" aria-hidden="true" />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <MotionProvider>
          <Header />
          <main id="main">{children}</main>
          {sections.footer.enabled ? <SiteFooter /> : null}
        </MotionProvider>
      </body>
    </html>
  );
}
