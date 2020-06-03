<template>
  <div class="container">
    <div class="error-wrap">
      <p>
        <span class="num">404</span>
        <em>The page can't find</em>
      </p>

      <p class="lk">
        <span @click="$router.go(-1)">Go back</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="stylus" scoped>
@import '~assets/style/mixins.styl';

.container {
  vh-center();
  background-color: #f5f5f5;

  .error-wrap {
    font-size: 1.6rem;
    color: #888;

    .num {
      margin-right: 1rem;
      padding-right: 1rem;
      border-right: 1px solid;
    }

    .lk {
      margin-top: 1rem;
      text-align: center;
      color: #f66;
    }
  }
}
</style>
