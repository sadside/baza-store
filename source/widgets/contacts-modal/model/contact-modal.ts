import { createEvent, createStore } from 'effector';

export const contactsModalChanged = createEvent<boolean>();

export const $isVisible = createStore(false).on(contactsModalChanged, (_, value) => value);
