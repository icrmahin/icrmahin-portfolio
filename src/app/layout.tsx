import type { Metadata, Viewport } from "next";
import {
  Bebas_Neue,
  Caveat,
  DM_Mono,
  Instrument_Serif,
  Manrope,
} from "next/font/google";
import type { ReactNode } from "react";
import { LenisProvider } from "@/components/lenis-provider";
import { ScrollEffects } from "@/components/scroll-effects";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getSiteUrl, site } from "@/lib/site";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
  display: "swap",
});

const mono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const display = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
  display: "swap",
});

const handwriting = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  weight: "400",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.name + " — " + site.role,
    template: "%s — " + site.name,
  },
  description: site.description,
  applicationName: "icrmahin Portfolio",
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icons/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "icrmahin",
    title: site.name + " — " + site.role,
    description: site.description,
    url: siteUrl,
    images: [
      {
        url: "/images/autumn-cover.webp",
        width: 1648,
        height: 927,
        alt: "Pixel-art autumn landscape created for icrmahin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@icrmahin",
    title: site.name + " — " + site.role,
    description: site.description,
    images: ["/images/autumn-cover.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f5ef",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: siteUrl,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    sameAs: [site.github, site.x],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const fontVariables = [
    sans.variable,
    serif.variable,
    mono.variable,
    display.variable,
    handwriting.variable,
  ].join(" ");

  return (
    <html lang="en" className={fontVariables}>
      <body>
        <StructuredData />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <LenisProvider>
          <SiteHeader />
          <main className="w-full" id="main-content">
            {children}
          </main>
          <SiteFooter />
          <ScrollEffects />
        </LenisProvider>
      </body>
    </html>
  );
}
