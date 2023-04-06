<template>
	<div>
		<SiteHeader />
		<main>
			<PageTitle><span class="text-jquery">jQuery</span>との併用</PageTitle>

			<p>原則としてjQueryの利用は避け、Vue.jsおよびNuxtJSで用意されている各種プラグインやコンポーネントを利用してください。</p>
			<p>どうしてもjQueryが必要な場合、以下の手順で利用可能です。</p>

			<h2>手順1: npm install</h2>
			<p>jQuery本体と利用したいjQueryプラグインをnpm installします。</p>
			<p>以下の例ではjqueryが本体、jquery-zoomが利用したいプラグインです。</p>
<pre>
<code>
npm install --save-dev jquery jquery-zoom
</code>
</pre>

			<p>さらにTypeScript用にjQueryの型定義をnpm installします。</p>
<pre>
<code>
npm install --save-dev @types/jquery
</code>
</pre>

			<h2>手順2: nuxt.config.jsを編集</h2>
			<p>nuxt.config.js内のbuild:{}内に、以下を参考に追記します。</p>
			<p>（build:{}内に他の記述がある場合は削除せず組み込んでください）</p>
<pre>
<code>
build: {
	vendor: ['jquery'],
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		})
	],
},
</code>
</pre>

			<h2>手順3: tsconfig.jsonを編集</h2>
			<p>tsconfig.json内の&quot;types&quot;: []内に、以下を参考に追記します。</p>
			<p>（types:[]内に他の記述がある場合は削除せず組み込んでください）</p>

<pre>
<code>
"types": [
	"@nuxt/types",
	"@nuxtjs/axios",
	"@types/node",
	"@types/jquery"
]
</code>
</pre>

			<h2>手順4: コンポーネントファイル内の記述</h2>
			<p>jQueryプラグインを利用したコンポーネントファイル（.vueファイル）内で、HTMLのscript要素先頭部分で以下のように記述して利用したいjQueryプラグインを読み込みます。</p>
<pre>
<code>
if (process.client) {
	require('jquery-zoom');
}
</code>
</pre>

			<p>続いて以下のように、実行するコードをmounted()内に記述します。</p>
<pre>
<code>
export default Vue.extend({
	mounted() {
		$('#sampleImage').zoom();
	}
});
</code>
</pre>

			<h2>動作サンプル</h2>
			<div id="sampleImage" class="image_box">
				<img
					src="/images/sample_image.jpg"
					alt="サンプル画像"
					width="500"
					height="250"
					decoding="async"
				>
			</div>
		</main>
		<SiteFooter />
	</div>
</template>

<script>
import Vue from 'vue'

if (process.client) {
	require('jquery-zoom');
}

export default Vue.extend({
	name: 'JQueryPage',
	head: {
		title: 'jQueryとの併用',
	},
	mounted() {
		$('#sampleImage').zoom();
	}
})
</script>

<style lang="scss" scoped>
::v-deep .text-jquery {
	color: #7acef4;
}
.image_box {
	width: 500px;
	height: 250px;
}
img {
	max-width: 100%;
}
</style>