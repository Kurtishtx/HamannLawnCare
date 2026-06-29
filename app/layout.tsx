import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PromoPopup from "./components/PromoPopup";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"], variable: "--font-inter", display: "swap" });
const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton", display: "swap" });

export const metadata: Metadata = {
  title: "Hamann Lawn Care & Weed Control | Arlington & North Texas Since 2006",
  description: "Family-owned lawn care, weed control, fertilization, mosquito, and flea & tick control serving Arlington and all of North Texas since 2006. Greener lawns, fewer weeds, zero skeeters — guaranteed. Call (682) 408-9013.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${anton.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <PromoPopup />
      </body>
    </html>
  );
}
