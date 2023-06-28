"use client";

import "./globals.css";
import { useSearchParams } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const theme = searchParams.get("theme") || "default";
  return (
    <html lang="en">
      <body
        data-theme={theme}
        className={`text-on-background h-screen flex flex-col justify-between p-lg bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
