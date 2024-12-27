import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "NEOGAMES",
  description: "this is a gaming website ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={` ${montserrat.className} dark antialiased`}>
        {children}
      </body>
    </html>
  );
}
