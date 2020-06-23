<template>
  <div class="no-data-tip">
    <img src="~/assets/images/no-data-tip.png" alt="/" />
  </div>
</template>

<script>
export default {
  name: 'NoDataTip'
}
</script>

<style lang="stylus" scoped>
.no-data-tip {
  position: relative;
  height: 60rem;

  img {
    position: absolute;
    top: 25%;
    left: 50%;
    width: 16rem;
    transform: translateX(-50%);
  }
}
</style>
