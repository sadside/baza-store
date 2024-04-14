<<<<<<< HEAD
import styles from './breadcrumbs.module.scss';
import Link from 'next/link';
=======
"use client";

import styles from "./breadcrumbs.module.scss";
import Link from "next/link";
>>>>>>> main

interface Path {
  name: string;
  slug: string;
}

interface BreadcrumbsProps {
<<<<<<< HEAD
  path?: Path[];
=======
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
      slug: "women"
    }
  }
};

function createBreadcrumbs(path: Path) {
  const result: BreadcrumbsData[] = [];
  let currentPath = path;
  let loadedPath = "/";

  result.push({
    name: currentPath.name,
    slug: loadedPath + currentPath.slug
  });

  while (currentPath?.children?.id) {
    if (currentPath?.children !== undefined) {
      loadedPath += currentPath.slug + "/";
      currentPath = currentPath.children;

      result.push({
        name: currentPath.name,
        slug: loadedPath + currentPath.slug
      });
    }
  }

  return result;
>>>>>>> main
}

export const Breadcrumbs = ({ path }: BreadcrumbsProps) => {
  return (
    <div className={styles.wrapper}>
      {path?.map((item, index) => {
        return (
          <Link className={`${index === path.length - 1 ? 'text-black' : ''}`} href={item.slug}>
            {item.name} {index !== path.length - 1 ? ' /' : null}
          </Link>
        );
      })}
    </div>
  );
};
