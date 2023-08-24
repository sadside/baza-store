import Image from "next/image";
import Link from "next/link";
import styles from "./ProductItem.module.scss";
import { IProduct } from "@/models/Product";
import { useInView } from "react-intersection-observer";

const ProductItem = ({
  images,
  product_id,
  name,
  price,
  colors_count,
  slug,
}: IProduct) => {
  const formatter = new Intl.NumberFormat("ru", {
    style: "unit",
    unit: "meter",
    unitDisplay: "long",
  });

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Link className={styles.product} href={`/products/${slug}`} ref={ref}>
      <div>
        {inView ? (
          <Image
            src={images[0].replace(
              "http://127.0.0.1:8000/",
              "http://thebaza.ru/"
            )}
            alt={"j"}
            className={styles.img}
            height={800}
            width={250}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className={styles.sceleton}></div>
        )}
      </div>

      <div className={styles.infoWrap}>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{price / 100} ₽</div>
        <div className={styles.countColor}>
          {formatter.format(colors_count || 1).replace("метр", "цвет")}
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
