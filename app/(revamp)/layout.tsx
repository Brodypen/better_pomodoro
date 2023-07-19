import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import GlassPane from "@/components/GlassPane";
import { ReactElement } from "react";
import Navbar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

type DashBoardProps = {
  children: ReactElement;
};

export default function DashboardRootLayout({ children }: DashBoardProps) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen max-w-7xl p-8 flex justify-center">
        <main className="">{children}</main>
        <Navbar/>
      </body>
    </html>
  );
}
