import React, { Component } from 'react';
import {
  TabBarIOS,
  Text,
  Alert,
  Vibration,
  StatusBar
} from 'react-native';

//自作コンポーネントのインポート
import NewsFeedContainer from '../containers/NewsFeedContainer';
import SearchContainer from '../containers/SearchContainer';

//共通定義のスタイルシートのコンポーネント
import * as globalStyles from '../styles/global';

//ステータスバーの表示設定
StatusBar.setBarStyle('light-content');

//ClassComponentの定義
//一番最初に表示される画面のコンポーネントs設定
export default class HomeScreen extends Component {

  //コンストラクタ
  constructor(props) {
    super(props);

    //ステートの定義
    this.state = {
      tab: 'newsFeed'
    };
  }

  //アラートを表示させる(Work in Progress...)
  // → Alert.alert('タイトル', '表示する詳細文言', [{ text: 'ボタンのテキスト', onPress: () => 内部処理をごにょごにょ... }, ... ]);
  showBookmarkAlert() {
    Vibration.vibrate();
    Alert.alert(
      'Coming Soon!',
      'We\'re hard at work on this feature, check back in the near future.',
      [{ text: 'OK', onPress: () => console.log('User pressed OK') }]
    );
  }

  //見た目のレンダリング
  render() {
    return (
      <TabBarIOS barTintColor={globalStyles.BAR_COLOR} tintColor={globalStyles.LINK_COLOR} translucent={false}>
        {
          /*
            ----------
            タブバーの表示について：
            ----------
            selected属性の値で表示・非表示のハンドリングを行う（切り替えた際はステートの値も更新する）
          */
        }
        <TabBarIOS.Item systemIcon={'featured'} selected={this.state.tab === 'newsFeed'} onPress={() => this.setState({ tab: 'newsFeed' })}>
          <NewsFeedContainer />
        </TabBarIOS.Item>
        <TabBarIOS.Item systemIcon={'search'} selected={this.state.tab === 'search'} onPress={() => this.setState({ tab: 'search' })}>
          <SearchContainer />
        </TabBarIOS.Item>
        <TabBarIOS.Item systemIcon={'bookmarks'} selected={this.state.tab === 'bookmarks'} onPress={() => this.showBookmarkAlert()}>
          <Text>Bookmarks</Text>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
