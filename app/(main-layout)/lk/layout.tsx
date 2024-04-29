'use client';

import React from 'react';
import { LkLayout } from '@/source/layouts/lk-layout';
import { useGate } from 'effector-react';
import { lkGate } from '@entities/order';

export default function Layout({ children }: { children: React.ReactNode }) {
  useGate(lkGate);

  return <LkLayout children={children} />;
}
