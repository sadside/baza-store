import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import styles from "./DropdownMenu.module.scss";
import { DropdownMenuContent } from "../dropdownMenuContent/DropdownMenuContent";
import { useUnit } from "effector-react";
import { $showDropdownMenu } from "@/stores/layout/menu/init";

type Props = {};

export const DropdownMenu = ({}: Props) => {
  const showDropdownMenu = useUnit($showDropdownMenu);

  return (
    <>
      <AnimatePresence>
        {showDropdownMenu && (
          <motion.div
            className={styles.fullMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
          ></motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showDropdownMenu && (
          <motion.div
            className={styles.fullMenuContent}
            animate={{ y: 0 }}
            initial={{ y: "-150%" }}
            exit={{ y: "-150%" }}
            transition={{ duration: 0.4 }}
            style={{ overflow: "hidden" }}
          >
            <DropdownMenuContent />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
