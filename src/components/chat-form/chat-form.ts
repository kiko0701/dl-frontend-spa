import { Component, Vue } from 'vue-property-decorator';
import { ChatMessage } from '../chat-message/chat-message.interface';

/**
 * ヘッダーナビゲーションバーコンポーネント
 */
@Component
export default class ChatFormComponent extends Vue {

  private alertMessage = 'ボケるまであと３回';

  private chatMessage: ChatMessage = {} as ChatMessage;

  constructor() {
    super();
  }

  private keypress(event: any) {
    console.log(event);
    console.log(this.chatMessage.content);
  }
}
