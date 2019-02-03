import { Component, Prop, Vue } from 'vue-property-decorator';
import { ThemeItem } from '@/components/theme-item/theme-item.interface';
import ThemeItemComponent from '@/components/theme-item/theme-item.vue';
import axios from 'axios';

/**
 * 「笑う」ページ
 */
@Component({
  components: {
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
    // tslint:disable-next-line:no-console
    console.log('created');
    axios
    .get<ThemeItem[]>('http://www.mocky.io/v2/5c5713f64d000041100fd01c')
    .then((response) => {
      this.themeItems = response.data || [];
    })
    .catch(
      (error) => {
        console.log(error);
      },
    );
  }
}
