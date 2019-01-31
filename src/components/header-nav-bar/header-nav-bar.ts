import { Component, Prop, Vue } from 'vue-property-decorator';
import { HeaderMenu } from './header.interface';

@Component({
  template: '<button>Click!</button>',
})
export class HeaderNavBarComponent extends Vue {

  /** タイトル */
  @Prop() private title!: string;

  /** ヘッダーに表示するメニュー */
  @Prop() private headerMenu!: HeaderMenu[];

}

