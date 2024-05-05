import { sample } from 'effector';
import { lkGate } from '@entities/order';
import { redirectFx } from '@shared/lib/utils/helpers/router-instance';
import { $user } from '@entities/user/model/user-model';

sample({
  clock: lkGate.open,
  source: $user,
  filter: (user) => !user,
  fn: () => '/',
  target: redirectFx,
});
