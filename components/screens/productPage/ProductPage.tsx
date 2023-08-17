"use client";

import styles from "./ProductPage.module.scss";
import Image from "next/image";
import { ProductInfo } from "@/components/productInfo/ProductInfo";
import Head from "next/head";
import { ProductPageImages } from "@/components/productPageImages/ProductPageImages";
import { IFullProduct, IProduct } from "@/models/Product";

type Props = {
  product: IFullProduct;
};

export const ProductPage = ({ product }: Props) => {
  console.log(product);

  return (
    <>
      <div className={styles.wrapper}>
        <ProductPageImages product={product} />
        <ProductInfo product={product} />
      </div>
    </>
  );
};
