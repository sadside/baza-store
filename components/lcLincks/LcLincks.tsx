"use client";

import React from "react";

import styles from "./LcLinsk.module.scss";
import { useStore } from "effector-react";
import Link from "next/link";
import { $activeCategory, clickCategory } from "@/stores/lc/init";

const LcLinks = () => {
  let links = [
    { name: "обзор", id: 1, path: "review" },
    { name: "избранное", id: 2, path: "favourite" },
    { name: "заказы", id: 3, path: "orders" },
    { name: "baza loyalty", id: 4, path: "baza-loyalty" },
    { name: "учетные данные", id: 5, path: "info" }
  ];
  const activeCategory = useStore($activeCategory);
  React.useEffect(() => {
    let path = window.location.pathname;
    path = path.split("/")[2];
    links.forEach((v) => (v.path === path ? clickCategory(v.id) : undefined));
  }, []);
  return (
    <div className={styles.lc}>
      <ul>
        {links.map((link) => {
          return (
            <Link
              href={`/lk/${link.path}`}
              onClick={() => clickCategory(link.id)}
              key={link.id}
              style={{ color: "#000" }}
            >
              <li
                className={`${
                  Number(activeCategory) === link.id && styles.active
                }`}
              >
                {link.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default LcLinks;
