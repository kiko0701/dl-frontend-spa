import { Component, Prop, Vue } from 'vue-property-decorator';
import { ChatMessage } from '@/components/chat-message/chat-message.interface';

/**
 * チャットメッセージコンポーネント
 */
@Component
export default class ChatMessageComponent extends Vue {

  /** メッセージ */
  @Prop() private chatMessage!: ChatMessage;

  /** 発言者が自分かどうかを司るフラグ */
  private isOther: boolean = true;

  constructor() {
    super();
  }

  private mounted() {
    if (this.chatMessage && this.chatMessage.act === 'boke') {
      this.isOther = false;
    }
  }
}
