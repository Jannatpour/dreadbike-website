import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DreadBike - Unleash the Fear. Ride Dread.",
  description: "Professional motorcycle tuning, custom builds, and performance upgrades. Transform your bike into a beast that commands the road with DreadBike's expert craftsmanship.",
  keywords: ["motorcycle tuning", "custom bikes", "performance upgrades", "bike modification", "DreadBike"],
  authors: [{ name: "DreadBike" }],
  creator: "DreadBike",
  publisher: "DreadBike",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dreadbike.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DreadBike - Unleash the Fear. Ride Dread.",
    description: "Professional motorcycle tuning, custom builds, and performance upgrades. Transform your bike into a beast that commands the road.",
    url: "https://dreadbike.com",
    siteName: "DreadBike",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "DreadBike - Professional Motorcycle Tuning",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DreadBike - Unleash the Fear. Ride Dread.",
    description: "Professional motorcycle tuning, custom builds, and performance upgrades.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
