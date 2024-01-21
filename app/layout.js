import { Passion_One, Nunito } from "next/font/google";
import Header from "./components/layouts/Header";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const passionOne = Passion_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-passion-one",
});

const nunito = Nunito({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${passionOne.variable} font-nunito`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
