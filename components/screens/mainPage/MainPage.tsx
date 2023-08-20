"use client";

import Products from "@/components/products/Products";
import { Video } from "@/components/video/Video";
import { IProduct } from "@/models/Product";
import ReactPlayer from "react-player";
import styles from "./MainPage.module.scss";

interface Props {
  products: IProduct[];
}

const MainPage = ({ products }: Props) => {
  return (
    <>
      <Video />
      <h1 className={styles.title}>Магазин</h1>
      <Products products={products} />
    </>
  );
};

export default MainPage;
