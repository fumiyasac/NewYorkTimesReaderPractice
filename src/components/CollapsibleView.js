/**
 * 折りたたみ表示用のコンポーネント
 */
import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

//FunctionalComponentの定義
//汎用ボタンの定義(スタイル・表示する文字列・表示の切り替えフラグを定義)
const CollapsibleView = ({ children, style, hide }) => (
  <View style={[styles.container, hide ? styles.hidden : {}]}>
    <View style={[styles.absoluteContainer, style]}>
      {children}
    </View>
  </View>
);

//このコンポーネントのpropTypesの定義
//ここは変更をしてはいけない場所
CollapsibleView.propTypes = {
  style: View.propTypes.style,
  hide: PropTypes.bool.isRequired,
  children: PropTypes.node
};

//このコンポーネント内で使用するスタイル定義
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  absoluteContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  hidden: {
    height: 0,
    flex: 0
  }
});

export default CollapsibleView;
