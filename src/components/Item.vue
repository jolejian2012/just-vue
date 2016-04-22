<!-- JustClear updated at 2016-04-22 -->

<template>
	<div class="item">
		<p>{{ hello }}</p>
	</div>
</template>

<script>
import store from '../store';

export default {

	name: 'Item',

	ready() {
		store.fetchData();
	},

	computed: {
		hello() {
			return 'This is item.';
		}
	}
}
</script>

<style lang="sass">
.item {
	// font-size: inherit;
}
</style>
