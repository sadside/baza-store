'use client';

import { DropdownMenu } from '@/components/dropdownMenu/DropdownMenu';
import { dropdownMenuClosed } from '@/stores/layout/menu/init';
import { SmallMenu } from '../smallMenu/SmallMenu';
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
