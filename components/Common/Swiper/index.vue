<template>
  <div class="m-swiper-wrap">
    <Swiper :options="options">
      <SwiperSlide
        v-for="({ img, href, title }, idx) of carousel"
        :key="idx"
      >
        <a class="lk" :href="href">
          <img
            height="100%"
            v-lazy="img"
            alt="轮播图片"
            :title="title"
          />
        </a>
      </SwiperSlide>

      <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>
  </div>
</template>

<script>
import 'swiper/css/swiper.css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'MSwiper',

  props: {
    carousel: Array
  },

  components: {
    Swiper,
    SwiperSlide
  },

  data () {
    return {
      options: {
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.m-swiper-wrap {
  .lk {
    display: block;
    height: 100%;

    img {
      max-height: 14rem;
    }
  }

  .swiper-pagination {
    >>> .swiper-pagination-bullet-active {
      background-color: #f66;
    }
  }
}
</style>
