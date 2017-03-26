/**
 * ナビゲーションの状態を格納するステートを呼び出すアクション
 * → アクションが実行されると対応するReducersに定義されたステート更新処理を実行する
 * ※ src/createStore.jsの「navigation:」に設定される。
 *
 * --------------------
 * {
 *   news: newsFeedReducer,
 *   searchTerm: searchTermReducer,
 *   navigation: navigationReducer
 * }
 * --------------------
 */

/**
 * TODO: Reducerのテストを書く（この部分はアプリの根幹をなす部分なのでMustかな）
 */

import { NavigationExperimental } from 'react-native';
import { NAVIGATION_PUSH, NAVIGATION_POP, NAVIGATION_TAB, NAVIGATION_OPEN_MODAL, NAVIGATION_CLOSE_MODAL } from '../actions/actionTypes';

//自作コンポーネントに対応するコンテナのインポート
// → コンテンツ表示用のコンポーネントをひとまとめにしているHomeScreen.ios.jsに関連するコンテナ
import HomeScreenContainer from '../containers/HomeScreenContainer';

//自作コンポーネント：IntroScreen/Onboardingのインポート
// → routingとcomponentを紐づける必要があるのでこのタイミングで記載をする
import IntroScreen from '../components/IntroScreen';
import Onboarding from '../components/Onboarding';

//StateUtils: NavigationStateUtils(ナビゲーションのステートを管理するためのもの)
// (参考ドキュメント)
// https://rangle-io.gitbooks.io/react-native-workshop/content/book/navigation/navigation-experimental-details.html
const { StateUtils } = NavigationExperimental;

//ルーティングを定義したオブジェクトの定義
const routes = {
  home: {
    key: 'home',
    component: HomeScreenContainer,
    index: 0,
    routes: [
      { key: 'newsFeed', modal: undefined },
      { key: 'search' },
      { key: 'bookmarks' }
    ]
  },
  intro: {
    key: 'intro',
    component: IntroScreen
  },
  onboarding: {
    key: 'onboarding',
    component: Onboarding
  }
};

//初期状態のステートの定義
const initialState = {
  index: 0,
  routes: [
    routes.intro
  ]
};

//遷移元・遷移先や現在表示しているコンポーネントの状態に関する情報をステートに格納する
export default (state = initialState, action = {}) => {
  if (action.type === NAVIGATION_PUSH) {
    return StateUtils.push(state, routes[action.payload]);
  } else if (action.type === NAVIGATION_POP) {
    return StateUtils.pop(state);
  } else if (action.type === NAVIGATION_TAB) {
    const homeState = StateUtils.get(state, 'home');
    const updatedHomeState = StateUtils.jumpTo(homeState, action.payload);
    return StateUtils.replaceAt(state, 'home', updatedHomeState);
  } else if (action.type === NAVIGATION_OPEN_MODAL) {
    const homeState = StateUtils.get(state, 'home');
    const openTabState = homeState.routes[homeState.index];
    const updatedTabState = { ...openTabState, modal: action.payload };
    const updatedHomeState = StateUtils.replaceAt(homeState, openTabState.key, updatedTabState);
    return StateUtils.replaceAt(state, 'home', updatedHomeState);
  } else if (action.type === NAVIGATION_CLOSE_MODAL) {
    const homeState = StateUtils.get(state, 'home');
    const openTabState = homeState.routes[homeState.index];
    const updatedTabState = { ...openTabState, modal: undefined };
    const updatedHomeState = StateUtils.replaceAt(homeState, openTabState.key, updatedTabState);
    return StateUtils.replaceAt(state, 'home', updatedHomeState);
  }
  return state;
};
