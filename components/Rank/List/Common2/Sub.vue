<template>
  <li class="item">
    <a :href="item.href" class="lk">
      <div class="img-wrap">
        <img height="100%" v-lazy="item.img" alt="图片封面" />
      </div>

      <div class="info">
        <h2 class="title">{{ item.title }}</h2>

        <em class="tip">{{ item.tip }}</em>

        <div class="count-wrap">
          <div class="cell">
            <span class="icon iconfont icon-play"></span>

            <span class="play-count">{{ item.play_count }}</span>
          </div>

          <div class="cell">
            <span class="icon iconfont icon-danmu"></span>

            <span class="popup">{{ item.popup_count }}</span>
          </div>

          <div class="cell">
            <span class="icon iconfont icon-shoucang"></span>

            <span class="fav">{{ item.fav_count }}</span>
          </div>

          <div class="cell">
            <span class="icon iconfont icon-hot"></span>

            <span class="score">{{ item.score }}</span>
          </div>
        </div>

        <p
          class="tags"
          v-if="item.tags"
        >{{ JSON.parse(item.tags).join(', ') }}</p>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: 'CommonListItem2',

  props: {
    item: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/style/mixins.styl';

.item {
  padding: 1.2rem 0.5rem;
  border-bottom: 0.1rem solid #ededed;

  .lk {
    display: flex;
    height: 100%;
    font-size: 1.4rem;

    .img-wrap {
      position: relative;
      width: 14rem;
      background: url('~assets/images/lazy.gif') 0 0 / 100% 100%;
      border: 0.1rem solid #f5f5f5;
      border-radius: 0.8rem;
      overflow: hidden;
    }

    .info {
      flex: 1;
      max-width: 52%;
      margin-left: 1rem;

      .title {
        ellipsis();
        font-size: 1.6rem;
        color: #000;
        margin-bottom: 0.5rem;
        line-height: 2rem;
      }

      .tip {
        padding: 0.1rem 0.5rem;
        border: 0.1rem solid;
        border-radius: 0.5rem;
        line-height: 2rem;
        color: #777;
      }

      .count-wrap {
        margin-top: 3.5rem;
        font-weight: bold;
        font-size: 1.4rem;
        color: #666;

        .icon {
          font-size: 1.8rem;
          vertical-align: middle;
          margin-right: 0.5rem;

          &.icon-play {
            color: #f00;
          }

          &.icon-danmu {
            font-size: 1.3rem;
            color: #38f;
          }

          &.icon-shoucang {
            color: #f33;
          }

          &.icon-hot {
            color: #FF9800;
          }
        }

        .cell {
          display: flex;
          align-items: center;
          margin-top: 0.7rem;
        }
      }

      .tags {
        margin-top: 1rem;
        color: #999;
      }
    }
  }
}
</style>
