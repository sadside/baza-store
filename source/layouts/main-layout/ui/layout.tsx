'use client';

import { ReactNode } from 'react';
import Footer from '../footer/Footer';
import styles from './layout.module.scss';
import Menu from '../menu/Menu';
import '@shared/styles/globals.scss';
import { usePathname } from 'next/navigation';

interface LayoutProps {
  children?: ReactNode;
  links: any[];
}

export const Layout = ({ children, links = [] }: LayoutProps) => {
  const pathname = usePathname();

  return (
    <div className={styles.wrapper}>
      <Menu links={links} />
      <div className={styles.outlet} style={pathname === '/' ? { marginTop: 0 } : {}}>
        {children}
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};
