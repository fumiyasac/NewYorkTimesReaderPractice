/**
 * タイトルのテキストの表示部分
 */
import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

//自作コンポーネントのインポート
import AppText from './AppText';

//共通定義のスタイルシートのコンポーネント
import * as globalStyles from '../styles/global';

//FunctionalComponentの定義
//AppTextのスタイル設定
const Title = ({ style, children }) => (
  <AppText style={[styles.title, style]}>
    {children}
  </AppText>
);

//このコンポーネントのpropTypesの定義
//ここは変更をしてはいけない場所
Title.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
};

//このコンポーネント内で使用するスタイル定義
const styles = StyleSheet.create({
  title: {
    fontFamily: 'HelveticaNeue-CondensedBold',
    fontSize: 18,
    color: globalStyles.HEADER_TEXT_COLOR,
    backgroundColor: `${globalStyles.BG_COLOR}99`
  }
});

export default Title;
