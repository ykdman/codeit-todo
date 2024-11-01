import type { Metadata } from "next";
import "@/styles/globals.css";


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
        className=""
      >
        {children}
      </body>
    </html>
  );
}
