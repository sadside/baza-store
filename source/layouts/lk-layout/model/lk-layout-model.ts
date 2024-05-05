import { sample } from 'effector';
import { redirectFx } from '@shared/lib/utils/helpers/router-instance';
import { $user, getUserFxStatus, logoutFx } from '@entities/user/model/user-model';
import { createGate } from 'effector-react';

export const lkGate = createGate();

sample({
  clock: lkGate.open,
  source: {
    user: $user,
    status: getUserFxStatus,
  },
  filter: ({ user, status }) => user === null && (status === 'done' || status === 'fail'),
  fn: () => '/',
  target: redirectFx,
});

sample({
  clock: logoutFx.doneData,
  fn: () => '/',
  target: redirectFx,
});
