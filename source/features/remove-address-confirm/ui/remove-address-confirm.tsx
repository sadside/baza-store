import { Dialog, DialogContent, DialogHeader } from "@shared/ui/shadcn/ui/dialog";
import { useGate, useUnit } from "effector-react";
import { Button } from "@shared/theme/button";
import {
  $isAddressRemoveConfirmVisible,
  addressModalStateChanged,
  addressPageGate,
  addressRemoveConfirmed,
  addressRemoveNotConfirmed
} from "@/source/features/remove-address-confirm/model/remove-address-confirm-model";
import { deleteAddressesFx } from "@entities/address/model/address-model";

export const RemoveAddressConfirm = () => {
  useGate(addressPageGate);

  const isVisible = useUnit($isAddressRemoveConfirmVisible);

  const notConfirmHandleClick = () => {
    addressRemoveNotConfirmed();
  };

  const confirmHandleClick = () => {
    addressRemoveConfirmed();
  };

  const cartClearLoading = useUnit(deleteAddressesFx.pending);

  return (
    <Dialog open={isVisible} onOpenChange={(value) => addressModalStateChanged(value)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <h2 className="text-center text-[14px] font-semibold uppercase mt-2.5">Удалить адрес?</h2>
        </DialogHeader>
        <div className="mt-8 flex gap-5">
          <Button.Secondary onClick={notConfirmHandleClick}>Нет</Button.Secondary>
          <Button.Primary onClick={confirmHandleClick} loading={cartClearLoading}>
            Да
          </Button.Primary>
        </div>
      </DialogContent>
    </Dialog>
  );
};
