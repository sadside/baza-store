"use client";

import React from "react";
import Link from "next/link";
import { LkActualOrder } from "@widgets/lk-actual-order";
import LkActualInfo from "@/source/features/lk-actual-info/ui/LkActualInfo";

export type miniOrder = {
  name: string;
  id: number;
  count: number;
  price: number;
  img: string;
};
export type OrderType = {
  date: {
    by: string;
    of: string;
  };
  id: number;
  state: string;
  baza: string;
  children: miniOrder[];
};
export const Orders = () => {
  // const orders = useUnit($orders);
  const orders = [
    {
      id: "vs026775134",
      state: "завершен",
      date: "5 декабря 2022",
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
    },
    {
      id: "vs026775135",
      state: "завершен",
      date: "5 декабря 2022",
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
    },
    {
      id: "vs026775634",
      state: "завершен",
      date: "5 декабря 2022",
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
    },
    {
      id: "vs026777134",
      state: "завершен",
      date: "5 декабря 2022",
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
    },
    {
      id: "vs026975134",
      state: "завершен",
      date: "5 декабря 2022",
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
    }

  ];
  return (
    <>
      {!orders.length ? (
        <>
          <div className="font-medium text-[14px] leading-5 uppercase">Заказы</div>
          <div className=" ont-medium text-[12px] mt-2.5 ">
            У вас пока нет заказов.<br />Для оформления перейдите в каталог
          </div>
          <div className="mt-[30px]">
            <Link
              className="  font-semibold text-[12px] uppercase px-[50px] w-[270px] py-[14px] bg-black text-white mt-[50px]"
              href={"/"}>
              Перейти в каталог
            </Link>
          </div>
        </>
      ) : (
        <div className="w-full">
          <LkActualOrder />

          <div className="gap-5 flex flex-col mt-5">
            {orders.map((o) => (
              <LkActualInfo key={o.id} actualOrder={o} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
