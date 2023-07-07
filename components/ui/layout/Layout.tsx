import { useState } from "react";
import Footer from "./footer/Footer";
import styles from "./Layout.module.scss";
import Menu from "./menu/Menu";

type Props = { children?: React.ReactNode; content: any };

const Layout = ({ children, content }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Menu content={content} />
      <div className={styles.outlet}>{children}</div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
