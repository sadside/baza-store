import { createEvent, createStore } from 'effector';
import { boolean } from 'yup';
import { orderGate } from '@widgets/create-order-form/model/create-order-model';

export const writeOffPointsCheckBoxClicked = createEvent();
export const paymentMethodCheckBoxClicked = createEvent<'card' | 'parts'>();

export const $writeOffPoints = createStore(false).on(writeOffPointsCheckBoxClicked, (state) => !state);

export const $activePaymentMethod = createStore<'card' | 'parts'>('card').on(
  paymentMethodCheckBoxClicked,
  (_, method) => method
);

export const paymentButtonClicked = createEvent();
