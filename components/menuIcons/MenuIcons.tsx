"use client";

import styles from "./MenuIcons.module.scss";
import Link from "next/link";
import { MenuCart } from "@/source/layouts/main-layout/cart/MenuCart";
import { useUnit } from "effector-react";
import { HamburgMenuClosed } from "@/stores/layout/menu/init";
import { cartDrawerOpened } from "@widgets/cart-drawer/model/cart-drawer-model";
import { $user } from "@entities/user/model/user-model";
import UserIcon from "@shared/assets/icons/user.svg";
import CartIcon from "@shared/assets/icons/cart.svg";


export const MenuIcons = () => {
  const userStm = useUnit($user);


  return (
    <div className={styles.additional}>
      <Link onClick={() => HamburgMenuClosed()} href={userStm ? "/lk" : "/auth"} className="mr-5 cursor-pointer">
        <UserIcon className="fill-black" />
      </Link>
      <div className="cursor-pointer flex items-center" onClick={() => {
        HamburgMenuClosed();
        cartDrawerOpened();
      }}>
        <CartIcon className="fill-black" />
        <MenuCart />
      </div>

      {/*mobile*/}
      {/*<div className={styles.hamb} onClick={() => HamburgMenuOpened()}>*/}
      {/*  <SvgSelector*/}
      {/*    id={menuState === 'transparent' && pathname === '/' && !mobile ? 'hamburger-white' : 'hamburger'}*/}
      {/*  />*/}
      {/*</div>*/}
    </div>
  );
};
