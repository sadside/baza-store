import Products from "@/components/products/Products";
import styles from "./category-page.module.scss";
import { IProduct } from "@shared/types/models/Product";
import { Breadcrumbs } from "@shared/ui/breadcrumbs/ui/breadcrumbs";

interface CategoryPageProps {
  products: IProduct[];
}

export const CategoryPage = ({ products }: CategoryPageProps) => {
  return (
    <div className={styles.wrapper}>
      <Breadcrumbs />
      <Products products={products} />
    </div>
  );
};
