import { LOAD_NEWS, SEARCH_NEWS } from './actionTypes';
import { loadNews, searchNews } from './newsActions';
import mockData from '../mockData.json';

it('loadNewsアクションにてモックが渡されること', () => {
  const mock = mockData;
  expect(loadNews()).toEqual(
    { type: LOAD_NEWS, payload: mock }
  );
});

it('searchNewsアクションを実行すると引数の値がpayloadに渡されること', () => {
  expect(searchNews('ABC')).toEqual(
    { type: SEARCH_NEWS, payload: 'ABC' }
  );
});
