import { Component, Prop, Vue } from 'vue-property-decorator';
import { ThemeItem } from '@/components/theme-item/theme-item.interface';
import { THEME_ITEMS_EXAMPLE } from '@/consts/theme-items-example.const';
import ThemeItemComponent from '@/components/theme-item/theme-item.vue';
import axios from 'axios';

/**
 * 「笑う」ページ
 */
@Component({
  // 使用するコンポーネント一覧
  components: {
    // お題コンポーネント
    'theme-item': ThemeItemComponent,
  },
})
export default class LaughPageComponent extends Vue {

  /** お題コレクション */
  private themeItems: ThemeItem[] = [];

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
    .get<ThemeItem[]>('http://www.mocky.io/v2/5c5713f64d000041100fd01c')
    .then((response) => {
      // 取得したお題をお題コレクションに格納
      this.themeItems = response.data || [];
    })
    // エラー処理
    .catch(
      () => {
        this.themeItems = THEME_ITEMS_EXAMPLE;
      },
    );
  }
}
