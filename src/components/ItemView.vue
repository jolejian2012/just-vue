<template>
  <div class="item-view"></div>
</template>

<script>
import Item from './Item.vue';

export default {

  name: 'ItemView',

  components: {
    Item
  }

  props: {
    text: String
  }

  computed: {
    hello() {
      return 'Item View.';
    }
  }
}
</script>

<style lang="scss">
.item-view {
  // font-size: inherit;
}
</style>
