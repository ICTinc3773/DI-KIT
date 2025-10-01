<template>
	<div>
		<main class="site--body">
			<section class="jquery">
				<div class="container">
					<header class="jquery--header">
						<PageTitle><span class="text-jquery">jQuery</span>との併用</PageTitle>
					</header>
					<div class="jquery--body">
						<p>原則としてjQueryの利用は避け、Vue.jsおよびNuxtJSで用意されている各種プラグインやコンポーネントを利用してください。</p>
						<p>どうしてもjQueryが必要な場合、以下の手順で利用可能です。</p>

						<h2>手順1: npm install</h2>
						<p>jQueryの型定義ファイルをインストールします。</p>
						<p>もし存在するのであれば、jQueryプラグインの型定義ファイルもインストールしてください。</p>
						<pre>
<code>
npm install --save-dev @types/jquery
</code>
</pre>

						<h2>手順2: .nuxt/tsconfig.jsonを編集</h2>
						<p>.nuxt/tsconfig.json内の&quot;types&quot;: []内に、以下を参考に追記します。<br />（types:[]内に他の記述がある場合は削除せず組み込んでください）</p>
						<p>もしインストールしているのであれば、jQueryプラグインの型定義ファイルも指定してください。</p>

						<pre>
<code>
"compilerOptions": {
	"types": [
		"@types/jquery"
	]
}
</code>
</pre>

						<h2>手順3: vueファイルを編集</h2>
						<p>jQueryを使用したい.vueファイル内に、以下を参考にjQueryとjQueryプラグインを読み込ませます。</p>
						<p>外部スクリプトとしてCDNのURLも指定できますが、publicフォルダ内にファイルを保存して読み込む方法を推奨します。</p>
						<pre>
<code>
useHead({
	script: [
		{
			src: 'js/jquery.min.js',
		},
		{
			src: 'js/jquery.zoom.min.js',
		},
	],
})
</code>
</pre>

						<h2>手順4: コンポーネントファイル内の記述</h2>

						<p>続いて以下のように、実行するコードを記述します。</p>
						<p>// @ts-ignore の記述は、jQueryプラグインの型定義がどうしてもできない場合のみ使用してください。<br />（TypeScriptの型定義を無効化してしまうので、使用しないほうが望ましいです）</p>
						<pre>
<code>
	onMounted(() => {
		// @ts-ignore
		$('#sampleImage').zoom()
	})
</code>
</pre>

						<h2>動作サンプル</h2>
						<div id="sampleImage" class="image_box">
							<img src="/images/sample_image.jpg" alt="サンプル画像" width="500" height="250" decoding="async" />
						</div>
					</div>
				</div>
			</section>
		</main>
	</div>
</template>

<script setup lang="ts">
useHead({
	title: 'jQueryとの併用',
	script: [
		{
			src: 'js/jquery.min.js',
		},
		{
			src: 'js/jquery.zoom.min.js',
		},
	],
})

onMounted(() => {
	// @ts-ignore
	$('#sampleImage').zoom()
})
</script>

<style lang="scss" scoped>
:deep(.text-jquery) {
	color: #7acef4;
}
.image_box {
	width: 500px;
	height: 250px;
}
img {
	max-width: 100%;
}
pre {
	padding: 1em;
	background-color: #dddddd;
	border: #cccccc;
}
</style>
