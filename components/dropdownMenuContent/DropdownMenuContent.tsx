import { AnimatePresence, motion } from "framer-motion";
import { AnimatedText } from "../animatedText/AnimatedText";
import { MenuCategory } from "../menuCategory/MenuCategory";
import { ICategory } from "../menuCategory/menuCategory.interface";
import styles from "./DropdownMenuContent.module.scss";

type Props = {
  content: ICategory[];
  activeCategory: ICategory | null;
};

export const DropdownMenuContent = ({ content, activeCategory }: Props) => {
  return (
    <AnimatePresence>
      <motion.div transition={{ duration: 0.3 }} className={styles.wrapper}>
        <div className={styles.grid}>
          {activeCategory && <MenuCategory category={activeCategory} />}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
