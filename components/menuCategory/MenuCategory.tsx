import { ICategory } from "./menuCategory.interface";

import styles from "./MenuCategory.module.scss";
import { AnimatedText } from "../animatedText/AnimatedText";
import Link from "next/link";
import { useUnit } from "effector-react";
import { $activeCategory } from "@/stores/layout/menu/init";

type Props = {};

export const MenuCategory = ({}: Props) => {
  const category = useUnit($activeCategory);

  return (
    <AnimatedText>
      <div className={styles.wrapper}>
        <div className={styles.category}>{category && category.name}</div>
        <div>
          {category &&
            category.children.map((child) => (
              <Link
                className={styles.subCategory}
                href={`/categories/${child.slug}`}
                key={child.id}
              >
                {child.name}
              </Link>
            ))}
        </div>
      </div>
    </AnimatedText>
  );
};
