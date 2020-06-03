<template>
  <div class="container">
    <template v-show="!isPageLoadingShow">
      <MHeader title="排 行 榜" />

      <MNav
        :nav="RANK_NAV"
        @handleChangeField="handleChangeField"
      />

      <MScroll
        v-if="!error"
        :cache="cache"
        :data.sync="data"
        :scroll.sync="scroll"
        ref="scroll-wrap"
      />

      <ToTop
        :show="isTopTopShow"
        @handleToTop="onClickToTop"
      />
    </template>

    <Loading v-show="isPageLoadingShow" />
  </div>
</template>

<script>
import MHeader from '~/components/Common/Header';
import MNav from '~/components/Common/Nav';
import MScroll from '~/components/Rank/ScrollWrap';
import Loading from '~/components/Common/Loading';
import * as API from '~/api';
import tools from '~/utils/tools';
import ToTop from '~/components/Common/ToTop'
import { RANK_NAV, NETWORK_ERROR } from '~/config';
import dispatch from '~/dispatcher/index/rank'
import types from '~/dispatcher/actions/rank'

export default {
  name: 'Rank',

  async asyncData () {
    const conf = {
      page: 0,
      num: 20,
      apiName: 'getFullData'
    };

    const [err, res] = await tools.asyncFunc(() => API.getListData(conf));

    if (err) {
      return { error: err.message };
    }

    const { code, data, msg } = res;

    if (code === 0) {
      const cache = {};

      cache[conf.apiName] = [data];

      return { data, cache, error: '' };
    }

    return { error: msg }
  },

  components: {
    MHeader,
    MNav,
    MScroll,
    Loading,
    ToTop
  },

  data () {
    return {
      RANK_NAV,
      isPageLoadingShow: true,
      error: NETWORK_ERROR,
      data: [],
      cache: {},
      scroll: null,
      isTopTopShow: false
    };
  },

  mounted () {
    this.errorShow();
  },

  methods: {
    errorShow () {
      const { error, $toast } = this;

      error && $toast(error);
      this.$nextTick(() => this.isPageLoadingShow = false);
    },

    handleChangeField (apiName) {
      const ctx = this.$refs['scroll-wrap'];

      dispatch(ctx)(types.FIELD, apiName);
    },

    onClickToTop () {
      const { scroll } = this;

      scroll && scroll.scrollTo(0, 0, 500);
    },

    scrollAction ({ y }) {
      this.isTopTopShow = -y > 755 ? true : false;
    },

    watchScroll (scroll) {
      scroll && scroll.on('scroll', this.scrollAction);
    }
  },

  watch: {
    scroll: 'watchScroll'
  }
};
</script>
