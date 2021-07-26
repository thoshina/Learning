## 2021/03/29

### HTML入門

HTMLの概念/文法等を学習


#### HTML を始めよう
HTML は要素の集まりからなり、コンテンツの一部を要素で囲む（マークアップする）ことで、特定の見せ方・動かし方を表現する

##### 実習
<em> ～ </em> で囲う
⇒ 斜体になる

HTML例文のファイル名は index.html と指定されていたので修正
そのほか、見出しを付けたり文章を変更したり、リンク・画像を追加したりする

文字コードがShift-JISだったためUTF-8に変更
HTML構文がうろ覚えすぎたので修正

##### HTML内の空白

HTMLではどれだけ半角スペースを入れても一つのスペースと認識される。
`<p>` 要素内で改行しても、半角スペースになる。改行する場合は `<br>` を使う。

#### 実体参照: HTML に特殊文字を含める

特殊文字 `<` `>` `"` `'` `&` の書き方
- `<` ⇒ `&lt;`
- `>` ⇒ `&gt;`
- `"` ⇒ `&quot;`
- `'` ⇒ `&apos;`
- `&` ⇒ `&amp;`

#### HTMLにおけるコメント

`<!--` ～ `-->` で囲む


### head には何が入る? HTML のメタデータ
#### HTML の head とは何か？
##### タイトルをつける
head のタイトルは `h1` タグの内容とは全く別の物

https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/title-example.html よりHTMLファイルの内容をコピー


##### メタデータ: <meta>要素

様々な機能があり、文字コードの設定なども行なう

作成者と説明を追加する
多くの <meta> 要素は `name` と `content` 属性が含まれる

https://developer.mozilla.org/ja/ の `description` を参照

`description` 内の文で検索すると、 https://developer.mozilla.org/ja/ が検索結果の上位に表示される


メタデータの他の種類

- プロプライエタリ（proprietary）  
独自仕様の・非公開のという意味で、オープンの対義語になる。


サイトにファビコンを設定

##### HTML に CSS と JavaScript を追加する

CSS、JavaScript は それぞれ <link> 要素、 <script> 要素で表す

サイトにダウンロードしたCSS・JavaScriptを追加

##### 必要な言語の設定

lang属性で指定
<html lang="en-US">

文中で部分的に指定もできる
<p>Japanese example: <span lang="ja">ご飯が熱い。</span>.</p>


### HTML テキストの基礎
#### 基本: 見出しとパラグラフ
パラグラフは `<p>` で囲み、見出しは `h1` ～ `h6`　で囲む

text-start.html を DL

構造化の練習を行なう


#### リスト

順序無し
<ul>
  <li>～</li>
  <li>～</li>
</ul>

順序付き
<ol>
  <li>～</li>
  <li>～</li>
</ol>

text-start.html をリストに加工
<p>タグも追加

#### 入れ子のリスト
<ul> ～ </ul>、<ol> ～ </ol> の間に <ul> ～ </ul>、<ol> ～ </ol> を入れると、入れ子のリストになる

