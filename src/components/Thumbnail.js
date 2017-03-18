import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';

//自作コンポーネントのインポート
import Title from './Title';

//FunctionalComponentの定義
//サムネイル表示用のView
const Thumbnail = ({ style, titleText, accentColor, url }) => {

  //表示画像のスタイル定義
  const imageStyle = {
    backgroundColor: `${accentColor}77`
  };

  //タイトルの表示
  const TitleComponent = <Title style={styles.title}>{titleText}</Title>;

  //見た目のレンダリングを行う
  return (
    <View style={[styles.container, { borderColor: accentColor }, style]}>
      {url.length > 0 ? (
        <Image style={[styles.image, imageStyle]} source={{ uri: url }}>
          {TitleComponent}
        </Image>
      ) : (
        <View style={[styles.image, imageStyle]}>
          {TitleComponent}
        </View>
      )}
    </View>
  );
};

//このコンポーネントのpropTypesの定義
//ここは変更をしてはいけない場所
Thumbnail.propTypes = {
  style: View.propTypes.style,
  url: PropTypes.string.isRequired,
  accentColor: PropTypes.string.isRequired,
  titleText: PropTypes.string
};

//このコンポーネント内で使用するスタイル定義
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 3,
    borderStyle: 'solid'
  },
  image: {
    height: 100,
    justifyContent: 'flex-end'
  },
  title: {
    padding: 5
  }
});

export default Thumbnail;
