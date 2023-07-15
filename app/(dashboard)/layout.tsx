import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from "@/components/Sidebar";
import clsx from "clsx";
import GlassPane from "@/components/GlassPane";
import { ReactElement } from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Generated by create next app',
}

type DashBoardProps = {
  children: ReactElement
}

export default function DashboardRootLayout({ children }: DashBoardProps) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className="w-full h-full p-6 flex align-center container mx-auto">
          <Sidebar />
          <main className="w-full pl-6 h-full">{children}</main>
        </GlassPane>
      </body>
    </html>
  );
}
