<template>
  <div class="loading-wrap">
    <div class="img-wrap">
      <img
        src="~assets/images/loading.gif"
        alt="loading..."
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style lang="stylus" scoped>
.loading-wrap {
  position: absolute;
  background-color: #fff;
  z-index: 5;
  width: 100%;
  height: 300rem;

  .img-wrap {
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    overflow: hidden;
  }
}
</style>
