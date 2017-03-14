import { SEARCH_NEWS } from '../actions/actionTypes';
import searchTermReducer from './searchTermReducer';

const initialState = '';
const targetValue = 'heartful';

it('アクションタイプに定義されていないアクション名の場合は初期値がステートに渡される', () => {
  expect(searchTermReducer(initialState, { type: 'SEARCH_NEWS_TEST', payload: targetValue })).toEqual(initialState);
});

it('アクション名：SEARCH_NEWSの場合はpayloadプロパティ値がステートに渡される', () => {
  expect(searchTermReducer(initialState, { type: SEARCH_NEWS, payload: targetValue })).toEqual(targetValue);
});
