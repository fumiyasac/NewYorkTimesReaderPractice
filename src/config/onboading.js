/**
 * Onboarding(導入画面)用の設定
 */

//使用するスタイルのインポート
import {
  ACCENT_COLORS,
  MUTED_COLOR,
  TEXT_COLOR
} from '../styles/global';

//画像の部分（ここは適宜差し替えてもよいかもしれない）
const placeholderImage = 'https://placeholdit.imgix.net/' +
  '~text?txtsize=24' +
  `&bg=${MUTED_COLOR.replace('#', '')}` +
  `&txtclr=${TEXT_COLOR.replace('#', '')}` +
  '&w=350&h=350&txttrack=0&txt=Placeholder+Image+';

//Onboading用のテキスト表示部分（文言だけを一旦配列にしておく）
const content = [
  'Welcome to RNNYT!',
  'With this app, you can learn all about the news!',
  'And you get to experiment with React Native!',
  'And aren\'t animations fun?!'
];

//Onboading用のテキストをmapを使ってオブジェクトにして返すようにする
export default content.map((message, i) => ({
  message,
  color: '#fff',
  backgroundColor: ACCENT_COLORS[i % ACCENT_COLORS.length],
  uri: `${placeholderImage}${i + 1}`
}));
