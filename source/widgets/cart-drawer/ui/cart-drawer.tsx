'use client';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@shared/ui/shadcn/ui/sheet';
import { $isCartDrawerVisible, cartDrawerStateChanged, drawerGate } from '@widgets/cart-drawer/model/cart-drawer-model';
import { useGate, useUnit } from 'effector-react';
import { $cart, $cartTotalPrice, $productsLoading } from '@entities/cart/model/cart-model';
import { CartItem } from '@widgets/cart-drawer/cart-item/ui/cart-item';
import { Button } from '@shared/theme/button';
import { Hr } from '@/components/ui/hr/Hr';
import Link from 'next/link';

export const CartDrawer = () => {
  const isVisible = useUnit($isCartDrawerVisible);
  const cart = useUnit($cart);
  const totalPrice = useUnit($cartTotalPrice);

  useGate(drawerGate);

  return (
    <Sheet onOpenChange={(state) => cartDrawerStateChanged(state)} open={isVisible}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Корзина</SheetTitle>
        </SheetHeader>
        <div className="flex-1">
          {cart.map((item) => (
            <>
              <CartItem {...item} />
              <Hr />
            </>
          ))}
        </div>
        <div className="flex w-full justify-between items-center font-semibold mb-2">
          <p>ИТОГО</p>
          <p>{totalPrice / 100} ₽</p>
        </div>
        <div>
          {cart.length > 0 && (
            <Link href="/order">
              <Button.Primary className="mb-3">Оформить заказ</Button.Primary>
            </Link>
          )}
          <Link href="/cart">
            <Button.Secondary>Перейти на страницу корзины</Button.Secondary>
          </Link>
        </div>
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
