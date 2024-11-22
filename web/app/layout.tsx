import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Shukishahapo",
  description: "Public transport commuting app, track commute expenses",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
