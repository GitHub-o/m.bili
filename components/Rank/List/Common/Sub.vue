<template>
  <li class="item">
    <a :href="item.href" class="lk">
      <div class="img-wrap">
        <img height="100%" v-lazy="item.img" alt="图片封面" />

        <div class="count-wrap">
          <div class="cell">
            <span class="icon iconfont icon-play"></span>
            <span>{{ item.play_count }}</span>
          </div>

          <div class="cell danmu">
            <span class="icon iconfont icon-danmu"></span>
            <span>{{ item.popup_count }}</span>
          </div>
        </div>
      </div>

      <div class="info">
        <h2 class="title">{{ item.title }}</h2>

        <div class="up-wrap" v-if="item.up_href">
          <span class="up">up</span>

          <a
            :href="item.up_href"
            class="name"
          >{{ item.up_name }}</a>
        </div>

        <div class="score">
          <span class="icon iconfont icon-hot"></span>
          <span class="count">{{item.score }}</span>
        </div>

        <p
          class="tags"
          v-if="item.tags"
        >{{ JSON.parse(item.tags).join('、') }}</p>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: 'CommonListItem',

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
      width: 15rem;
      max-height: 10rem;
      background: url('~assets/images/lazy.gif') 0 0 / 100% 100%;
      border-radius: 0.5rem;
      border: 0.1rem solid #f5f5f5;
      overflow: hidden;

      .count-wrap {
        display: flex;
        align-items: center;
        position: absolute;
        left: 0.5rem;
        bottom: 0.5rem;
        right: 0;
        color: #fff;
        font-weight: bold;

        .icon {
          margin-right: 0.3rem;

          &.icon-danmu {
            font-size: 1.3rem;
          }
        }

        .cell {
          vh-center();
        }

        .danmu {
          margin-left: 1.5rem;
        }
      }
    }

    .info {
      flex: 1;
      max-width: 52%;
      margin-left: 1rem;

      .title {
        ellipsis();
        font-size: 1.6rem;
        color: #000;
        line-height: 2rem;
        margin-bottom: 1.8rem;
      }

      .up-wrap {
        ellipsis();
        line-height: 1.8rem;

        .up {
          padding: 0 0.3rem;
          border: 0.1rem solid;
          border-radius: 0.3rem;
          color: #aaa;
        }

        .name {
          margin-left: 0.5rem;
        }
      }

      .score {
        display: flex;
        align-items: center;
        margin: 0.5rem 0;
        color: #777;

        .icon-hot {
          margin-right: 0.3rem;
          color: #FF9800;
        }
      }

      .tags {
        color: #999;
      }
    }
  }
}
</style>
