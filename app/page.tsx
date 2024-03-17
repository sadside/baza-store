import React from "react";
import { API_URL } from "@/source/shared/api/http/custom-instance";
import { HomePage } from "@/source/pages/home";

export interface Category {
  id: number;
  name: string;
  slug: string;
  children: Category[];
}

const getData = async (): Promise<Category[]> => {
  const res = await fetch(`${API_URL}products/path/`);

  if (!res.ok) throw new Error("error");

  return await res.json();
};
const getVideoBlob = async () => {
  const res = await fetch("");

  if (!res.ok) throw new Error("error");

  return await res.json();
};

export default async function Home() {
  const links = await getData();

  return <HomePage links={links} />;
}
