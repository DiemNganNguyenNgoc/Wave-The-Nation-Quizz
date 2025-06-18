import type { Metadata } from "next";
import { Geist, Geist_Mono, Monoton } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const monoton = Monoton({
  subsets: ["latin"],
  weight: "400",          // Monoton có đúng 1 weight
  variable: "--font-monoton",   // khai báo biến CSS
});

export const metadata: Metadata = {
  title: "Wave The Nation Quizz",
  description: "Guess the flag!!!",
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
