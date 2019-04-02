import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { ThemeItem, ThemeItemFooterMenuType } from '@/components/room-item/theme-item/theme-item.interface';
import { THEMEITEM_FOOTERMENU_TYPE } from '@/consts/theme-item.const';
import { RoomItem } from './room-item.interface';
import ThemeItemComponent from './theme-item/theme-item';
/**
 * ルームコンポーネント
 */
@Component
export default class RoomItemComponent extends ThemeItemComponent {

  /** ルーム */
  @Prop() private roomItem!: RoomItem;

  /** 順位を表示するかどうか */
  @Prop({default: false}) private isShowRanking!: boolean;

  /** 順位 */
  @Prop({default: 1}) private ranking!: number;

  /** スコアを表示するかどうか */
  @Prop({default: false}) private isShowScore!: boolean;


  constructor() {
    super();
  }

  /**
   * TODO: 戻り値を定数化すること
   */
  @Watch('ranking')
  private get rankingColor() {
    switch (this.ranking) {
      case 1:
        return 'top';

      case 2:
        return 'second';

      case 3:
        return 'third';

      default:
        return 'others';
    }
  }
}
