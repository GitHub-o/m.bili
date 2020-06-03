<template>
  <header class="header" @click="onHeaderClick">
    <span
      :class="{visible: leftIconShow}"
      class="left-wrap icon iconfont icon-arrow-left"
      data-field="left"
    ></span>

    <slot name="title">
      <h1 class="title">{{ title }}</h1>
    </slot>

    <span
      :class="{visible: rightIconShow}"
      class="right-wrap icon iconfont icon-rank"
      data-field="right"
    ></span>
  </header>
</template>

<script>
export default {
  name: 'MHeader',
  props: {
    title: String,
    leftIconShow: {
      type: Boolean,
      default: true
    },
    rightIconShow: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    onHeaderClick (e) {
      const { field } = e.target.dataset;

      switch (field) {
        case 'left':
          this.$router.go(-1);
          break;
        case 'right':
          this.$router.push('/rank');
          break;
        default:
          break;
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/style/mixins.styl';

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.4rem;
  border-bottom: 0.1rem solid #f1f1f1;

  .left-wrap {
  }

  .icon {
    width: 4.4rem;
    height: 100%;
    line-height: 4.4rem;
    text-align: center;
    visibility: hidden;

    &.visible {
      visibility: visible;
    }
  }

  .title {
    ellipsis();
    text-align: center;
    max-width: 50%;
    line-height: 4.4rem;
    font-size: 1.6rem;
    font-weight: bold;
  }

  .right-wrap {
  }
}
</style>
