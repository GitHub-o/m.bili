<template>
  <div class="live-board">
    <ul class="list">
      <Sub
        v-for="(item, idx) of live"
        :key="idx"
        :item="item"
      />
    </ul>
  </div>
</template>

<script>
import Sub from './Sub'

export default {
  name: 'LiveBoard',
  props: {
    live: Array
  },

  components: { Sub }
}
</script>

<style lang="stylus" scoped>
.live-board {
  padding-left: 1rem;

  .list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
