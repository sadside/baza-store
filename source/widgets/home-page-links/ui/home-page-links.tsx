"use client";
import styles from "./home-page-links.module.scss";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Category } from "@/app/page";
import SvgSelector from "@/source/shared/utils/SvgSelector";
import { useUnit } from "effector-react";
import { $user } from "@entities/user/model/user-model";
import UserIcon from "@shared/assets/icons/user.svg";
import CartIcon from "@shared/assets/icons/cart.svg";
import { $showManHome, $showWomanHome, changeVisibleMan, changeVisibleWoman } from "@/stores/home/home";

interface categoryLinksProps {
  links: Category[];

}

export const HomePageLinks = ({ links }: categoryLinksProps) => {
  const [showWomenCategories, setShowWomenCategories] = useState(false);
  const [showManCategories, setShowManCategories] = useState(false);

  const user = useUnit($user);
  const womanVisible = useUnit($showWomanHome);
  const manVisible = useUnit($showManHome);

  const LIST_ITEM_VARIANTS: Variants = {
    hidden: {
      opacity: 0,
      y: 15,

      type: "spring"
    },
    visible: {
      opacity: 1,
      y: 0,
      type: "spring"
    }
  };

  return (
    <>
      <div className={styles.header}>
        <Link href="/">
          <SvgSelector id="new-logo" />
        </Link>
        <div className={styles.icons}>
          <Link href={user ? "/lk" : "/auth"}>
            <UserIcon className="fill-white" />
          </Link>
          <Link href="/cart">
            <CartIcon className="fill-white" />
          </Link>
        </div>
      </div>
      <div className={styles.linksBlock}>
        <div className={styles.block} onMouseLeave={() => setShowWomenCategories(false)}>
          <AnimatePresence>
            {showWomenCategories && (
              <motion.div initial="hidden" animate="visible" exit="hidden" variants={LIST_ITEM_VARIANTS}>
                {links[0]?.children.map((link) => (
                  <Link href={`${links[0].slug}/${link.slug}`} className={styles.category}>
                    {link.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          <motion.h2 className={styles.categoryTitle} onMouseEnter={() => setShowWomenCategories(true)}>
            <Link href="/woman">{links[0]?.name}</Link>
          </motion.h2>
        </div>
        <div className={styles.block} onMouseLeave={() => setShowManCategories(false)}>
          <AnimatePresence>
            {showManCategories && (
              <motion.div
                initial="hidden"
                animate="visible"
                className={styles.rightWrapper}
                exit="hidden"
                variants={LIST_ITEM_VARIANTS}
              >
                {links[1]?.children.map((link) => (
                  <Link href={`${links[1].slug}/${link.slug}`} className={styles.category}>
                    {link.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          <motion.h2 className={styles.categoryTitleRight} onMouseEnter={() => setShowManCategories(true)}>
            <Link href="/man">{links[1]?.name}</Link>
          </motion.h2>
        </div>
      </div>
      <div className={styles.linksBlockMobile} onClick={e => e.stopPropagation()}>
        <div className={styles.block}>
          <AnimatePresence>
            {womanVisible && (
              <motion.div initial="hidden" animate="visible" exit="hidden" variants={LIST_ITEM_VARIANTS}>
                {links[0]?.children.map((link) => (
                  <Link href={`${links[0].slug}/${link.slug}`} className={styles.category}>
                    {link.name}
                  </Link>
                ))}
                <Link href={`/woman`} className={styles.category}>
                  ВСЯ ОДЕЖДА
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
          <motion.h2 className={styles.categoryTitle} onMouseEnter={() => changeVisibleWoman(true)}>
            <button onClick={() => changeVisibleWoman(!womanVisible)}>{links[0]?.name}</button>
          </motion.h2>
        </div>
        <div className={styles.block}>
          <AnimatePresence>
            {manVisible && (
              <motion.div
                initial="hidden"
                animate="visible"
                className={styles.rightWrapper}
                exit="hidden"
                variants={LIST_ITEM_VARIANTS}
              >
                {links[1]?.children.map((link) => (
                  <Link href={`${links[1].slug}/${link.slug}`} className={styles.category}>
                    {link.name}
                  </Link>
                ))}
                <Link href={`/man`} className={styles.category}>
                  ВСЯ ОДЕЖДА
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
          <motion.h2 className={styles.categoryTitleRight} onMouseEnter={() => changeVisibleMan(true)}>
            <button onClick={() => changeVisibleMan(!manVisible)}>{links[1]?.name}</button>
          </motion.h2>
        </div>
      </div>
    </>
  );
};
