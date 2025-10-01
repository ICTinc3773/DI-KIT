# DI-KIT

## インストール

DI-KIT を用いてプロジェクトを開始する方法を説明します。  
インストールは下記の 2 ステップで完了です。

1. DI-KIT の入手
2. Node.js パッケージのインストール

### DI-KIT の入手

DI-KIT は下記の git リポジトリからクローン、もしくは ZIP ダウンロードしてください。

https://github.com/ICTinc3773/di-kit

### Node.js のインストール

DI-KIT を動作させるには Node.js が必要です。

https://nodejs.org/en/download/prebuilt-installer より v22.13.0 をダウンロードしてください。
（動作確認バージョンは v22.13.0、v20.13.1 です）

### Node.js パッケージのインストール

DI-KIT の動作に必要なパッケージをインストールします。  
環境に合わせて以下の手順で実施してください。

※インストール中に`Are you interested in participating?`が表示されて処理が止まった場合は、キーボードで`n`を入力して`Enterキー`を押してください。

#### Windows の場合

1. エクスプローラーで DI-KIT-main フォルダを開く
2. `_install.bat`ファイルをダブルクリックする
3. コマンドプロンプトが閉じるまで待つ

#### ＭacOS の場合

1. ターミナルを起動し DI-KIT-main フォルダまで移動する
2. `npm install`コマンドを実行する

## 起動と停止

### DI-KIT の起動方法

DI-KIT には、動作確認用の簡易的な Web サイトが同梱されています。  
以下の手順では動作確認用 Web サイトの表示まで示します。

※URL は 3000 番ポートを固定で使用します。  
他アプリケーションで 3000 番ポートが使用中の場合は、該当のアプリケーションを停止してください。

#### Windows の場合

1. エクスプローラーで DI-KIT-main フォルダを開く
2. `_start.bat`ファイルをダブルクリックする
3. コマンドプロンプトに`Vite server warmed up`が表示されるまで待つ
4. 任意のブラウザを起動し、`http://localhost:3000`にアクセスする

#### MacOS の場合

1. ターミナルで DI-KIT-main フォルダまで移動する
2. `npm run dev`コマンドを実行する
3. ターミナルに`Vite server warmed up`が表示されるまで待つ
4. 任意のブラウザを起動し、`http://localhost:3000`にアクセスする

### DI-KIT の停止方法

`_start.bat`をダブルクリックした際に起動したコマンドプロンプト、PowerShell、ターミナルなどを閉じると停止します。

## ディレクトリ構造

ここからは、DI-KIT のディレクトリ構造の説明をしていきます。  
DI-KIT で主に使用するディレクトリは下記の 5 つになります。

- assets
- components
- pages
- static
- dist

### assets

assets には、サイト全域でグローバルに利用する Sass ファイル、変換の必要な画像など、コンパイルで変換するファイルが格納されます。  
より詳しい情報は[Nuxt3 の公式ドキュメント](https://nuxt.com/docs/getting-started/assets)を参照してください。  
デフォルトでは 3 つのSCSSファイルを用意してあります。

### components

components ディレクトリには、コンポーネントファイルを拡張子`.vue`で作成します。  
コンポーネントは「汎用的な部品」として、次の項で説明する`pages`の各ファイルや、`components`内で作成したほかのコンポーネントからも利用できます。

### pages

このディレクトリに設置したファイルが、サイト内の各ページとなります。  
components と併せて最も利用するディレクトリです。

拡張子は components と同じく`.vue`で、これらのファイルをすべて読み込んで、ページの相対パスを自動的にルーティングします。

例  
pages/about.vue → https://xxx.com/about/index.html

### static

static ディレクトリには、変換不要な画像、PHP ファイルなど、コンパイルで変換せずそのまま利用するファイルを配置しておきます。  
staic ディレクトリ内のファイルは、`generate`で静的化する際に`dist`直下に出力され、URL としてはルートディレクトリにマップされます。  
（generate と dist については、併せて次の項で記述しています）

HTML の`src`等でのパス指定では、下記のように記述することで`static`内のファイルを利用できます。

例  
static/images/sample_image.jpg に格納したファイル  
`<img src="/images/sample_image.jpg">`で利用

### dist

dist ディレクトリは、DI-KIT のインストールを実行した段階では生成されていません。  
`npm run generate`をコマンドプロンプトやターミナルで実行することで、各種コンパイルを通して生成され、内部には静的化した各種ファイルが出力されます。

dist ディレクトリに出力された内容をサーバ上に公開していただくことでサイトが閲覧できるようになります。  
（エクスプローラーや Finder で HTML ファイルを直接ダブルクリックしても、JS や CSS が読み込みできず表示崩れとなります）

なお、DI-KIT では、Windows 向けに generate 処理用の bat ファイルを用意してあります。  
プロジェクト内の最上位階層にある`_generate.bat`ファイルをダブルクリックすると、標準設定されたコマンドプロンプトや PowerShell などターミナルで`npm run generate`コマンドが実行されます。

MacOS では外部作成したスクリプトファイルを実行できないので、ターミナルを起動して npm run generate コマンドを実行してください。

## VSCode の利用推奨と推奨プラグイン

DI-KIT では Nuxt3 がベースとなっているため、 Vue3 を用いてコーディングしていきます。  
コーディングがしやすい環境として VSCode の利用を推奨し、インストールを推奨するプラグインを以下に紹介します。

### Vue - Official

このプラグインを入れる事でシンタックスハイライトや HTML, JavaScript のコード補完が効くようになります。
Nuxt2、Vue2での公式プラグインであったVeturをインストールしている場合は削除してください。
（Nuxt3の [IDEサポート](https://vuejs.org/guide/scaling-up/tooling.html#ide-support)を参照）

[Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

### ESLint

ESLint は、JavaScript の静的検証ツールです。  
DI-KIT では ESLint を標準利用しているのでコチラのプラグインの利用も推奨します。  
コーディングの段階で構文チェックを行ってくれるので、ビルド時のエラーなどを未然に防ぐことが出来ます。

[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Markuplint

Markuplint は、HTML などのマークアップ構文をチェックするツールで、VisualStudio Code のプラグインを通して動作します。  
DI-KIT では HTML の構文チェックを行っていないので、markuplint の利用を推奨します。  
必要なパッケージはインストール済みですので、VisualStudio Code 上でプラグインをインストールし、設定ファイルを作成するだけで利用出来ます。

[Markuplint プラグイン](https://marketplace.visualstudio.com/items?itemName=yusukehirao.vscode-markuplint&ssr=false#overview)

設定ファイルはこの README.md と同じ階層にある`.nuxt.config.ts`というファイル内の`htmlValidator: {}`です。
VisualStudio Code の`settings.json`などでルールを固定化している方は、`htmlValidator: {}`が存在するとルールが上書きされることがありますので、その場合は`htmlValidator: {}`を削除してお使いください。

設定ファイルに記述するルールは、以下を参照してください。

[ルールの説明](https://html-validate.org/rules/index.html)

### その他

あると便利なプラグインも紹介しておきます。

#### Vue Peek

こちらのプラグインを利用する事で VSCode の Peek 機能を`.vue`ファイルでも使用する事が出来るようになります。  
コンポーネントファイルの量が増えてきた際など役立つかと思います。

[Vue Peek](https://marketplace.visualstudio.com/items?itemName=dariofuzinato.vue-peek)

## 基本的なコーディング

DI-KIT でコーディングを進めるにあたり、基本的な設定やコーディング方法を説明します。

#### ルールの除外方法

ESLint のルールを除外したい場合、`.eslintrc.js`ファイルに追記してください。  
各コンポーネントの name を複数単語で入力するルールを除外する場合は以下のようにする事で除外できます。

`.eslintrc.js`

```javascript
module.exports = {
	rules: {
		'vue/multi-word-component-names': 'off',
	},
}
```

その他のルールや設定は以下サイトを参照してください。

- [ESLint のルール一覧](https://eslint.org/docs/latest/rules/)
- [eslint-plugin-vue のルール一覧](https://eslint.vuejs.org/rules/)

### CSS の指定方法

CSS のグローバル指定は`assets/sass/global.scss`等を利用する事で可能となりますが、ページ毎に固有の CSS を指定したい場合は該当の`.vue`ファイル内で`style`タグを記述します。  
タグに`scoped`属性を付加する事で CSS の影響範囲をそのファイル内のみに限定することが出来ます。

#### 子コンポーネントへのスタイル指定

コンポーネント内で読み込んでいる別のコンポーネント（子コンポーネント）にスタイルを指定したい場合、セレクタを`:deep()`で囲んでください。

`components/parentComponent.vue`

```css
<style lang="scss" scoped>
:deep(span) {
	font-size: 10px;
}
</style>
```

### 外部 script の読み込み方法

外部 script の読み込みが必要な場合は以下のように設定してください。

`nuxt.config.js`

```javascript
export default defineNuxtConfig({
	app: {
		head: {
			script: [
				{
					src: 'https://xxxxx.com/ajax/sample.js',
				},
			],
		},
	},
})
```

#### 特定のぺージだけで読み込む

サイト全域で読み込む必要がなく、特定ページだけで読み込みたい場合は該当の`.vue`ファイル内で以下のようにしてください。

`pages/sample.vue`

```typescript
<script setup lang="ts">
useHead({
	script: [
		{
			src: 'https://xxxxx.com/ajax/sample.js',
		},
	],
})
</script>
```

#### js ファイルをプロジェクト内に配置して読み込む

js ファイルを作成して読み込む場合は`static/js/sample.js`のように配置し`src`の値を以下のようにする事で読み込めます。

`nuxt.config.js`

```javascript
export default defineNuxtConfig({
	app: {
		head: {
			script: [
				{
					src: 'js/sample.js',
				},
			],
		},
	},
})
```

※特定ページでの読み込みも`src`の値を同じようにするだけです

## ライブラリの利用

DI-KIT にはデフォルトで`FontAwesome`と`GoogleFonts`のライブラリがインストールされています。  
以下では各ライブラリの使用方法を説明していきます。

### FontAwesome

DI-KIT で標準対応しているアイコンは「バージョン 6 の無料アイコン」です。  
用意しているスタイルは`Solid`, `Regular`と`Brands`の 3 種類。  
アイコンの詳細は[FontAwesome](https://fontawesome.com/v6/search)公式サイトを参照してください。

#### 使用するアイコンの指定

コンフィグで指定したアイコンのみ使用できます。
以下を参考にアイコンを指定してください。

`nuxt.config.js`

```javascript
export default defineNuxtConfig({
	app: {
		fontawesome: {
			icons: {
				solid: ['house', 'building', 'envelope', 'scroll'],
				regular: [],
				brands: [],
			},
		},
	},
})
```

#### アイコンの出力

FontAwesome のアイコンは以下のように「Icon Name」を用いて出力します。

`pages/sample.vue`

```vue
<font-awesome icon="heart" />
```

スタイルを指定する場合は以下の書式を用いてください。

`pages/sample.vue`

```vue
<font-awesome :icon="['fas', 'heart']" />
<font-awesome :icon="['far', 'heart']" />
```

※FontAwsoem バージョン 6 からスタイルの指定方法が`fa-solid`のように変更されていますが、DI-KIT では従来の書式（`fas`）を使用します

### GoogleFonts

GoogleFonts は以下のようにフォントをインストールしてから CSS の指定を行います。

`/nuxt.config.js`

```javascript
export default defineNuxtConfig({
	googleFonts: {
		families: {
			Questrial: true,
			'Noto+Sans+JP': [100, 300, 400, 500, 700, 900],
			Raleway: {
				wght: [100, 400],
				ital: [100],
			},
		},
	},
})
```

※上記の例では Questrial はすべての太さ、Noto Sans JP と Releway は任意の太さのフォントのみインストールしています

### AdobeFonts の利用方法

DI-KIT では AdobeFonts に標準対応していません。  
利用する場合は以下手順で設定してください。

#### AdobeFonts から埋め込み用コードを取得する

まずは、使用したいフォントファミリーを選び、Web プロジェクトを作成してください。  
プロジェクト作成後に発行される以下のようなコードが取得出来れば次に進みます。

##### css の場合

```css
<link rel="stylesheet" href="https://use.typekit.net/xxxxxxxs.css">
```

##### script の場合

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

上記で取得した埋め込み用コードで js ファイルを作成し`/static/js/adobeFonts.js`のように配置します。  
配置できたらサイト全域で読み込む設定を行います。

##### css の場合

`nuxt.config.js`

```javascript
export default defineNuxtConfig({
	app: {
		head: {
			link: [
				{
					rel: 'stylesheet',
					href: 'https://use.typekit.net/xxxxxxx.css',
				},
			],
		},
	},
})
```

##### script の場合

`nuxt.config.js`

```javascript
export default defineNuxtConfig({
	app: {
		head: {
			script: [
				{
					src: 'js/adobeFonts.js',
				},
			],
		},
	},
})
```

#### CSS でフォント指定

後は適用したいページで CSS の指定をおこなうだけです。

※CSS 指定方法の確認は[マイフォントの Web プロジェクト](https://fonts.adobe.com/my_fonts#web_projects-section)ページ内にある、「WEB フォントファミリー」詳細ページで確認できます

## WinSCP のミラーリングアップロード

「DI-KIT で制作したコンテンツをテスト環境で確認しながら調整したい」という場合は、[WinSCP](https://winscp.net/eng/docs/lang:jp)などの FTP クライアントにミラーリングアップロード機能があると便利です。

ここでは WinSCP を用いて`dist`ディレクトリ以下のファイルを監視し`npm run generate`実施後の更新内容を自動で反映する方法を紹介します。

まずは WinSCP で対象となるサーバへ接続してください。  
接続が完了したら、WinSCP のメニューにある「ミラーリングアップロード」をクリックもしくは、キーボードの`Ctrl`と`u`を同時に押してください。  
ミラーリングアップロードの設定画面が表示されたら「ディレクトリ」の「同期元ローカル ディレクトリ」と「同期先リモート ディレクトリ」を適宜入力してください。  
入力完了後「転送オプション」の「サブディレクトリも更新する」にチェックが入っている事を確認し「開始」をクリックしてアップロードの完了を待つだけです。

## Google reCAPTCHA v3 の実装方法

フォームに reCAPTCHA v3 を実装したい時の参考として以下に手順とサンプルコードを示します。  
プロジェクト毎に適宜編集して利用してください。

※reCAPTCHA v3 の詳しい情報は[公式ドキュメント](https://developers.google.com/recaptcha/docs/v3)を参照してください

### サイト・シークレットキーの発行

[Google reCAPTCHA](https://www.google.com/recaptcha/about/)ページへアクセスし、`v3 Admin Console`から新しいサイトの登録を行ってください。  
登録完了時に発行される「サイトキー」と「シークレットキー」は以降のセクションで必要になるので、コピーを取るなどしておいてください。

### フロントエンド（クライアントサイド）の設定

DI-KIT には reCAPTCHA を簡単に設置するための[recaptcha-module](https://github.com/nuxt-community/recaptcha-module#configuration)がインストールされています。  
設定ファイル`siteKey:`の値に「サイト・シークレットキーの発行」で取得したサイトキーを設定します。

`nuxt.config.js`

```javascript
export default defineNuxtConfig({
	recaptcha: {
		hideBadge: false,
		siteKey: 'サイトキー',
		version: 3,
		size: 'compact',
	},
})
```

次に、実装したい`.vue`テンプレートの`<form>`に`@submit.prevent="onSubmit"`を追記します。

`form.vue`

```vue
<form @submit.prevent="onSubmit">
	<input type="email" v-model="email" />

	<button type="submit">送信</button>
</form>
```

`<script>`には以下を追記してトークンを取得します。  
取得したトークンはそのままバックエンドに送信してください。（下記サンプルコードの`onSubmit()`参照）  
ページ遷移時などにトークンを破棄するための処理も記述しておきます。（下記サンプルコードの`beforeDestroy()`参照）

`form.vue`

```typescript
	onMounted(async () => {
		try {
			await this.$recaptcha.init() // recaptcha初期化
		} catch (e) {
			console.error(e)
		}
	})
	beforeDestroy(() => {
		this.$recaptcha.destroy() // reCAPTCHAに関するデータを破棄する
	})
	async onSubmit() {
		try {
			const token = await this.$recaptcha.execute('login') // トークンの取得

			// バックエンドへ送信する処理をここに実装してください
		} catch (error) {
			console.log('submit error:', error)
		}
	},
```

### バックエンド（サーバサイド）の設定

フロントエンドから送信されたトークンが有効なものかバックエンドで検証する必要があります。  
検証結果に応じた処理を実装してください。

以下では PHP を用いた際のサンプルコードを示します。  
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

## トラブルシューティング

DI-KIT で制作中に起こりうる「表示されない」や「動作しない」場合の確認内容・対応について記します。

### FontAwesome のアイコンが表示されない

FontAwesome v6 に存在しないアイコン名を使用している可能性があります。  
詳細は以下を実施してエラーが出ていないか確認してみてください。

1. ローカル環境にて該当ページを開く
2. ページリロードをおこなう
3. 「DI-KIT の起動方法」で立ち上げたコマンドプロンプトもしくはターミナルを確認

※参考：アイコン名が存在しない場合のエラー文

```bash
ERROR  Could not find one or more icon(s) {
  prefix: 'fas',
  iconName: 'home'
} {}
```

### ローカル開発でバックエンド処理が動作しない

DI-KIT ではローカルでのバックエンド処理は標準対応していません。  
テスト環境などにアップロードして動作確認をおこなってください。

## お問い合わせ

お問い合わせ・取材申し込みは https://www.ictinc.co.jp/ のフォームからご連絡ください。
