import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "CTK46 - Lab 02",
  description: "Bài thực hành - Các công nghệ mới trong PTPM",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
