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
    "Cordnook — smartphone reviews, app tutorials, tech news, software guides, and product comparisons in Korean and English. Live at news24h7d.com.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: siteConfig.logoPath,
    apple: siteConfig.logoPath,
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
