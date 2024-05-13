"use client";

import React from "react";
import { useUnit } from "effector-react";
import {
  $activeCategoryBurger,
  $showBurgerCategory,
  HamburgCategoryClose,
  HamburgMenuClosed
} from "@/stores/layout/menu/init";
import s from "./Category.module.scss";
import Link from "next/link";
import classNames from "classnames";
import SvgSelector from "@shared/utils/SvgSelector";
import styles from "@/components/smallMenuMobile/SmallMenuMobile.module.scss";
import Logo from "@shared/assets/logo.svg";
import MenuLinks from "@/components/menuLinks/MenuLinks";
import { MenuIcons } from "@/components/menuIcons/MenuIcons";

type Props = { links: any[] };
const CategoryHumb = ({ links }: Props) => {
  let { name, children } = { ...useUnit($activeCategoryBurger) };
  let open = useUnit($showBurgerCategory);
  return (
    <>
      {open ? (
        <div className={classNames(s.root, open ? "hidden" : undefined)}>
          <div className={styles.wrapper}>
            <div className={styles.hamb}
                 onClick={() => {
                   HamburgMenuClosed();
                 }}
            >
              <SvgSelector
                id={"close"}
              />
            </div>
            <div className={styles.logo}>
              <Link href="/">
                <Logo />
              </Link>
            </div>
            <MenuLinks links={links} mobile={true} />
            <MenuIcons />
          </div>
          <header className={s.top}>
            <span className={s.contentTOP}>
              <span className={s.title}>
                <span className={s.btn} onClick={() => HamburgCategoryClose()}>
                  {" "}
                  <SvgSelector id={"arrowLeft"} />
                </span>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => HamburgCategoryClose()}
                >
                  {" "}
                  {name}
                </span>
              </span>
            </span>
          </header>
          <div className={s.content}>
            {children &&
              children.map((v) => {
                return (
                  <Link
                    onClick={() => HamburgMenuClosed()}
                    href={`/categories/${v.slug}`}
                    key={v.id}
                    className={s.items}
                  >
                    <span className={s.name}>{v.name}</span>
                    {v.children &&
                      v.children.map((p) => {
                        return (
                          <Link
                            onClick={() => HamburgMenuClosed()}
                            key={p.id}
                            href={"/categories/" + v.slug + "/" + p.slug}
                            className={s.item}
                          >
                            {p.name}
                          </Link>
                        );
                      })}
                  </Link>
                );
              })}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default CategoryHumb;
