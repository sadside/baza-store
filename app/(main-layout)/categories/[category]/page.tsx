import { IProduct } from "@shared/types/models/Product";
import CategoriesService from "@/services/CategoriesService";
import { CategoriesPage } from "@/source/pages/categories";

export default async function Category({ params: { category } }: any) {
  const products: IProduct[] = await getProducts(category);

  return <CategoriesPage products={products} />;
}

async function getProducts(category: string) {
  const response = await CategoriesService.getProductsByCategory(category);

  if (!response.ok) throw new Error("error");

  const products = await response.json();

  return products;
}
