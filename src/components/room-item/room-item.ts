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

  /** お題コレクション */
  @Prop() private roomItem!: RoomItem;

  @Prop({default: false}) private isShowRanking!: boolean;

  @Prop({default: 1}) private ranking!: number;

  @Prop({default: false}) private isShowScore!: boolean;


  constructor() {
    super();
  }

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
