"use client";

import { ReactNode, useEffect } from "react";
import Footer from "../footer/Footer";
import styles from "./layout.module.scss";
import Menu from "../menu/Menu";
import "@shared/styles/globals.scss";
import { usePathname } from "next/navigation";
import { dropdownMenuClosed, menuChanged } from "@/stores/layout/menu/init";
import {
  getCartFromLocalStorageFx,
  getFavoritesFx,
  getUserFx,
  mounted,
} from "@/stores/cart/init";

interface LayoutProps {
  children?: ReactNode;
  links: any[];
}

export const Layout = ({ children, links = [] }: LayoutProps) => {
  const pathname = usePathname();

  useEffect(() => {
    getUserFx();
    getCartFromLocalStorageFx();
    getFavoritesFx();
    mounted();

    if (!localStorage.getItem("products"))
      localStorage.setItem("products", "[]");
  }, []);

  useEffect(() => {
    // if (pathname === "/") menuChanged("transparent");
    dropdownMenuClosed();
  }, [pathname]);

  return (
    <div className={styles.wrapper}>
      <Menu links={links} />
      <div
        className={styles.outlet}
        style={pathname === "/" ? { marginTop: 0 } : {}}
      >
        {children}
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};
