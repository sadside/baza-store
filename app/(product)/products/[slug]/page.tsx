import { IProduct } from "@/components/productItem/productItem.interface";
import { IFullProduct } from "@shared/types/models/Product";
import ProductService from "@/services/ProductService";
import { ProductPage } from "@pages/product";

export interface IProductPageProps {
  product: IProduct;
}

type params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: params) {
  const product: IFullProduct = await getProduct(slug);

  return {
    title: product.name,
    description: `${product.description ? product.description : "Скоро мы добавим описание"}`
  };
}

async function getProduct(slug: string) {
  try {
    const response = await ProductService.getProductBySlug(slug);

    if (!response.ok) throw new Error("error");

    return await response.json();
  } catch {
    return {} as IFullProduct;
  }
}

export default async function({ params: { slug } }: params) {
  const product: IFullProduct = await getProduct(slug);

  return <ProductPage product={product} />;
}
