import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/data/site";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import "./globals.css";

const display = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Technology & Gadget Reviews`,
    template: `%s · ${siteConfig.name}`,
  },
  description:
    "NookVolt — smartphone reviews, app tutorials, tech news, software guides, and product comparisons in Korean and English. Live at news24h7d.com.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/brand/nookvolt-favicon.png", type: "image/png" }, { url: siteConfig.logoPath }],
    apple: siteConfig.logoPath,
  },
  openGraph: {
    title: `${siteConfig.name} — Technology & Gadget Reviews`,
    description:
      "Smartphone reviews, app tutorials, tech news, software guides, and product comparisons in Korean and English.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImagePath, width: 1200, height: 630, alt: siteConfig.name }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Technology & Gadget Reviews`,
    description:
      "Smartphone reviews, app tutorials, tech news, software guides, and product comparisons in Korean and English.",
    images: [siteConfig.ogImagePath],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${display.variable} flex min-h-screen max-w-[100%] flex-col antialiased`}
      >
        <LocaleProvider>
          <SiteHeader />
          <main className="min-w-0 max-w-[100%] flex-1 overflow-x-clip">
            {children}
          </main>
          <SiteFooter />
        </LocaleProvider>
      </body>
    </html>
  );
}
