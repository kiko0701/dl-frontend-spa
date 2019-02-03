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
    this.themeItems.push(
      {
        id: 1,
        imageUrl: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        firstComment: 'こんばんは',
        funnyScore: 10,
        unfunnyScore: 3,
      },
      {
        id: 2,
        imageUrl: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        firstComment: 'おはよう',
        funnyScore: 8,
        unfunnyScore: 3,
      },
      {
        id: 3,
        imageUrl: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        firstComment: 'やったあああ',
        funnyScore: 6,
        unfunnyScore: 4,
      },
      {
        id: 4,
        imageUrl: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        firstComment: 'こんばんは',
      },
      {
        id: 5,
        imageUrl: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        firstComment: 'おはよう',
      },
      {
        id: 6,
        imageUrl: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        firstComment: 'やったあああ',
      },
      {
        id: 7,
        imageUrl: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        firstComment: 'こんばんは',
      },
      {
        id: 8,
        imageUrl: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        firstComment: 'おはよう',
      },
    );
  }
}
