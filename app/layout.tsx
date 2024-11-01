import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Sidebar from "./components/sidebar/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Brand TV",
  description: "Brand TV demo",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />

        {/* <Sidebar/> */}

        {children}
        <Footer />
      </body>
    </html>
  );
}
