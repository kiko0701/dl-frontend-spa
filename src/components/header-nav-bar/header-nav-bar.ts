import { Component, Prop, Vue } from 'vue-property-decorator';
import { NavBarMenu } from './nav-bar-menu.interface';
import { DEFAULT_NAV_BAR_MENU } from '@/consts/default-header-menu.const';


/**
 * ヘッダーナビゲーションバーコンポーネント
 */
@Component
export default class HeaderNavBarComponent extends Vue {

  /** タイトル */
  @Prop({default: 'waraishini'}) private title!: string;

  /** タブメニュー表示切り替え用 */
  @Prop({default: true}) private tabsRender!: boolean;

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
