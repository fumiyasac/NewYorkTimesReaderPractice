/**
 * 最初の画面表示部分
 */
import React, { PropTypes } from 'react';
import {
  View,
  TouchableOpacity,
  StatusBar,
  StyleSheet
} from 'react-native';

//自作コンポーネントのインポート
import Title from './Title';
import AppText from './AppText';

//共通定義のスタイルシートのコンポーネント
import * as globalStyles from '../styles/global';

//ステータスバーの表示設定
StatusBar.setBarStyle('light-content');

//FunctionalComponentの定義
//IntroScreenのスタイル設定
const IntroScreen = ({ push }) => (
  <View style={[globalStyles.COMMON_STYLES.pageContainer, styles.container]}>
    <TouchableOpacity onPress={() => push('onboarding')}>
      <Title>
        React Native News Reader
      </Title>
      <AppText>
        Start Reading
      </AppText>
    </TouchableOpacity>
  </View>
);

//このコンポーネントのpropTypes(this.propsで受け取れる情報に関するもの)定義
IntroScreen.propTypes = {
  push: PropTypes.func.isRequired
};

//このコンポーネント内で使用するスタイル定義
const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default IntroScreen;
