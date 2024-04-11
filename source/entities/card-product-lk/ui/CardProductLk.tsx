import React from "react";
import { ItemOrderLk } from "@/source/features/lk-actual-info/ui/LkActualInfo";
import Image from "next/image";
import { formatManyofFull } from "@shared/utils/formatMany";

type Props = {
  product: ItemOrderLk
}

export const CardProductLk = ({ product }: Props) => {
  return (
    <div className="flex flex-col items-center w-[190px]  max-[620px]:w-[165px]">
      <Image src={product.image} alt={product.name} width={170} height={200} />
      <div className="w-[97%] font-semibold  uppercase test-[12px] flex justify-center content-center text-center	">
        {product.name}
      </div>
      <div className="font-medium text-[16px]">
        {formatManyofFull(product.price) + " ₽"}
      </div>
    </div>
  );
};

