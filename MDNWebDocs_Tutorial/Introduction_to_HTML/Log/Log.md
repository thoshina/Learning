﻿## 2021/03/29

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

### 強調と重要性
#### 強調
<em> で囲うことでイタリック体になり、強調扱いになる。スクリーンリーダーでも発音が変わるので、ただイタリック体にするためだけに使ってはいけない。

#### 重要度が高い
<strong> で囲うことで太字になり、重要な意味を持つ扱いになる。こちらも、スクリーンリーダーで発音が変わる。

#### イタリック、太字、下線...
それぞれ <i>、<b> 、<u>で適用できるが表示を変える以上の意味を持たないため、現在は使用しないほうが良い。
イタリック・太字については上記の意味を持つし、下線についてもハイパーリンクと間違えてしまうため、


### ハイパーリンクの作成
#### ハイパーリンクとは
様々なwebコンテンツが利用できるリンク

#### リンクの解剖
<a> タグを使用。リンク先は href= で指定する
title = でリンクにマウスカーソルを合わせた時に表示される文字を指定
リンクには画像も指定可能

#### URL とパスに関する簡単な入門

URLでもファイルパスと同様にサブディレクトリを表現する

##### ドキュメントフラグメント

HTMLの特定の部分（ドキュメントフラグメント）にリンクを作ることもできる

<h2 id="Mailing_address">Mailing address</h2>

のようにidを付けると、

<a href="contacts.html#Mailing_address">mailing address</a>

でidの場所にリンクできる。

同じドキュメント内なら、 `#Mailing_address` でもリンク可能


#### 絶対 URL vs 相対 URL
- 絶対URL  
protocol と domain name を含む、Web 上の絶対位置で定義された位置を指すURL。  
使用されている場所に関係なく、常に同じ場所を指す。  

- 相対URL  
リンクしているファイルからの相対的な場所を指すURL。  
あるファイルを基準にしてファイルの位置を表現する。
リンク切れに注意。


### リンクのベストプラクティス  
#### 明確なリンク用語を使う  
誰にとっても（スクリーンリーダーを含む）わかりやすいリンクテキストを使う。  
リンクがあることはすでにわかるので、さらに「～のリンク」などとは書かない。  
リンクテキストはできるだけ短くする。  

#### できるだけ相対リンクを使う  
- コードが短くなり読みやすくなる  
- 絶対URLだとブラウザがいちいちサーバの検索からやり直すため、表示効率が落ちる  

#### HTML 以外のリソースへのリンク - 明確な道標を残す  
リンク先の情報を表示する。リンクをクリックしたら大きなファイルのダウンロードが始まったり、動画再生が始まったりすると困る環境でサイトを見ている人もいるため。  

#### ダウンロードへのリンクは download 属性を使う  
download 属性を使うことで、ファイル名の初期値を指定できたりする  


#### ナビゲーションメニューを作成



#### メールのリンク
<a href="mailto:～"></a> でメール送信用のリンク
さらに、ccなど標準のメールヘッダフィールドを追加できる


## 高度なテキスト処理
### 説明リスト
ある事柄についての説明を記述する方法。以下のように記述する。

```
<dl>
  <dt>タイトル</dt>
  <dd>ドキュメント</dd>
</dl>
```

### 引用
#### ブロッククォート
文章などを丸ごと引用した場合などに使用する

ブロッククォートを再学習  
ブロッククォートで表示されると、一段インデントが下がって表示されるなどする。

また、属性 `cite` は、ブラウザの表示に影響しないし、リンクを発生させたりしない。
ユーザーエージェントがサイトの情報を得るときに参照する。

#### インラインクォート
文中の一文に引用先を付ける際に使用する
こちらも、属性 `cite` は、ブラウザ等の表示に影響しない。

#### 引用元
属性 `cite` は、ブラウザ等の表示に影響しない。ここで説明していました。

Confucius = 孔子のこと。“子、曰く…”の `子` のような単語の様子。


#### 略語
<abbr> を使用。ツールチップで略語の内容が表示できる

<p>We use <abbr title="Hypertext Markup Language">HTML</abbr> to structure our web documents.</p>
<p><abbr title="National Aeronautics and Space Administration">NASA</abbr> sure does some exciting work.</p>

#### 詳細な連絡先をマークアップする

<address>タグで囲って連絡先を表現する。


#### 上付きと下付き

文字を、行の上部・下部に寄せて表示できる。乗数や、化学式などを表現できる。
<sup> が上、 <sup> が下。


#### コンピューターコードを表現する

<code>コードのを表現する
<pre>空白を表示できるようになる
<var>変数を表現する
<kbd>キーボード入力を表現する
<samp>出力を表現する


#### 日付と時刻をマークアップする

<time datetime="2016-01-20">20 January 2016</time>

表示される日時ではなく、コンピュータが読める形で記述する。
月のみ、時刻のみなど、様々な表現がある


### ドキュメントと Web サイトの構造  


#### 文章の基本部分
ヘッダー、ナビゲーションバー、メインコンテンツ、サイドバー、フッターなど

#### コンテンツを構造化する HTML

https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure#active_learning_exploring_the_code_for_our_example のコードを確認  


#### HTML レイアウト要素の詳細

<main> <article> <section> <aside> <header> <nav> <footer> など。
解説は https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure#html_layout_elements_in_more_detail 。

#### 非セマンティックなラッパー

HTMLでは以下のふたつが提供されている

- <span>  
インラインの項目で適当なものが無い時に使用

- <div>  
ブロック単位の項目で適当なものが無い時に使用


#### 改行と垂直方向のルール

- <br>  
改行を入れたいときに使用

- <hr>  
区切りになる水平線を入れたいときに使用


#### 簡単なウェブサイトを計画する

1. すべてのページに共通なものを書き出す
2. 各ページの構造を大まかにスケッチ
3. 1.で上げた以外の、サイトに載せたいすべてのコンテンツを書き出す
4. 3.で上げたコンテンツを分類する
5. 大まかなサイトマップをスケッチ


### HTMLのデバッグ

#### HTMLとデバッグ
##### 許容コード

[debug-example.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/debugging-html/debug-example.html) を DL

上のファイルの問題点を確認.

https://validator.w3.org/#validate_by_input を使うと、修正すべき点などがわかる


### 手紙をマークアップする

課題用のテキスト（letter-text.txt、css.txt）をダウンロード
課題の内容などを確認中

次回も引き続き https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter

