import { LOAD_NEWS } from '../../../src/actions/actionTypes';
import newsFeedReducer from '../../../src/reducers/newsFeedReducer';

//ダミーデータ用のJSONファイル
import mockDataJson from '../../../src/mockData.json';

//今回の場合はAPIで取得できるデータを信用してReducerのテストを行なっている
describe('newsFeedReducerに関連するテスト', () => {

  test('ステートが空の配列 & アクションが空のオブジェクトの場合には空の配列を返すこと', () => {
    expect(newsFeedReducer([], {})).toEqual([]);
  });
  test('ステートが空の配列 & アクションのpayloadが空のオブジェクトの場合には空の配列を返すこと', () => {
    expect(newsFeedReducer([], { type: LOAD_NEWS, payload: {} })).toEqual([]);
  });
  test('ステートが空の配列 & アクションのpayloadにモックデータを差し込んだ場合にはresult配列部分を返すこと', () => {
    expect(newsFeedReducer([], { type: LOAD_NEWS, payload: mockDataJson })).toEqual(mockDataJson.results);
  });
  test('ステートにデータが差し込まれている & アクションのpayloadが空のオブジェクトの場合には空の配列を返すこと', () => {
    expect(newsFeedReducer(mockDataJson.results, { type: LOAD_NEWS, payload: {} })).toEqual([]);
  });
  test('ステートにデータが差し込まれている & アクションのtypeが間違っている場合にはステートをそのまま返すこと', () => {
    expect(newsFeedReducer(mockDataJson.results, { type: "WRONG_ACTION_TYPE", payload: mockDataJson })).toEqual(mockDataJson.results);
  });

});
