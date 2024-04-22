import styles from './cart-items-actions.module.scss';
import { $user } from '@/stores/cart/init';
import React from 'react';
import { useUnit } from 'effector-react';
import { IProductCart } from '@/stores/cart/cart.interface';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { productDecremented, productIncremented } from '@entities/cart/model/cart';

interface CartItemsActionsProps {
  product: IProductCart;
}

export const CartItemsActions = ({ product }: CartItemsActionsProps) => {
  const user = useUnit($user);

  const { quantityInCart, quantityInShop, slug, price } = product;

  const handlePlusClick = () => {
    productIncremented(slug);
  };

  const handleMinusClick = () => {
    productDecremented(slug);
  };

  return (
    <>
      <div className="w-full flex justify-between">
        <div className="flex items-center">
          <p className="text-[12px] mr-2">Количество</p>
          <button
            className="py-2 bg-gray-100 w-5 rounded h-3 flex items-center justify-center mx-1"
            onClick={handleMinusClick}
          >
            <MinusIcon width={13} />
          </button>
          <p className="mx-2 font-semibold text-[12px]">{quantityInCart}</p>
          <button
            className=" py-2 bg-gray-100 w-5 rounded h-3 flex items-center justify-center mx-1"
            onClick={handlePlusClick}
            disabled={quantityInCart + 1 > quantityInShop}
          >
            <PlusIcon width={13} color={quantityInCart + 1 > quantityInShop ? 'gray' : 'black'} />
          </button>
        </div>
      </div>
    </>
  );
};
