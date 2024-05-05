import { sample } from 'effector';
import { lkGate } from '@entities/order';
import { redirectFx } from '@shared/lib/utils/helpers/router-instance';
import { $user, getUserFxStatus } from '@entities/user/model/user-model';

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
