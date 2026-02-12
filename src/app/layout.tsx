import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hormel Company Limited | Premier Asset Management & Real Estate Advisory",
  description: "Bridging the gap between local market realities and global investment standards. Expert real estate advisory for HNWIs, institutions, and government.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${GeistSans.variable} ${playfair.variable}`}>
      <body
        className="antialiased bg-white text-hormel-black"
        style={{ fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui, -apple-system, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
