/**
 * actions/newsActions.jsの役割と機能のまとめ：
 * 該当の定数で定義されたアクションを実行することでステートを更新する
 */

//アクションタイプ定義を呼び出す
import { LOAD_NEWS, LOAD_NEWS_MOCK, SEARCH_NEWS } from './actionTypes';

//APIキー
import API_KEY from '../config/apiKey';

//モックデータの読み込み
/*
import mockData from '../mockData.json';
*/

//NewYorkTimesのニュースデータ一覧を取得する（引数なし）
/*
export const loadNews = () => ({
  type: LOAD_NEWS,
  payload: mockData
});
*/

//NewYorkTimesのニュースデータ一覧を取得する（引数なし）
export const loadNews = () => {
  const req = fetch(`https://api.nytimes.com/svc/topstories/v2/food.json?api-key=${API_KEY}`);
  return {
    type: LOAD_NEWS,
    payload: req.then(response => response.json())
  };
};

//NewYorkTimesのニュースデータを検索する（引数：searchTerm）
export const searchNews = searchTerm => ({
  type: SEARCH_NEWS,
  payload: searchTerm
});
