import React from "react";

import styles from "./MenuIcons.module.scss";
import { mouseEnteredToCart } from "@/stores/cart/init";
import SvgSelector from "@/utils/SvgSelector";
import Link from "next/link";
import { MenuCart } from "../ui/layout/cart/MenuCart";
import { disablePageScroll } from "scroll-lock";

type Props = {};

export const MenuIcons = (props: Props) => {
  const handleMouseEnter = () => {
    mouseEnteredToCart();
  };

  return (
    <div className={styles.additional}>
      <Link className={styles.userIcon} href="auth">
        <SvgSelector id="user" />
      </Link>
      <Link
        className={styles.userIcon}
        onMouseEnter={handleMouseEnter}
        href="/cart"
      >
        <div className={styles.iconWrapper}>
          <SvgSelector id="cart" />
          <MenuCart />
        </div>
      </Link>
    </div>
  );
};
