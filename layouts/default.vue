<template>
  <transition :name="transitionName">
    <keep-alive>
      <nuxt class="nuxt" />
    </keep-alive>
  </transition>
</template>

<script>
export default {
  name: 'Default',

  data () {
    return {
      transitionName: ''
    }
  },

  watch: {
    '$route' ({ path }, from) {
      switch (path) {
        case '/':
          this.transitionName = 'slide-right';
          break;
        case '/rank':
          this.transitionName = 'slide-left';
          break;
        default:
          break;
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.nuxt {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.5s;
}
</style>
