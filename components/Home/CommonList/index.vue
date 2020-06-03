<template>
  <div class="scroll-wrap" ref="wrap">
    <div class="scroll-content">
      <ul class="list">
        <Sub
          v-for="(item, idx) of list"
          :key="idx"
          :item="item"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Sub from './Sub'

export default {
  name: 'CommonList',
  props: {
    list: Array,
    title: String,
    icon: String
  },

  components: { Sub },

  mounted () {
    this.$nextTick(() => this.initBS());
  },

  methods: {
    initBS () {
      if (!this.$refs.wrap) {
        return;
      }

      this.scroll = new BScroll(this.$refs.wrap, {
        click: true,
        scrollX: true,
        eventPassthrough: 'vertical'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.common-board {
  margin-bottom: 1.5rem;

  .scroll-content {
    display: inline-block;
  }

  .list {
    padding-left: 1rem;
    white-space: nowrap;
    overflow-y: scroll;
  }
}
</style>
