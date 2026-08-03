import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ust. Derry Sulaiman - Bantuan Uang Ghoib",
  description: "Berbagi Rezeki Ghoib Untuk Umat - Bantuan Uang Ghoib oleh Ust. Derry Sulaiman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
