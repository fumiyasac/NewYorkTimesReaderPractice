
import { LOAD_NEWS, SEARCH_NEWS } from '../../../src/actions/actionTypes';
import { loadNews, searchNews } from '../../../src/actions/newsActions';

//テストコード内でfetchを実行できるようにする
import fetch from 'isomorphic-fetch';

//APIキー
import API_KEY from '../../../src/config/nytApiKey';

describe('newsActionsに関連するテスト', () => {

  test('loadNewsアクション内でPromiseオブジェクトが渡されること', () => {
    expect(loadNews()).toEqual(
      { type: LOAD_NEWS, payload: Promise.resolve() }
    );
  });

  test('searchNewsアクションを実行すると引数の値がpayloadに渡されること', () => {
    expect(searchNews('Special')).toEqual(
      { type: SEARCH_NEWS, payload: 'Special' }
    );
  });
});
