import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://girls-volleyball-development.nancywang0904.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
      <body>{children}</body>
    </html>
  );
}
