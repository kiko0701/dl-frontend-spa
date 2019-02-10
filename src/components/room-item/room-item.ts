import { Component, Prop, Vue } from 'vue-property-decorator';
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

  constructor() {
    super();
  }
}
