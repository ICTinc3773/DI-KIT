<template>
	<nav class="breadcrumbs" :aria-label="ariaLabel">
		<ol class="breadcrumbs--list" itemscope itemtype="https://schema.org/BreadcrumbList">
			<li v-for="(item, index) in items" :key="`${index}-${item.name}`" class="breadcrumbs--item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
				<NuxtLink v-if="item.url" :to="item.url" class="breadcrumbs--link" itemprop="item">
					<span itemprop="name">{{ item.name }}</span>
				</NuxtLink>
				<span v-else class="breadcrumbs--current" itemprop="name">{{ item.name }}</span>
				<meta itemprop="position" :content="index + 1" />
				<span v-if="index < items.length - 1" class="breadcrumbs--separator" aria-hidden="true">/</span>
			</li>
		</ol>
	</nav>
</template>

<script setup lang="ts">
type BreadcrumbItem = {
	name: string
	url?: string
}

const props = withDefaults(
	defineProps<{
		items: BreadcrumbItem[]
		ariaLabel?: string
		disableStructuredData?: boolean
	}>(),
	{
		ariaLabel: 'パンくずリスト',
		disableStructuredData: false,
	},
)

type BreadcrumbListItem = {
	'@type': 'ListItem'
	position: number
	name: string
	item: string
}

const breadcrumbJsonLd = computed(() => {
	const itemListElement = props.items
		.map((item, index) =>
			item.url
				? {
						'@type': 'ListItem',
						position: index + 1,
						name: item.name,
						item: item.url,
					}
				: null,
		)
		.filter((item): item is BreadcrumbListItem => Boolean(item))

	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement,
	}
})

useHead(() => {
	if (props.disableStructuredData || breadcrumbJsonLd.value.itemListElement.length === 0) return {}

	return {
		script: [
			{
				key: 'breadcrumb-jsonld',
				type: 'application/ld+json',
				children: JSON.stringify(breadcrumbJsonLd.value),
			},
		],
	}
})
</script>

<style lang="scss" scoped>
.breadcrumbs {
	margin-top: 15px;
	font-size: 14px;
	color: #333;
}

.breadcrumbs--list {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 0.35em;
	margin: 0;
	padding: 0;
	list-style: none;
}

.breadcrumbs--item {
	display: flex;
	align-items: center;
}

.breadcrumbs--link {
	color: inherit;
	text-decoration: none;
	transition:
		color 0.2s ease,
		text-decoration-color 0.2s ease;

	&:hover {
		color: #0066cc;
		text-decoration: underline;
		text-decoration-color: currentColor;
	}
}

.breadcrumbs--current {
	font-weight: 700;
}

.breadcrumbs--separator {
	color: #999;
	margin: 0 0.1em;
}
</style>
