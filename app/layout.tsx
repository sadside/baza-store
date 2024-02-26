import Layout from "@/components/ui/layout/Layout";
import "../styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from "@/http";
import { ToastContainer } from "react-toastify";
import { RedirectProvider } from "@/main/providers/redirect-provider";

export const metadata = {
  title: "BAZA",
  manifest: "/manifest.json",
  themeColor: "#ffffff",
};

const getData = async () => {
  const res = await fetch(`${API_URL}products/path/`, {
    cache: "no-store",
  });

  const links = await res.json();

  if (!res.ok) throw new Error("error");

  return links;
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = await getData();

  return (
    <html>
      <body>
        <ToastContainer pauseOnHover={false} />
        <Layout children={children} links={links} />
      </body>
    </html>
  );
}
