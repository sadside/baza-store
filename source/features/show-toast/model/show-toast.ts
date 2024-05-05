import { createEffect } from 'effector';
import { toast } from 'sonner';

export const showEmptyCartToastFx = createEffect(() => {
  toast('Ваша корзина пуста.');
});

export const showProductAddedToastFx = createEffect(() => {
  toast('Товар добавлен в корзину.');
});

export const showProductRemovedToastFx = createEffect(() => {
  toast('Товар удален из корзины.');
});
