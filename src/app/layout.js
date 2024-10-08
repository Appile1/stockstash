import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header/header.js";
import Footer from "../components/footer/footer";
import { AuthContextProvide } from "../components/authContext.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "StockStash",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <AuthContextProvide>
          <div className="page-wrapper">
            <Header />
            <main className="main-content">{children}</main>
            <Footer />
          </div>
        </AuthContextProvide>
      </body>
    </html>
  );
}
