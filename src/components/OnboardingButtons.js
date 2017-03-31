/**
 * Onboarding(導入画面)用のボタンの設定
 */
import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

//自作コンポーネントのインポート
import Button from './Button';
import LinkButton from './LinkButton';

//共通定義のスタイルシートのコンポーネント
import { LIGHT_OVERLAY_COLOR } from '../styles/global';

//FunctionalComponentの定義
/**
 * OnboardingButtonsの設定
 * 引数の一覧 →
 * totalItems: ◯◯◯,
 * currentIndex: ◯◯◯,
 * movePrevious: ◯◯◯,
 * moveNext: ◯◯◯,
 * moveFinal: ◯◯◯
 */
const OnboardingButtons = ({ totalItems, currentIndex, movePrevious, moveNext, moveFinal }) => (
  <View style={styles.container}>
    <LinkButton onPress={movePrevious} active={currentIndex > 0}>
      Previous
    </LinkButton>
    {/* 現在のIndex値を元にボタンを出し分け (this.propsからの値を反映する) */}
    {currentIndex === totalItems - 1 ? (
      <Button onPress={moveFinal}>
        Done
      </Button>
    ) : (
      <Button onPress={moveNext} active={currentIndex < totalItems - 1}>
        Next
      </Button>
    )}
  </View>
);

//このコンポーネントのpropTypesの定義
//ここは変更をしてはいけない場所
OnboardingButtons.propTypes = {
  totalItems: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
  movePrevious: PropTypes.func.isRequired,
  moveNext: PropTypes.func.isRequired,
  moveFinal: PropTypes.func.isRequired
};

//このコンポーネント内で使用するスタイル定義
const styles = StyleSheet.create({
  container: {
    flex: 0.25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingVertical: 20,
    position: 'absolute',
    backgroundColor: LIGHT_OVERLAY_COLOR,
    bottom: 0,
    left: 0,
    right: 0
  }
});

export default OnboardingButtons;
