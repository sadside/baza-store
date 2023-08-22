"use client";
import Link from "next/link";
import { ICategory } from "../menuCategory/menuCategory.interface";

import styles from "./MenuLinks.module.scss";
import {
  $activeCategory,
  $showDropdownMenu,
  $stateOfMenu,
  categorySelected,
  dropdownMenuOpened,
  menuChanged,
} from "@/stores/layout/menu/init";
import { useUnit } from "effector-react";

type Props = { links: any[] };

const MenuLinks = ({ links }: Props) => {
  const activeCategory = useUnit($activeCategory);
  const showDropdownMenu = useUnit($showDropdownMenu);
  const menuState = useUnit($stateOfMenu);

  return (
    <div className={styles.nav}>
      <ul>
        {links.map((link: any) => {
          return (
            <div
              style={{ color: "#000" }}
              onMouseEnter={() => {
                dropdownMenuOpened();
                menuChanged("color");
                categorySelected(link);
              }}
              key={link.id}
            >
              <li
                className={`${
                  activeCategory?.name === link.name &&
                  showDropdownMenu &&
                  styles.active
                }`}
              >
                {link.name}
              </li>
            </div>
          );
        })}
        <Link
          href="/delivery"
          style={{ color: "#000" }}
          onMouseEnter={() => {
            menuChanged("color");
          }}
        >
          <li>ДОСТАВКА</li>
        </Link>
        <Link
          href="/loyalty"
          style={{ color: "#000" }}
          onMouseEnter={() => {
            menuChanged("color");
          }}
        >
          <li>ПРОГРАММА ЛОЯЛЬНОСТИ</li>
        </Link>
      </ul>
    </div>
  );
};

export default MenuLinks;
