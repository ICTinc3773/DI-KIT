<template>
	<div class="site">
		<main class="site--body">
			<section class="about">
				<div class="container">
					<header class="about--header">
						<PageTitle title-text="DI-KITについて" />
					</header>
					<div class="about--body">
						<p>DI-KITは、<a href="https://www.di-coding.com/">DI-CODING</a>のコンセプトに基づいて、HTMLとCSSを複数サイトのコーディングで再利用できるようにした「コーディングスターターキット」です。</p>
						<p>雛形として作成しているため、あえて細部の設定は詰め過ぎないようにしてあり、これを使用してWebサイト制作する際に不必要なコードを削除する手間を最小限にしてあります。</p>
						<p>使い方などの詳細は<a href="https://github.com/ICTinc3773/DI-KIT">DI-KITのGitHubページ</a>を参照してください。</p>
					</div>
				</div>
			</section>
		</main>
	</div>
</template>

<script setup lang="ts">
useHead({
	title: 'DI-KITについて',
})
</script>
