import MainPage from "@/components/screens/mainPage/MainPage";
import { API_URL } from "@/http";

const getProducts = async () => {
  try {
    const res = await fetch(`${API_URL}products/products/`, {
      next: {
        revalidate: 3600,
      },
    });

    if (!res.ok) throw new Error("error");

    const products = await res.json();

    return products;
  } catch {
    throw new Error("Ошибка загрузки товаров, попробуйте позже");
  }
};

export default async function Home() {
  const products = await getProducts();

  return <MainPage products={products} />;
}
