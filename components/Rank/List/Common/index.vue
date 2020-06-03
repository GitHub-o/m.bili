<template>
  <div class="list-wrap">
    <ul class="list">
      <Sub
        v-for="(item, idx) of list"
        :key="idx"
        :item="item"
      />
    </ul>
  </div>
</template>

<script>
import Sub from './Sub'

export default {
  name: 'CommonList',

  props: {
    list: Array
  },

  components: { Sub }
}
</script>

<style lang="stylus" scoped>
.list-wrap {
  padding: 0 1rem;
}
</style>
