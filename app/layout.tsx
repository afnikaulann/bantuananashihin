import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ustadz Hilmi Firdaus - Bantuan Uang Ghoib",
  description: "Berbagi Rezeki Ghoib Untuk Umat - Bantuan Uang Ghoib oleh Ustadz Hilmi Firdaus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased m-0 p-0">
      <body className="min-h-full flex flex-col bg-[#061124] m-0 p-0" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
