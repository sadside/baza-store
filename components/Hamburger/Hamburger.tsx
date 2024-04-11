import React from "react";
import { useUnit } from "effector-react";
import s from "./Hamburger.module.scss";
import Link from "next/link";
import {
  $showHamburgMenu,
  categoryBurgerSelected,
  HamburgCategoryOpen,
  HamburgMenuClosed
} from "@/stores/layout/menu/init";
import { ICategory } from "@/components/menuCategory/menuCategory.interface";
import classNames from "classnames";
import SvgSelector from "@shared/utils/SvgSelector";

type Props = { links: any[] };
const Hamburger = ({ links }: Props) => {
  let open = useUnit($showHamburgMenu);
  const categoryClick = (l: ICategory) => {
    categoryBurgerSelected(l);
    HamburgCategoryOpen();
  };

  return (
    <>
      {open && (
        <div className={classNames(s.root, open ? "hidden" : undefined)}>
          <header className={s.top}>
            <div className={s.contentTOP}>
              <Link
                href={"/"}
                onClick={() => HamburgMenuClosed()}
                className={s.logo}
              >
                {" "}
                <SvgSelector id={"logo"} style={{ cursor: "pointer" }} />{" "}
              </Link>
              <span onClick={() => HamburgMenuClosed()}>
                <SvgSelector id={"close"} />
              </span>
            </div>
          </header>
          <div className={s.content}>
            <div className={s.links}>
              {links.map((l) => {
                return (
                  <div key={l.id} className={s.item}>
                    <span className={s.text}>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => categoryClick(l)}
                      >
                        {l.name}
                      </span>
                    </span>
                    {!!l.children.length && (
                      <span
                        className={s.arrow}
                        onClick={() => {
                          categoryBurgerSelected(l);
                          HamburgCategoryOpen();
                        }}
                      >
                        <SvgSelector id={"arrowRight"} />
                      </span>
                    )}
                  </div>
                );
              })}
              <Link
                href="/delivery"
                style={{ color: "#000", textDecoration: "none" }}
                className={s.item}
              >
                <span onClick={() => HamburgMenuClosed()} className={s.text}>
                  ДОСТАВКА
                </span>
              </Link>
              <Link
                href="/loyalty"
                style={{ color: "#000", textDecoration: "none" }}
                className={s.item}
              >
                <span onClick={() => HamburgMenuClosed()} className={s.text}>
                  ПРОГРАММА ЛОЯЛЬНОСТИ
                </span>
              </Link>
            </div>
            <div className={s.bottom}>
              <Link
                onClick={() => HamburgMenuClosed()}
                href={"/auth"}
                className={s.line}
              >
                <span className={s.text}>Аккаунт</span>
              </Link>
              <Link
                onClick={() => HamburgMenuClosed()}
                href={"/cart"}
                className={s.line}
              >
                <span className={s.text}>Корзина</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hamburger;
