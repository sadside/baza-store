import Products from "@/components/products/Products";
import { IProduct } from "@/models/Product";
import Head from "next/head";

interface Props {
  products: IProduct[];
}

const MainPage = ({ products }: Props) => {
  return (
    <>
      <Products products={products} />
    </>
  );
};

export default MainPage;
