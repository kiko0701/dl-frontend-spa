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
    this.socket.on('GET_CHATMESSAGE', (data: ChatMessage) => {
      this.chatMessages = [...this.chatMessages, data];
    });
  }

  private addChatMessage(message: string) {
    const addChatMsg: ChatMessage = {} as ChatMessage;
    if (message) {
      // addChatMsg.count = this.chatMessages.length + 1;
      // addChatMsg.action = false;
      addChatMsg.content = message;
      addChatMsg.act = 'boke';
      addChatMsg.iconURL =
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1141818/profile/profile-80.jpg';
      this.socket.emit('POST_CHATMESSAGE', addChatMsg);
      // this.chatMessages.push(addChatMsg);
      this.$nextTick(() => {
        scrollTo({ top: screen.height });
      });
    }
  }
}
