/**
 * ニュース単体表示部分
 */
import React, { Component, PropTypes } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    ActionSheetIOS
} from 'react-native';

//自作コンポーネントのインポート
import Byline from './Byline';
import AppText from './AppText';
import Thumbnail from './Thumbnail';

//共通定義のスタイルシートのコンポーネント
import * as globalStyles from '../styles/global';

//ClassComponentの定義
//ニュース単体表示部分のコンポーネント設定
export default class NewsItem extends Component {

  //コンストラクタ
  constructor(props) {
    super(props);

    //thisの値をバインドをする（このアクションを発火させた際にthis.propsの値を使用するため）
    this.onLongPress = this.onLongPress.bind(this);
  }

  //長押しした際のアクション
  onLongPress() {

    //アクションシートの表示をする
    ActionSheetIOS.showActionSheetWithOptions({
      options: ['Bookmark', 'Cancel'],
      cancelButtonIndex: 1,
      title: this.props.title
    }, buttonIndex => console.log('Button selected', buttonIndex));
  }

  //見た目のレンダリング
  render() {

    //this.propsの値をオブジェクトに格納する
    const {
      style,
      imageUrl,
      title,
      author,
      date,
      location,
      description,
      onPress
    } = this.props;

    //色の表示を決定する
    const accentColor = globalStyles.ACCENT_COLORS[
      this.props.index % globalStyles.ACCENT_COLORS.length
    ];

    //表示される画面を作成する
    return (
      <TouchableOpacity style={style} onLongPress={this.onLongPress} onPress={onPress}>
        <View>
          <Thumbnail url={imageUrl} titleText={title} accentColor={accentColor} style={styles.thumbnail} />
          <View style={styles.content}>
            <Byline author={author} date={date} location={location} />
            <AppText>
              {description}
            </AppText>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

//このコンポーネントのpropTypes(this.propsで受け取れる情報に関するもの)定義
NewsItem.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  location: PropTypes.string,
  index: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
  style: View.propTypes.style
};

//このコンポーネント内で使用するスタイル定義
const styles = StyleSheet.create({
  thumbnail: {
    marginBottom: 5
  },
  content: {
    paddingHorizontal: 5
  }
});
