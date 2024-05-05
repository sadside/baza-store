import { createEvent, createStore, sample } from 'effector';
import { orderGate } from '@widgets/create-order-form/model/create-order-model';

export type ReceiverData = {
  name: string;
  surname: string;
  mail: string;
  phone: string;
};

export const receiverFormSubmitted = createEvent<ReceiverData>();
export const receiverChangeClicked = createEvent();
export const $selectedReceiverInfo = createStore<ReceiverData | null>(null).reset(receiverChangeClicked);

sample({
  clock: receiverFormSubmitted,
  target: $selectedReceiverInfo,
});
