'use client';

import React from 'react';
import { LkLayout } from '@/source/layouts/lk-layout';
import { useGate, useUnit } from 'effector-react';
import { $user, getUserFx } from '@/stores/cart/init';
import { useRouter } from 'next/navigation';
import { lkGate } from '@entities/order';

export default function Layout({ children }: { children: React.ReactNode }) {
  useGate(lkGate);

  return <LkLayout children={children} />;
}
