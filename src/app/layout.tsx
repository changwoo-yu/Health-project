import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FitHeader from "../components/header/header";
import FitFooter from "../components/footer/footer";
import { AuthProvider } from "./context/AuthContext";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <AuthProvider>
          <FitHeader />
          {children}
          <FitFooter />
        </AuthProvider>
      </body>
    </html>
  );
}
