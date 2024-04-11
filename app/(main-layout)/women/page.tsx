import { CategoryPage } from "@pages/category";
import CategoriesService from "@/services/CategoriesService";

async function getProducts(category: string) {
  const response = await CategoriesService.getProductsByCategory(category);

  if (!response.ok) throw new Error("error");

  const products = await response.json();

  return products;
}

export default async function() {
  const products = await getProducts("zhenshchiny");

  console.log(products);

  return <CategoryPage products={products} />;
}
