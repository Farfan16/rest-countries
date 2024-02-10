import type { Metadata } from "next";
import { Inter, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Topbar from "./ui/topbar";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });
const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "REST Countries",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito_sans.className}>
        <Providers>
          <Topbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
