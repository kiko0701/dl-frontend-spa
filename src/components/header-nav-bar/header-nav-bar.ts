import { Component, Prop, Vue } from 'vue-property-decorator';
import { HeaderMenu } from './header.interface';


/**
 * ヘッダーナビゲーションバーコンポーネント
 */
@Component
export default class HeaderNavBarComponent extends Vue {

  /** タイトル */
  @Prop({default: 'hogehoge'}) private title!: string;

  /** ヘッダーに表示するメニュー */
  @Prop() private headerMenu!: HeaderMenu[];

  constructor() {
    super();
  }
}
