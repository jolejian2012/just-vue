<template>
  <div class="item"></div>
</template>

<script>
export default {

  name: 'Item',

  props: {
    text: String
  }

  computed: {
    hello() {
      return 'Item.';
    }
  }
}
</script>

<style lang="scss">
.item {
  // font-size: inherit;
}
</style>
