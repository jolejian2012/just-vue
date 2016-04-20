<!-- JustClear updated at 2016-04-20 -->

<style lang="sass">
.item {
	// font-size: inherit;
}
</style>

<template>
	<div class="item">
		<p>{{ hello }}</p>
	</div>
</template>

<script>
export default {

	name: 'Item',

	props: {
		text: String
	},

	computed: {
		hello() {
			return 'This is item.';
		}
	}
}
</script>
