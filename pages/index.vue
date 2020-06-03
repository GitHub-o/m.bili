<template>
  <div class="container">
    <template v-show="!isLoadingShow">
      <MHeader :leftIconShow="false" :rightIconShow="true">
        <template #title>
          <div class="logo-wrap">
            <img
              class="logo"
              src="~/assets/images/logo.png"
              alt="logo"
            />
          </div>
        </template>
      </MHeader>

      <MScrollWrap
        v-if="!error"
        :scroll.sync="scroll"
        :scroll-data="scrollData"
      />

      <ToTop
        :show="isTopTopShow"
        @handleToTop="onClickToTop"
      />
    </template>

    <Loading v-show="isLoadingShow" />
  </div>
</template>

<script>
import MHeader from '~/components/Common/Header'
import MScrollWrap from '~/components/Home/ScrollWrap'
import Loading from '~/components/Common/Loading'
import dispatch from '~/dispatcher/index'
import types from '~/dispatcher/actions'
import * as API from '~/api/index'
import tools from '~/utils/tools'
import { NETWORK_ERROR } from '~/config';
import ToTop from '~/components/Common/ToTop'

export default {
  name: 'Home',

  async asyncData () {
    const [err, res] = await tools.asyncFunc(API.getHomeData);

    if (err) {
      return { error: err.message };
    }

    const { data, code, msg } = res;

    if (code === 0) {
      return { scrollData: { ...data, feature: [] }, error: '' }
    }

    return { error: msg }
  },

  components: {
    MHeader,
    MScrollWrap,
    Loading,
    ToTop
  },

  data () {
    return {
      error: NETWORK_ERROR,
      isLoadingShow: true,
      isTopTopShow: false,
      scroll: null
    }
  },

  mounted () {
    this.errorShow();
  },

  methods: {
    errorShow () {
      const { error, $toast } = this;

      error && $toast(error);
      this.$nextTick(() => this.isLoadingShow = false);
    },

    onClickToTop () {
      const { scroll } = this;

      scroll && scroll.scrollTo(0, 0, 500);
    },

    scrollAction ({ y }) {
      this.isTopTopShow = -y > 755 ? true : false;
    },

    watchScroll (value) {
      value && value.on('scroll', this.scrollAction);
    }
  },

  watch: {
    scroll: 'watchScroll'
  }
}
</script>

<style lang="stylus" scoped>
.container {
  .logo-wrap {
    width: 80px;
  }
}
</style>
