import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import styles from "./DropdownMenu.module.scss";
import { DropdownMenuContent } from "../dropdownMenuContent/DropdownMenuContent";

type Props = { showFullMenu: boolean; hideMenu: boolean; content: any };

export const DropdownMenu = ({ showFullMenu, hideMenu, content }: Props) => {
  return (
    <>
      <AnimatePresence>
        {showFullMenu && !hideMenu && (
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
        {showFullMenu && !hideMenu && (
          <motion.div
            className={styles.fullMenuContent}
            animate={{ y: 0 }}
            initial={{ y: "-150%" }}
            exit={{ y: "-150%" }}
            transition={{ duration: 0.3 }}
          >
            <DropdownMenuContent content={content} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
