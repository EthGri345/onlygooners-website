import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OnlyGoon - $OG",
  description: "Premium exclusive access platform",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
