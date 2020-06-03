<template>
  <li class="item">
    <a :href="item.href" class="lk">
      <div class="img-wrap">
        <img height="100%" v-lazy="item.img" alt="title" />

        <div class="count-wrap">
          <div class="cell">
            <span class="icon iconfont icon-play"></span>

            <span>{{ item.play_count }}</span>
          </div>

          <div class="cell">
            <span class="icon iconfont icon-danmu"></span>

            <span>{{ item.popup_count }}</span>
          </div>
        </div>
      </div>

      <div class="info">
        <h3 class="title">{{ item.title }}</h3>

        <p class="name">{{ item.up_name }}</p>

        <p
          class="tags"
          v-if="item.tags"
        >{{ JSON.parse(item.tags).join(' ') }}</p>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: 'FeatureBoardItem',
  props: {
    item: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/style/mixins.styl';

.item {
  width: 50%;
  margin-bottom: 15px;
  padding-right: 1rem;
  box-sizing: border-box;
  background-color: #fff;

  .lk {
    display: block;
    height: 100%;

    .img-wrap {
      position: relative;
      border-radius: 0.5rem;
      background: url('~assets/images/lazy.gif') 0 0 / 100% 100%;
      max-height: 11rem;
      overflow: hidden;

      img {
        max-height: 11rem;
      }

      .count-wrap {
        vh-center();
        justify-content: space-between;
        position: absolute;
        left: 0.5rem;
        right: 0.5rem;
        bottom: 0.5rem;
        color: #fff;
        font-weight: bold;
        font-size: 1.4rem;

        .icon {
          margin-right: 0.3rem;

          &.icon-danmu {
            font-size: 1.3rem;
          }
        }
      }
    }

    .info {
      margin-top: 0.5rem;

      .title {
        ellipsis();
        color: #000;
        font-size: 1.5rem;
        line-height: 1.8rem;
      }

      .name {
        ellipsis();
        margin-top: 0.5rem;
        font-size: 1.4rem;
      }

      .tags {
        ellipsis();
        margin-top: 0.5rem;
        color: #999;
      }
    }
  }
}
</style>
