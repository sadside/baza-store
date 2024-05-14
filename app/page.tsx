import React from "react";
import { API_URL } from "@shared/api/http/axios-instance";
import { HomePage } from "@/source/pages/home";

export interface Category {
  id: number;
  name: string;
  slug: string;
  children: Category[];
}

const getOverlayLinks = async (): Promise<Category[]> => {
  const res = await fetch(`${API_URL}products/path/`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error("error");

  return await res.json();
};

export default async function Home() {
  const links = await getOverlayLinks();

  return <HomePage links={links} />;
}
