import { sample } from 'effector';
import { redirectFx } from '@shared/lib/utils/helpers/router-instance';
import { $user, getUserFx, getUserFxStatus, logoutFx } from '@entities/user/model/user-model';
import { createGate } from 'effector-react';

export const lkGate = createGate();

sample({
  clock: getUserFx.done,
  source: {
    user: $user,
    opened: lkGate.status,
  },
  filter: ({ user, opened }) => !user && Boolean(opened),
  fn: () => '/',
  target: redirectFx,
});

sample({
  clock: logoutFx.doneData,
  fn: () => '/',
  target: redirectFx,
});
