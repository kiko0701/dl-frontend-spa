import { Component, Prop, Vue } from 'vue-property-decorator';
import { ThemeItem } from './theme-item.interface';

/**
 * お題コンポーネント
 */
@Component
export default class ThemeItemComponent extends Vue {

  /** お題コレクション */
  @Prop({default: {} as ThemeItem}) private theme!: ThemeItem;

  constructor() {
    super();
  }
}
