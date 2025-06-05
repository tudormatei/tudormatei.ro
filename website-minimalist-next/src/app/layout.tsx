import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tudor Matei | Student & Programmer",
  description:
    "Computer Science student with hands-on experience in full-stack development, machine learning, and scalable system design.",
  openGraph: {
    title: "Tudor Matei | Student & Programmer",
    description:
      "Computer Science student with hands-on experience in full-stack development, machine learning, and scalable system design.",
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
