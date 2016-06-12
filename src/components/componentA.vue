<template>
	<div class="component-a">
		<button @click="increment">increment</button>
	</div>
</template>

<script>
import { increment } from '../store/actions';
export default {
	name: 'component-a',
	vuex: {
		actions: {
			increment
		},
	}
}
</script>
