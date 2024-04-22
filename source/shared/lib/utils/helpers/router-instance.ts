import { createGate } from 'effector-react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { createEffect } from 'effector';
import { sample } from 'effector';
import { appStarted } from '@shared/lib/utils/helpers/app-status';

export const routerGate = createGate<AppRouterInstance>();

export const redirectFx = createEffect((path: string) => {
  routerGate?.state?.getState()?.push(path);
});
