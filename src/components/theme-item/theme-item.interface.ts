/**
 * お題情報の型定義
 */
export interface ThemeItem {
  /** お題ID(リレーションキー） */
  id?: number;

  /** お題の画像 */
  imageUrl?: string;

  /** お題の一言 */
  firstComment?: string;

  /** おもろいスコア */
  funnyScore?: number;

  /** おもろないスコア */
  unfunnyScore?: number;
}
