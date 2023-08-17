"use client";

import { useEffect } from "react";
import Footer from "./footer/Footer";
import styles from "./Layout.module.scss";
import Menu from "./menu/Menu";
import "../../../styles/globals.scss";
import { getUserFx } from "@/stores/auth/auth";

type Props = { children?: React.ReactNode; links: any[] };

const Layout = ({ children, links = [] }: Props) => {
  useEffect(() => {
    getUserFx();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Menu links={links} />
      <div className={styles.outlet}>{children}</div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
