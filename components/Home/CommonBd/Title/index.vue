<template>
  <div class="board-title">
    <span class="icon iconfont" :class="[icon]"></span>

    <em class="title">{{ title }}</em>
  </div>
</template>

<script>
export default {
  name: 'BoardTitle',
  props: {
    title: String,
    icon: String
  }
}
</script>

<style lang="stylus" scoped>
.board-title {
  margin-top: 1rem;
  padding-left: 1rem;
  height: 4rem;

  .icon-promote {
    color: #f33;
  }

  .icon-live {
    color: #9C27B0;
  }

  .icon-feature {
    color: #38f;
  }

  .icon-paihang {
    color: #B71C1C;
  }

  .title {
    padding: 0.2rem;
    font-size: 1.8rem;
    font-family: 'MaShanZheng';
    color: #666;
    line-height: 4rem;
  }
}
</style>
