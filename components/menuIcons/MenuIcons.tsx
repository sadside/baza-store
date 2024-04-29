'use client';

import React, { useEffect } from 'react';

import styles from './MenuIcons.module.scss';
import Link from 'next/link';
import { MenuCart } from '@/source/layouts/main-layout/cart/MenuCart';
import { useUnit } from 'effector-react';
import { $stateOfMenu, HamburgMenuOpened } from '@/stores/layout/menu/init';
import { usePathname } from 'next/navigation';
import SvgSelector from '@shared/utils/SvgSelector';
import { cartDrawerOpened } from '@widgets/cart-drawer/model/cart-drawer-model';
import { $user } from '@entities/user/model/user-model';

type Props = {
  mobile: boolean;
};

export const MenuIcons = ({ mobile }: Props) => {
  const userStm = useUnit($user);
  const menuState = useUnit($stateOfMenu);
  const pathname = usePathname();

  return (
    <div className={styles.additional}>
      <Link className={styles.userIcon} href={userStm !== null ? '/lk' : '/auth'}>
        <SvgSelector id={'user'} />
      </Link>
      <div className={styles.userIcon} onClick={() => cartDrawerOpened()}>
        <SvgSelector id={'cart'} />
        <MenuCart />
      </div>

      {/*mobile*/}
      <div className={styles.hamb} onClick={() => HamburgMenuOpened()}>
        <SvgSelector
          id={menuState === 'transparent' && pathname === '/' && !mobile ? 'hamburger-white' : 'hamburger'}
        />
      </div>
    </div>
  );
};
