import { Component, Prop, Vue } from 'vue-property-decorator';
import { ThemeItem } from '@/components/room-item/theme-item/theme-item.interface';
import { THEME_ITEMS_EXAMPLE } from '@/consts/theme-items-example.const';
import { THEMEITEM_FOOTERMENU_TYPE } from '@/consts/theme-item.const';
import axios from 'axios';
import { RoomItem } from '@/components/room-item/room-item.interface';
import RoomItemComponent from '@/components/room-item/room-item';

/**
 * 「笑う」ページ
 */
@Component({
  // 使用するコンポーネント一覧
  components: {
    // ルームコンポーネント
    'room-item': RoomItemComponent,
  },
})
export default class RankingPageComponent extends Vue {

  /** ルームコレクション */
  private roomItems: RoomItem[] = [];

  private footerMenuType = THEMEITEM_FOOTERMENU_TYPE.ranking;

  constructor() {
    super();
  }

  /**
   * @override
   * ライフサイクルフック
   * インスタンス生成時に、お題リストを取得＆更新する
   */
  private mounted() {
    axios
    .get<RoomItem[]>('http://www.mocky.io/v2/5c5f9da4310000c407f1af52')
    .then((response) => {
      // 取得したお題をお題コレクションに格納
      this.roomItems = THEME_ITEMS_EXAMPLE;
    })
    // エラー処理
    .catch(
      () => {
        this.roomItems = THEME_ITEMS_EXAMPLE;
      },
    );
  }
}
