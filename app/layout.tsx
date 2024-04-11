import "@/source/shared/styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import React from "react";
import { Layout } from "@app/ui/layout";
import "@shared/styles/globals.scss";

export const metadata = {
  title: "BAZA",
  manifest: "/manifest.json",
  themeColor: "#ffffff"
};

export default async function RootLayout({
                                           children
                                         }: {
  children: React.ReactNode;
}) {
  return (
    <html>
    <body>
    <ToastContainer pauseOnHover={false} />
    <Layout>{children}</Layout>
    </body>
    </html>
  );
}
