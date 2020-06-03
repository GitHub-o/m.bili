<template>
  <li class="item">
    <a :href="item.href" class="lk">
      <div class="img-wrap">
        <img height="100%" v-lazy="item.img" alt="title" />

        <div class="count-wrap">
          <span class="icon iconfont icon-people"></span>

          <span class="count">{{ item.count }}</span>
        </div>
      </div>

      <div class="up-wrap">
        <div class="up-avatar">
          <img
            height="100%"
            v-lazy="item.up_img"
            alt="up头像"
          />
        </div>

        <div class="info">
          <h3 class="title">{{ item.title }}</h3>

          <p class="name">{{ item.up_name }}</p>

          <p class="tag" v-if="item.tag">{{ item.tag }}</p>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: 'LiveBoardItem',
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
      min-height: 7rem;
      border-radius: 0.5rem;
      background: url('~assets/images/lazy.gif') 0 0 / 100% 100%;
      overflow: hidden;

      img {
        max-height: 9.6rem;
      }

      .count-wrap {
        vh-center();
        position: absolute;
        left: 0.5rem;
        bottom: 0.5rem;
        color: #fff;
        font-weight: bold;
        font-size: 1.4rem;
      }
    }

    .up-wrap {
      flex-row();
      margin-top: 0.8rem;

      .up-avatar {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        overflow: hidden;
        border: 0.1rem solid #eee;
      }

      .info {
        flex: 1;
        width: 70%;
        margin-left: 1rem;

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

        .tag {
          ellipsis();
          margin-top: 0.5rem;
          color: #999;
        }
      }
    }
  }
}
</style>
