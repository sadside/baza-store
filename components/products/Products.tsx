import ProductItem from "@/components/productItem/ProductItem";

import styles from "./Products.module.scss";
import { IProduct } from "@shared/types/models/Product";

const Products = ({ products }: { products: IProduct[] }) => {
  console.log(products);

  return (
    <div className={styles.productsWrapper}>
      {products?.length &&
        products.map((product) => (
          <ProductItem
            product_id={product.product_id}
            price={product.price}
            name={product.name}
            colors_count={product.colors_count}
            images={product.images}
            key={product.modification_id}
            modification_id={product.modification_id}
            slug={product.slug}
            path={product.path}
            old_price={product.old_price}
          />
        ))}
    </div>
  );
};

export default Products;
