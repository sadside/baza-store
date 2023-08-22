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
  $stateOfMenu,
  $videoHeight,
} from "@/stores/layout/menu/init";

import { IUser } from "@/models/User";
import { usePathname } from "next/navigation";

type Props = { links: any[] };

export const SmallMenu = ({ links }: Props) => {
  const showSmallMenu = useUnit($showSmallMenu);
  const showDropdownMenu = useUnit($showDropdownMenu);
  const menuState = useUnit($stateOfMenu);
  const pathname = usePathname();

  return (
    <AnimatePresence initial={false}>
      {showSmallMenu && (
        <motion.div
          initial={{ y: "-120%" }}
          transition={{
            duration: 0.3,
            type: "tween",
          }}
          animate={{
            y: 0,
          }}
          exit={{
            y: "-120%",
          }}
          className={`${styles.wrapper} ${
            menuState === "transparent" && pathname === "/"
              ? styles.opacity
              : ""
          }`}
          style={
            showDropdownMenu
              ? { borderBottom: "1px solid #fff" }
              : { borderBottom: "1px solid #ccc" }
          }
        >
          <Link className={styles.logo} href="/">
            <SvgSelector
              id={
                menuState === "transparent" && pathname === "/"
                  ? "logo-white"
                  : "logo"
              }
            />
          </Link>
          <MenuLinks links={links} />
          <MenuIcons />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
