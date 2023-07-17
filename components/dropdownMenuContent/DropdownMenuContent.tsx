import { AnimatePresence, motion } from "framer-motion";
import { AnimatedText } from "../animatedText/AnimatedText";
import { MenuCategory } from "../menuCategory/MenuCategory";
import { ICategory } from "../menuCategory/menuCategory.interface";
import styles from "./DropdownMenuContent.module.scss";
import { useUnit } from "effector-react";
import { $activeCategory } from "@/stores/layout/menu/init";

type Props = {};

export const DropdownMenuContent = ({}: Props) => {
  const activeCategory = useUnit($activeCategory);

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        <MenuCategory />
      </div>
    </div>
  );
};
