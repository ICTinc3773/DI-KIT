DI-KIT
==================================================



インストール
--------------------------------------------------

DI-KITを用いてプロジェクトを開始する方法を説明します。  
インストールは下記の2ステップで完了です。

1. DI-KITの入手
2. Node.jsパッケージのインストール


### DI-KITの入手

DI-KITは下記のgitリポジトリからクローン、もしくはZIPダウンロードしてください。  

https://github.com/ICTinc3773/di-kit

※クローン時に作成されるフォルダ名「DI_KIT-SFC」は適宜変更可能です。    


### Node.jsのインストール

DI-KITを動作させるにはNode.jsが必要です。

https://nodejs.org/ja/ より推奨版をダウンロードしてください。
（動作確認バージョンはv16.13.2です）


### Node.jsパッケージのインストール

DI-KITの動作に必要なパッケージをインストールします。  
環境に合わせて以下の手順で実施してください。  
なお、以下手順ではhttpでクローンした場合を想定しています。

※インストール中に`Are you interested in participating?`が表示されて処理が止まった場合は、キーボードで`n`を入力して`Enterキー`を押してください。  


#### Windowsの場合

1. エクスプローラーでDI_KIT-SFCフォルダを開く  
2. `_install.bat`ファイルをダブルクリックする
3. コマンドプロンプトが閉じるまで待つ  


#### ＭacOSの場合

1. ターミナルを起動しDI_KIT-SFCフォルダまで移動する
2. `npm install`コマンドを実行する



起動と停止
--------------------------------------------------


### DI-KITの起動方法

DI-KITには、動作確認用の簡易的なWebサイトが同梱されています。  
以下の手順では動作確認用Webサイトの表示まで示します。  
なお、以下手順ではhttpでクローンした場合を想定しています。  

※URLは3000番ポートを固定で使用します。  
他アプリケーションで3000番ポートが使用中の場合は、該当のアプリケーションを停止してください。  


#### Windowsの場合

1. エクスプローラーでDI_KIT-SFCフォルダを開く  
2. `_start.bat`ファイルをダブルクリックする
3. コマンドプロンプトに`No issues found.`が表示されるまで待つ  
4. 任意のブラウザを起動し、`http://localhost:3000`にアクセスする


#### MacOSの場合

1. ターミナルでDI_KIT-SFCフォルダまで移動する
2. `npm run dev`コマンドを実行する
3. ターミナルに`No issues found.`が表示されるまで待つ
4. 任意のブラウザを起動し、`http://localhost:3000`にアクセスする


### DI-KITの停止方法

`_start.bat`をダブルクリックした際に起動したコマンドプロンプト、PowerShell、ターミナルなどを閉じると停止します。  



ディレクトリ構造
--------------------------------------------------

ここからは、DI-KITのディレクトリ構造の説明をしていきます。  
DI-KITで主に使用するディレクトリは下記の4つになります。

* assets
* components
* pages
* static


### assets

assetsには、サイト全域でグローバルに利用するSassファイル、変換の必要な画像など、コンパイルで変換するファイルが格納されます。  
より詳しい情報は[Nuxt.jsの公式ドキュメント](https://nuxtjs.org/docs/directory-structure/assets/)を参照してください。  
デフォルトでは3つのファイルを用意してあります。  


### components

componentsディレクトリには、コンポーネントファイルを拡張子`.vue`で作成します。  
コンポーネントは「汎用的な部品」として、次の項で説明する`pages`の各ファイルや、`components`内で作成したほかのコンポーネントからも利用できます。


### pages

このディレクトリに設置したファイルが、サイト内の各ページとなります。  
componentsと併せて最も利用するディレクトリです。  

拡張子はcomponentsと同じく`.vue`で、これらのファイルをすべて読み込んで、ページの相対パスを自動的にルーティングします。  

例  
pages/about.vue → https://xxx.com/about/index.html  


### static

staticディレクトリには、変換不要な画像、PHPファイルなど、コンパイルで変換せずそのまま利用するファイルを配置しておきます。  
staicディレクトリ内のファイルは、`generate`で静的化する際に`dist`直下に出力され、URLとしてはルートディレクトリにマップされます。  
（generateとdistについては、併せて次の項で記述しています）  

HTMLの`src`等でのパス指定では、下記のように記述することで`static`内のファイルを利用できます。  

例  
static/images/sample_image.jpg に格納したファイル  
`<img src="/images/sample_image.jpg">`で利用


### dist

distディレクトリは、DI-KITのインストールを実行した段階では生成されていません。  
`npm run generate`をコマンドプロンプトやターミナルで実行することで、各種コンパイルを通して生成され、内部には静的化した各種ファイルが出力されます。  

distディレクトリに出力された内容をサーバ上に公開していただくことでサイトが閲覧できるようになります。  
（エクスプローラーやFinderでHTMLファイルを直接ダブルクリックしても、JSやCSSが読み込みできず表示崩れとなります）  

なお、DI-KITでは、Windows向けにgenerate処理用のbatファイルを用意してあります。  
プロジェクト内の最上位階層にある`_generate.bat`ファイルをダブルクリックすると、標準設定されたコマンドプロンプトやPowerShellなどターミナルで`npm run generate`コマンドが実行されます。  

MacOSでは外部作成したスクリプトファイルを実行できないので、ターミナルを起動してnpm run generateコマンドを実行してください。  


VSCodeの利用推奨と推奨プラグイン
--------------------------------------------------

DI-KITではVue.jsを用いてコーディングしていきます。  
コーディングがしやすい環境としてVSCodeの利用を推奨し、インストールを推奨するプラグインを以下に紹介します。  

### Vetur

このプラグインを入れる事でシンタックスハイライトやHTML, JavaScriptのコード補完が効くようになります。 
DI-KITではVue2系を使用しているのでコチラのプラグインの利用を推奨します。  

[Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)

### ESLint

ESLintは、JavaScriptの静的検証ツールです。  
DI-KITではESLintを標準利用しているのでコチラのプラグインの利用も推奨します。  
コーディングの段階で構文チェックを行ってくれるので、ビルド時のエラーなどを未然に防ぐことが出来ます。  

[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Markuplint

Markuplintは、HTMLなどマークアップ用の解析ツールです。  
DI-KITではHTMLの構文チェックを行っていないのでコチラのプラグインの利用を推奨します。  
必要なパッケージはインストール済みですので、プラグインのインストールと設定を行うだけで利用出来ます。  

[Markuplint](https://marketplace.visualstudio.com/items?itemName=yusukehirao.vscode-markuplint&ssr=false#overview)

### その他

あると便利なプラグインも紹介しておきます。  

#### Vue Peek

こちらのプラグインを利用する事でVSCodeのPeek機能を`.vue`ファイルでも使用する事が出来るようになります。  
コンポーネントファイルの量が増えてきた際など役立つかと思います。  

[Vue Peek](https://marketplace.visualstudio.com/items?itemName=dariofuzinato.vue-peek)


基本的なコーディング
--------------------------------------------------

DI-KITでコーディングを進めるにあたり、基本的な設定やコーディング方法を説明します。  

### ESLintの設定

DI-KITにはデフォルトでESLintのライブラリがインストールされており、コード書式の自動チェックが実行されます。  
そのため、各コンポーネントの`name`は以下のように複数単語のアッパーキャメルケース（各単語の先頭を大文字）で命名してください。  
`name: 'Index'`など1つのワードで作成している場合、コンパイル時にエラーが発生し正常に処理が行われません。  

`pages/index.vue`

```javascript
<script>
export default Vue.extend({
	name: 'IndexPage',
})
</script>
```

#### ルールの除外方法

ESLintのルールを除外したい場合、`.eslintrc.js`ファイルに追記してください。  
各コンポーネントのnameを複数単語で入力するルールを除外する場合は以下のようにする事で除外できます。  

`.eslintrc.js`

```javascript
module.exports = {
	rules: {
		'vue/multi-word-component-names': 'off'
	},
}
```

その他のルールや設定は以下サイトを参照してください。  

* [ESLintのルール一覧](https://eslint.org/docs/latest/rules/)
* [eslint-plugin-vueのルール一覧](https://eslint.vuejs.org/rules/)

### CSSの指定方法

CSSのグローバル指定は`assets/sass/global.scss`等を利用する事で可能となりますが、ページ毎に固有のCSSを指定したい場合は該当の`.vue`ファイル内で`style`タグを記述します。  
タグに`scoped`属性を付加する事でCSSの影響範囲をそのファイル内のみに限定することが出来ます。  

#### 子コンポーネントへのスタイル指定

コンポーネント内で読み込んでいる別のコンポーネント（子コンポーネント）にスタイルを指定したい場合、セレクタの前に`::v-deep`を追記してください。  

`components/parentComponent.vue`

```css
<style lang="scss" scoped>
::v-deep span {
	font-size: 10px;
}
</style>
```

### 外部scriptの読み込み方法

外部scriptの読み込みが必要な場合は以下のように設定してください。  

`nuxt.config.js`

```javascript
export default {
	head: {
		script: [
			{
				src: "https://xxxxx.com/ajax/sample.js"
			},
		],
	},
}
```

#### 特定のぺージだけで読み込む

サイト全域で読み込む必要がなく、特定ページだけで読み込みたい場合は該当の`.vue`ファイル内で以下のようにしてください。  

`pages/sample.vue`

```javascript
<script>
export default {
	head() {
		return {
			script: [
				{
					src: 'https://xxxxx.com/ajax/sample.js'
				}
			],
		}
	}
}
</script>
```

#### jsファイルをプロジェクト内に配置して読み込む

jsファイルを作成して読み込む場合は`static/js/sample.js`のように配置し`src`の値を以下のようにする事で読み込めます。  

`nuxt.config.js`

```javascript
export default {
	head: {
		script: [
			{
				src: "js/sample.js"
			},
		],
	},
}
```

※特定ページでの読み込みも`src`の値を同じようにするだけです  

ライブラリの利用
--------------------------------------------------

DI-KITにはデフォルトで`FontAwesome`と`GoogleFonts`のライブラリがインストールされています。  
以下では各ライブラリの使用方法を説明していきます。  

### FontAwesome

DI-KITで標準対応しているアイコンは「バージョン6の無料アイコン」です。  
用意しているスタイルは`Solid`, `Regular`と`Brands`の3種類。  
アイコンの詳細は[FontAwesome](https://fontawesome.com/v6/search)公式サイトを参照してください。  

#### アイコンの出力

FontAwesomeのアイコンは以下のように「Icon Name」を用いて出力します。  

`pages/sample.vue`

```javascript
<font-awesome-icon icon="heart"/>
```

スタイルを指定する場合は以下の書式を用いてください。  

`pages/sample.vue`

```javascript
<font-awesome-icon :icon="['fas', 'heart']"/>
<font-awesome-icon :icon="['far', 'heart']"/>
```

※FontAwsoemバージョン6からスタイルの指定方法が`fa-solid`のように変更されていますが、DI-KITでは従来の書式（`fas`）を使用します  

#### layerやtransformの利用

layerやtransformを利用する場合は以下のようにします。  
この場合、envelopeの上にheartのiconが重なって出力されます。  

```javascript
<font-awesome-layers class="fa-2x">
	<font-awesome-icon icon="envelope"/>
	<font-awesome-icon icon="heart" transform="shrink-9 up-1" :style="{ color: 'white' }"/>
</font-awesome-layers>
```

### GoogleFonts

GoogleFontsは以下のようにフォントをインストールしてからCSSの指定を行います。  

`/nuxt.config.js`

```javascript
export default {
	googleFonts: {
		families: {
			Questrial: true,
			'Noto+Sans+JP': [100, 300, 400, 500, 700, 900],
			Raleway: {
				wght: [100, 400],
				ital: [100]
			}
		}
	},
}
```

※上記の例ではQuestrialはすべての太さ、Noto Sans JP と Releway は任意の太さのフォントのみインストールしています

### AdobeFontsの利用方法

DI-KITではAdobeFontsに標準対応していません。  
利用する場合は以下手順で設定してください。  

#### AdobeFontsから埋め込み用コードを取得する

まずは、使用したいフォントファミリーを選び、Webプロジェクトを作成してください。  
プロジェクト作成後に発行される以下のようなコードが取得出来れば次に進みます。  
##### cssの場合

```css
<link rel="stylesheet" href="https://use.typekit.net/xxxxxxxs.css">
```

##### scriptの場合

```javascript
<script>
  (function(d) {
    var config = {
      kitId: 'xxxxxxxx',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
</script>
```

#### 埋め込み用コードをサイト全域で読み込む

上記で取得した埋め込み用コードでjsファイルを作成し`/static/js/adobe_sample.js`のように配置します。  
配置できたらサイト全域で読み込む設定を行います。  

##### cssの場合

`nuxt.config.js`  

```javascript
export default {
	head: {
		link: [
			{
				rel: 'stylesheet', href: 'https://use.typekit.net/xxxxxxx.css'
			},
		],
	},
}
```

##### scriptの場合

`nuxt.config.js`  

```javascript
export default {
	head: {
		script: [
			{
				src: "js/adobe_sample.js"
			},
		],
	},
}
```

#### CSSでフォント指定  

後は適用したいページでCSSの指定をおこなうだけです。   

※CSS指定方法の確認は[マイフォントのWebプロジェクト](https://fonts.adobe.com/my_fonts#web_projects-section)ページ内にある、「WEB フォントファミリー」詳細ページで確認できます  


WinSCPのミラーリングアップロード
--------------------------------------------------

「DI-KITで制作したコンテンツをテスト環境で確認しながら調整したい」という場合は、[WinSCP](https://winscp.net/eng/docs/lang:jp)などのFTPクライアントにミラーリングアップロード機能があると便利です。  

ここではWinSCPを用いて`dist`ディレクトリ以下のファイルを監視し`npm run generate`実施後の更新内容を自動で反映する方法を紹介します。  

まずはWinSCPで対象となるサーバへ接続してください。  
接続が完了したら、WinSCPのメニューにある「ミラーリングアップロード」をクリックもしくは、キーボードの`Ctrl`と`u`を同時に押してください。  
ミラーリングアップロードの設定画面が表示されたら「ディレクトリ」の「同期元ローカル ディレクトリ」と「同期先リモート ディレクトリ」を適宜入力してください。  
入力完了後「転送オプション」の「サブディレクトリも更新する」にチェックが入っている事を確認し「開始」をクリックしてアップロードの完了を待つだけです。  


Google reCAPTCHA v3の実装方法
--------------------------------------------------

フォームに reCAPTCHA v3 を実装したい時の参考として以下に手順とサンプルコードを示します。  
プロジェクト毎に適宜編集して利用してください。  

※reCAPTCHA v3 の詳しい情報は[公式ドキュメント](https://developers.google.com/recaptcha/docs/v3)を参照してください  

### サイト・シークレットキーの発行

[Google reCAPTCHA](https://www.google.com/recaptcha/about/)ページへアクセスし、`v3 Admin Console`から新しいサイトの登録を行ってください。  
登録完了時に発行される「サイトキー」と「シークレットキー」は以降のセクションで必要になるので、コピーを取るなどしておいてください。  

### フロントエンド（クライアントサイド）の設定

DI-KITにはreCAPTCHAを簡単に設置するための[recaptcha-module](https://github.com/nuxt-community/recaptcha-module#configuration)がインストールされています。  
設定ファイル`siteKey:`の値に「サイト・シークレットキーの発行」で取得したサイトキーを設定します。  

`nuxt.config.js`

```javascript
export default {
	recaptcha: {
		hideBadge: false,
		siteKey: 'サイトキー',
		version: 3,
		size: 'compact'
	},
}
```

次に、実装したい`.vue`テンプレートの`<form>`に`@submit.prevent="onSubmit"`を追記します。  

`form.vue`

```html
<form @submit.prevent="onSubmit">
  <input type="email" v-model="email">

  <button type="submit">送信</button>
</form>
```

`<script>`には以下を追記してトークンを取得します。  
取得したトークンはそのままバックエンドに送信してください。（下記サンプルコードの`onSubmit()`参照）  
ページ遷移時などにトークンを破棄するための処理も記述しておきます。（下記サンプルコードの`beforeDestroy()`参照）

`form.vue`

```javascript
export default {
	async mounted() {
		try {
			await this.$recaptcha.init(); // recaptcha初期化
		} catch (e) {
			console.error(e);
		}
	},
	beforeDestroy() {
		this.$recaptcha.destroy(); // reCAPTCHAに関するデータを破棄する
	},
	methods: {
		async onSubmit() {
			try {
				const token = await this.$recaptcha.execute('login'); // トークンの取得

				// バックエンドへ送信する処理をここに実装してください


			} catch (error) {
				console.log('submit error:', error);
			}
		},
	}
}
```

### バックエンド（サーバサイド）の設定

フロントエンドから送信されたトークンが有効なものかバックエンドで検証する必要があります。  
検証結果に応じた処理を実装してください。 

以下ではPHPを用いた際のサンプルコードを示します。  
実際の処理はプロジェクト毎に適宜作成してください。  
 
```php
// reCAPTCHA --------------------------------------------------

// スコア閾値（このスコア以下であれば送信不可とする / 0.0 - 1.0）
$threshold = 0.5;

// 送信先URL（固定）
$url = 'https://www.google.com/recaptcha/api/siteverify';

// 送信データ組み立て用にパラメータごとに変数へ代入
$secret   = ''; // reCAPTCHAのシークレットキーを代入する（アカウントごと異なる）
$response = $_POST['g-recaptcha-response']; // reCAPTCHAのユーザーレスポンスコード


// 送信データの組み立て
$post_data = 'secret='.$secret.'&response='.$response;

// cURLセッションを初期化
$ch = curl_init();

// cURLオプションの設定
curl_setopt($ch, CURLOPT_URL, $url); // 通信先URLの指定
curl_setopt($ch, CURLOPT_POST, TRUE); // POST送信
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // 実行結果を文字列で返す
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // サーバ証明書の検証を行わない
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/x-www-form-urlencoded')); // リクエストヘッダーの設定
curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data); // 送信データの設定

// cURLの実行
$data = json_decode(curl_exec($ch));

// cURLのクローズ
curl_close($ch);

if ($data->success != 1 || $data->score <= $threshold) {
  /*
  閾値以下スコアの場合のエラー処理をここへ記述
  可能であればステータスコード202で返却（システム都合で難しければ200でもOK）
  202で返せばインフラで検知できるので望ましいとのこと

  挙動は基本的にバリデーションエラーと同様、エラーメッセージの表示でよい
  「Google reCAPTCHAによる判定でエラーが発生しました。もう一度やりなおしてください。」のようなメッセージを出力する。
  */
}
else {
  /*
  閾値より大きいスコアの場合の処理（メール送信の実行等）をここへ記述
  */
}
```

※`$secret`の値は「サイト・シークレットキーの発行」で取得したシークレットキーに置き換えください。


トラブルシューティング
--------------------------------------------------

DI-KITで制作中に起こりうる「表示されない」や「動作しない」場合の確認内容・対応について記します。  


### FontAwesomeのアイコンが表示されない

FontAwesome v6 に存在しないアイコン名を使用している可能性があります。  
詳細は以下を実施してエラーが出ていないか確認してみてください。  

1. ローカル環境にて該当ページを開く
2. ページリロードをおこなう
3. 「DI-KITの起動方法」で立ち上げたコマンドプロンプトもしくはターミナルを確認

※参考：アイコン名が存在しない場合のエラー文

```bash
ERROR  Could not find one or more icon(s) {
  prefix: 'fas',
  iconName: 'home'
} {}
```


### ローカル開発でバックエンド処理が動作しない  

DI-KITではローカルでのバックエンド処理は標準対応していません。  
テスト環境などにアップロードして動作確認をおこなってください。  


### 警告文が表示される

コマンドプロンプトもしくはターミナルに表示される警告文の対応方法です。  


#### `Browserslist`

警告文

```bash
 WARN  Browserslist: caniuse-lite is outdated. Please run:
  npx browserslist@latest --update-db
  Why you should do it regularly: https://github.com/browserslist/browserslist#browsers-data-updating
```

1. コマンドプロンプト／ターミナルを開きプロジェクトのルートディレクトリまで移動
2. `npx browserslist@latest --update-db`を実行


#### `PostCSS`

警告文

```bash
 WARN You did not set any plugins, parser, or stringifier. Right now, PostCSS does nothing. Pick plugins for your case on https://www.postcss.parts/ and use them in postcss.config.js.
```

1. `nuxt.config.js`に下記を追記

```javascript
export default {
	build: {
		postcss: false,
	}
}
```


お問い合わせ
--------------------------------------------------

お問い合わせ・取材申し込みは info@di-coding.com までご連絡ください。