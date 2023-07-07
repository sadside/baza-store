import { IProduct } from "@/components/productItem/productItem.interface";
import { ProductPage } from "@/components/screens/productPage/ProductPage";
import axios from "axios";

export interface IProductPageProps {
  product: IProduct;
}

export default function ({ product }: IProductPageProps) {
  return <ProductPage product={product} />;
}

export const getStaticPaths = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/products");

    const paths = data.map((product: IProduct) => ({
      params: { id: product.id.toString() },
    }));
    console.log(paths);

    return {
      paths,
      fallback: false,
    };
  } catch {
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps = async (context: any) => {
  const { id } = context.params;
  console.log(context.params);

  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/products/${id}`
    );

    return {
      props: {
        product: data,
      },
    };
  } catch {
    return {
      props: {},
    };
  }
};
