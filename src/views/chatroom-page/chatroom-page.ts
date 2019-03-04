import { Component, Vue } from 'vue-property-decorator';
import ChatFormComponent from '@/components/chat-form/chat-form.vue';
import ChatMessageComponent from '@/components/chat-message/chat-message.vue';
import { ChatMessage } from '@/components/chat-message/chat-message.interface';
import { CHAT_MESSAGE_EXAMPLE } from '@/consts/chat-message-example.const';

@Component({
  components: {
    'chat-form': ChatFormComponent,
    'chat-message': ChatMessageComponent,
  },
})
export default class ChatRoomPageComponent extends Vue {

  private chatMessages: ChatMessage[] = [];

  constructor() {
    super();
  }

  /** ライフサイクルフック */
  private mounted() {
    this.chatMessages = CHAT_MESSAGE_EXAMPLE;
  }

  private addChatMessage(content: string) {
    const addChatMsg: ChatMessage = {} as ChatMessage;
    if (content) {
      addChatMsg.count = this.chatMessages.length + 1;
      addChatMsg.content = content;
      addChatMsg.act = 'boke';
      addChatMsg.action = false;
      addChatMsg.iconURL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1141818/profile/profile-80.jpg';
      this.chatMessages.push(addChatMsg);
      this.$nextTick(() => {
        // tslint:disable-next-line:no-console
        console.log(screen.height);
        scrollTo({top: screen.height});
      });
    }
  }
}
