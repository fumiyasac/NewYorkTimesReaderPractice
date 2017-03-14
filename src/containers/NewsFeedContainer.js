/**
 * containers/newsFeedContainer.jsの役割と機能のまとめ：
 * 定義したコンポーネントに対してデータやコールバック関数を与える
 */

 //connectのインポート宣言
 // → connectを用いてstoreを該当コンポーネントのpropsで使用可能にする
import { connect } from 'react-redux';

//dispatchとActionCreatorの関連付け用のメソッドのインポート
import { bindActionCreators } form 'redux';

//ActionCreatorのインポート（今回使用するのはデータ取得処理実行メソッド：loadNews）
import { loadNews } from '../actions/newsActions';

//自作コンポーネント：NewsFeedのインポート
import NewsFeed from '../components/NewsFeed';

//ステートから値をコンポーネント側のpropsとの関連付けを行う
// → 「propsを通して取得する際に使う名前: Storeのstateの値」の形になる
// ※ Storeのステートの定義についてはsrc/createStore.jsを参照
const mapStateToProps = state => ({
  news: state.news
});

//データ取得処理実行メソッド：loadNewsをコンポーネント側のpropsとの関連付けを行う
 // → dispatchはactionを指定してstoreのstateを更新する役目
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    loadNews
  }, dispatch)
);

//ReduxとReactの橋渡しを行う
// → この場合はNewsFeedコンポーネントにステート値＆ステート更新メソッドを渡す
export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
