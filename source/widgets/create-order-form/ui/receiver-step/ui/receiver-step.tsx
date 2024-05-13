import { $currentFormStep, FORM_STEPS } from "@widgets/create-order-form/model/create-order-model";
import { useUnit } from "effector-react";
import { ChangeRecevier } from "@widgets/create-order-form/ui/receiver-step/ui/change-recevier";
import { ReceiverInfo } from "@widgets/create-order-form/ui/receiver-step/ui/receiver-info";
import { $selectedReceiverInfo } from "@widgets/create-order-form/model/third-step/step";

export const ReceiverStep = () => {
  const currentStep: FORM_STEPS = useUnit($currentFormStep);
  const selectedReceiverInfo = useUnit($selectedReceiverInfo);

  if (currentStep >= FORM_STEPS.RECEIVER_STEP) {
    return (
      <div className="mb-6">
        <h2 className="text-base font-semibold mb-[18px] uppercase">Данные получателя</h2>
        {selectedReceiverInfo ? <ReceiverInfo receiver={selectedReceiverInfo} /> : <ChangeRecevier />}
      </div>
    );
  }

  if (currentStep < FORM_STEPS.RECEIVER_STEP) {
    return (
      <div>
        <div className="h-[72px] flex items-center border-t border-t-black-50">
          <h2 className="uppercase text-base font-semibold text-black-100">Данные получателя</h2>
        </div>
      </div>
    );
  }

  return <></>;
};
