<template>
  <transition name="fade">
    <div
      class="to-top"
      v-if="show"
      @click="$emit('handleToTop')"
    >
      <span class="icon iconfont icon-arrow-left"></span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ToTop',
  props: {
    show: Boolean
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/style/mixins.styl';

.to-top {
  vh-center();
  position: fixed;
  z-index: 2;
  bottom: 2rem;
  right: 2rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.15);
  border: 1px solid #bbb;

  .icon {
    color: #fff;
    transform: rotate(90deg);
  }
}
</style>
