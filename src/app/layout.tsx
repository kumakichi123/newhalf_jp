import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TabBar from "@/components/layout/TabBar";
import AgeGate from "@/components/layout/AgeGate";

const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? "ニューハーフJP";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: `${siteName} | ニューハーフAV専門メディア`,
    template: `%s | ${siteName}`,
  },
  description:
    "ニューハーフAVの最新作・人気作品レビューを毎日更新。女優解説・ジャンル別おすすめをまとめた専門メディア。",
  metadataBase: new URL(siteUrl),
  openGraph: {
    siteName,
    locale: "ja_JP",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        {/* GSC verification */}
        {process.env.NEXT_PUBLIC_GSC_VERIFICATION_TOKEN && (
          <meta
            name="google-site-verification"
            content={process.env.NEXT_PUBLIC_GSC_VERIFICATION_TOKEN}
          />
        )}
      </head>
      <body>
        <AgeGate />
        <Header />
        <main style={{ minHeight: "100dvh", paddingBottom: "72px" }}>
          {children}
        </main>
        <Footer />
        <TabBar />
      </body>
    </html>
  );
}
