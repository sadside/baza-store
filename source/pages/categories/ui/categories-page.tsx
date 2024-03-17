import Products from "@/components/products/Products";
import styles from "./categories-page.module.scss";
import { IProduct } from "@shared/types/models/Product";

interface Props {
  products: IProduct[];
}

export const CategoriesPage = ({ products }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Products products={products} />
    </div>
  );
};
