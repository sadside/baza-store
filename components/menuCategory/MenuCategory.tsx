import { ICategory } from "./menuCategory.interface";

import styles from "./MenuCategory.module.scss";
import { AnimatedText } from "../animatedText/AnimatedText";
import Link from "next/link";

type Props = {
  category: ICategory;
};

export const MenuCategory = ({ category: { name, children } }: Props) => {
  return (
    <AnimatedText>
      <div className={styles.wrapper}>
        <div className={styles.category}>{name}</div>
        <div>
          {children.map((child) => (
            <Link
              className={styles.subCategory}
              href={`/categories/${child.slug}`}
            >
              {`${child.name}`}
            </Link>
          ))}
        </div>
      </div>
    </AnimatedText>
  );
};
