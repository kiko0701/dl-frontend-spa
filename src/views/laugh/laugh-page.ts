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
  @Prop({default: {} as ThemeItem}) private theme!: ThemeItem;

  constructor() {
    super();
  }
}
