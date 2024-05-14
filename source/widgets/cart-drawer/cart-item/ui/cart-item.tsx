import { IProductCart } from "@/stores/cart/cart.interface";
import Image from "next/image";
import styles from "./cart-item.module.scss";
import { MinusIcon, PlusIcon } from "lucide-react";
import { $productsLoading } from "@entities/cart/model/cart-model";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { useUnit } from "effector-react";
import { Loader } from "@/components/loader/Loader";
import { productDecremented, productIncremented } from "@/source/features/cart-mutation/model/cart-mutation";
import { Skeleton } from "@shared/ui/shadcn/ui/skeleton";

interface CartItemProps extends IProductCart {
}

export const CartItem = ({ slug, image, name, size, color, price, quantityInCart, quantityInShop }: CartItemProps) => {
  const handlePlusClick = () => {
    productIncremented(slug);
  };

  const handleMinusClick = () => {
    productDecremented(slug);
  };

  const loading = useUnit($productsLoading);

  return (
    <div className="flex gap-2 my-2">
      <div className="flex-0">
        <Link href={`/products/${slug}`}>
          <Image src={image} alt={name} width={70} height={100} className={styles.img} />
        </Link>
      </div>
      <div className="w-full text-[12px]">
        <Link href={`/products/${slug}`}>
          <h1 className="mt-2 mb-4 font-semibold text-[12px] uppercase">{name}</h1>
        </Link>
        <p className="text-[12px]  mb-4">
          {color}, {size}
        </p>
        <div className="w-full flex justify-between">
          <div className="flex items-center">
            <span className="max-[400px]:sr-only">Количество</span>
            <button
              className="py-2 bg-gray-100 w-5 rounded h-3 flex items-center justify-center mx-1"
              onClick={handleMinusClick}
            >
              <MinusIcon width={13} />
            </button>
            <p className="font-semibold">
              {loading ? (
                <Skeleton className="bg-black-50 text-black-50 w-full rounded px-2">{quantityInCart}</Skeleton>
              ) : (
                <p className="px-2">{quantityInCart}</p>
              )}
            </p>
            <button
              className=" py-2 bg-gray-100 w-5 rounded h-3 flex items-center justify-center mx-1"
              onClick={handlePlusClick}
              disabled={quantityInCart + 1 > quantityInShop}
            >
              <PlusIcon width={13} color={quantityInCart + 1 > quantityInShop ? "gray" : "black"} />
            </button>
          </div>
          <div className="font-bold">{(price * quantityInCart) / 100} ₽</div>
        </div>
      </div>
    </div>
  );
};
