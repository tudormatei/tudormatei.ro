import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { intro } from "./data/intro";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${intro.name} | ${intro.role}`,
  description: intro.description,
  openGraph: {
    title: `${intro.name} | ${intro.role}`,
    description: intro.description,
    url: "https://tudormatei.ro/projects",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
