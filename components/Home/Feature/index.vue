<template>
  <div class="feature-board">
    <ul class="list">
      <Sub
        v-for="(item, idx) of feature"
        :key="idx"
        :item="item"
      />
    </ul>
  </div>
</template>

<script>
import Sub from './Sub'

export default {
  name: 'FeatureBoard',
  props: {
    feature: Array
  },

  components: { Sub }
}
</script>

<style lang="stylus" scoped>
.feature-board {
  padding-left: 1rem;

  .list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
