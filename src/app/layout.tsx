import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../provider/ThemeProvider";
import MainLayout from "../components/layout/header-hero/MainLayout";
import Toaster from "../components/sections/ContactoFinal/Toastprovider";

const geistSans = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

const geistMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "David Santiago Rengifo Guacheta",
  description: "Portafolio final David Rengifo",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <MainLayout>
            <Toaster />
            {children}
          </MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
