/**
 * actions/navigationActions.jsの役割と機能のまとめ：
 * 該当の定数で定義されたアクションを実行することでステートを更新する
 * この部分についてはnavigationExperimentalを絡めた遷移に関するものを管理する
 */

 //アクションタイプ定義を呼び出す
import { NAVIGATION_PUSH, NAVIGATION_POP, NAVIGATION_TAB, NAVIGATION_OPEN_MODAL, NAVIGATION_CLOSE_MODAL } from './actionTypes';

//モーダルを表示する
export const openModal = url => ({
  type: NAVIGATION_OPEN_MODAL,
  payload: url
});

//モーダルを閉じる
export const closeModal = () => ({
  type: NAVIGATION_CLOSE_MODAL
});

//タブバー部分の選択状態を保持をする
export const tab = key => ({
  type: NAVIGATION_TAB,
  payload: key
});

//Pushでの画面遷移時(進む場合)の行き先をステートの設定と保持をする
export const push = key => ({
  type: NAVIGATION_PUSH,
  payload: key
});

//popでの画面遷移時(戻る場合)のステートの設定と保持をする
export const pop = () => ({
  type: NAVIGATION_POP
});
