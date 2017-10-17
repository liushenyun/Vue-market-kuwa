<template>
  <header class="dt-header">
    <div class="dt-header-button is-left" :class="{'is-home':isHome}">
      <label @click="leftButton">
        <i class="iconfont icon-fanhui" v-if="!isHome"></i>
        <i class="iconfont icon-caidan" v-else></i>

      </label>
    </div>
    <h2 class="dt-header-title">{{title}}</h2>
    <div class="dt-header-button is-right"></div>
  </header>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    'isHome': {
      type: [Boolean],
      default: false
    },
    'title': {
      type: [String, Number],
      default: '酷娃商城'
    }
  },
  methods: {
    leftButton() {
      if (this.isHome) {
        console.log('打卡侧栏');
      } else {
        console.log('返回');
        this.$router.back();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/px2rem';
@import '../../scss/mixin.scss';
.dt-header {
  position: absolute;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: px2rem(140);
  background: #FFF;
  padding: 0 10px;
  display: flex;
  @include ellipsis;
  h2 {
    line-height: px2rem(140);
    font-size: px2rem(52);
  }
}

.dt-header-button {
  flex: .5;
  & label {
    display: inline-block;
    width: px2rem(80);
    height: 100%;
    line-height: px2rem(140);
    i {
      font-size: px2rem(52);
      vertical-align: top
    }
  }
  &.is-left {
    text-align: left;
  }
}

.dt-header-title {
  flex: 1;
  text-align: center;
  @include ellipsis
}
</style>
