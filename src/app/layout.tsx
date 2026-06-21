import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IGNITE — IDO Launchpad",
  description: "Premier token sale platform. Secure, transparent, and built for the next generation of Web3 projects.",
  keywords: ["IDO", "token sale", "launchpad", "Web3", "crypto", "presale", "IGO"],
  authors: [{ name: "IGNITE Team" }],
  creator: "IGNITE",
  publisher: "IGNITE",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ignite-launchpad.com",
    siteName: "IGNITE",
    title: "IGNITE — IDO Launchpad",
    description: "Premier token sale platform. Secure, transparent, and built for the next generation of Web3 projects.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IGNITE Launchpad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IGNITE — IDO Launchpad",
    description: "Premier token sale platform.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#07070d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
        {children}
      </body>
    </html>
  );
}