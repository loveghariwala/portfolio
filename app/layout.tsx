import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteMetadata } from "@/constants/metadata";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/ui/Preloader";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { RootJsonLd } from "@/components/seo/JsonLd";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} font-sans min-h-screen bg-[#07060c] text-foreground antialiased selection:bg-purple-500/30 selection:text-purple-200`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <RootJsonLd />
          <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#07060c]">
            <Preloader />
            <Navbar />
            <main className="flex-1 relative z-10">{children}</main>
            <Footer />
            <CommandPalette />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
