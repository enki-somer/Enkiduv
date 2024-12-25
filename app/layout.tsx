import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enkiduv",
  description: "Enkiduv Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={spaceGrotesk.className}>
        <div className="fixed inset-0 -z-10 h-full w-full bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]" />
          <div className="absolute inset-0 animate-pulse opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#4f46e5,transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_200px,#9333ea,transparent)]" />
          </div>
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
