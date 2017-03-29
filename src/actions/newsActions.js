/**
 * actions/newsActions.jsの役割と機能のまとめ：
 * 該当の定数で定義されたアクションを実行することでステートを更新する
 */

//アクションタイプ定義を呼び出す
import { LOAD_NEWS, LOAD_NEWS_MOCK, SEARCH_NEWS } from './actionTypes';

//APIキーを呼び出す
import API_KEY from '../config/apiKey';

//NewYorkTimesのニュースデータ一覧を取得する（APIからのfetch部分）
export const loadNewsFromAPI = () => {
  const req = fetch(`https://api.nytimes.com/svc/topstories/v2/food.json?api-key=${API_KEY}`);
  return req;
};

//NewYorkTimesのニュースデータ一覧を取得する
export const loadNews = () => {
  const req = loadNewsFromAPI();
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
