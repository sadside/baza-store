import { sample } from 'effector';
import { lkGate } from '@entities/order';
import { $user } from '@/stores/cart/init';
import { redirectFx } from '@shared/lib/utils/helpers/router-instance';

sample({
  clock: lkGate.open,
  source: $user,
  filter: (user) => !user,
  fn: () => '/',
  target: redirectFx,
});
