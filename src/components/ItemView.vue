<!-- JustClear updated at 2016-04-22 -->

<template>
	<div class="item-view">
		<item :item="item"></item>
		<p class="item-text" v-if="hasText" v-html="item.text"></p>
	</div>
</template>

<script>
import Item from './Item.vue';

export default {

	name: 'ItemView',

	components: {
		Item
	},

	data() {
		return {
			item: {
				text: 'This is item text.'
			}
		};
	},

	computed: {
		hasText() {
			return this.item.hasOwnProperty('text');
		}
	}
}
</script>

<style lang="sass">
.item-view {
	// font-size: inherit;
}
</style>
