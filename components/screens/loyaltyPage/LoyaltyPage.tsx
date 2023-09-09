"use client"
import { TextBlock } from "@/components/textBlock/TextBlock";
import styles from "./LoyaltyPage.module.scss";
import {toast} from "react-toastify";

type Props = {};

export function LoyaltyPage({}: Props) {

  return (
    <div className={styles.wrapper}>
      <h1>Программа лояльности</h1>
      <TextBlock
        title="Требования к участникам программы"
        type="list"
        text={`Участие в Клубе доступно гражданам РФ старше 18 лет. Лица, достигшие 14 лет, могут принимать участие в Программе только после получения согласия своего родителя (ей), опекуна или законного представителя и своим участием в Программе гарантируют, что такое согласие ими получено. Организатор Программы имеет право запросить письменное подтверждение такого согласия
        Лица моложе 14 лет, при любых обстоятельствах исключены из участия в Программе.
        К участию в Программе не допускаются сотрудники Организатора. 
        В Программе могут принимать участие только физические лица. Представители юридических лиц не могут использовать свое членство в интересах юридического лица, в том числе для совершения покупок от имени юридического лица.`}
      />
      <TextBlock
        title="Получение баллов"
        type="list"
        text={`Как член Клуба, Вы будете получать баллы за покупки, которые Вы совершаете в интернет-магазине, мобильном приложении или розничных магазинах adidas, как определено в Территории действия программы.  
        Баллы не начисляются за покупки с помощью подарочных карт, а также на приобретение самих подарочных карт. 
        Баллы не могут передаваться другим участникам Клуба 
        Баллы не имеют стоимостного выражения и не могут выдаваться в денежном эквиваленте.
        За каждый 1 (Один) потраченный на покупку российский рубль Вы получите 1 балл. 
        В случае возврата покупки или ее части, начисленные за нее баллы будут пропорционально списаны обратно. 
        Баллы за покупки начисляются в течение 7 (семи) календарных дней после фактической передачи товара и оплаты товара/заказа (в зависимости от того, какое из событий произошло позднее).`}
      />
      <TextBlock
        title="Срок действия баллов"
        type="list"
        text={`Клубные баллы действуют в течение 12 (Двенадцати) месяцев. Исключения из этого условия должны быть специально оговорены Организатором. 
        То есть: если Вы заработали баллы 09 июня 2019 года, эти баллы истекут 08 июня 2020 года.`}
      />
    </div>
  );
}
