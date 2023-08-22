import { IFullProduct } from "@/models/Product";
import { IProduct } from "../productItem/productItem.interface";
import styles from "./ProductPageImages.module.scss";
import Image from "next/image";

type Props = {
  product: IFullProduct;
};

export const ProductPageImages = ({ product }: Props) => {
  return (
    <div className={styles.images}>
      {/* {product?.image?.map((image: string) => {
        return (
          <Image
            src={image}
            width={2500}
            height={1150}
            alt="ssss"
            className={styles.productImage}
            key={Math.random() * 100}
          />
        );
      })} */}
      {product.image && (
        <Image
          src={product.image.replace(
            "http://127.0.0.1:8000/",
            "http://thebaza.ru/"
          )}
          width={2500}
          height={1150}
          alt="ssss"
          className={styles.productImage}
          key={product.id}
        />
      )}
    </div>
  );
};
