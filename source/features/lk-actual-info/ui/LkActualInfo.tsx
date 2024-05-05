import React from "react";
import { StateOrderLk } from "@shared/ui/state-order-lk";
import { getLkOrderPrice } from "@shared/utils/getLkOrderPrice";

export type ItemOrderLk = {
  id: number
  price: number
  name: string
  image: string
  count: number
}

type Props = {
  actualOrder: {
    id: string
    state: string
    products: ItemOrderLk[]
    date: string
    showProduct?: boolean
  }
}

const LkActualInfo = ({ actualOrder }: Props) => {
  return (
    <div className="mt-2.5">
      <div className="flex items-center">
        <StateOrderLk state={actualOrder.state} />
        <div
          className="flex ml-5 justify-between w-[91%] max-[1050px]:w-[85%]  max-[850px]:w-[80%]   max-[630px]:w-[75%] max-[540px]:w-[68%] max-[550px]:flex-col">
          <div className="flex ">
            <span className="font-semibold mr-2">{actualOrder.id}</span>
            <span className=" text-black-300  ">{actualOrder.date}</span>
          </div>
          <div>
            <span className=" text-black-300  ">{actualOrder.products.length} товара</span>
            <span className="font-semibold ml-2">{getLkOrderPrice(actualOrder.products)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LkActualInfo;