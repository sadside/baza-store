"use client";

import styles from "./breadcrumbs.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";

interface Path {
  id: number;
  name: string;
  slug: string;
  children?: Path;
}

interface BreadcrumbsData {
  name: string;
  slug: string;
}

interface BreadcrumbsProps {
  path?: Path;
}

const mock = {
  id: 1,
  name: "Женщины",
  slug: "women",
  children: {
    id: 2,
    name: "Кардиганы",
    slug: "card",
    children: {
      id: 3,
      name: "Белые",
      slug: "women",
    },
  },
};

function createBreadcrumbs(path: Path) {
  const result: BreadcrumbsData[] = [];
  let currentPath = path;
  let loadedPath = "/";

  result.push({
    name: currentPath.name,
    slug: loadedPath + currentPath.slug,
  });

  while (currentPath?.children?.id) {
    if (currentPath?.children !== undefined) {
      loadedPath += currentPath.slug + "/";
      currentPath = currentPath.children;

      result.push({
        name: currentPath.name,
        slug: loadedPath + currentPath.slug,
      });
    }
  }

  return result;
}

export const Breadcrumbs = ({ path }: BreadcrumbsProps) => {
  const crumbs = createBreadcrumbs(mock);

  return (
    <div className={styles.wrapper}>
      {crumbs.map((item, index) => {
        return (
          <Link
            className={`${index === crumbs.length - 1 ? "text-black" : ""}`}
            href={item.slug}
          >
            {item.name} {index !== crumbs.length - 1 ? " /" : null}
          </Link>
        );
      })}
    </div>
  );
};
