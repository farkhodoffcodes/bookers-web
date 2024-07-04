import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import '@splidejs/splide/css';
import '@splidejs/splide/css/skyblue';
import '@splidejs/splide/css/sea-green';
import '@splidejs/splide/css/core';
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Bookers",
  description: "Bookers website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-[#21212E]`}>
        <Navbar />
        <div className="min-h-screen max-w-[1200px] mx-auto xl:px-0 px-5 md:px-10">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
