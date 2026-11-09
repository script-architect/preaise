import type {Metadata} from 'next';
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Importing ultra clean modern font from Google Fonts

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Here we set the SEO Title and Description of the webite
export const metadata: Metadata = {
  title: "PreAise Technologies | Your End-to-End Technology Solutions Partner",
  description: "Build. Test. Grow. Premium agency providing elite tech engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased bg-white dark:bg-black text-black dark:text-white transition-colors duration-300`}>
        {/* Fixed Navbar at the top of the page */}
        <Navbar />

        {/* Main secrtion where the content of all pages will render*/}
        <main className="pt-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}