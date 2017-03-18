/**
 * 日付・著者の表示部分
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
//日付・著者の表示部分のコンポーネント設定
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

//このコンポーネントのpropTypesの定義
//ここは変更をしてはいけない場所
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
