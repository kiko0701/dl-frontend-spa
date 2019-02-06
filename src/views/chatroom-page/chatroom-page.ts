import { Component, Vue } from 'vue-property-decorator';
import ChatFormComponent from '@/components/chat-form/chat-form.vue';

@Component({
  components: {
    'chat-form': ChatFormComponent,
  },
})
export default class ChatRoomPageComponent extends Vue {

  constructor() {
    super();
  }

}
