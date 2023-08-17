import Image from "next/image";
import Link from "next/link";
import styles from "./ProductItem.module.scss";
import { IProduct } from "@/models/Product";

const ProductItem = ({ image, price, name, colours, id }: IProduct) => {
  const formatter = new Intl.NumberFormat("ru", {
    style: "unit",
    unit: "meter",
    unitDisplay: "long",
  });

  return (
    <Link className={styles.product} href={`/products/${id}`}>
      <div>
        <Image
          src={image.replace(
            "http://localhost:8000/",
            "http://iizhukov.site:8000/"
          )}
          alt={"j"}
          className={styles.img}
          width={376}
          height={502}
          placeholder="blur"
          blurDataURL={image}
          priority
        />
      </div>

      <div className={styles.infoWrap}>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{price / 100} ₽</div>
        <div className={styles.countColor}>
          {formatter.format(colours.length || 1).replace("метр", "цвет")}
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
