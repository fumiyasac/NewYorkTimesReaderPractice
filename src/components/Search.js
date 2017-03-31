/**
 * ニュース検索結果表示部分
 */
import React, { Component, PropTypes } from 'react';
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native';

//自作コンポーネントのインポート
import NewsFeed from './NewsFeed';

//共通定義のスタイルシートのコンポーネント
import * as globalStyles from '../styles/global';

//ClassComponentの定義
//ニュース検索結果表示部分のコンポーネント設定
export default class Search extends Component {

  //コンストラクタ
  constructor(props) {
    super(props);

    //ステートの定義
    this.state = {
      searchText: ''
    };

    //thisの値をバインドをする（このアクションを発火させた際にthis.propsの値を使用するため）
    this.searchNews = this.searchNews.bind(this);
  }

  //受け取ったテキストの値をthis.props.searchNewsメソッドの引数にして再度実行をする
  searchNews(text) {
    this.setState({ searchText: text });
    this.props.searchNews(text);
  }

  //見た目のレンダリング
  render() {
    return (
      <View style={globalStyles.COMMON_STYLES.pageContainer}>
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            onChangeText={this.searchNews}
            value={this.state.searchText}
            placeholder={'Search'}
            placeholderTextColor={globalStyles.MUTED_COLOR}
          />
        </View>
        {
          /*
            ----------
            表示しているニュースフィードのデータに関して：
            ----------
            1. TextInputの値が変更されると'onChangeText属性に設定したsearchNewsメソッドが実行される
            2. ステート値：searchTextの値が入力した値に更新される ※TextInput内に値は残ったまま
            3. this.propsに渡されたsearchNews(TextInputの値)メソッドが実行される
            4. 実行結果はthis.propsfilteredNewsに格納される
          */
        }
        <NewsFeed
          news={this.props.filteredNews}
          listStyles={{}}
          showLoadingSpinner={false}
        />
      </View>
    );
  }
}

//このコンポーネントのpropTypes(this.propsで受け取れる情報に関するもの)定義
// → searchNews(text)が実行されるとステートの値が更新されてfilteredNewsの値が更新される
Search.propTypes = {
  filteredNews: PropTypes.arrayOf(PropTypes.object),
  searchNews: PropTypes.func.isRequired
};

//このコンポーネント内で使用するスタイル定義
const styles = StyleSheet.create({
  input: {
    height: 35,
    color: globalStyles.TEXT_COLOR,
    paddingHorizontal: 5,
    flex: 1
  },
  search: {
    borderColor: globalStyles.MUTED_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 5
  }
});
