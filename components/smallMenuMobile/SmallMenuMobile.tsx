import { MenuIcons } from "@/components/menuIcons/MenuIcons";
import MenuLinks from "@/components/menuLinks/MenuLinks";
import SvgSelector from "@/utils/SvgSelector";
import Link from "next/link";
import React from "react";

import styles from "./SmallMenuMobile.module.scss";

type Props = { links: any[] };

export const SmallMenuMobile = ({ links }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.logo} href="/">
        <SvgSelector id={"logo"} />
      </Link>
      <MenuLinks links={links} mobile={true} />
      <MenuIcons mobile={true} />
    </div>
  );
};
