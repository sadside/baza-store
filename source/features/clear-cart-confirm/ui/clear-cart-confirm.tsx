import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@shared/ui/shadcn/ui/dialog";
import { useGate, useUnit } from "effector-react";
import {
  $isClearCartModalVisible,
  cartCleanConfirmed,
  cartCleanNotConfirmed,
  cartModalStateChanged,
  cartPageGate
} from "@/source/features/clear-cart-confirm/model/clear-cart-confirm-model";
import { Button } from "@shared/theme/button";
import { clearCartFx } from "@entities/cart/model/cart-model";

export const ClearCartConfirm = () => {
  useGate(cartPageGate);

  const isVisible = useUnit($isClearCartModalVisible);

  const notConfirmHandleClick = () => {
    cartCleanNotConfirmed();
  };

  const confirmHandleClick = () => {
    cartCleanConfirmed();
  };

  const cartClearLoading = useUnit(clearCartFx.pending);

  return (
    <Dialog open={isVisible} onOpenChange={(value) => cartModalStateChanged(value)}>
      <DialogContent className="sm:max-w-[425px]" autoFocus={false}>
        <DialogHeader>
          <h2 className="text-center text-[14px] font-semibold uppercase mt-2.5">Очистить корзину?</h2>
        </DialogHeader>
        <div className="mt-8 flex gap-5" autoFocus={false}>
          <Button.Secondary onClick={notConfirmHandleClick}>Нет</Button.Secondary>
          <Button.Primary onClick={confirmHandleClick} loading={cartClearLoading}>
            Да
          </Button.Primary>
        </div>
      </DialogContent>
    </Dialog>
  );
};
