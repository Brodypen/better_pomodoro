import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactElement } from "react";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactElement;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
