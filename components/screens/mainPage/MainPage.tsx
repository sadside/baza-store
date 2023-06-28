import { IProduct } from "@/components/productItem/productItem.interface";
import Products from "@/components/products/Products";
import Head from "next/head";

interface Props {
  products: IProduct[];
}

const MainPage = ({ products }: Props) => {
  return (
    <>
      <Head>
        <title>Главная страница</title>
      </Head>
      <Products products={products} />
    </>
  );
};

export default MainPage;
