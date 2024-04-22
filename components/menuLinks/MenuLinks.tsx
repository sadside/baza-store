'use client';

import styles from './MenuLinks.module.scss';
import {
  $activeCategory,
  $showDropdownMenu,
  $stateOfMenu,
  dropdownMenuOpened,
  menuChanged,
} from '@/stores/layout/menu/init';
import { useUnit } from 'effector-react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@shared/ui/shadcn/ui/navigation-menu';
import { ComponentIcon } from 'lucide-react';

type Props = { links: any[]; mobile: boolean };

const MenuLinks = ({ links, mobile }: Props) => {
  const activeCategory = useUnit($activeCategory);
  const showDropdownMenu = useUnit($showDropdownMenu);
  const menuState = useUnit($stateOfMenu);

  console.log(links);

  return (
    <div className={styles.nav}>
      <NavigationMenu>
        <NavigationMenuList>
          {links.map((link: any) => {
            return (
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link href={`/${link.slug}`} key={link.id} className="text-[12px] font-semibold">
                    {link.name}
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-[600px]">
                  <div className="grid w-[400px] p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {link.children.map((item) => {
                      return (
                        <Link
                          href={`/${link.slug}/${item.slug}`}
                          key={item.id}
                          className="flex gap-3 px-4 h-[50px] items-center hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none rounded transition-all duration-500"
                        >
                          {/*<ComponentIcon height={14} width={14} />*/}
                          <div className="text-[12px] font-semibold uppercase">{item.name}</div>
                        </Link>
                      );
                    })}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default MenuLinks;
