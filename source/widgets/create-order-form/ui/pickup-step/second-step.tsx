"use client";

import { $currentFormStep, FORM_STEPS } from "@widgets/create-order-form/model/create-order-model";
import { useUnit } from "effector-react";
import { $selectedPickUp } from "@widgets/create-order-form/model/second-step/step";
import { PickupNotSelected } from "./variants/pickup-not-selected/ui/pickup-not-selected";
import { AddressItem } from "@entities/address/ui/address-item";

export const SecondStep = () => {
  const currentStep: FORM_STEPS = useUnit($currentFormStep);
  const selectedPickUp = useUnit($selectedPickUp);

  if (currentStep >= FORM_STEPS.PICK_UP_STEP)
    return (
      <div className="mb-6">
        <h2 className="text-base font-semibold mb-[18px] uppercase">Способ получения</h2>
        {selectedPickUp ? <AddressItem address={selectedPickUp} /> : <PickupNotSelected />}
      </div>
    );

  if (currentStep < FORM_STEPS.PICK_UP_STEP)
    return (
      <div className="h-[72px] flex items-center border-t border-t-black-50">
        <h2 className="uppercase text-base font-semibold text-black-100">Способ получения</h2>
      </div>
    );

  return <></>;
};
