<template>
    <div class="home">
        <img src="../../images/hello.png" alt="">
        <item :data="data"></item>
    </div>
</template>

<script>
import Item from '../../components/Item.vue';
export default {
    components: {
        Item,
    },
    data() {
        return {
            //
        };
    },
}
</script>
