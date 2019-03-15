import { Component, Vue, Emit } from 'vue-property-decorator';

/**
 * チャットフォームコンポーネント
 */
@Component
export default class ChatFormComponent extends Vue {

  private alertMessage = 'ボケるまであと３回';

  private chatMsg: string = '';

  constructor() {
    super();
  }

  @Emit('send')
  private onChangeChatMsg(chatMsg: string) {
    return chatMsg;
  }

  private changeChatMsg() {
    if (this.chatMsg) {
      this.onChangeChatMsg(this.chatMsg);
      this.chatMsg = '';
    }
  }
}
