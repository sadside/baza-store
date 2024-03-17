"use client";

import React from "react";

import styles from "./MenuIcons.module.scss";
import { $user, mouseEnteredToCart } from "@/stores/cart/init";
import Link from "next/link";
import { MenuCart } from "@/source/layouts/main-layout/cart/MenuCart";
import { disablePageScroll } from "scroll-lock";
import { useSession, signOut } from "next-auth/react";
import { useUnit } from "effector-react";
import { IUser } from "@shared/types/models/User";
import { $stateOfMenu, HamburgMenuOpened } from "@/stores/layout/menu/init";
import { usePathname } from "next/navigation";
import SvgSelector from "@shared/utils/SvgSelector";

type Props = {
  mobile: boolean;
};

export const MenuIcons = ({ mobile }: Props) => {
  const userStm = useUnit($user);
  const menuState = useUnit($stateOfMenu);
  const pathname = usePathname();

  return (
    <div className={styles.additional}>
      <Link className={styles.userIcon} href={userStm ? "/lk/review" : "/auth"}>
        <SvgSelector id={"user"} />
      </Link>
      <Link className={styles.userIcon} href="/cart">
        <SvgSelector id={"cart"} />
      </Link>
      <MenuCart />
      {/*mobile*/}
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
