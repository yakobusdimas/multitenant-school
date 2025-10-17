import type { Metadata } from "next";
import { Poppins} from "next/font/google";

import "./globals.css";

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});



export const metadata: Metadata = {
  title: "Andalan Smart School",
  description: "Solusi Digital Terlengkap untuk Sekolah Masa Kini",
  icons: {
    icon: "/logo.ico", 
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${PoppinsFont.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
