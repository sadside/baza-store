'use client';

import { ReactNode, useEffect } from 'react';
import { cartMounted } from '@entities/cart/model/cart';
import { useRouter } from 'next/navigation';
import { useGate } from 'effector-react';
import { getCartFromLocalStorageFx, getFavoritesFx, getUserFx, mounted, testGate } from '@/stores/cart/init';
import { appStarted } from '@shared/lib/utils/helpers/app-status';
import { routerGate } from '@shared/lib/utils/helpers/router-instance';

type Props = { children?: ReactNode };

export const Layout = ({ children }: Props) => {
  useEffect(() => {
    cartMounted();
    appStarted();
    getUserFx();
    getCartFromLocalStorageFx();
    getFavoritesFx();
    mounted();

    if (!localStorage.getItem('products')) localStorage.setItem('products', '[]');
  }, []);
  const router = useRouter();

  useGate(routerGate, router);
  return <>{children}</>;
};
