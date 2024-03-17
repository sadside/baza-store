import React from "react";
import { useUnit } from "effector-react";
import {
  $activeCategoryBurger,
  $showBurgerCategory,
  HamburgCategoryClose,
  HamburgMenuClosed,
} from "@/stores/layout/menu/init";
import s from "./Category.module.scss";
import Link from "next/link";
import classNames from "classnames";
import SvgSelector from "@shared/utils/SvgSelector";

const CategoryHumb = () => {
  let { name, children } = { ...useUnit($activeCategoryBurger) };
  let open = useUnit($showBurgerCategory);
  return (
    <>
      {open ? (
        <div className={classNames(s.root, open ? "hidden" : undefined)}>
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
              <span className={s.btn} onClick={() => HamburgMenuClosed()}>
                <SvgSelector id={"close"} />
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
