import Link from "next/link";
import SvgSelector from "../../../../utils/SvgSelector";
import MenuLinks from "../../../menuLinks/MenuLinks";
import clsx from "clsx";
import styles from "./Menu.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { DropdownMenu } from "@/components/dropdownMenu/DropdownMenu";
import { LinkType } from "@/components/menuLinks/menuLinks.data";
import { ICategory } from "@/components/menuCategory/menuCategory.interface";

type Props = { content?: ICategory[] };

const Menu = ({ content }: Props) => {
  let scroll = 0;
  const defaultOffset = 150;

  const [hideMenu, setHideMenu] = useState(false);
  const [showFullMenu, setShowFullMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ICategory | null>(null);

  const router = useRouter();

  const handleHoverMenuLink = (state: boolean, category?: string) => {
    let flag = false;

    if (category) {
      content?.forEach((contentCategory) => {
        if (flag) return;

        if (contentCategory.slug === category) {
          setShowFullMenu(state);
          setActiveCategory(contentCategory);
          console.log(contentCategory.slug == category);
          flag = true;
        }
        if (!flag) {
          setActiveCategory(null);
        }
      });
    } else {
      if (!state) setActiveCategory(null);
    }
  };

  console.log(content);

  useEffect(() => {
    setActiveCategory(null);
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
      <div
        onMouseLeave={() => {
          setActiveCategory(null);
        }}
      >
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
              style={activeCategory ? { border: "none" } : {}}
            >
              <Link className={styles.logo} href="/">
                <SvgSelector id="logo" />
              </Link>
              <div className={styles.nav}>
                <MenuLinks
                  setShowFullMenu={handleHoverMenuLink}
                  activeCategory={activeCategory?.slug}
                />
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
          activeCategory={activeCategory}
        />
      </div>
    </>
  );
};

export default Menu;
