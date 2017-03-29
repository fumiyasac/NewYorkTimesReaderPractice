import { LOAD_NEWS, LOAD_NEWS_MOCK, SEARCH_NEWS } from './actionTypes';
import { loadNews, loadNewsFromAPI, searchNews } from './newsActions';

//テストコード内でfetchを実行できるようにする
import fetch from 'isomorphic-fetch';

//APIキー
import API_KEY from '../config/apiKey';

describe('newsActionsに関連するテスト', () => {

  test('loadNewsFromAPIアクション内で実行されるfetchメソッドのレスポンスが正しく返却されること', async () => {
    //loadNews内で使用されているfetchメソッドの部分を抜き出す
    const request = () => loadNewsFromAPI();
    const response = await request();
    //APIのレスポンスが正しいかをテストする
    expect(response).not.toBe(undefined);
    expect(response.status).toBe(200);
    expect(response.ok).toBe(true);
  });

  test('loadNewsアクション内でPromiseオブジェクトが渡されること', () => {
    //Promiseオブジェクトのダミー
    let dummyPromiseObject = {"_45": 0, "_54": null, "_65": null, "_81": 0};
    expect(loadNews()).toEqual(
      { type: LOAD_NEWS, payload: dummyPromiseObject }
    );
  });

  test('searchNewsアクションを実行すると引数の値がpayloadに渡されること', () => {
    expect(searchNews('ABC')).toEqual(
      { type: SEARCH_NEWS, payload: 'ABC' }
    );
  });

});
