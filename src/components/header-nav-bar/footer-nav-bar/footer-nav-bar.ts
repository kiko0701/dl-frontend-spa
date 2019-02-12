import { Component, Prop, Vue } from 'vue-property-decorator';
import { NavBarMenu } from '@/components/header-nav-bar/nav-bar-menu.interface';
import { DEFAULT_NAV_BAR_MENU } from '@/consts/default-header-menu.const';


/**
 * フッターナビゲーションバーコンポーネント
 */
@Component
export default class FooterNavBarComponent extends Vue {

  /** ヘッダーに表示するメニュー */
  @Prop(
    {
      type: Array,
      default: () => DEFAULT_NAV_BAR_MENU,
    },
  ) private headerMenuList!: NavBarMenu[];

  constructor() {
    super();
  }
}
