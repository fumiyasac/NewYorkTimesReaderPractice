/**
 * ナビゲーション部品画面表示部分
 */
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  NavigationExperimental
} from 'react-native';

//CardStackを利用してナビゲーションを実現する
// (参考)Using React Native Navigation CardStack with Redux
// https://hiddentao.com/archives/2017/02/23/using-react-native-navigation-cardstack-with-redux/
// (参考)React Native NavigationExperimental in Depth
// https://medium.com/react-native-training/react-native-navigationexperimental-in-depth-6910b9b0b990#.a6ub5l7lm
const { CardStack } = NavigationExperimental;

//ClassComponentの定義
//ニュース全体表示部分のコンポーネント設定
export default class Nav extends Component {

  //コンストラクタ
  constructor(props) {
    super(props);

    // (参考)[ES6] class構文で書く時は各メソッドのbind(this)を忘れずに（this.propsの値を使用する）
    // https://goo.gl/QJacmN
    this.renderScene = this.renderScene.bind(this);
  }

  //対応するコンポーネントをレンダリングする（受け取ったthis.propsの値を利用してコンポーネントの遷移をする）
  renderScene(sceneProps) {
    const route = sceneProps.scene.route;
    return (
      <route.component
        {...route.props}
        push={this.props.push}
        pop={this.props.pop}
      />
    );
  }

  //見た目のレンダリング
  render() {
    return (
      <CardStack
        onNavigateBack={this.props.pop}
        navigationState={this.props.navigation}
        renderScene={this.renderScene}
        style={styles.cardStack}
      />
    );
  }
}

//このコンポーネントのpropTypes(this.propsで受け取れる情報に関するもの)定義
Nav.propTypes = {
  push: PropTypes.func.isRequired,
  pop: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any)
};

//このコンポーネント内で使用するスタイル定義
const styles = StyleSheet.create({
  cardStack: {
    flex: 1
  }
});
