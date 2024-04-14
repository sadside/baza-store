<<<<<<< HEAD
'use client';
import Link from 'next/link';
import { ICategory } from '../menuCategory/menuCategory.interface';

import styles from './MenuLinks.module.scss';
=======
"use client";
import styles from "./MenuLinks.module.scss";
>>>>>>> main
import {
  $activeCategory,
  $showDropdownMenu,
  $stateOfMenu,
  dropdownMenuOpened,
<<<<<<< HEAD
  menuChanged,
} from '@/stores/layout/menu/init';
import { useUnit } from 'effector-react';
=======
  menuChanged
} from "@/stores/layout/menu/init";
import { useUnit } from "effector-react";
>>>>>>> main

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
              style={{ color: '#000' }}
              onMouseEnter={() => {
                dropdownMenuOpened();
                if (!mobile) menuChanged('color');
              }}
              key={link.id}
            >
              <li className={`${activeCategory?.name === link.name && showDropdownMenu && styles.active}`}>
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
