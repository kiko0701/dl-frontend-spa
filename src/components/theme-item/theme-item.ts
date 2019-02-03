import { Component, Prop, Vue } from 'vue-property-decorator';
import { ThemeItem } from './theme-item.interface';

/**
 * お題コンポーネント
 */
@Component
export default class ThemeItemComponent extends Vue {

  /** お題コレクション */
  @Prop() private themeItem!: ThemeItem;

  constructor() {
    super();
  }
}
