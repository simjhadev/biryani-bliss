import Notifications from "@/components/Notifications";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import type { Metadata } from "next";
import { barlow_condensed, montserrat } from "@/utils/fonts";
//import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
import QueryProvider from "@/components/QueryProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Food Restaurant",
  description: "Best Food in Town",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${barlow_condensed.variable} ${montserrat.variable} font-mont`}>
        <AuthProvider>
          <QueryProvider>
            <Notifications />
            <Navbar />
              {children}
            <Footer />
            <ToastContainer position="bottom-right" theme="dark" autoClose={3000} />
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
