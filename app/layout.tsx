import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Coiffeur Professionnel | L'art du cheveu au service de votre style",
  description: "Découvrez l'excellence capillaire avec un coiffeur passionné. Coupes, colorations et soins sur-mesure dans une ambiance raffinée.",
  keywords: ["coiffeur", "salon de coiffure", "coupe", "coloration", "coiffure", "cheveux"],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
