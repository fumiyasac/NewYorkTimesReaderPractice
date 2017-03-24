/**
 * ボタン用のコンポーネント
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
//汎用ボタンの定義(スタイルや活性フラグ・押下時のアクション・表示する文字列・その他オプションを定義)
const Button = ({ style, active, onPress, children, ...rest }) => (
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

//このコンポーネントのpropTypesの定義
//ここは変更をしてはいけない場所
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
