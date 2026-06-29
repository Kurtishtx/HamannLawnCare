import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PromoPopup from "./components/PromoPopup";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hamann Lawn Care & Weed Control | Arlington & North Texas Since 2006",
  description: "Family-owned lawn care, weed control, fertilization, mosquito, and flea & tick control serving Arlington and all of North Texas since 2006. Greener lawns, fewer weeds, zero skeeters — guaranteed. Call (682) 408-9013.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <PromoPopup />
      </body>
    </html>
  );
}
