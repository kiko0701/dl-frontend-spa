import { Component, Prop, Vue } from 'vue-property-decorator';
import { ThemeItem } from '@/components/theme-item/theme-item.interface';
import ThemeItemComponent from '@/components/theme-item/theme-item.vue';

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
  private created() {
    // tslint:disable-next-line:no-console
    console.log('created');
    this.themeItems.push({
      id: 1,
      image_url: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
      first_comment: 'こんばんは',
    });
  }
}
