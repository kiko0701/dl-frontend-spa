import { RoomItem } from '@/components/room-item/room-item.interface';

export const THEME_ITEMS_EXAMPLE: RoomItem[] = [
  {
    id: 1,
    theme: {
      id: 1,
      imageUrl: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
      firstComment: 'こんばんは',
    },
    chatLog: [],
    funnyScore: 10,
    unfunnyScore: 3,
  },
  {
    id: 2,
    theme: {
      id: 1,
      imageUrl: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
      firstComment: 'こんばんは',
    },
    chatLog: [],
    funnyScore: 8,
    unfunnyScore: 0,
  },
  {
    id: 3,
    theme: {
      id: 1,
      imageUrl: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
      firstComment: 'おはよう',
    },
    chatLog: [],
    funnyScore: 6,
    unfunnyScore: 3,
  },
  {
    id: 4,
    theme: {
      id: 1,
      imageUrl: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
      firstComment: 'こんにちは',
    },
    chatLog: [],
    funnyScore: 3,
    unfunnyScore: 2,
  },
  {
    id: 5,
    theme: {
      id: 1,
      imageUrl: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
      firstComment: '5位です',
    },
    chatLog: [],
    funnyScore: 1,
    unfunnyScore: 10,
  },
];
