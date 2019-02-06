import { Component, Vue } from 'vue-property-decorator';

/**
 * ヘッダーナビゲーションバーコンポーネント
 */
@Component
export default class ChatFormComponent extends Vue {

  private alertMessage = 'ボケるまであと３回';

  constructor() {
    super();
  }
}
