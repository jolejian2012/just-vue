<!-- JustClear updated at 2016-05-13 -->

<template>
	<div class="item">
		<p>{{ hello }}</p>
		<p>{{ data }}</p>
	</div>
</template>

<script>
export default {
	name: 'Item',
	props: ['data'],
	data() {
		return {
			hello: 'Hello World.'
		};
	}
}
</script>

<style lang="sass">
.item {
	// font-size: inherit;
}
</style>
