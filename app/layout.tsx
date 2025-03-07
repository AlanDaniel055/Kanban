import type { Metadata } from "next";
import { Inter, Fira_Mono } from "next/font/google"; // Asegúrate de que las fuentes estén disponibles
import "./globals.css";
import { siteConfig } from "@/config/site";

// Fuentes de Google con peso especificado
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: "400", // Agrega el peso aquí
});

const firaMono = Fira_Mono({
  variable: "--font-fira-mono",
  subsets: ["latin"],
  weight: "400", // Agrega el peso aquí
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logo.jpg",
      href: "/logo.jpg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${firaMono.variable} antialiased`} // Usa las fuentes modificadas
      >
        {children}
      </body>
    </html>
  );
}
