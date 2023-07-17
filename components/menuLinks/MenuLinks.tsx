import { generatePath } from "@/utils/generatePath";
import Link from "next/link";
import { ICategory } from "../menuCategory/menuCategory.interface";

import styles from "./MenuLinks.module.scss";
import {
  $activeCategory,
  $showDropdownMenu,
  categorySelected,
  dropdownMenuOpened,
} from "@/stores/layout/menu/init";
import { useUnit } from "effector-react";
import { $menuContent } from "@/stores/layout/menu/content/init";

type Props = {};

const MenuLinks = ({}: Props) => {
  const links: ICategory[] = useUnit($menuContent);
  const activeCategory = useUnit($activeCategory);
  const showDropdownMenu = useUnit($showDropdownMenu);

  return (
    <div className={styles.nav}>
      <ul>
        {links.map((link) => {
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
