<template>
  <div class="dt-order-over">
    <p class="dt-over-title">订单编号：H123456789</p>
    <div class="dt-over-info">
      <div class="left">
        <img src="./bg_zhifubao.png" alt="">
      </div>
      <div class="right">
        <p>
          <i>订单金额：</i>
          <span>￥1799.00 </span>
        </p>
        <p>
          <i>订单状态：</i>
          <span>待支付</span>
        </p>
        <p>
          <i>下单时间：</i>
          <span>2017-07-20 13：00</span>
        </p>
      </div>
    </div>
    <div class="dt-over-handle">
      <dt-button>立即支付</dt-button>
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
  components: {
    DtButton
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/color.scss';
@import '../../scss/px2rem.scss';
@import '../../scss/mixin.scss';
.dt-order-over {
  height: auto;
  background: #FFF;
  .dt-over-title {
    height: px2rem(160);
    line-height: px2rem(160);
    padding: 0 px2rem(60)
  }
  .dt-over-info {
    background: #F9F9F9;
    height: px2rem(266);
    padding: px2rem(25) px2rem(60);
    display: flex;
    .left {
      width: px2rem(216);
      height: px2rem(216);
      img {
        width: 100%;
        height: 100%;
      }
    }
    .right {
      flex: 1;
      padding-left: px2rem(40);
      p {
        line-height: px2rem(70);
        font-size: px2rem(42);
        i {
          color: $word-second
        }
      }
    }
  }
  .dt-over-handle {
    height: px2rem(146);
    padding: 0 px2rem(60);
    text-align: right;
    .dt-button {
      margin-top: px2rem(18);
    }
  }
}
</style>
