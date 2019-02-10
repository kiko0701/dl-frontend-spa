import { ThemeItem } from './theme-item/theme-item.interface';
import { ChatMessage } from '../chat-message/chat-message.interface';


/**
 * ルーム情報の型定義
 */
export interface RoomItem {
  id: number;

  theme: ThemeItem;

  chatLog?: ChatMessage[];

  /** おもろいスコア */
  funnyScore?: number;

  /** おもろないスコア */
  unfunnyScore?: number;
}
