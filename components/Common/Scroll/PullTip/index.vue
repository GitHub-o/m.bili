<template>
  <p class="tip" :class="[field]">{{ tip }}</p>
</template>

<script>
export default {
  name: 'ScrollPullTip',
  props: {
    tip: String,
    field: String
  }
}
</script>

<style lang="stylus" scoped>
.tip {
  font-size: 1.4rem;
  color: #999;
  text-align: center;
  line-height: 3rem;

  &.up {
    position: absolute;
    top: -4rem;
    width: 100%;
  }
}
</style>
