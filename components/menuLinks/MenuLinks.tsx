import { generatePath } from "@/utils/generatePath";
import Link from "next/link";
import { LinkType, links } from "./menuLinks.data";
import { ICategory } from "../menuCategory/menuCategory.interface";

import styles from "./MenuLinks.module.scss";

type Props = {
  setShowFullMenu: (state: boolean, link?: string) => void;
  activeCategory: string | undefined;
};

const MenuLinks = ({ setShowFullMenu, activeCategory }: Props) => {
  return (
    <ul>
      {links.map((link) => {
        return (
          <Link
            href={generatePath(link)}
            style={{ color: "#000" }}
            onMouseEnter={() => setShowFullMenu(true, link.link)}
          >
            <li className={`${activeCategory == link.link && styles.active}`}>
              {link.title}
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default MenuLinks;
