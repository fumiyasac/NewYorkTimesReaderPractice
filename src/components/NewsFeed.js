/**
 * ニュース全体表示部分
 */
import React, { PropTypes, Component } from 'react';
import {
  ListView,
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  WebView,
  RefreshControl,
  ActivityIndicator
} from 'react-native';

//自作コンポーネントのインポート
import NewsItem from './NewsItem';
import SmallText from './SmallText';

//共通定義のスタイルシートのコンポーネント
import * as globalStyles from '../styles/global';

//ClassComponentの定義
//ニュース全体表示部分のコンポーネント設定
export default class NewsFeed extends Component {

  //コンストラクタ
  constructor(props) {
    super(props);

    //ListView用のdataSourceの定義
    this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1.title !== row2.title
    });

    //ステートの定義
    this.state = {
      dataSource: this.ds.cloneWithRows(props.news),
      initialLoading: true,
      modalVisible: false,
      refreshing: false
    };

    //thisの値をバインドをする（このアクションを発火させた際にthis.propsの値を使用するため）
    this.renderRow = this.renderRow.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  //コンポーネントがマウントされる前に実行される
  componentWillMount() {
    this.refresh();
  }

  //this.propsの値が更新されたタイミングで実行される
  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.news),
      initialLoading: false
    });
  }

  //モーダルを閉じるアクション
  onModalClose() {
    this.setState({
      modalVisible: false,
      modalUrl: undefined
    });
  }

  //モーダルを開くアクション
  onModalOpen(url) {
    this.setState({
      modalVisible: true,
      modalUrl: url
    });
  }

  //ニュースデータをリロードして更新する
  refresh() {
    if (this.props.loadNews) {
      this.props.loadNews();
    }
  }

  //モーダルのレンダリングを行う
  renderModal() {
    return (
      <Modal animationType="slide" visible={this.state.modalVisible} onRequestClose={this.onModalClose}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={this.onModalClose} style={styles.closeButton}>
            <SmallText>Close</SmallText>
          </TouchableOpacity>
          <WebView scalesPageToFit source={{ uri: this.state.modalUrl }} />
        </View>
      </Modal>
    );
  }

  //ListViewにデータを入れる
  renderRow(rowData, ...rest) {
    const index = parseInt(rest[1], 10);
    return (
      <NewsItem
        onPress={() => this.onModalOpen(rowData.url)}
        style={styles.newsItem}
        index={index}
        {...rowData}
      />
    );
  }

  //見た目のレンダリング
  render() {

    //this.propsの値を取得する
    const {
      listStyles = globalStyles.COMMON_STYLES.pageContainer,
      showLoadingSpinner
    } = this.props;

    //ステートの値を取得する
    const { initialLoading, refreshing, dataSource } = this.state;

    //ローディング中かどうかを判定して、ロード完了の場合にはListViewを表示
    return (
      (initialLoading && showLoadingSpinner
        ? (
          <View style={[listStyles, styles.loadingContainer]}>
            <ActivityIndicator animating size="small" {...this.props} />
          </View>
        ) : (
          <View style={styles.container}>
            <ListView
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={this.refresh} />
              }
              enableEmptySections
              dataSource={dataSource}
              renderRow={this.renderRow}
              style={listStyles}
            />
            {this.renderModal()}
          </View>
        )
      )
    );
  }
}

//このコンポーネントのpropTypes(this.propsで受け取れる情報に関するもの)定義
NewsFeed.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
  listStyles: View.propTypes.style,
  loadNews: PropTypes.func,
  showLoadingSpinner: PropTypes.bool
};

//デフォルトのprop値の定義
NewsFeed.defaultProps = {
  showLoadingSpinner: true
};

//このコンポーネント内で使用するスタイル定義
const styles = StyleSheet.create({
  newsItem: {
    marginBottom: 20
  },
  container: {
    flex: 1
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: globalStyles.BG_COLOR
  },
  closeButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row'
  }
});
