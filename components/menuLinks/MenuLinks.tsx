"use client";
import Link from "next/link";
import { ICategory } from "../menuCategory/menuCategory.interface";

import styles from "./MenuLinks.module.scss";
import {
  $activeCategory,
  $showDropdownMenu,
  $stateOfMenu,
  categorySelected,
  dropdownMenuClosed,
  dropdownMenuOpened,
  menuChanged,
} from "@/stores/layout/menu/init";
import { useUnit } from "effector-react";

type Props = { links: any[]; mobile: boolean };

const MenuLinks = ({ links, mobile }: Props) => {
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
                if (!mobile) menuChanged("color");
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
            if (!mobile) menuChanged("color");
            dropdownMenuClosed();
          }}
        >
          <li>ДОСТАВКА</li>
        </Link>
        <Link
          href="/loyalty"
          style={{ color: "#000" }}
          onMouseEnter={() => {
            if (!mobile) menuChanged("color");
            dropdownMenuClosed();
          }}
        >
          <li>ПРОГРАММА ЛОЯЛЬНОСТИ</li>
        </Link>
      </ul>
    </div>
  );
};

export default MenuLinks;
