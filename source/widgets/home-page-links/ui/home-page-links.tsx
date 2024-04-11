"use client";
import styles from "./home-page-links.module.scss";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Category } from "@/app/page";
import SvgSelector from "@/source/shared/utils/SvgSelector";

interface categoryLinksProps {
  links: Category[];
}

export const HomePageLinks = ({ links }: categoryLinksProps) => {
  const [showWomenCategories, setShowWomenCategories] = useState(false);
  const [showManCategories, setShowManCategories] = useState(false);

  console.log(links);

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
          <Link href="/cart">
            <SvgSelector id={"cart-white"} />
          </Link>
          <Link href="/auth">
            <SvgSelector id={"user-white"} />
          </Link>
        </div>
      </div>
      <div className={styles.linksBlock}>
        <div
          className={styles.block}
          onMouseLeave={() => setShowWomenCategories(false)}
        >
          <AnimatePresence>
            {showWomenCategories && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={LIST_ITEM_VARIANTS}
              >
                {links[0]?.children.map((link) => (
                  <Link
                    href={`${links[0].slug}/${link.slug}`}
                    className={styles.category}
                  >
                    {link.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          <motion.h2
            className={styles.categoryTitle}
            onMouseEnter={() => setShowWomenCategories(true)}
          >
            <Link href="/women">{links[0]?.name}</Link>
          </motion.h2>
        </div>
        <div
          className={styles.block}
          onMouseLeave={() => setShowManCategories(false)}
        >
          <AnimatePresence>
            {showManCategories && (
              <motion.div
                initial="hidden"
                animate="visible"
                className={styles.rightWrapper}
                exit="hidden"
                variants={LIST_ITEM_VARIANTS}
              >
                {links[1]?.children?.map((link) => (
                  <Link href={link.slug} className={styles.categoryRight}>
                    {link.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          <motion.h2
            className={styles.categoryTitleRight}
            onMouseEnter={() => setShowManCategories(true)}
          >
            {links[1]?.name}
          </motion.h2>
        </div>
      </div>
    </>
  );
};
