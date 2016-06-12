<!-- JustClear updated at 2016-05-13 -->

<template>
	<div class="item">
		<component-a></component-a>
		<component-b></component-b>
	</div>
</template>

<script>
import componentA from './componentA';
import componentB from './componentB';
export default {
	name: 'Item',
	components: {
		componentA,
		componentB
	},
}
</script>

<style lang="sass">
.item {
	// font-size: inherit;
}
</style>
