import { AddToFavorites } from "../ui/addToFavorites/AddToFavorites";
import styles from "./MainInfoProduct.module.scss";
import { IFullProduct } from "@/models/Product";

type Props = {
  product: IFullProduct;
};

export const MainInfoProduct = ({ product }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.productName}>
        <div
          className={styles.name}
        >{`${product.name} ${product.current_color.eng_name}`}</div>
        <AddToFavorites product={product} />
      </div>
      <div className={styles.price}>{product.price / 100} ₽</div>
    </div>
  );
};
