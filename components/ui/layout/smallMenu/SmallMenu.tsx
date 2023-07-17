import { MenuIcons } from "@/components/menuIcons/MenuIcons";
import MenuLinks from "@/components/menuLinks/MenuLinks";
import SvgSelector from "@/utils/SvgSelector";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import styles from "./SmallMenu.module.scss";
import { useUnit } from "effector-react";
import {
  $activeCategory,
  $showDropdownMenu,
  $showSmallMenu,
} from "@/stores/layout/menu/init";
import { getMenuContentFx } from "@/stores/layout/menu/content/init";

type Props = {};

export const SmallMenu = (props: Props) => {
  const showSmallMenu = useUnit($showSmallMenu);
  const activeCategory = useUnit($activeCategory);
  const showDropdownMenu = useUnit($showDropdownMenu);

  const isLoading = useUnit(getMenuContentFx.pending);

  return (
    <AnimatePresence>
      {showSmallMenu && !isLoading && (
        <motion.div
          initial={{ y: "-120%" }}
          transition={{
            duration: 0.3,
          }}
          animate={{
            y: 0,
          }}
          exit={{
            y: "-120%",
          }}
          className={styles.wrapper}
          style={
            showDropdownMenu
              ? { borderBottom: "1px solid #fff" }
              : { borderBottom: "1px solid #ccc" }
          }
        >
          <Link className={styles.logo} href="/">
            <SvgSelector id="logo" />
          </Link>
          <MenuLinks />
          <MenuIcons />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
