import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";



export const metadata: Metadata = {
  title: "Codeit TodoList",
  description: "Codeit TodoList Web Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className="w-full h-full grid-cols-12"
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
