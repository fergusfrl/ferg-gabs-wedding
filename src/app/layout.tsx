import "./globals.css";
import { Libre_Franklin } from "next/font/google";

const inter = Libre_Franklin({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre-franklin",
});

export const metadata = {
  title: "Gabrielle and Fergus' Wedding",
  description: "A collection of wedding photos from Gabby and Fergus' big day.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
