/**
 * お題情報の型定義
 */
export interface ThemeItem {
    /** リレーションキー */
    id?: number;

    /** お題の画像 */
    imageUrl?: string;

    /** お題の一言 */
    firstComment?: string;
}
