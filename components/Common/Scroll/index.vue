<template>
  <div class="scroll-wrap" ref="wrap">
    <div class="scroll-content">
      <PullTip field="up" v-if="downText" :tip="downText" />

      <slot></slot>

      <PullTip v-if="upText" :tip="upText" />

      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import PullTip from './PullTip';

export default {
  name: 'MScroll',

  components: {
    PullTip
  },

  props: {
    downText: String,
    upText: String
  },

  mounted () {
    this.$nextTick(() => this.initBS());
  },

  methods: {
    initBS () {
      const { downText, upText } = this;

      this.scroll = new BScroll(this.$refs.wrap, {
        click: true,
        pullDownRefresh: downText
          ? {
            threshold: 50,
            stop: 50
          }
          : false,
        pullUpLoad: upText
          ? {
            threshold: -50,
            stop: -50
          }
          : false
      });

      const { scroll, onPullingDown, onPullingUp } = this;

      downText && scroll.on('pullingDown', onPullingDown);
      upText && scroll.on('pullingUp', onPullingUp);
    },

    onPullingDown () {
      this.$emit('handleScrollPullingDown', this.scroll);
    },

    onPullingUp () {
      this.$emit('handleScrollPullingUp', this.scroll);
    }
  }
};
</script>

<style lang="stylus" scoped>
.scroll-wrap {
  flex: 1;
  overflow: hidden;

  .scroll-content {
    position: relative;
  }
}
</style>
