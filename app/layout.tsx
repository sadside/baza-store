import Layout from "@/components/ui/layout/Layout";
import "../styles/globals.scss";
import CategoriesService from "@/services/CategoriesService";
import AuthService from "@/services/AuthService";
import { cookies } from "next/headers";
import { API_URL } from "@/http";
import { IUser } from "@/models/User";
import { ICategory } from "@/components/menuCategory/menuCategory.interface";

export const metadata = {
  title: "BAZA",
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
        <Layout children={children} links={links} />
      </body>
    </html>
  );
}
