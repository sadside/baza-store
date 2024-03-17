import styles from "./product-page.module.scss";
import { ProductInfo } from "@/components/productInfo/ProductInfo";
import { ProductPageImages } from "@/components/productPageImages/ProductPageImages";
import { IFullProduct } from "@shared/types/models/Product";

type Props = {
  product: IFullProduct;
};

export const ProductPage = ({ product }: Props) => {
  return (
    <>
      <div className={styles.wrapper}>
        <ProductPageImages product={product} />
        <ProductInfo product={product} />
      </div>
    </>
  );
};
