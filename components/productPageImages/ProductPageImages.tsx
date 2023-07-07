import { IProduct } from "../productItem/productItem.interface";
import styles from "./ProductPageImages.module.scss";
import Image from "next/image";

type Props = {
    product: IProduct;
};

export const ProductPageImages = ({ product }: Props) => {
    return (
        <div className={styles.images}>
            {product?.images?.map((image: string) => {
                return (
                    <Image
                        src={image}
                        width={2500}
                        height={1150}
                        alt="ssss"
                        className={styles.productImage}
                        key={product.id}
                    />
                );
            })}
        </div>
    );
};
