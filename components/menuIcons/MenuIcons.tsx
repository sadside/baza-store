"use client";

import React from "react";

import styles from "./MenuIcons.module.scss";
import { $user, mouseEnteredToCart } from "@/stores/cart/init";
import SvgSelector from "@/utils/SvgSelector";
import Link from "next/link";
import { MenuCart } from "../ui/layout/cart/MenuCart";
import { disablePageScroll } from "scroll-lock";
import { useSession, signOut } from "next-auth/react";
import { useUnit } from "effector-react";
import { IUser } from "@/models/User";
import { $stateOfMenu, HamburgMenuOpened } from "@/stores/layout/menu/init";
import { usePathname } from "next/navigation";

type Props = {
  mobile: boolean;
};

export const MenuIcons = ({ mobile }: Props) => {
  const handleMouseEnter = () => {
    mouseEnteredToCart();
  };

  const userStm = useUnit($user);
  const menuState = useUnit($stateOfMenu);
  const pathname = usePathname();

  return (
    <div className={styles.additional}>
      <Link className={styles.userIcon} href={userStm ? "/lk/review" : "/auth"}>
        <SvgSelector
          id={
            menuState === "transparent" && pathname === "/" && !mobile
              ? "user-white"
              : "user"
          }
        />
      </Link>
      <Link
        className={styles.userIcon}
        // onMouseEnter={handleMouseEnter}
        href="/cart"
      >
        <div className={styles.iconWrapper}>
          <SvgSelector
            id={
              menuState === "transparent" && pathname === "/" && !mobile
                ? "cart-white"
                : "cart"
            }
          />
          <MenuCart />
        </div>
      </Link>
      <div className={styles.hamb} onClick={() => HamburgMenuOpened()}>
        <SvgSelector
          id={
            menuState === "transparent" && pathname === "/" && !mobile
              ? "hamburger-white"
              : "hamburger"
          }
        />
      </div>
    </div>
  );
};
