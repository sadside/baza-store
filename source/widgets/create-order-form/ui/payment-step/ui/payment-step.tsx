"use click";

import {
  $currentFormStep,
  $order,
  $orderIsCreating,
  FORM_STEPS
} from "@widgets/create-order-form/model/create-order-model";
import { useUnit } from "effector-react";
import { Checkbox } from "@shared/ui/shadcn/ui/checkbox";
import { Button } from "@shared/theme/button";
import {
  $activePaymentMethod,
  $writeOffPoints,
  paymentButtonClicked,
  paymentMethodCheckBoxClicked,
  writeOffPointsCheckBoxClicked
} from "@widgets/create-order-form/model/payment-step/payment-step";
import { AnimatePresence, motion } from "framer-motion";
import { add, format } from "date-fns";
import ru from "date-fns/locale/ru";
import Link from "next/link";
import { Calculate } from "@shared/api/__generated__/generated-api.schemas";

export const PaymentStep = () => {
  const currentStep: FORM_STEPS = useUnit($currentFormStep);
  const calculatedOrder = useUnit($order) as Calculate;

  const handlePointsCLicked = () => {
    writeOffPointsCheckBoxClicked();
  };

  const writeOffPoints = useUnit($writeOffPoints);
  const activePaymentMethod = useUnit($activePaymentMethod);

  const handleCardMethodClick = () => {
    paymentMethodCheckBoxClicked("card");
  };

  const handlePartsMethodClick = () => {
    paymentMethodCheckBoxClicked("parts");
  };

  const orderIsCreating = useUnit($orderIsCreating);

  if (currentStep < FORM_STEPS.PAYMENT_STEP) {
    return (
      <div className="mb-10">
        <div className="h-[72px] flex items-center border-y border-y-black-50">
          <h2 className="uppercase text-base font-semibold text-black-100">СПОСОБЫ ОПЛАТЫ</h2>
        </div>
      </div>
    );
  }

  if (currentStep === FORM_STEPS.PAYMENT_STEP) {
    return (
      <div className="max-w-[544px]">
        {!!calculatedOrder?.available_loyalty && (
          <div className="flex gap-2.5 items-center mb-[22px]">
            <Checkbox checked={writeOffPoints} onClick={handlePointsCLicked} />
            <div onClick={handlePointsCLicked} className="cursor-pointer select-none">
              <p className="text-[12px] font-medium uppercase">Списать баллы</p>
              <p className="text-[12px] font-medium">
                Вы можете списать до <span className="font-semibold">{calculatedOrder.available_loyalty} ₽</span>
              </p>
            </div>
          </div>
        )}
        <h2 className="uppercase text-base font-semibold mb-[18px]">СПОСОБ ОПЛАТЫ</h2>
        <div className="flex gap-2.5 items-center mb-[10px]">
          <Checkbox checked={activePaymentMethod === "card"} onClick={handleCardMethodClick} />
          <p className="text-[12px] font-medium uppercase cursor-pointer select-none" onClick={handleCardMethodClick}>
            БАНКОВСКОЙ КАРТОЙ
          </p>
        </div>
        <div className="flex gap-2.5 items-center mb-[14px]">
          <Checkbox checked={activePaymentMethod === "parts"} onClick={handlePartsMethodClick} />
          <p className="text-[12px] font-medium uppercase cursor-pointer select-none" onClick={handlePartsMethodClick}>
            ДОЛЯМИ - 4 ПЛАТЕЖА ПО 25%
          </p>
        </div>
        <AnimatePresence>
          {activePaymentMethod === "parts" && (
            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
            >
              <p className="text-[14px] text-black-100 mb-2.5">
                Оплатите 25% от стоимости покупки, а оставшиеся 3 части спишутся автоматически с шагом в две недели. Без
                процентов и комиссий, как обычная оплата картой
              </p>
              <div className="bg-[#f6f7f8] rounded-[8px] p-4 flex items-center justify-between gap-[6px]">
                <div className="w-full">
                  <div className="mb-1 text-[12px]">Сегодня</div>
                  <div className="text-[12px] font-semibold mb-3">{calculatedOrder?.price / 400} ₽</div>
                  <div className="bg-[#428BF9] rounded-[6px] h-1.5 w-full animate-pulse"></div>
                </div>
                <div className="w-full text-black-200">
                  <div className="mb-1 text-[12px]">
                    {format(new Date(add(new Date(), { days: 14 })), "dd MMM", {
                      //@ts-ignore
                      locale: ru
                    })}
                  </div>
                  <div className="text-[12px] font-semibold mb-3">{calculatedOrder?.price / 400} ₽</div>
                  <div className="bg-[#d8d9da] rounded-[6px] h-1.5 w-full"></div>
                </div>
                <div className="w-full text-black-200">
                  <div className="mb-1 text-[12px]">
                    {format(new Date(add(new Date(), { days: 28 })), "dd MMM", {
                      //@ts-ignore
                      locale: ru
                    })}
                  </div>
                  <div className="text-[12px] font-semibold mb-3">{calculatedOrder?.price / 400} ₽</div>
                  <div className="bg-[#d8d9da] rounded-[6px] h-1.5 w-full"></div>
                </div>
                <div className="w-full text-black-200">
                  <div className="mb-1 text-[12px]">
                    {format(new Date(add(new Date(), { days: 42 })), "dd MMM", {
                      //@ts-ignore
                      locale: ru
                    })}
                  </div>
                  <div className="text-[12px] font-semibold mb-3">{calculatedOrder?.price / 400} ₽</div>
                  <div className="bg-[#d8d9da] rounded-[6px] h-1.5 w-full"></div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <Button.Primary
          className="mt-6 mb-2 max-[550px]:mt-2.5"
          onClick={() => paymentButtonClicked()}
          loading={orderIsCreating}
          disabled={orderIsCreating}
        >
          Оплатить
        </Button.Primary>
        <div className="text-black-200 mb-5 text-[10px] font-light">
          Нажимая на кнопку, вы соглашаетесь с{" "}
          <Link href="/info/" className="text-black">
            условиями обработки перс. данных
          </Link>
          , а также с
          <Link href="/info/" className="text-black">
            {" "}
            условиями продажи
          </Link>
        </div>
      </div>
    );
  }

  return <></>;
};
