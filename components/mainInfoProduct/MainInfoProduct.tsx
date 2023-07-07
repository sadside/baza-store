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
        <AddToFavorites />
      </div>
      <div className={styles.price}>{product.price} ₽</div>
    </div>
  );
};
