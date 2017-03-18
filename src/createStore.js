/**
 * createStore.jsの役割と機能のまとめ：
 * （目的）初期状態のステートを作成する
 *
 * ★createStore: Storeの設定を行う
 * --------------------
 * 例. let store = createStore(todos, ['Use Redux'])
 * todos → ステートの更新時に発動されるメソッド
 * ['Use Redux'] → storeの初期値
 * (参考) http://redux.js.org/docs/api/createStore.html
 * --------------------
 *
 * ★applyMiddleware: Middlewareを適用する
 * --------------------
 * dispatchメソッドをactionがreducerに到達する前に処理を差し込む
 * (参考) http://qiita.com/pirosikick/items/d7f9e5e197a2e8aad62f#applymiddleware
 * --------------------
 *
 * ★combineReducers: それぞれのReducerを統合して1つのまとまったReducerにする
 * --------------------
 * 1つの大きな初期状態の集合体を作成してこの値を元に状態を決定する
 * (参考) http://qiita.com/kuy/items/59c6d7029a10972cba78
 * --------------------
 */

//ステート処理用のメソッドを使用する
import { createStore, applyMiddleware, combineReducers } from 'redux';

//コンソールのログ出力をするためのメソッドを使用する
import createLogger from 'redux-logger';

//reduxの非同期処理用のライブラリを使用する（Promiseパターンで書けるMiddleware）
import promiseMiddleware from 'redux-promise';

//それぞれのReducer(各々の状態のステート)を使用する
import newsFeedReducer from './reducers/newsFeedReducer';
import searchTermReducer from './reducers/searchTermReducer';

//ステートの変化をログ出力のためのメソッド
const logger = createLogger();

//ステートの作成をする → Reducerから受け取った値と初期ステート
// → Reduxアプリケーションのステートとクライアントのステートを組み合わせる
// → Middlewareの適用も行う（差し込み処理）
export default (initalState = {}) => (
  //Storeの初期値を作成する
  createStore(
    combineReducers({
      news: newsFeedReducer,
      searchTerm: searchTermReducer
    }),
    initalState,
    applyMiddleware(logger, promiseMiddleware)
  )
);
