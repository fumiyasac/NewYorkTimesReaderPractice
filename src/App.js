/**
 * アプリ構築用のファイル
 */
import React from 'react';

//ProviderタグでラップすることでReactコンポーネント内でStoreにアクセスできるようにする
import { Provider } from 'react-redux';

//自作コンポーネントのインポート
import HomeScreen from './components/HomeScreen';

//createStoreのインポート
import createStore from './createStore';

//初期状態のステートを取得する
const store = createStore();

//アプリ画面の組み立て
export default () => (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
);
