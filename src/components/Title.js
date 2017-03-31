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
/**
 * Titleの設定
 * 引数の一覧 →
 * style: スタイル,
 * children: 表示する文字列
 */
const Title = ({ style, children }) => (
  <AppText style={[styles.title, style]}>
    {children}
  </AppText>
);

//このコンポーネントのpropTypes(this.propsで受け取れる情報に関するもの)定義
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
