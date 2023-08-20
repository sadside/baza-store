"use client";

import React from "react";

import styles from "./MenuIcons.module.scss";
import { mouseEnteredToCart } from "@/stores/cart/init";
import SvgSelector from "@/utils/SvgSelector";
import Link from "next/link";
import { MenuCart } from "../ui/layout/cart/MenuCart";
import { disablePageScroll } from "scroll-lock";
import { useSession, signOut } from "next-auth/react";
import { useUnit } from "effector-react";
import { $user } from "@/stores/auth/auth";
import { IUser } from "@/models/User";

type Props = {};

export const MenuIcons = ({}: Props) => {
  const handleMouseEnter = () => {
    mouseEnteredToCart();
  };

  const userStm = useUnit($user);

  return (
    <div className={styles.additional}>
      <Link className={styles.userIcon} href={userStm ? "/lk/review" : "/auth"}>
        <SvgSelector id="user" />
      </Link>
      <Link
        className={styles.userIcon}
        // onMouseEnter={handleMouseEnter}
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
