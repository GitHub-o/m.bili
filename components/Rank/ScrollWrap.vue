<template>
  <MScroll
    :downText="downText"
    :upText="upText"
    @handleScrollPullingUp="getListData"
    @handleScrollPullingDown="handlePullDown"
  >
    <keep-alive>
      <component
        v-show="!isLoadingShow"
        :is="componentField"
        :list="data"
      ></component>
    </keep-alive>

    <Loading v-show="isLoadingShow" />
  </MScroll>
</template>

<script>
import MScroll from '~/components/Common/Scroll';
import Common from '~/components/Rank/List/Common';
import Common2 from '~/components/Rank/List/Common2';
import Loading from '~/components/Common/Loading';
import * as API from '~/api';
import tools from '~/utils/tools';
import ToTop from '~/components/Common/ToTop'
import { RANK_NAV, NETWORK_ERROR } from '~/config';
import dispatch from '~/dispatcher/index/rank'
import types from '~/dispatcher/actions/rank'

export default {
  name: 'RankScroll',

  components: {
    MScroll,
    Loading
  },

  props: {
    data: Array,
    cache: Object,
    scroll: [Object, null]
  },

  data () {
    return {
      page: 0,
      num: 20,
      apiName: 'getFullData',
      upText: '上拉加载更多',
      downText: '下拉刷新',
      isLoadingShow: false,
      error: NETWORK_ERROR,
      duration: 300
    };
  },

  computed: {
    componentField () {
      switch (this.apiName) {
        case 'getFullData':
        case 'getOriginData':
        case 'getRookieData':
          return Common;
        case 'getCinemaData':
        case 'getBangumiData':
          return Common2;
          break;
        default:
          break;
      }
    }
  },

  methods: {
    async getListData (scroll, type = 'up') {
      dispatch(this)(types.LIST_DATA, scroll, type);
    },

    getCacheData (cacheData) {
      return cacheData.reduce((prev, cur) => prev.concat(cur), []);
    },

    checkCacheData (scroll, type) {
      dispatch(this)(types.CACHE_DATA, scroll, type);
    },

    handlePullDown (scroll) {
      const { cache, num, apiName } = this;

      scroll && !this.scroll && (this.$emit('update:scroll', scroll));

      delete cache[apiName];

      this.page = -1;
      this.$emit('update:data', []);

      this.checkCacheData(scroll, 'down');
    },
  },
}
</script>
