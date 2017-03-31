/**
 * このアプリ共通のテキスト用のコンポーネント
 */
import React, { PropTypes } from 'react';
import {
  Text
} from 'react-native';

//共通定義のスタイルシートのコンポーネント
import * as globalStyles from '../styles/global';

//FunctionalComponentの定義
/**
 * AppTextの設定
 * 引数の一覧 →
 * style: スタイル,
 * children: 表示する文字列,
 * ...rest: その他オプションを定義 ※要素を分解して入れる
 */
const AppText = ({ style, children, ...rest }) => (
  <Text style={[globalStyles.COMMON_STYLES.text, style]} {...rest}>
    {children}
  </Text>
);

//このコンポーネントのpropTypes(this.propsで受け取れる情報に関するもの)定義
AppText.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
};

export default AppText;
