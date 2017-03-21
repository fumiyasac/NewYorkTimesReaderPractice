/**
 * ニュースデータの検索結果を格納するステートを呼び出すアクション
 * → アクションが実行されると対応するReducersに定義されたステート更新処理を実行する
 * ※ src/createStore.jsの「searchTerm:」に設定される。
 *
 * --------------------
 * {
 *   news: newsFeedReducer,
 *   searchTerm: searchTermReducer,
 *   navigation: navigationReducer
 * }
 * --------------------
 */
import { SEARCH_NEWS } from '../actions/actionTypes';

//NewYorkTimesのニュース検索結果をステートに格納する
export default (state = '', action = {}) => {
  switch (action.type) {
    case SEARCH_NEWS:
      return action.payload;
    default:
      return state;
  }
};
