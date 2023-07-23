import "./globals.css";
import { Raleway } from "next/font/google";

const inter = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
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
