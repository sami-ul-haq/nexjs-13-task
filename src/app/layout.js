import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "My Practice App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <main className="w-full md:max-w-[1200px] px-2 md:px-5 mx-auto">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
