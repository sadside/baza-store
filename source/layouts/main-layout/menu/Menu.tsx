'use client';

import { useEffect } from 'react';
import { DropdownMenu } from '@/components/dropdownMenu/DropdownMenu';
// import { Cart } from '@/components/cart/Cart';
import { dropdownMenuClosed } from '@/stores/layout/menu/init';
import { menuMounted } from '@/stores/layout/menu/content/init';
import { SmallMenu } from '../smallMenu/SmallMenu';
import Hamburger from '@/components/Hamburger/Hamburger';
import CategoryHumb from '@/components/Hamburger/category/CategoryHumb';
import { SmallMenuMobile } from '@/components/smallMenuMobile/SmallMenuMobile';
import { CartDrawer } from '@widgets/cart-drawer/ui/cart-drawer';

type Props = { links: any };

const Menu = ({ links }: Props) => {
  useEffect(() => {
    menuMounted();
  }, []);

  return (
    <>
      <div
        onMouseLeave={() => {
          dropdownMenuClosed();
        }}
      >
        <CartDrawer />
        <SmallMenu links={links} />
        <SmallMenuMobile links={links} />
        {/*<Cart />*/}
        <DropdownMenu />
        <Hamburger links={links} />
        <CategoryHumb />
      </div>
    </>
  );
};

export default Menu;
