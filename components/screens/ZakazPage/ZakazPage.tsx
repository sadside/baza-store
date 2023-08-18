import React from "react";
import s from "./index.module.scss";
import ZakazDannie from "./ZakazDannie/ZakazDannie";
import MethRec from "./MethRec/MethRec";
import MethOplat from "./MethOplat/MethOplat";
import Button from "@/components/ui/button/Button";
import { Hr } from "@/components/ui/hr/Hr";
type Props = {};
const ZakazPage = ({}: Props) => {
  let Zakaz = {
    price: { delivery: 700, cost: 12200 },
    adres: "Оренбург, Поляничко 9",
    timeOfHran: "3 Дня",
    gifted: "Забрать можно 8 февраля после 17:00",
  };
  return (
    <>
      <div className={s.title}>ОФОРМЛЕНИЕ ЗАКАЗА</div>
      <div className={s.content}>
        <div className={s.blockText}>
          <ZakazDannie main={true} title={"Данные получателя"} />
          <MethRec
            adres={Zakaz.adres}
            gifted={Zakaz.gifted}
            timeOfHran={Zakaz.timeOfHran}
          />
          <MethOplat />
        </div>
        <Hr />
        <div className={s.oform}>
          <div className={s.contentOform}>
            <div className={s.item}>
              <span>Стоимость </span>
              <span className={s.itemPrice}> {Zakaz.price.cost} ₽</span>
            </div>
            <div className={s.item}>
              <span>Доставка </span>
              <span className={s.itemPrice}> {Zakaz.price.delivery} ₽</span>
            </div>
            <div className={s.item}>
              <span className={s.Itog}>Итого </span>
              <span className={s.Itog}>
                {Zakaz.price.cost + Zakaz.price.delivery} ₽
              </span>
            </div>
          </div>
          <Button text="Оформить заказ" style={{ width: "300px" }} />
        </div>
      </div>
    </>
  );
};

export default ZakazPage;
