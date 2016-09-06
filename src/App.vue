<template>
	<div class="just-vue">
		<router-view></router-view>
	</div>
</template>

<script>
import './scss/style.scss';
import store from './store';
export default {
	store, // 在根组件加入 store，让它的子组件和 store 连接
}
</script>
