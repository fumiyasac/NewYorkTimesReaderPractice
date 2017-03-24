/**
 * 表示デバイスの幅・高さ取得用
 */
import { Dimensions } from 'react-native';

//デバイスの幅と高さを定義した名前でアクセスできるようにする
// → デバイスの幅が欲しい場合はimportしてDEVICE_WIDTHを呼び出せばOK
export const {
  width: DEVICE_WIDTH,
  height: DEVICE_HEIGHT
} = Dimensions.get('window');
