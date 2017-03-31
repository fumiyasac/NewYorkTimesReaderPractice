/**
 * 折りたたみ表示用のコンポーネント
 */
import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

//FunctionalComponentの定義
/**
 * CollapsibleViewの設定
 * 引数の一覧 →
 * style: スタイル,
 * children: 表示する文字列,
 * hide: 表示・非表示用のフラグ
 */
const CollapsibleView = ({ style, children, hide }) => (
  <View style={[styles.container, hide ? styles.hidden : {}]}>
    <View style={[styles.absoluteContainer, style]}>
      {children}
    </View>
  </View>
);

//このコンポーネントのpropTypes(this.propsで受け取れる情報に関するもの)定義
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
