"use client";

import "./globals.css";
import { useSearchParams } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const theme = searchParams.get("theme");
  const mode = searchParams.get("mode") || "light";
  return (
    <html lang="en">
      <body
        data-theme={theme ? `${theme}-${mode}` : "default"}
        className={`text-on-background h-screen flex flex-col justify-between bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
