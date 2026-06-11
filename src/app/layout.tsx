import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import PageTransition from "@/components/PageTransition";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Zane360 — Domains, Hosting & Cybersecurity",
  description: "Premium domain registration, blazing-fast hosting, and AI-powered cybersecurity — all in one place.",
  keywords: "domain registration, web hosting, cybersecurity, Zimbabwe, SSL, DDoS protection",
  openGraph: {
    title: "Zane360 — Domains, Hosting & Cybersecurity",
    description: "Premium domain registration, blazing-fast hosting, and AI-powered cybersecurity — all in one place.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full" data-theme="dark">
      <body className="min-h-full flex flex-col antialiased pb-16 md:pb-0">
        <ThemeProvider>
          <Navbar />
          <PageTransition>
            <main className="flex-1">{children}</main>
          </PageTransition>
          <MobileBottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
