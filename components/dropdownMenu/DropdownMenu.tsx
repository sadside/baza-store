import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import styles from "./DropdownMenu.module.scss";
import { DropdownMenuContent } from "../dropdownMenuContent/DropdownMenuContent";
import { ICategory } from "../menuCategory/menuCategory.interface";

type Props = {
  showFullMenu: boolean;
  hideMenu: boolean;
  content: any;
  activeCategory: ICategory | null;
};

export const DropdownMenu = ({
  showFullMenu,
  hideMenu,
  content,
  activeCategory,
}: Props) => {
  return (
    <>
      <AnimatePresence>
        {!hideMenu && activeCategory && Object.keys(activeCategory).length && (
          <motion.div
            className={styles.fullMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 0.4 }}
            exit={{ opacity: 0 }}
          ></motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!hideMenu && activeCategory && Object.keys(activeCategory).length && (
          <motion.div
            className={styles.fullMenuContent}
            animate={{ y: 0 }}
            initial={{ y: "-150%" }}
            exit={{ y: "-150%" }}
            transition={{ duration: 0.3 }}
          >
            <DropdownMenuContent
              content={content}
              activeCategory={activeCategory}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
