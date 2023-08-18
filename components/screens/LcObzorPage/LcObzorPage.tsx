import React from "react";
import LcBlock, {
  ObjLc,
} from "../../../../baza-store/components/lcBlock/LcBlock";
import s from "./LcObzorPage.module.scss";
import Welcome from "@/components/welcome/Welcome";

const LcObzorPage = () => {
  let a = [
    { type: "baza", balance: 1845, fast: 458 },
    { type: "zakaz", date: "20.08.22", summa: 18256, status: "доставлен" },
    {
      type: "info",
      name: "Геннадий",
      surname: "Васькин",
      mail: "ebanarot@gmail.com",
      phone: "+7 (123) 123‒45‒67",
    },
  ];
  let b: ObjLc[] = [
    {
      type: "baza",
      strokes: [
        { name: "Акутальный баланс", val: "1845" },
        { name: "Скоро зачисляться", val: "458" },
      ],
    },
    {
      type: "zakaz",
      strokes: [
        { name: "Покупка от", val: "20.08.22" },
        { name: "Сумма", val: "18.256" },
        { name: "Статус", val: "доставлен" },
      ],
    },
    {
      type: "info",
      strokes: [
        { name: "Имя", val: "Геннадий" },
        { name: "Фамилия", val: "васькин" },
        { name: "E-mail", val: "ebanarot@gmail.com" },
        { name: "Телефон", val: "+7 (123) 123‒45‒67" },
      ],
    },
  ];
  return (
    <>
      <Welcome>
        <div className={s.content}>
          {b.map((o) => (
            <LcBlock key={o.type} o={o} />
          ))}
        </div>
      </Welcome>
    </>
  );
};

export default LcObzorPage;
