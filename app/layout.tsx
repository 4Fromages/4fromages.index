import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "4Fromages",
  description: "4Fromages is a team of young developpers. We build websites, applications and games. We do it for free, because we love it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${spaceMono.variable} antialiased select-none`}
      >
        {children}
      </body>
    </html>
  );
}
