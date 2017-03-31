/**
 * 汎用ボタン用のコンポーネント
 */
import React, { PropTypes } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from 'react-native';

//このコンポーネントで使用するスタイル定義
const BORDER_COLOR = '#fff';
const BG_COLOR = 'transparent';
const TEXT_COLOR = '#fff';
const DISABLED_COLOR = `${TEXT_COLOR}5`;

//FunctionalComponentの定義
/**
 * Buttonの設定
 * 引数の一覧 →
 * style: スタイル,
 * children: 表示する文字列,
 * ...rest: その他オプションを定義 ※要素を分解して入れる,
 * active: 活性フラグ,
 * onPress: 押下時のアクション
 */
const Button = ({ style, children, ...rest, active, onPress }) => (
  <TouchableOpacity
    activeOpacity={active ? 0.7 : 1}
    onPress={active ? onPress : null}
    {...rest}
    style={[styles.button, style, !active ? styles.disabledButton : {}]}
  >
    <Text style={[styles.text, !active ? styles.disabledText : {}]}>
      {children}
    </Text>
  </TouchableOpacity>
);

//このコンポーネントのpropTypes(this.propsで受け取れる情報に関するもの)定義
Button.propTypes = {
  active: PropTypes.bool,
  style: View.propTypes.style,
  onPress: PropTypes.func,
  children: PropTypes.node
};

//初期状態のPropsの定義
Button.defaultProps = {
  active: true
};

//このコンポーネント内で使用するスタイル定義
const styles = StyleSheet.create({
  button: {
    borderStyle: 'solid',
    borderColor: BORDER_COLOR,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: BG_COLOR,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15
  },
  disabledButton: {
    borderColor: DISABLED_COLOR
  },
  text: {
    color: TEXT_COLOR,
    fontWeight: 'bold'
  },
  disabledText: {
    color: DISABLED_COLOR
  }
});

export default Button;
