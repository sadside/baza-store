import ProductItem from "@/components/productItem/ProductItem";

import styles from "./Products.module.scss";
import { IProduct } from "@/models/Product";

const Products = ({ products }: { products: IProduct[] }) => {
  return (
    <div className={styles.productsWrapper}>
      {products.map((product) => (
        <ProductItem
          id={product.id}
          price={product.price}
          name={product.name}
          colours={product.colours}
          image={product.image}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default Products;
