import { Component, Prop, Vue } from 'vue-property-decorator';
import { HeaderMenu } from './header.interface';


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
  @Prop({default: []}) private headerMenuList!: HeaderMenu[];

  constructor() {
    super();
  }

  private mounted() {
    this.headerMenuList = [
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
  }
}
