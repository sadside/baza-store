'use client';

import { ReactNode, useEffect } from 'react';
import Footer from '../footer/Footer';
import styles from './layout.module.scss';
import Menu from '../menu/Menu';
import '@shared/styles/globals.scss';
import { usePathname } from 'next/navigation';
import { dropdownMenuClosed } from '@/stores/layout/menu/init';

interface LayoutProps {
  children?: ReactNode;
  links: any[];
}

export const Layout = ({ children, links = [] }: LayoutProps) => {
  const pathname = usePathname();

  useEffect(() => {
    if (!localStorage.getItem('products')) localStorage.setItem('products', '[]');
  }, []);

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
