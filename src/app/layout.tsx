import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/analytics/AnalyticsProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rosie Cleans Alabama | Professional House Cleaning Services",
  description:
    "Professional house cleaning services in Huntsville, AL and throughout North Alabama. Recurring cleaning, deep cleaning, move-in/out, post-construction & office cleaning.",
  metadataBase: new URL("https://rosiecleansalabama.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#1E6B52" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
