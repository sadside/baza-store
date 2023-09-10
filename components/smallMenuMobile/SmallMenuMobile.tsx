import { MenuIcons } from "@/components/menuIcons/MenuIcons";
import MenuLinks from "@/components/menuLinks/MenuLinks";
import SvgSelector from "@/utils/SvgSelector";
import Link from "next/link";
import React from "react";

import styles from "./SmallMenuMobile.module.scss";
import { useUnit } from "effector-react";
import {
  $showDropdownMenu,
  dropdownMenuClosed,
} from "@/stores/layout/menu/init";

type Props = { links: any[] };

export const SmallMenuMobile = ({ links }: Props) => {
  const showDropdownMenu = useUnit($showDropdownMenu);

  return (
    <div
      className={styles.wrapper}
      style={
        showDropdownMenu
          ? { borderBottom: "1px solid #fff" }
          : { borderBottom: "1px solid #ccc" }
      }
    >
      <Link
        className={styles.logo}
        href="/"
        onMouseEnter={() => {
          dropdownMenuClosed();
        }}
      >
        <SvgSelector id={"logo"} />
      </Link>
      <MenuLinks links={links} mobile={true} />
      <MenuIcons mobile={true} />
    </div>
  );
};
