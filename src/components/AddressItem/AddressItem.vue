<template>
  <div class="dt-addredd-item">
    <div class="dt-addrsss-info">
      <p>
        <i>小猫</i>
        <span>13410090908</span>
      </p>
      <p>广东省深圳市宝安区固戍梧桐岛14A</p>
    </div>
    <div class="handlde" v-if="!isChoiceAddress">
      <div class="tu">
        <i class="iconfont icon-xuanzhong" v-if="false"></i>
        <i class="iconfont icon-weixuanzhong" v-else></i>
      </div>
      <div class="word">设为默认</div>
      <div class="handle-btn">
        <dt-button size='small' plain>编辑</dt-button>
        <dt-button size='small'>删除</dt-button>
      </div>
    </div>
  </div>
</template>

<script>
import DtButton from '../Button/Button';
export default {
  data() {
    return {

    }
  },
  props: {
    isChoiceAddress: {
      type: Boolean,
      default: true
    }
  },
  components: {
    DtButton
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/px2rem.scss';
@import '../../scss/color.scss';
@import '../../scss/mixin.scss';

.dt-addredd-item {
  height: auto;
  background: #FFF;
  .dt-addrsss-info {
    height: px2rem(240);
    padding-top: px2rem(40);
    p {
      padding: 0 px2rem(18) 0 px2rem(58);
      line-height: px2rem(78);
    }
    P:nth-of-type(2) {
      color: $word-second
    }
  }
  .handlde {
    height: px2rem(122);
    line-height: px2rem(122);
    position: relative;
    display: flex;
    padding: 0 px2rem(18) 0 px2rem(58);
    &::after {
      @include pxBorderTop
    }
    .tu {
      width: px2rem(90);
      .icon-xuanzhong {
        font-size: px2rem(60);
        color: $word-xuanzhong;
      }
      .icon-weixuanzhong {
        font-size: px2rem(60);
        color: $word-weixuanzhong;
      }
    }
    .word {
      flex: 1
    }
    .handle-btn {
      .dt-button {
        height: px2rem(90);
        margin-top: px2rem(16);
      }
    }
  }
}
</style>
