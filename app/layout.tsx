import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spirit Volleyball Edmonton | Ages 10-12",
  description:
    "A supportive beginner volleyball development program helping girls ages 10-12 build skills, confidence, teamwork, and friendships.",
  openGraph: {
    title: "Spirit Volleyball Edmonton | Ages 10-12",
    description:
      "Beginner volleyball development for girls ages 10-12 in a fun, supportive environment.",
    images: ["/volleyball-hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spirit Volleyball Edmonton | Ages 10-12",
    description:
      "Build skills, confidence, and friendships through volleyball.",
    images: ["/volleyball-hero.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
