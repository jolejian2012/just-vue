<!-- JustClear updated at 2016-05-13 -->

<template>
	<div class="loading">
		<span class="loading-text">Loading...</span>
	</div>
</template>

<script>
export default {
    // 
}
</script>

<style lang="sass">
.loading {
	position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 999;
}
.loading-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
