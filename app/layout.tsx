import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "沖繩 7 日自駕｜2026.10.06–10.12",
  description: "沖繩七日自駕的每日行程、住宿、旅費與行前資訊。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant-TW">
      <body>{children}</body>
    </html>
  );
}
