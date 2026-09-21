import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Auston | We Deliver Hygiene",
    template: "%s | Auston",
  },

  description:
    "Auston delivers professional hygiene, cleaning and facility solutions for hospitality, healthcare, food and beverage, commercial and institutional industries.",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    siteName: "Auston",
    title: "Auston | We Deliver Hygiene",
    description:
      "Professional hygiene and cleaning solutions for hospitality, healthcare, food and beverage, commercial and institutional environments.",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
  <Navbar />

  {children}

  <Footer />
</body>
    </html>
  );
}