import { ROUTES } from 'constants/routes';
import { ISidebarConfig } from '../layout';

import { KeyIcon } from 'components/icons/KeyIcon';
import { HumanIcon } from 'components/icons/HumanIcon';
import { StoreIcon } from 'components/icons/StoreIcon';
import { MessageIcon } from 'components/icons/MessageIcon';
import { TotalsIcon } from 'components/icons/TotalsIcon';
import { PaymentIcon } from 'components/icons/PaymentIcon';
import { TransparentAchiveIcon } from 'components/icons/AchiveIcon';
import { RedExitIcon } from 'components/icons/ExitIcon';
import { FlagIcon } from 'components/icons/FlagIcon';
import { DashboardIcon } from 'components/icons/DashboardIcon';

export const buyerConfig: ISidebarConfig = {
  items: [
    {
      icon: <DashboardIcon />,
      title: 'dashboard',
      href: ROUTES.PRIVATE.DASHBOARD,
    },
    { icon: <MessageIcon />, title: 'messages', href: ROUTES.PRIVATE.MESSAGES },
    { icon: <TotalsIcon />, title: 'sections', href: ROUTES.PRIVATE.SECTIONS },
    { icon: <StoreIcon />, title: 'sellers', href: ROUTES.PRIVATE.SELLERS },
    { icon: <HumanIcon />, title: 'buyers', href: ROUTES.PRIVATE.BUYERS },
    {
      icon: <PaymentIcon />,
      title: 'financial',
      href: ROUTES.PRIVATE.FINANCIAL,
    },
    {
      icon: <TransparentAchiveIcon />,
      title: 'achievement',
      href: ROUTES.PRIVATE.ACHIEVEMENT,
    },
    { icon: <KeyIcon />, title: 'security', href: ROUTES.PRIVATE.SECURITY },
    { icon: <FlagIcon />, title: 'report', href: ROUTES.PRIVATE.REPORT },
    { icon: <RedExitIcon />, title: 'logout', href: ROUTES.AUTH.LOGOUT },
  ],
};
