import { MenuIcons } from "@/components/menuIcons/MenuIcons";
import MenuLinks from "@/components/menuLinks/MenuLinks";
import Link from "next/link";
import React from "react";

import styles from "./SmallMenuMobile.module.scss";
import SvgSelector from "@shared/utils/SvgSelector";

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
