import React from "react";

import styles from "./MenuIcons.module.scss";
import { mouseEnteredToCart } from "@/stores/cart/init";
import SvgSelector from "@/utils/SvgSelector";
import Link from "next/link";
import { MenuCart } from "../ui/layout/cart/MenuCart";

type Props = {};

export const MenuIcons = (props: Props) => {
  return (
    <div className={styles.additional}>
      <Link className={styles.userIcon} href="auth">
        <SvgSelector id="user" />
      </Link>
      <Link
        className={styles.userIcon}
        onMouseEnter={mouseEnteredToCart}
        href="/cart"
      >
        <SvgSelector id="cart" />
        <MenuCart />
      </Link>
    </div>
  );
};
