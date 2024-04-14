import Products from '@/components/products/Products';
import styles from './category-page.module.scss';
import { IProduct } from '@shared/types/models/Product';
import { Breadcrumbs } from '@shared/ui/breadcrumbs/ui/breadcrumbs';

interface CategoryPageProps {
  products: IProduct[];
  breadcrumbs: { slug: string; name: string }[];
}

export const CategoryPage = ({ products, breadcrumbs }: CategoryPageProps) => {
  return (
    <div className={styles.wrapper}>
      <Breadcrumbs path={breadcrumbs} />
      <Products products={products} />
    </div>
  );
};
