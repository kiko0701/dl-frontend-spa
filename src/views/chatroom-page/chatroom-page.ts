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

}
