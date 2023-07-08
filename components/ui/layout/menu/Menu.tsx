import Link from "next/link";
import SvgSelector from "../../../../utils/SvgSelector";
import MenuLinks from "../../../menuLinks/MenuLinks";
import clsx from "clsx";
import styles from "./Menu.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { DropdownMenu } from "@/components/dropdownMenu/DropdownMenu";

type Props = { content?: any };

const Menu = ({ content }: Props) => {
  let scroll = 0;
  const defaultOffset = 150;

  const [hideMenu, setHideMenu] = useState(false);
  const [showFullMenu, setShowFullMenu] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setShowFullMenu(false);
  }, [router.asPath]);

  useEffect(() => {
    const scrollPosition = (): number =>
      window.scrollY || document.documentElement.scrollTop;

    const scrollListener = () => {
      if (scrollPosition() > scroll && !hideMenu && scroll >= defaultOffset) {
        setHideMenu(true);
      } else {
        setHideMenu(false);
      }
      scroll = scrollPosition();
    };

    window.addEventListener("scroll", scrollListener);

    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <>
      <div onMouseLeave={() => setShowFullMenu(false)}>
        <AnimatePresence>
          {!hideMenu && (
            <motion.div
              initial={{ y: "-110%" }}
              transition={{
                duration: 0.3,
              }}
              animate={{
                y: 0,
              }}
              exit={{
                y: "-110%",
              }}
              className={styles.wrapper}
              style={showFullMenu ? { border: "none" } : {}}
            >
              <Link className={styles.logo} href="/">
                <SvgSelector id="logo" />
              </Link>
              <div className={styles.nav}>
                <MenuLinks setShowFullMenu={() => setShowFullMenu(true)} />
              </div>
              <div className={styles.additional}>
                <Link className={styles.userIcon} href="auth">
                  <SvgSelector id="user" />
                </Link>
                <div className={styles.userIcon}>
                  <SvgSelector id="cart" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <DropdownMenu
          showFullMenu={showFullMenu}
          hideMenu={hideMenu}
          content={content}
        />
      </div>
    </>
  );
};

export default Menu;
