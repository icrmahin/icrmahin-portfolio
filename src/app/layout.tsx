import type { Metadata, Viewport } from "next";
import { DM_Mono, Instrument_Serif, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import { LenisProvider } from "@/components/lenis-provider";
import { ScrollEffects } from "@/components/scroll-effects";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: "icrmahin Portfolio",
  authors: [{ name: site.name }],
  creator: site.name,
  robots: { index: true, follow: true },
  icons: { icon: "/icons/icon.svg" },
  ...(siteUrl ? {
    metadataBase: new URL(siteUrl),
    openGraph: {
      type: "website",
      title: `${site.name} — ${site.role}`,
      description: site.description,
      images: [{ url: "/images/autumn-cover.webp", width: 1648, height: 927, alt: "Pixel-art sunset landscape created for icrmahin" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${site.name} — ${site.role}`,
      description: site.description,
      images: ["/images/autumn-cover.webp"],
    },
  } : {}),
};

export const viewport: Viewport = {
  themeColor: "#f3f0e8",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <LenisProvider>
          <SiteHeader />
          <main className="w-full" id="main-content">{children}</main>
          <SiteFooter />
          <ScrollEffects />
        </LenisProvider>
      </body>
    </html>
  );
}
