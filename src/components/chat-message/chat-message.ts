import { Component, Prop, Vue } from 'vue-property-decorator';
import { ChatMessage } from '@/components/chat-message/chat-message.interface';

/**
 * チャットメッセージコンポーネント
 */
@Component
export default class ChatMessageComponent extends Vue {

  /** メッセージ */
  @Prop() private chatMessage!: ChatMessage;

   /** 観戦モードかどうか（右側にアイコン表示するかどうか） */
   @Prop({default: false}) private isLaugh!: boolean;

  /** 発言者が自分かどうかを司るフラグ */
  private isOther: boolean = true;

  constructor() {
    super();
  }

  private mounted() {
    // 例：ボケが自分の場合
    if (this.chatMessage && this.chatMessage.act === 'boke') {
      this.isOther = false;
    }
  }
}
