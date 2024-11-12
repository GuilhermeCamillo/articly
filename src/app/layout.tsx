import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { Manrope } from "next/font/google";

// const manrope = localFont({
//   src: "./fonts/ManropeVF.ttf",
//   variable: "--font-manrope",
//   weight: "100 900",
// });

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Articly",
  description: "Articly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased min-h-full bg-white`}
        suppressHydrationWarning
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
