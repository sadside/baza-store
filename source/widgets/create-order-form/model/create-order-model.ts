import { combine, createEffect, createStore, sample, Store } from 'effector';
import { $authPhoneNumber, sendNumberPhoneFxStatus } from '@widgets/create-order-form/model/first-step/first-step';
import { EffectState, status } from 'patronum/status';
import { $user } from '@entities/user/model/user-model';
import { IUser } from '@shared/types/models/User';
import { Address, Calculate, CreateOrder, ViewOrder } from '@shared/api/__generated__/generated-api.schemas';
import { $selectedPickUp, Pickup, pickupChangeClicked } from '@widgets/create-order-form/model/second-step/step';
import {
  $selectedReceiverInfo,
  receiverChangeClicked,
  ReceiverData,
} from '@widgets/create-order-form/model/third-step/step';
import { pending } from 'patronum';
import {
  ordersCalculateRetrieve,
  ordersOrdersCreate,
  ordersPaymentRetrieve,
} from '@shared/api/__generated__/generated-api';
import { createGate } from 'effector-react';
import { cartDrawerClosed } from '@widgets/cart-drawer/model/cart-drawer-model';
import { toast } from 'sonner';
import { paymentButtonClicked } from '@widgets/create-order-form/model/payment-step/payment-step';
import {
  $apartment,
  $floor_number,
  $intercom,
  DELIVERY_TARIFFS,
  TariffSelect,
  tariffSelect,
} from '@widgets/create-order-form/ui/pickup-step/variants/pickup-not-selected/model/pickup-not-selected';
import { redirectFx } from '@shared/lib/utils/helpers/router-instance';
import { $cart, getCartFromServerFx } from '@entities/cart/model/cart-model';
import { AxiosError } from 'axios';
import { getOrdersFx } from '@entities/order/model/order-model';
import { $apiWithGuard } from '@shared/api/http/axios-instance';
import { $addresses } from '@entities/address/model/address-model';

export enum FORM_STEPS {
  AUTH_STEP,
  CONFIRM_CODE_STEP,
  USER_DATA_STEP,
  PICK_UP_STEP,
  RECEIVER_STEP,
  PAYMENT_STEP,
}

const getCurrentStep = (
  sendNUmberStatus: EffectState,
  authPhoneNumber: string | null,
  user: IUser | null,
  selectedPickup: Address | null,
  selectedReceiver: ReceiverData | null
): FORM_STEPS => {
  if (!user) if (sendNUmberStatus === 'done' && authPhoneNumber) return FORM_STEPS.CONFIRM_CODE_STEP;
  if (user) {
    const { email, name, surname, birthday_date } = user as IUser;

    if (![email, name, surname, birthday_date].every((item) => !!item)) return FORM_STEPS.USER_DATA_STEP;
    if ([email, name, surname, birthday_date].every((item) => !!item) && !selectedPickup) {
      return FORM_STEPS.PICK_UP_STEP;
    }
    if (selectedPickup && !selectedReceiver) return FORM_STEPS.RECEIVER_STEP;
    if (selectedReceiver) return FORM_STEPS.PAYMENT_STEP;
  }

  return FORM_STEPS.AUTH_STEP;
};

export const orderCalculateFx = createEffect(async () => {
  try {
    const res = await ordersCalculateRetrieve();

    return res.data;
  } catch (e) {
    throw new Error();
  }
});

export const cancelOrderFx = createEffect(async (id: number) => {
  try {
    const res = await $apiWithGuard.get<ViewOrder[]>('orders/orders/cancel/', {
      params: {
        order_id: id,
      },
    });

    return res.data;
  } catch (e) {
    throw new Error();
  }
});

export const createOrderFx = createEffect(async (data: CreateOrder) => {
  try {
    const res = await ordersOrdersCreate(data);

    return res.data.id;
    //@ts-ignore
  } catch (e: AxiosError) {
    toast.error(`Произошла ошибка при создании заказа. ${e.response.data.error}`);
    throw new Error();
  }
});

export const $createOrderFxStatus = status(createOrderFx);

export const createPaymentFx = createEffect(async (id: number) => {
  try {
    const res = await ordersPaymentRetrieve({ order_id: String(id) });

    return res.data;
  } catch (e) {
    toast.error('Произошла ошибка при создании заказа.');
    throw new Error();
  }
});

export const redirectToPaymentFx = createEffect((url: string) => {
  if (document) window.location.href = url;
});

export const orderGate = createGate();

export const $order = createStore<Calculate | null>(null).reset(orderGate.close);
export const $orderIsCreating = pending([createPaymentFx, createOrderFx]);

//@ts-ignore
export const $currentFormStep: Store<FORM_STEPS> = combine(
  sendNumberPhoneFxStatus,
  $authPhoneNumber,
  $user,
  $selectedPickUp,
  $selectedReceiverInfo,
  getCurrentStep
);

sample({
  clock: orderGate.close,
  target: [pickupChangeClicked, receiverChangeClicked],
});

sample({
  clock: orderGate.open,
  target: cartDrawerClosed,
});

sample({
  clock: [orderGate.open, $addresses],
  source: {
    step: $currentFormStep,
    addresses: $addresses,
  },
  filter: ({ addresses, step }) => {
    return Boolean(addresses?.length) && (step === FORM_STEPS.PICK_UP_STEP || step === FORM_STEPS.RECEIVER_STEP);
  },
  //@ts-ignore
  fn: ({ addresses }) => {
    //@ts-ignore
    const item = addresses?.find((address) => address.is_main) ?? null;

    const res: Pickup = {
      price: item?.type === 'cdek' ? 800 : 1200,
      tariff: item?.type === 'personal' ? DELIVERY_TARIFFS.COMMON : null,
      address: item?.address ?? '',
      //@ts-ignore
      type: item?.type ?? 'personal',
      apartment_number: item?.apartment_number,
      floor_number: item?.floor_number,
      intercom: item?.intercom,
      code: item?.code ?? undefined,
    };

    return res;
  },
  target: $selectedPickUp,
});

sample({
  clock: $currentFormStep,
  source: {
    order: $order,
    step: $currentFormStep,
  },
  filter: ({ order, step }) =>
    (!order && step === FORM_STEPS.PICK_UP_STEP) || (!order && step === FORM_STEPS.RECEIVER_STEP),
  target: orderCalculateFx,
});

sample({
  clock: orderGate.open,
  target: orderCalculateFx,
});

sample({
  clock: orderCalculateFx.doneData,
  target: $order,
});

sample({
  clock: $cart,
  source: orderGate.status,
  filter: (gate) => Boolean(gate),
  target: orderCalculateFx,
});

// @ts-ignore
sample({
  clock: paymentButtonClicked,
  source: {
    receiver: $selectedReceiverInfo,
    receiving: $selectedPickUp,
    apartment_number: $apartment,
    floor_number: $floor_number,
    intercom: $intercom,
    fxStatus: $createOrderFxStatus,
  },
  filter: ({ fxStatus }) => Boolean(fxStatus !== 'pending'),
  fn: ({ receiver, receiving }: { receiver: ReceiverData; receiving: Pickup }) => {
    const res = {
      name: receiver.name,
      surname: receiver.surname,
      email: receiver.mail,
      phone: receiver.phone,
      receiving: receiving.type,
      is_express: receiving?.tariff === DELIVERY_TARIFFS.EXPRESS,
      payment_type: 'online',
      address: receiving?.address,
      code: receiving?.code,
      apartment_number: receiving.apartment_number ?? null,
      floor_number: receiving.floor_number ?? null,
      intercom: receiving.intercom ?? null,
    };

    return res;
  },
  target: createOrderFx,
});

sample({
  clock: createOrderFx.doneData,
  target: [createPaymentFx, getCartFromServerFx],
});

sample({
  clock: createPaymentFx.doneData,
  fn: (data) => data.payment_url,
  target: [redirectFx, getOrdersFx],
});

sample({
  clock: cancelOrderFx.doneData,
  target: getOrdersFx,
});
