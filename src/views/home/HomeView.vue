<template>
    <loading v-if="isLoaded"></loading>
    <div class="home">
        <item :data="data"></item>
    </div>
</template>

<script>
import Item from '../../components/Item.vue';
import Loading from '../../components/Loading.vue';
export default {
    components: {
        Item,
        Loading
    },
    data() {
        return {
            data: 'data from parent component.',
            isLoaded: false
        };
    }
}
</script>
