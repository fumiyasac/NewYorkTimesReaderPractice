import { NAVIGATION_PUSH, NAVIGATION_POP, NAVIGATION_TAB, NAVIGATION_OPEN_MODAL, NAVIGATION_CLOSE_MODAL } from './actionTypes';
import { openModal, closeModal, tab, push, pop } from './navigationActions';

//モックデータの読み込み
import mockData from '../mockData.json';

describe('navigationActionsに関連するテスト', () => {

  test('openModalアクションを実行するとtypeと引数の中にモックのurlが入ったオブジェクトが入ること', () => {
    const mock = mockData;
    expect(openModal(mock.results[0].url)).toEqual(
      { type: NAVIGATION_OPEN_MODAL, payload: 'https://facebook.github.io/react-native' }
    );
  });

  test('closeModalアクションを実行するとtypeだけのオブジェクトとが入ること', () => {
    expect(closeModal()).toEqual(
      { type: NAVIGATION_CLOSE_MODAL }
    );
  });

});
