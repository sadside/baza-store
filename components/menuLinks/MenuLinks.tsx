"use client";
import { ICategory } from "../menuCategory/menuCategory.interface";

import styles from "./MenuLinks.module.scss";
import {
  $activeCategory,
  $showDropdownMenu,
  categorySelected,
  dropdownMenuOpened,
} from "@/stores/layout/menu/init";
import { useUnit } from "effector-react";

type Props = { links: any[] };

const MenuLinks = ({ links }: Props) => {
  // const links = useUnit($menuContent);
  const activeCategory = useUnit($activeCategory);
  const showDropdownMenu = useUnit($showDropdownMenu);

  return (
    <div className={styles.nav}>
      <ul>
        {links.map((link: any) => {
          return (
            <div
              style={{ color: "#000" }}
              onMouseEnter={() => {
                dropdownMenuOpened();
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
      </ul>
    </div>
  );
};

export default MenuLinks;
