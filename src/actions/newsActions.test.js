import { LOAD_NEWS, LOAD_NEWS_MOCK, SEARCH_NEWS } from './actionTypes';
import { loadNews, loadNewsMock, searchNews } from './newsActions';

//テストコード内でfetchを実行できるようにする
import fetch from 'isomorphic-fetch';

//APIキー
import API_KEY from '../config/apiKey';

/*
import mockData from '../mockData.json';
*/

describe('newsActionsに関連するテスト', () => {

  /*
  test('loadNewsMockアクションにてモックが渡されること', () => {
    const mock = mockData;
    expect(loadNews()).toEqual(
      { type: LOAD_NEWS, payload: mock }
    );
  });
  */

  test('loadNewsアクション内で実行されるfetchメソッドのレスポンスとエンドポイント指定が正しいこと', async () => {
    //loadNews内で使用されているfetchメソッドの部分を抜き出す
    const request = () => fetch(`https://api.nytimes.com/svc/topstories/v2/food.json?api-key=${API_KEY}`);
    const response = await request();
    expect(response).not.toBe(undefined);
    expect(response.status).toBe(200);
    expect(response.ok).toBe(true);
  });

  test('searchNewsアクションを実行すると引数の値がpayloadに渡されること', () => {
    expect(searchNews('ABC')).toEqual(
      { type: SEARCH_NEWS, payload: 'ABC' }
    );
  });

});
