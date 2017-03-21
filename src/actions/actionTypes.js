/**
 * actions/ActionTypes.jsの役割と機能のまとめ：
 * 該当の定数で定義されたアクションを実行することでステートを更新する
 */

//ニュースデータの表示に関するアクション名一覧
export const LOAD_NEWS = 'LOAD_NEWS';
export const SEARCH_NEWS = 'SEARCH_NEWS';

//ナビゲーター及び画面遷移に関するアクション名一覧
export const NAVIGATION_PUSH = 'NAVIGATION_PUSH';
export const NAVIGATION_POP = 'NAVIGATION_POP';
export const NAVIGATION_TAB = 'NAVIGATION_TAB';
export const NAVIGATION_OPEN_MODAL = 'NAVIGATION_OPEN_MODAL';
export const NAVIGATION_CLOSE_MODAL = 'NAVIGATION_CLOSE_MODAL';
