/**
 * お題情報の型定義
 */
export interface ThemeItem {
    /** リレーションキー */
    id?: number;

    /** お題の画像 */
    image_url?: string;

    /** お題の一言 */
    first_comment?: string;
}
