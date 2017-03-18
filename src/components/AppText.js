/**
 * このアプリ共通のテキストの表示部分
 */
import React, { PropTypes } from 'react';
import { Text } from 'react-native';

//共通定義のスタイルシートのコンポーネント
import * as globalStyles from '../styles/global';

//FunctionalComponentの定義
//諸々のスタイル定義を適用させたText
const AppText = ({ children, style, ...rest }) => (
  <Text style={[globalStyles.COMMON_STYLES.text, style]} {...rest}>
    {children}
  </Text>
);

//このコンポーネントのpropTypesの定義
//ここは変更をしてはいけない場所
AppText.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
};

export default AppText;
