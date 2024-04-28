'use client';
import React from 'react';
import { ShowWelcome } from '@entities/show-welcome';
import { useUnit } from 'effector-react';
import { $user } from '@/stores/cart/init';

const Welcome = () => {
  const user = useUnit($user);

  return (
    <>
      <ShowWelcome name={user?.name || 'Клиент'} />
    </>
  );
};

export default Welcome;
