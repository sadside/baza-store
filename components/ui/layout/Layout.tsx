"use client";

import { useEffect } from "react";
import Footer from "./footer/Footer";
import styles from "./Layout.module.scss";
import Menu from "./menu/Menu";
import "../../../styles/globals.scss";
import { usePathname } from "next/navigation";
import { categoryCleared, menuChanged } from "@/stores/layout/menu/init";
import { getUserFx } from "@/stores/cart/init";

type Props = { children?: React.ReactNode; links: any[] };

const Layout = ({ children, links = [] }: Props) => {
  const pathname = usePathname();

  useEffect(() => {
    getUserFx();
    localStorage.setItem("products", "[]");
  }, []);

  useEffect(() => {
    if (pathname === "/") menuChanged("transparent");
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

export default Layout;
