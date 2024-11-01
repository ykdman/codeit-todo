import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/header";


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
    <html >
      <body
        className="w-full h-full"
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
