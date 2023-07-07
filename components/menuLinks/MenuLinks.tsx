import { generatePath } from "@/utils/generatePath";
import Link from "next/link";

type Props = {
  setShowFullMenu: () => void;
};

export type Options = {
  category?: boolean;
  products?: boolean;
};

export type LinkType = {
  title: string;
  link: string;
  options: Options;
};

export const links: LinkType[] = [
  {
    title: "Женщины",
    link: "womens",
    options: {
      category: true,
    },
  },
  {
    title: "Мужчины",
    link: "mans",
    options: {
      category: true,
    },
  },
  {
    title: "Дети",
    link: "kids",
    options: {
      category: true,
    },
  },
  {
    title: "Доставка",
    link: "delivery",
    options: {
      category: false,
    },
  },
  {
    title: "Программа лояльности",
    link: "loyalty",
    options: {
      category: false,
    },
  },
  {
    title: "Товары",
    link: "products",
    options: {
      category: false,
    },
  },
];

console.log("test", generatePath(links[5]));

const MenuLinks = ({ setShowFullMenu }: Props) => {
  return (
    <ul>
      {links.map((link) => {
        return (
          <Link
            href={generatePath(link)}
            style={{ textDecoration: "none", color: "#000" }}
            onMouseEnter={setShowFullMenu}
          >
            <li>{link.title}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default MenuLinks;
