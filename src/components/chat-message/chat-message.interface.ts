
export interface ChatMessage {
  /** メッセージ内容 */
  content: string;

  /** 発言回数 */
  count: number;

  /** 役割 */
  act: string;

  /** アイコンのURL（いらなさそう） */
  iconURL: string;
}
