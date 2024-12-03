import "@bolabali/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { NextUIProvider } from "@bolabali/providers";
import { TRPCReactProvider } from "@bolabali/trpc/react";

export const metadata: Metadata = {
  title: "Bolabali",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="bg-gray-50">
        <TRPCReactProvider>
          <NextUIProvider>{children}</NextUIProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
