'use client';

import React from 'react';
import { LkLayout } from '@/source/layouts/lk-layout';
import { useGate, useUnit } from 'effector-react';
import '@/source/layouts/lk-layout/model/lk-layout-model';
import { $user, getUserFx, getUserFxStatus } from '@entities/user/model/user-model';
import { useRouter } from 'next/navigation';
import { lkGate } from '@/source/layouts/lk-layout/model/lk-layout-model';

export default function Layout({ children }: { children: React.ReactNode }) {
  useGate(lkGate);
  const user = useUnit($user);
  const loading = useUnit(getUserFx.pending);

  const router = useRouter();
  const status = useUnit(getUserFxStatus);

  return <LkLayout children={children} />;
}
