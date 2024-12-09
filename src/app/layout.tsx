import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Manrope } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

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
        className={cn(
          "font-Poppins antialiased min-h-full bg-white",
          manrope.variable
        )}
        suppressHydrationWarning
      >
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
