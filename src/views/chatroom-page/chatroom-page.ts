import { Component, Vue } from 'vue-property-decorator';
import ChatFormComponent from '@/components/chat-form/chat-form.vue';
import ChatMessageComponent from '@/components/chat-message/chat-message.vue';
import { ChatMessage } from '@/components/chat-message/chat-message.interface';
import { CHAT_MESSAGE_EXAMPLE } from '@/consts/chat-message-example.const';
import io from 'socket.io-client';

@Component({
  components: {
    'chat-form': ChatFormComponent,
    'chat-message': ChatMessageComponent,
  },
})
export default class ChatRoomPageComponent extends Vue {

  private chatMessages: ChatMessage[] = [];

  private sendChatMessage!: ChatMessage;

  private message!: string;

  private name!: string;

  private socket = io('localhost:3000');

  constructor() {
    super();
  }

  /**
   * ライフサイクルフック
   */
  private mounted() {
    this.chatMessages = CHAT_MESSAGE_EXAMPLE;
    // 投稿されたデータの取得
    this.socket.on('MESSAGE', (data: ChatMessage) => {
      this.chatMessages = [...this.chatMessages, data];
    });
  }

  // チャットメッセージ送信
  private sendMessage(e: any) {
    e.preventDefault();
    this.socket.emit('POST_MESSAGE', this.sendChatMessage);
    this.sendChatMessage = {} as ChatMessage;
  }
}
