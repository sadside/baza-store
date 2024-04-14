import { MenuIcons } from "@/components/menuIcons/MenuIcons";
import MenuLinks from "@/components/menuLinks/MenuLinks";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@shared/assets/logo.svg";
import Link from "next/link";
import React from "react";

import styles from "./SmallMenu.module.scss";
import { useUnit } from "effector-react";
import {
  $showDropdownMenu,
  $showSmallMenu,
  $stateOfMenu,
  dropdownMenuClosed,
} from "@/stores/layout/menu/init";

import { IUser } from "@shared/types/models/User";
import { usePathname } from "next/navigation";
import SvgSelector from "@shared/utils/SvgSelector";

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
          className={styles.wrapper}
          // style={
          //   showDropdownMenu
          //     ? { borderBottom: "1px solid #fff" }
          //     : { borderBottom: "1px solid #ccc" }
          // }
        >
          <div className={styles.logoWrapper}>
            <Link
              className={styles.logo}
              href="/"
              onMouseEnter={() => {
                dropdownMenuClosed();
              }}
            >
              <Logo />
            </Link>
          </div>
          <div className={styles.linksWrapper}>
            <MenuLinks links={links} mobile={false} />
            <MenuIcons mobile={false} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
