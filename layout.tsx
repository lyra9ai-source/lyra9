import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Lyra AI - Enterprise Intelligence, Always On",
  description:
    "Lyra AI is a multi-agent enterprise platform powered by Federated Live Learning, Accountable AI, and Custom Autonomous Agents that give your enterprise the edge.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
