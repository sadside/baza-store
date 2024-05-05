import { MenuIcons } from '@/components/menuIcons/MenuIcons';
import MenuLinks from '@/components/menuLinks/MenuLinks';
import Logo from '@shared/assets/logo.svg';
import Link from 'next/link';
import React from 'react';

import styles from './SmallMenu.module.scss';

type Props = { links: any[] };

export const SmallMenu = ({ links }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <Link className={styles.logo} href="/">
          <Logo />
        </Link>
      </div>
      <div className={styles.linksWrapper}>
        <MenuLinks links={links} mobile={false} />
        <MenuIcons mobile={false} />
      </div>
    </div>
  );
};
