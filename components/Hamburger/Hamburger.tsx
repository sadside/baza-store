"use client";
import React, { useEffect, useState } from "react";
import { useUnit } from "effector-react";
import s from "./Hamburger.module.scss";
import Link from "next/link";
import { $showHamburgMenu, HamburgMenuClosed } from "@/stores/layout/menu/init";
import { ICategory } from "@/components/menuCategory/menuCategory.interface";

import SvgSelector from "@shared/utils/SvgSelector";
import classNames from "classnames";
import styles from "@/components/smallMenuMobile/SmallMenuMobile.module.scss";
import Logo from "@shared/assets/logo.svg";
import MenuLinks from "@/components/menuLinks/MenuLinks";
import { MenuIcons } from "@/components/menuIcons/MenuIcons";
import { $user } from "@entities/user/model/user-model";
import { AnimatePresence, motion } from "framer-motion";

type Props = { links: any[] };
const Hamburger = ({ links }: Props) => {
  const open = useUnit($showHamburgMenu);
  const user = useUnit($user);
  useEffect(() => {
    return () => {
      HamburgMenuClosed();
    };
  }, []);
  const [manVisible, setManVisible] = useState(false);
  const [womanVisible, setWomanVisible] = useState(false);
  return (
    <>
      {open && (
        <div className={s.root}>
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
          <div className={s.content}>
            <div className={s.links}>
              <div className={s.item}>
                    <span className={classNames(s.text, "uppercase mb-[6px]")}>
                      <span
                        style={{ cursor: "pointer" }}
                      >
                        Женщины
                      </span>
                    </span>
                {!womanVisible ?
                  <button onClick={() => setWomanVisible(true)}><SvgSelector id={"arrowTop"} /></button> :
                  <button onClick={() => setWomanVisible(false)}><SvgSelector id={"arrowDown"} /></button>}

              </div>
              <div >
                <AnimatePresence>
                  {womanVisible &&
                    <motion.div
                      animate={{ height: "auto" }}
                      initial={{ height: "0" }}
                      exit={{ height: "0" }}
                      transition={{ duration: 0.4 }}
                      style={{
                        overflow: "hidden",
                        gap: "16px",
                        display: "flex",
                        flexDirection: "column"
                      }}
                    >
                      {/*<div className="pt-[2px]"></div>*/}
                      {links[0].children.map((v: ICategory) => {
                        return (
                          <Link
                            onClick={() => HamburgMenuClosed()}
                            href={`/woman/${v.slug}`}
                            key={v.id}
                            className={s.items}
                          >
                            <span className={s.name}>{v.name}</span>
                          </Link>
                        );
                      })}
                      {/*<div className="pb-[2px]"></div>*/}

                    </motion.div>}
                </AnimatePresence>
              </div>
              <div className={s.item}>
                    <span className={classNames(s.text, "uppercase mt-[6px]")}>
                      <span
                        style={{ cursor: "pointer" }}
                      >
                        мужчины
                      </span>
                    </span>
                {links[1].children[0] ? !manVisible ?
                  <button onClick={() => setManVisible(true)}><SvgSelector id={"arrowTop"} />
                  </button> :
                  <button onClick={() => setManVisible(false)}><SvgSelector id={"arrowDown"} /></button> : ""}
              </div>
              <div className=''>
                <AnimatePresence>
                  {manVisible &&
                    <motion.div
                      animate={{ height: "auto" }}
                      initial={{ height: "0" }}
                      exit={{ height: "0" }}
                      transition={{ duration: 0.4 }}
                      style={{ overflow: "hidden" }}
                    >
                      {links[1].children.map((v: ICategory) => {
                        return (
                          <Link
                            onClick={() => HamburgMenuClosed()}
                            href={`/man/${v.slug}`}
                            key={v.id}
                            className={s.items}
                          >
                            <span className={s.name}>{v.name}</span>
                          </Link>
                        );
                      })}</motion.div>}
                </AnimatePresence>
              </div>
            </div>
            {!user && <div className={s.bottom}>
              <Link
                onClick={() => HamburgMenuClosed()}
                href={"/auth"}
                className={s.line}
              >
                <span className={classNames(s.text, "uppercase")}>вход / регистрация</span>
              </Link>
            </div>}
          </div>
        </div>
      )}
    </>
  );
};

export default Hamburger;
