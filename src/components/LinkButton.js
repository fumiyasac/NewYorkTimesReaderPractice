/**
 * リンク用の汎用ボタンの設定
 */
import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

//自作コンポーネントのインポート
import Button from './Button';

//FunctionalComponentの定義
/**
 * LinkButtonの設定
 * 引数の一覧 →
 * style: ◯◯◯,
 * children: ◯◯◯,
 * ...rest: ◯◯◯ ※要素を分解して入れる
 */
const LinkButton = ({ style, children, ...rest }) => (
  <Button {...rest} style={[styles.button, style]}>
    {children}
  </Button>
);

//このコンポーネントのpropTypesの定義
//ここは変更をしてはいけない場所
LinkButton.propTypes = {
  style: View.propTypes.style,
  children: PropTypes.node
};

//このコンポーネント内で使用するスタイル定義
const styles = StyleSheet.create({
  button: {
    borderWidth: 0
  }
});

export default LinkButton;
