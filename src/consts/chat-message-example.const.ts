import { ChatMessage } from '@/components/chat-message/chat-message.interface';

export const CHAT_MESSAGE_EXAMPLE: ChatMessage[] = [
  {
    count: 1,
    iconURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1141818/profile/profile-80.jpg',
    content: '左からのコメント',
    act: 'boke',
    action: false,
  },
  {
    count: 2,
    iconURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1141818/profile/profile-80.jpg',
    content: '右からの長ーーーーーーーーーーーーーーーーーーーーーーーーーーーーいコメント',
    act: 'tukkomi',
    action: false,
  },
  {
    count: 3,
    iconURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1141818/profile/profile-80.jpg',
    content: 'わいわい',
    act: 'boke',
    action: false,
  },
  {
    count: 4,
    iconURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1141818/profile/profile-80.jpg',
    content: '👈からの長ーーーーーーーーーーーーーーーーーーーーーーーーーーーーいコメント',
    act: 'boke',
    action: false,
  },
  {
    count: 5,
    iconURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1141818/profile/profile-80.jpg',
    content: 'ボケました',
    act: 'boke',
    action: true,
  },
  {
    count: 6,
    iconURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1141818/profile/profile-80.jpg',
    content: 'つっこみました',
    act: 'tukkomi',
    action: true,
  },
];
