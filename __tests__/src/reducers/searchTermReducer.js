import { SEARCH_NEWS } from '../../../src/actions/actionTypes';
import searchTermReducer from '../../../src/reducers/searchTermReducer';

describe('searchTermReducerに関連するテスト', () => {

  test('ステートが空文字 & アクションが空のオブジェクトの場合には空文字を返すこと', () => {
    expect(searchTermReducer("", {})).toEqual("");
  });
  test('ステートが空文字 & アクションのpayloadが空のオブジェクトの場合には空文字を返すこと', () => {
    expect(searchTermReducer("", { type: SEARCH_NEWS, payload: "" })).toEqual("");
  });
  test('ステートが空文字 & アクションのpayloadに検索文字列を差し込んだ場合にはpayloadの文字列を返すこと', () => {
    expect(searchTermReducer("", { type: SEARCH_NEWS, payload: "ABC" })).toEqual("ABC");
  });
  test('ステートにデータが差し込まれている & アクションのpayloadが空文字の場合には空文字を返すこと', () => {
    expect(searchTermReducer("ABC", { type: SEARCH_NEWS, payload: "" })).toEqual("");
  });
  test('ステートにデータが差し込まれている & アクションのtypeが間違っている場合にはステートをそのまま返すこと', () => {
    expect(searchTermReducer("ABC", { type: "WRONG_ACTION_TYPE", payload: "DEF" })).toEqual("ABC");
  });

});
