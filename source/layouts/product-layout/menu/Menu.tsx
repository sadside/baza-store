'use client';

import { useEffect, useState } from 'react';
import { DropdownMenu } from '@/components/dropdownMenu/DropdownMenu';
import { useUnit } from 'effector-react';
import { $showCart, mouseLeavedFromCart } from '@/stores/cart/init';
import { Cart } from '@/components/cart/Cart';
import {
  $showSmallMenu,
  $stateOfMenu,
  $videoHeight,
  categoryCleared,
  dropdownMenuClosed,
  menuChanged,
  smallMenuClosed,
  smallMenuOpened,
} from '@/stores/layout/menu/init';
import { menuMounted } from '@/stores/layout/menu/content/init';
import { SmallMenu } from '../smallMenu/SmallMenu';
import { mounted } from '@/stores/favotites/favorites';
import Hamburger from '@/components/Hamburger/Hamburger';
import CategoryHumb from '@/components/Hamburger/category/CategoryHumb';
import { SmallMenuMobile } from '@/components/smallMenuMobile/SmallMenuMobile';
import { CartDrawer } from '@widgets/cart-drawer/ui/cart-drawer';

type Props = { links: any };

const Menu = ({ links }: Props) => {
  return (
    <>
      <div
        onMouseLeave={() => {
          dropdownMenuClosed();
        }}
      >
        <SmallMenu links={links} />
        <SmallMenuMobile links={links} />
        {/*<Cart />*/}
        <DropdownMenu />
        <CartDrawer />
        <Hamburger links={links} />
        <CategoryHumb />
      </div>
    </>
  );
};

export default Menu;
