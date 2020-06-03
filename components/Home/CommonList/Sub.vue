<template>
  <li class="item">
    <a class="lk" :href="item.href">
      <div class="img-wrap">
        <img
          height="100%"
          v-lazy="item.img"
          :alt="item.title"
        />

        <div class="count-wrap" v-if="item.play_count">
          <div class="cell">
            <span class="icon iconfont icon-play"></span>

            <span>{{ item.play_count }}</span>
          </div>

          <div class="cell danmu">
            <span class="icon iconfont icon-dianzan"></span>

            <span>{{ item.thumb_count }}</span>
          </div>
        </div>
      </div>

      <div class="bottom">
        <template v-if="item.up_name">
          <em class="up">up</em>

          <span class="name">{{ item.up_name }}</span>
        </template>

        <p class="title" v-else>{{ item.title }}</p>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: 'CommonBdItem',
  props: {
    item: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/style/mixins.styl';

.item {
  display: inline-block;
  width: 17rem;
  margin-right: 1rem;

  .lk {
    display: block;
    height: 100%;
  }

  .img-wrap {
    position: relative;
    min-height: 7rem;
    border-radius: 0.5rem;
    background: url('~assets/images/lazy.gif') 0 0 / 100% 100%;
    box-shadow: 0 0 2px #eee;
    overflow: hidden;

    img {
      max-height: 9.6rem;
    }

    .count-wrap {
      flex-row();
      position: absolute;
      left: 0.5rem;
      right: 0;
      bottom: 0.5rem;
      font-weight: bold;
      color: #fff;
      font-size: 1.4rem;

      .icon {
        font-size: 1.6rem;
      }

      .cell {
        align-items: center;

        &:last-child {
          margin-left: 1rem;
        }
      }
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    margin-top: 0.8rem;

    .up {
      display: inline-block;
      padding: 0.2rem 0.3rem;
      border: 1px solid #777;
      border-radius: 0.3rem;
      color: #777;
    }

    .name {
      font-size: 1.4rem;
      margin-left: 0.5rem;
    }

    .title {
      ellipsis-m(2);
      font-size: 1.4rem;
      line-height: 1.8rem;
    }
  }
}
</style>
