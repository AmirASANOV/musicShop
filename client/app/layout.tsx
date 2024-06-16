import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import s from "./style.module.scss";
import Link from "next/link";
import { StoreProvider } from "../store/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music Shop",
  description: "The Most Better Music Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <StoreProvider>
          <Header />
          <Link href="/basket">
            <ShoppingBagIcon className={s.icon} />
          </Link>
          <main>{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}
