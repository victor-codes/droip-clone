import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { siteConfig } from "@/utils/meta";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.variable} h-[100dvh] antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  applicationName: siteConfig.name,
  title: { template: `%s`, default: siteConfig.title },
  referrer: "origin-when-cross-origin",
  manifest: "/manifest.json",
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },

  keywords: siteConfig.keywords,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    title: siteConfig.title,
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.title,
    locale: "en_US",
    description: siteConfig.description,
    // images: [siteConfig.default_image],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@shopsnicketts",
    creatorId: "1467726470533754880",
  },

  robots: {
    index: false,
    follow: false,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
      {
        rel: "icon",
        url: "/favicon.svg",
      },
    ],
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};
