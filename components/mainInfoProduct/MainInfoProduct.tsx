import { IProduct } from "../productItem/productItem.interface";
import { AddToFavorites } from "../ui/addToFavorites/AddToFavorites";
import styles from "./MainInfoProduct.module.scss";

type Props = {
  product: IProduct;
};

export const MainInfoProduct = ({ product }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.productName}>
        <div className={styles.name}>{product.name}</div>
        <AddToFavorites product={product} />
      </div>
      <div className={styles.price}>{product.price / 100} ₽</div>
    </div>
  );
};
