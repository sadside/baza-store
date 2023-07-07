import ProductItem from "@/components/productItem/ProductItem";
import { IProducts } from "@/components/products/products.interface";

import styles from "./Products.module.scss";
import { notAuthApi } from "@/api/api";
import { useEffect } from "react";

const Products = ({ products }: IProducts) => {
  return (
    <div className={styles.productsWrapper}>
      {products.map((product) => (
        <ProductItem
          id={product.id}
          price={product.price}
          name={product.name}
          countColors={product.countColors}
          image={product.image}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default Products;
