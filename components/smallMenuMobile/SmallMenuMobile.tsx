import { MenuIcons } from "@/components/menuIcons/MenuIcons";
import MenuLinks from "@/components/menuLinks/MenuLinks";
import Link from "next/link";
import React from "react";

import styles from "./SmallMenuMobile.module.scss";
import SvgSelector from "@shared/utils/SvgSelector";
import { useUnit } from "effector-react";
import { $stateOfMenu, HamburgMenuOpened } from "@/stores/layout/menu/init";
import { usePathname } from "next/navigation";
import Logo from "@shared/assets/logo.svg";

type Props = { links: any[] };

export const SmallMenuMobile = ({ links }: Props) => {
  const menuState = useUnit($stateOfMenu);
  const pathname = usePathname();

  return (
    <div className={styles.wrapper}>
      <div className={styles.hamb} onClick={() => {
        HamburgMenuOpened();
      }}>
        <SvgSelector
          id={menuState === "transparent" && pathname === "/" ? "hamburger-white" : "hamburger"}
        />
      </div>
      <div className={styles.logo}>
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <MenuLinks links={links} mobile={true} />
      <MenuIcons />
    </div>
  );
};
