import Image from 'next/image';
import { ProductsCalculate } from '@shared/api/__generated__/generated-api.schemas';

type OrderProductItemProps = {
  product: ProductsCalculate;
};

export const OrderProductItem = ({ product }: OrderProductItemProps) => {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-b-black-50">
      <div className="w-[70px]">
        <Image src={product.image} alt="Фото товара" width={75} height={100} />
      </div>
      <div className="flex flex-col justify-between flex-1 h-[94px] py-2">
        <h2 className="uppercase text-[12px] font-semibold">{product.name}</h2>
        <div className="flex justify-between">
          <div className="text-[12px] font-normal text-black-300">
            {product.color}, {product.size}
          </div>
          {product.quantity ? (
            <div className="font-semibold text-black-300 text-[12px]">
              {product.quantity} x {product.price / 100} ₽
            </div>
          ) : (
            <div className="text-[12px] color-red">Нет в наличии</div>
          )}
        </div>
      </div>
    </div>
  );
};
