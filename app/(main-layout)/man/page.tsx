import { CategoryPage } from "@pages/category";
import CategoriesService from "@/services/CategoriesService";

async function getProducts(category: string) {
  const response = await CategoriesService.getProductsByCategory(category);

  if (!response.ok) throw new Error(response.status.toString());

  const products = await response.json();

  return products;
}

export default async function() {
  const products = await getProducts("man");

  return <CategoryPage products={products.products} breadcrumbs={products.breadcrumbs} />;
}
