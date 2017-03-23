/**
 * containers/NavFeedContainer.jsの役割と機能のまとめ：
 * 定義したコンポーネントに対してデータやコールバック関数を与える
 */

//connectのインポート宣言
// → connectを用いてstoreを該当コンポーネントのpropsで使用可能にする
import { connect } from 'react-redux';

//dispatchとActionCreatorの関連付け用のメソッドのインポート
import { bindActionCreators } from 'redux';

//ActionCreatorのインポート（今回使用するのはpush/popの画面遷移実行メソッド：push/pop）
import { push, pop } from '../actions/navigationActions';

//自作コンポーネント：Navのインポート
import Nav from '../components/Nav';

//ステートから値をコンポーネント側のpropsとの関連付けを行う
// → 「propsを通して取得する際に使う名前: Storeのstateの値」の形になる
// ※ Storeのステートの定義についてはsrc/createStore.jsを参照
const mapStateToProps = state => ({
  navigation: state.navigation
});

//データ取得処理実行メソッド：loadNewsをコンポーネント側のpropsとの関連付けを行う
 // → dispatchはactionを指定してstoreのstateを更新する役目
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    push,
    pop
  }, dispatch)
);

//ReduxとReactの橋渡しを行う
// → この場合はNewsFeedコンポーネントにステート値＆ステート更新メソッドを渡す
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
