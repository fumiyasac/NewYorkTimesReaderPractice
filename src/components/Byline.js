/**
 * 日付・著者の表示部分のコンポーネント
 */
import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

//自作コンポーネントのインポート
import SmallText from './SmallText';

//共通定義のスタイルシートのコンポーネント
import * as globalStyles from '../styles/global';

//FunctionalComponentの定義
/**
 * Bylineの設定
 * 引数の一覧 →
 * date: 日付の文字列,
 * author: 著者の文字列,
 * location: ロケーションの文字列
 */
const Byline = ({ date, author, location }) => (
  <View>
    <View style={styles.row}>
      <SmallText>
        {date}
      </SmallText>
      <SmallText>
        {author}
      </SmallText>
    </View>

    {/* 引数：locationの有無で表示を制御する */}
    {location ? (
      <View style={styles.row}>
        <SmallText style={styles.location}>
          {location}
        </SmallText>
      </View>
    ) : null}
  </View>
);

//このコンポーネントのpropTypes(this.propsで受け取れる情報に関するもの)定義
Byline.propTypes = {
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  location: PropTypes.string
};

//このコンポーネント内で使用するスタイル定義
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  location: {
    color: globalStyles.MUTED_COLOR
  }
});

export default Byline;
