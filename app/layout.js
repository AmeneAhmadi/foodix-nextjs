import { Barlow_Condensed, Hanken_Grotesk } from "next/font/google";
import LayoutWrapper from "./ui/components/common/LayoutWrapper";
import "./globals.css";

const barlowSans = Barlow_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow-sans",
  subsets: ["latin"],
});
const hankenSans = Hanken_Grotesk({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-hanken-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Foodix - Fast Foods & Restaurants",
  description: "Discover and share the best recipes on Foodix.",
  icons: {
    icon: "/assets/icons/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${barlowSans.variable} ${hankenSans.variable} antialiased`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
