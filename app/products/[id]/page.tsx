import { IProduct } from "@/components/productItem/productItem.interface";
import { ProductPage } from "@/components/screens/productPage/ProductPage";
import { IFullProduct } from "@/models/Product";
import ProductService from "@/services/ProductService";
import axios from "axios";

export interface IProductPageProps {
  product: IProduct;
}

type params = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params: { id } }: params) {
  const product = await getProduct(id);

  return { title: product.name };
}

async function getProduct(id: string) {
  try {
    const response = await ProductService.getProductById(id);

    if (!response.ok) throw new Error("error");

    return await response.json();
  } catch {
    return {} as IFullProduct;
  }
}

export default async function ({ params: { id } }: params) {
  const product: IFullProduct = await getProduct(id);
  console.log(product);

  return <ProductPage product={product} />;
}
