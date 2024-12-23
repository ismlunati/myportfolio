import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import LanguageProvider from "@/components/LanguageProvider"; // Importa el proveedor

import { Navbar } from "@/components/navbar";
import Header from "@/components/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ismael Luna Landing Page",
  description: "Landing page by Ismael Luna",
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
        
        <LanguageProvider>
        <Header />
          <Navbar />
          {children}
        </LanguageProvider>{" "}
        {/* Encapsula todo en el proveedor */}
      </body>
    </html>
  );
}
