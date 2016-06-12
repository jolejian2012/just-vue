<template>
	<div class="component-b">
		<p>{{ currentCount }}</p>
	</div>
</template>

<script>
import { getCurrentCount } from '../store/getters';
export default {
	name: 'component-b',
	vuex: {
		getters: {
			currentCount: getCurrentCount
		},
	}
}
</script>
