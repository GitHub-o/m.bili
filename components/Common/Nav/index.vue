<template>
  <nav class="nav">
    <ul class="list" @click="onNavClick" ref="scroll">
      <Sub
        v-for="(item, idx) of nav"
        :key="idx"
        :item="item"
        :idx="idx"
        :curIdx="curIdx"
      />

      <span
        class="bar"
        :style="{transform: `translateX(${x}rem)`}"
      ></span>
    </ul>
  </nav>
</template>

<script>
import Sub from './Sub'

export default {
  name: 'RankNav',

  components: {
    Sub
  },

  props: {
    nav: Array
  },

  data () {
    return {
      curIdx: 0,
      x: 0
    }
  },

  methods: {
    onNavClick ({ target }) {
      const { idx, field } = target.dataset;

      if (this.curIdx != idx) {
        const flag = idx > this.curIdx ? 1 : -1;

        this.curIdx = parseInt(idx);
        this.$emit('handleChangeField', field);

        const { scroll, bar } = this.$refs;
        const width = 100;
        const maxX = (this.nav.length - 1) * width - document.documentElement.clientWidth;
        let maxLeft = idx * width;

        this.x = maxLeft / 10;

        maxLeft = maxLeft > maxX ? maxX : maxLeft;

        const t = setInterval(() => {
          switch (flag) {
            case 1:
              if (scroll.scrollLeft >= maxLeft) {
                clearInterval(t);
                return;
              }
              scroll.scrollLeft += 10;
              break;
            case -1:
              if (scroll.scrollLeft <= maxLeft) {
                clearInterval(t);
                return;
              }
              scroll.scrollLeft -= 10;
              break;
            default:
              break;
          }
        }, 50);
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.nav {
  border-bottom: 0.1rem solid #eee;

  .list {
    position: relative;
    white-space: nowrap;
    overflow-y: scroll;

    .bar {
      position: absolute;
      bottom: 0;
      left: 2.5rem;
      width: 5rem;
      height: 0.2rem;
      background-color: #f66;
      transition: transform 0.5s;
    }
  }
}
</style>
