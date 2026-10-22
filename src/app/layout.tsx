import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import "./globals.css";

/** Latin brand wordmark only — body/UI uses Pretendard for Hangul readability */
const brand = Fraunces({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Cookivara",
    template: "%s · Cookivara",
  },
  description:
    "Cookivara — 좋아하는 부엌별로 정리한 집밥. 한국, 중국, 유럽, 미국, 월드, 스무디, 채식.",
  icons: {
    icon: "/brand/cookivara-logo.png",
    apple: "/brand/cookivara-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${brand.variable} flex min-h-screen max-w-[100%] flex-col antialiased`}>
        <LocaleProvider>
          <SiteHeader />
          <main className="min-w-0 max-w-[100%] flex-1 overflow-x-clip">{children}</main>
          <SiteFooter />
        </LocaleProvider>
      </body>
    </html>
  );
}
