"use client";

import { useEffect } from "react";

import { DropdownMenu } from "@/components/dropdownMenu/DropdownMenu";

import { useUnit } from "effector-react";

import {
  $showCart,
  mouseLeavedFromCart,
  pageMounted,
} from "@/stores/cart/init";
import { Cart } from "@/components/cart/Cart";
import {
  $showSmallMenu,
  categoryCleared,
  dropdownMenuClosed,
  smallMenuClosed,
  smallMenuOpened,
} from "@/stores/layout/menu/init";
import { menuMounted } from "@/stores/layout/menu/content/init";
import { SmallMenu } from "../smallMenu/SmallMenu";
import { mounted } from "@/stores/favotites/favorites";

type Props = { links: any };

const Menu = ({ links }: Props) => {
  const showSmallMenu = useUnit($showSmallMenu);
  const showCart = useUnit($showCart);

  useEffect(() => {
    mouseLeavedFromCart();
    categoryCleared();
    menuMounted();
    pageMounted();
    mounted();

    let scroll = 0;

    const defaultOffset = 150;

    const scrollPosition = (): number =>
      window.scrollY || document.documentElement.scrollTop;

    const scrollListener = () => {
      if (
        scrollPosition() > scroll &&
        showSmallMenu &&
        scroll >= defaultOffset &&
        !showCart
      ) {
        dropdownMenuClosed();
        smallMenuClosed();
      } else {
        smallMenuOpened();
      }
      scroll = scrollPosition();
    };

    window.addEventListener("scroll", scrollListener);

    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <>
      <div
        onMouseLeave={() => {
          dropdownMenuClosed();
        }}
      >
        <SmallMenu links={links} />
        <Cart />
        <DropdownMenu />
      </div>
    </>
  );
};

export default Menu;
