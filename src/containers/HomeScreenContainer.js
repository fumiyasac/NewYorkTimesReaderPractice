/**
 * containers/HomeScreenContainer.jsの役割と機能のまとめ：
 * 定義したコンポーネントに対してデータやコールバック関数を与える
 */

//connectのインポート宣言
// → connectを用いてstoreを該当コンポーネントのpropsで使用可能にする
import { connect } from 'react-redux';

//dispatchとActionCreatorの関連付け用のメソッドのインポート
import { NavigationExperimental } from 'react-native';

//dispatchとActionCreatorの関連付け用のメソッドのインポート
import { bindActionCreators } from 'redux';

//ActionCreatorのインポート（今回使用するのtabの切り替えメソッド：push/pop）
import { tab } from '../actions/navigationActions';

//自作コンポーネント：HomeScreenのインポート
import HomeScreen from '../components/HomeScreen';

//ナビゲーションのステートを管理するためのもの
const { StateUtils } = NavigationExperimental;

//ステートから値をコンポーネント側のpropsとの関連付けを行う
// → 「propsを通して取得する際に使う名前: Storeのstateの値」の形になる
// ※ Storeのステートの定義についてはsrc/createStore.jsを参照
const mapStateToProps = (state) => {
  const homeState = StateUtils.get(state.navigation, 'home');
  return {
    selectedTab: homeState ? homeState.routes[homeState.index].key : 'newsFeed'
  };
};

//データ取得処理実行メソッド：loadNewsをコンポーネント側のpropsとの関連付けを行う
// → dispatchはactionを指定してstoreのstateを更新する役目
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    tab
  }, dispatch)
);

//ReduxとReactの橋渡しを行う
// → この場合はNewsFeedコンポーネントにステート値＆ステート更新メソッドを渡す
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
