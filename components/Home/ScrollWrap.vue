<template>
  <MScroll
    :downText="downText"
    :upText="upText"
    @handleScrollPullingDown="getHomeData"
    @handleScrollPullingUp="getFeatureData"
  >
    <div class="content">
      <MSwiper :carousel="scrollData.carousel" />

      <CommonBoard
        icon="icon-promote"
        title="推广"
        :list="scrollData.promote"
      >
        <CommonList :list="scrollData.promote" />
      </CommonBoard>

      <CommonBoard
        icon="icon-paihang"
        title="电竞赛事"
        :list="scrollData.e_sports"
      >
        <CommonList :list="scrollData.e_sports" />
      </CommonBoard>

      <CommonBoard
        icon="icon-live"
        title="直播ing"
        :list="scrollData.live"
      >
        <LiveList :live="scrollData.live" />
      </CommonBoard>

      <CommonBoard
        icon="icon-feature"
        title="精选"
        :list="scrollData.feature"
      >
        <FeatureList :feature="scrollData.feature" />
      </CommonBoard>
    </div>

    <template #footer>
      <MFooter />
    </template>
  </MScroll>
</template>

<script>
import MScroll from '~/components/Common/Scroll'
import MSwiper from '~/components/Common/Swiper'
import CommonBoard from './CommonBd'
import CommonList from './CommonList'
import LiveList from './Live'
import FeatureList from './Feature'
import MFooter from '~/components/Common/Footer'
import dispatch from '~/dispatcher/index'
import types from '~/dispatcher/actions/index'

export default {
  name: 'HomeScroll',

  components: {
    MSwiper,
    MScroll,
    CommonBoard,
    CommonList,
    LiveList,
    FeatureList,
    MFooter
  },

  props: {
    scrollData: Object,
    scroll: [Object, null]
  },

  data () {
    return {
      downText: '',
      upText: '',
      page: 0,
      num: 20,
      field: 'all',
      downText: '下拉刷新',
      upText: '上拉加载更多',
      duration: 300
    }
  },

  methods: {
    async getHomeData (scroll) {
      dispatch(this)(types.HOME_DATA, scroll);
    },

    async getFeatureData (scroll) {
      dispatch(this)(types.FEATURE_DATA, scroll);
    },

    resetScrollOpt () {
      this.downText = '正在刷新…';
      this.upText = '上拉加载更多';
      this.page = 0;
      this.feature = [];
    }
  }
}
</script>
