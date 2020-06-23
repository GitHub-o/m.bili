<template>
  <MScroll
    :downText="downText"
    :upText="upText"
    @handleScrollInit="scroll => $emit('update:scroll', scroll)"
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

    <NoDataTip v-show="!isLoadingShow && data.length <= 0" />

    <Loading v-show="isLoadingShow" />
  </MScroll>
</template>

<script>
import MScroll from '~/components/Common/Scroll';
import Common from '~/components/Rank/List/Common';
import Common2 from '~/components/Rank/List/Common2';
import Loading from '~/components/Common/Loading';
import NoDataTip from '~/components/Common/NoDataTip'
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
    Loading,
    NoDataTip
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
    async getListData (type = 'up') {
      dispatch(this)(types.LIST_DATA, type);
    },

    getCacheData (cacheData) {
      return cacheData.reduce((prev, cur) => prev.concat(cur), []);
    },

    checkCacheData (type) {
      dispatch(this)(types.CACHE_DATA, type);
    },

    handlePullDown () {
      const { cache, num, apiName } = this;

      delete cache[apiName];

      this.page = -1;
      this.$emit('update:data', []);

      this.checkCacheData('down');
    },
  },
}
</script>
