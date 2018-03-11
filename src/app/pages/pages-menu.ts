import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'VIP Monitor',
    icon: 'nb-person',
    link: '/pages/dashboard',
  },
  {
    title: 'History Events',
    icon: 'nb-compose',
    link: '/pages/dashboard',
  },
  {
    title: 'Setting',
    icon: 'nb-gear',
    link: '/pages/dashboard',
  },
];
