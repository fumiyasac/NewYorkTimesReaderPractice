/**
 * newsSelectorsの定義
 * → ステートの中から関心のあるツリー部分だけを抜き出してそこから必要な処理を行う
 * (参考) Reduxのreselectとは
 * http://qiita.com/zaki-yama/items/5258e6f1ae37f63034b9
 */

//ライブラリ：reselectのインポート
import { createSelector } from 'reselect';

//必要なステートに関する処理に必要なメソッドのインポート
import { reshapeNewsData, filterNewsBySearchTerm } from '../util/dataTransformations';

//必要なステートの値を抜き出したもの（ニュースデータ一覧のステート取得）
const newsSelector = state => state.news;

//取得したステートの値から必要なものだけを抜き出して整形をする
const reshapeNewsSelector = createSelector(
  [newsSelector],
  reshapeNewsData
);

//整形した全てのデータを取得する
export const allNewsSelector = createSelector(
  [reshapeNewsSelector],
  newsItems => newsItems
);

//必要なステートの値を抜き出したもの（ニュースデータ検索クエリ文字列のステート取得）
const searchTermSelector = state => state.searchTerm;

//検索クエリ文字を小文字に変換する
const caseInsensitiveSearchTermSelector = createSelector(
  searchTermSelector,
  searchTerm => searchTerm.toLowerCase()
);

//引き渡された検索クエリ文字でreshapeNewsSelectorで整形したデータをフィルタリングをする
export const searchNewsSelector = createSelector(
  [reshapeNewsSelector, caseInsensitiveSearchTermSelector],
  filterNewsBySearchTerm
);
