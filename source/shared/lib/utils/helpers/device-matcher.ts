'use client';

import { trackMediaQuery } from '@withease/web-api';
import { appStarted } from '@shared/lib/utils/helpers/app-status';

const { mobile, desktop } = trackMediaQuery(
  { mobile: '(max-width: 600px)', desktop: '(min-width: 601px)' },
  {
    setup: appStarted,
  }
);

export { mobile, desktop };
