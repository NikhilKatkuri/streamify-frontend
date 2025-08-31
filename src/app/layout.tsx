import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { baseMetadata } from "@/lib/base";

 
const onestFont = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${onestFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
