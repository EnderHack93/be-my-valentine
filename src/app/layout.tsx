import type { Metadata } from "next";
import "./globals.css";
import { noto } from "./config/fonts";



export const metadata: Metadata = {
  title: "Be my Valentine",
  description: "Hecho con mucho amor para mi niña bonita.",
  authors: [{url: "https://example.com", name: "Mauro"}],
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={noto.className + "bg-purple-50"}>
        <div className="container mx-auto lg:my-10 lg:p-10 w-full  rounded-lg">
          {children}
        </div>
      </body>
    </html>
  );
}