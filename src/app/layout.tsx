import type { Metadata } from "next";
import { Geist, Playfair_Display, IBM_Plex_Sans_Arabic, Amiri } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const ibmArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kasmi-portfolio.vercel.app"),
  title: "Kasmi Haithem — Full Stack Developer",
  description: "Full Stack Developer | Building scalable web applications, SaaS & E-commerce solutions. Available for freelance.",
  keywords: ["Full Stack", "Developer", "Next.js", "React", "Algeria", "Freelance"],
  openGraph: {
    title: "Kasmi Haithem — Full Stack Developer",
    description: "Premium SaaS, E-commerce & Web Applications. Available for freelance worldwide.",
    type: "website",
    images: ["/kasmilogo.png"],
  },
  twitter: {
    card: "summary",
    title: "Kasmi Haithem — Full Stack Developer",
    description: "Premium SaaS, E-commerce & Web Applications. Available for freelance worldwide.",
    images: ["/kasmilogo.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${geistSans.variable} ${playfair.variable} ${ibmArabic.variable} ${amiri.variable} min-h-full flex flex-col bg-[#FFFBF7]`}>{children}</body>
    </html>
  );
}
