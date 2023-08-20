import CategoriesPage from "@/components/screens/categoriesPage/CategoriesPage";
import MainPage from "@/components/screens/mainPage/MainPage";
import { IProduct } from "@/models/Product";
import CategoriesService from "@/services/CategoriesService";

export default async function Category({ params: { category } }: any) {
  const products: IProduct[] = await getProducts(category);

  console.log(products);

  return <CategoriesPage products={products} />;
}

async function getProducts(category: string) {
  const response = await CategoriesService.getProductsByCategory(category);

  if (!response.ok) throw new Error("error");

  const products = await response.json();

  return products.results;
}
