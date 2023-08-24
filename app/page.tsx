import MainPage from "@/components/screens/mainPage/MainPage";
import { API_URL } from "@/http";

const getProducts = async () => {
  try {
    const res = await fetch(`${API_URL}products/products/?page_size=20`, {
      next: {
        revalidate: 60,
      },
    });

    if (!res.ok) throw new Error("erroe");

    const products = await res.json();

    return products.results;
  } catch {
    throw new Error("Ошибка загрузки товаров, попробуйте позже");
  }
};

export default async function Home() {
  const products = await getProducts();

  return <MainPage products={products} />;
}
