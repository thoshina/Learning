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


次は https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#active_learning_experiment_with_character_encoding から
