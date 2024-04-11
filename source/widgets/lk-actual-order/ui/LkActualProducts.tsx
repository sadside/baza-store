import React from "react";
import LkActualInfo from "@/source/features/lk-actual-info/ui/LkActualInfo";
import { ActualOrderActions } from "@/source/features/actual-order-actions";

export const LkActualOrder = () => {
  const actualOrder = {
    id: "vs026775134",
    state: "завершен",
    date: "5 декабря 2022",
    showProduct: true,
    products: [
      {
        id: 123,
        price: 3000,
        image: "/dress.png",
        name: "Сумка Catherine из букле",
        count: 1
      },
      {
        id: 124,
        price: 3000,
        image: "/dress.png",
        name: "Сумка Catherine из букле",
        count: 1
      },
      {
        id: 125,
        price: 3000,
        image: "/dress.png",
        name: "Сумка Catherine из букле",
        count: 1
      },
      {
        id: 126,
        price: 3000,
        image: "/dress.png",
        name: "Сумка Catherine из букле",
        count: 1
      }
    ]

  };
  return (
    <div className="w-full">
      <div className="uppercase font-medium	"> Актуальные заказы</div>
      <LkActualInfo actualOrder={actualOrder} />
      <ActualOrderActions />
    </div>
  );
};
