/**
 * 小さいサイズのテキストの表示部分
 */
import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

//自作コンポーネントのインポート
import AppText from './AppText';

//FunctionalComponentの定義
/**
 * SmallTextの設定
 * 引数の一覧 →
 * style: スタイル,
 * children: 表示する文字列,
 * ...rest: その他オプションを定義 ※要素を分解して入れる
 */
const SmallText = ({ style, children, ...rest }) => (
  <AppText style={[styles.small, style]} {...rest}>
    {children}
  </AppText>
);

//このコンポーネントのpropTypes(this.propsで受け取れる情報に関するもの)定義
SmallText.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
};

//このコンポーネント内で使用するスタイル定義
const styles = StyleSheet.create({
  small: {
    fontSize: 11
  }
});

export default SmallText;
