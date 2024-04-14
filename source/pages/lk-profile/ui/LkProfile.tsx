import React from "react";
import { LcProfileForm } from "@widgets/lk-profile-form";

export const LkProfile = () => {

  return (
    <div>
      <div className="uppercase font-medium mb-1.5	">Данные пользователя</div>
      <div className="font-medium text-[12px]">
        Информация автоматически заполняется при оформление заказа, что позволяет пропустить лишний шаг и быстрее
        совершать покупки. На номер телефона и e-mail придет уведомление о статусе Вашего заказа. В день рождения мы
        отправим Вам подарок.
      </div>
      <div>
        <LcProfileForm />
      </div>
    </div>
  );
};
