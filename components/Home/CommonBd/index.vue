<template>
  <div class="common-board" v-if="list.length > 0">
    <BoardTitle :title="title" :icon="icon" />

    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import BoardTitle from './Title'

export default {
  name: 'CommonBd',
  props: {
    list: Array,
    title: String,
    icon: String
  },

  components: { BoardTitle },
}
</script>

<style lang="stylus" scoped>
.common-board {
  margin-bottom: 1.5rem;
}
</style>
