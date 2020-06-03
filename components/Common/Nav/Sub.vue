<template>
  <li
    class="item"
    :class="{current: curIdx === idx}"
    :data-field="item.field"
    :data-idx="idx"
  >{{ item.text }}</li>
</template>

<script>
export default {
  name: 'RankNavItem',
  props: {
    item: Object,
    idx: Number,
    curIdx: Number
  }
}
</script>

<style lang="stylus" scoped>
.item {
  display: inline-block;
  width: 10rem;
  height: 5rem;
  font-size: 1.5rem;
  line-height: 5rem;
  text-align: center;

  &.current {
    color: #f66;
    font-weight: bold;
  }
}
</style>
