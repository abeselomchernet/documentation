import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"; // Corrected import path
import { Sidebar } from "@/components/layout/Sidebar"; // Corrected import path
import { Header } from "@/components/layout/Header"; // New import for Header
import CoPilotInterface from "../components/copilot/CoPilotInterface";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unity OS v3.1 - Country Architect's Co-Pilot",
  description: "The operating system for building resilient economies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="flex min-h-screen w-full flex-col bg-gray-900">
          <Sidebar />
          <div className="flex flex-col sm:pl-64">
            <Header /> {/* Integrating Header component */}
            <main className="flex-1 p-4 sm:p-6">{children}</main>
          </div>
          <div className="w-96 border-l border-gray-700 bg-gray-800 p-4">
            <CoPilotInterface />
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
