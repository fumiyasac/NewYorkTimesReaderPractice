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
//AppTextのスタイル設定
const SmallText = ({ children, style, ...rest }) => (
  <AppText style={[styles.small, style]} {...rest}>
    {children}
  </AppText>
);

//このコンポーネントのpropTypesの定義
//ここは変更をしてはいけない場所
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
