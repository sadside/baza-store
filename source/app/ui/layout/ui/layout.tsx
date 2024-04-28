'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useGate } from 'effector-react';
import { appStarted } from '@shared/lib/utils/helpers/app-status';
import { routerGate } from '@shared/lib/utils/helpers/router-instance';
import '@entities/cart/model/cart';
import '../../../../../stores/cart/init';

type Props = { children?: ReactNode };

export const Layout = ({ children }: Props) => {
  useEffect(() => {
    appStarted();
    if (!localStorage.getItem('products')) localStorage.setItem('products', '[]');
  }, []);
  const router = useRouter();

  useGate(routerGate, router);
  return <>{children}</>;
};
