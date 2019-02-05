import { HeaderMenu } from '@/components/header-nav-bar/header.interface';

/**
 * デフォルトのヘッダーメニュー定義
 */
export const DEFAULT_HEADER_MENU: HeaderMenu[] = [
  {
    menuTitle: '笑わす',
    path: '/makelaugh',
    icon: 'star',
  },
  {
    menuTitle: '笑う',
    path: '/laugh',
    icon: 'sentiment_very_satisfied',
  },
  {
    menuTitle: 'ランキング',
    path: '/ranking',
    icon: 'favorite',
  },
];
