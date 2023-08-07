import { useEffect } from "react";
import { useRouter } from "next/router";

import { DropdownMenu } from "@/components/dropdownMenu/DropdownMenu";

import { useUnit } from "effector-react";

import {
  $showCart,
  mouseLeavedFromCart,
  pageMounted,
} from "@/stores/cart/init";
import { Cart } from "@/components/cart/Cart";
import {
  $showDropdownMenu,
  $showSmallMenu,
  categoryCleared,
  dropdownMenuClosed,
  smallMenuClosed,
  smallMenuOpened,
} from "@/stores/layout/menu/init";
import { menuMounted } from "@/stores/layout/menu/content/init";
import { SmallMenu } from "../smallMenu/SmallMenu";
import { isValidMotionProp } from "framer-motion";

type Props = {};

const Menu = ({}: Props) => {
  const showSmallMenu = useUnit($showSmallMenu);
  const router = useRouter();
  const showCart = useUnit($showCart);

  useEffect(() => {
    mouseLeavedFromCart();
    categoryCleared();
  }, [router.asPath]);

  useEffect(() => {
    menuMounted();
    pageMounted();

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
        <SmallMenu />
        <Cart />
        <DropdownMenu />
      </div>
    </>
  );
};

export default Menu;
