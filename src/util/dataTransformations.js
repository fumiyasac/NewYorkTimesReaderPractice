/**
 * ステートで取得した値の整形用に使用するUtility関数群
 * → データをフェッチする部分ではただ単にJSONを取得するだけ
 * 1. このメソッドとnewsSelectorsに定義したメソッドを組み合わせてContainerに引き渡す
 * 2.
 */
import moment from 'moment';

//画像等の種別に当てはまるURLを選出する
const getMultimediaUrlByFormat = (multimedia, format) => {
  if (!multimedia) {
    return '';
  }
  const matchingFormat = multimedia.find(media => media.format === format);
  if (!matchingFormat) {
    return '';
  }
  return matchingFormat.url;
};

//一覧表示用のデータを作成する
export const reshapeNewsData = news => (

  //JSONから取得してstate.newsに格納された値を元に整形する
  news.map(({ abstract, byline, geo_facet, multimedia, published_date, title, url }) => ({
    description: abstract || '',
    author: byline ? byline.replace('By ', '') : '',
    location: geo_facet.length > 0 ? geo_facet[0] : '',
    imageUrl: getMultimediaUrlByFormat(multimedia, 'thumbLarge'),
    date: moment(published_date).format('MMM Do YYYY'),
    title,
    url
  }))
);

//検索文字列に該当するデータを選出する
export const filterNewsBySearchTerm = (newsItems, searchTerm) => {

  // returns an empty list if you haven't typed anything
  // 検索文字列が何もない場合は結果は返さないようにする
  if (searchTerm.length === 0) {
    return [];
  }

  //検索文字列に該当するものだけをフィルタリングする
  return newsItems.filter(({ description, author, title }) => (
    description.toLowerCase().indexOf(searchTerm) > -1 ||
    author.toLowerCase().indexOf(searchTerm) > -1 ||
    title.toLowerCase().indexOf(searchTerm) > -1
  ));
};
