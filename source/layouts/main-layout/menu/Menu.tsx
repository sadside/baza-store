import { SmallMenu } from '../smallMenu/SmallMenu';
import Hamburger from '@/components/Hamburger/Hamburger';
import CategoryHumb from '@/components/Hamburger/category/CategoryHumb';
import { SmallMenuMobile } from '@/components/smallMenuMobile/SmallMenuMobile';
import { CartDrawer } from '@widgets/cart-drawer/ui/cart-drawer';

type Props = { links: any };

const Menu = ({ links }: Props) => {
  return (
    <>
      <CartDrawer />
      <SmallMenu links={links} />
      <SmallMenuMobile links={links} />
      {/*<Cart />*/}
      <Hamburger links={links} />
      <CategoryHumb />
    </>
  );
};

export default Menu;
