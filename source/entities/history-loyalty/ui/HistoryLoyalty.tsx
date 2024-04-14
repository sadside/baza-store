import React from "react";
import SvgSelector from "@shared/utils/SvgSelector";
import { ItemHistory } from "@shared/ui/item-history-loyalty";
import Link from "next/link";


export const HistoryLoyalty = () => {
  const historyArray = [
    {
      time: "26.12.2023 13:15:11",
      operation: "Маркетинг",
      history: -50,
      result: 400,
      id: 1
    },
    {
      time: "26.12.2023 13:15:11",
      operation: "Маркетинг",
      history: -50,
      result: 400,
      id: 2
    },
    {
      time: "26.12.2023 13:15:11",
      operation: "Маркетинг",
      history: -50,
      result: 400,
      id: 3
    },
    {
      time: "26.12.2023 13:15:11",
      operation: "Маркетинг",
      history: -50,
      result: 400,
      id: 4
    },
    {
      time: "26.12.2023 13:15:11",
      operation: "Маркетинг",
      history: -50,
      result: 400,
      id: 5
    }
  ];
  return (
    <div className="mt-5">
      <div className=" flex justify-between ">
        <div className="font-medium uppercase">История баллов</div>
        <button><SvgSelector id={"arrow"} /></button>
      </div>
      <div className="mt-5">
        <div className="uppercase   font-medium text-[12px] grid grid-cols-4">
          <div className="text-center">Дата и время</div>
          <div className="text-center">Операция</div>
          <div className="text-center">История</div>
          <div className="text-center">итого</div>
        </div>
        {historyArray.map(h => <ItemHistory obj={h} key={h.id} />)}
      </div>
      <div className="text-black-200 mt-5 text-[12px]">
        Узнайте больше о программе лояльности и условиях получения бонусов на <Link className="text-black" href="/">специальной
        странице.</Link>
      </div>
    </div>
  );
};
