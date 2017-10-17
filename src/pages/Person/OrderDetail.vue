<template>
  <div class="order-detail">
    <dt-header :is-home='false' title="订单详情"></dt-header>
    <div class="main-con">
      <div class="same">
        <h3>订单详情</h3>
        <div class="detail-info">
          <p>
            <i>订单编号：</i>
            <span>H123456789</span>
          </p>
          <p>
            <i>订单金额：</i>
            <span>￥1799.00</span>
          </p>
          <p>
            <i>订单状态：</i>
            <span>用户取消</span>
          </p>
          <p>
            <i>下单时间：</i>
            <span>2017-07-20 13：00</span>
          </p>
          <p>
            <i>支付方式：</i>
            <span>货到付款</span>
          </p>
        </div>
      </div>

      <div class="same">
        <h3>商品信息</h3>
        <div class="detail-info goods-info">
          <dt-goods-show :productInfo='productInfoData' :haveNum='true'></dt-goods-show>
        </div>
      </div>

      <div class="same">
        <h3>收货信息</h3>
        <div class="detail-info">
          <p>
            <i>收货人：</i>
            <span>小猫</span>
          </p>
          <p>
            <i>手机号码：</i>
            <span>13410090908</span>
          </p>
          <p>
            <i>收货地址：</i>
            <span>广东省深圳市宝安区固戍梧桐岛14A</span>
          </p>
          <p>
            <i>特殊说明：</i>
            <span>需本人签收</span>
          </p>
        </div>
      </div>

      <div class="same">
        <h3>价格信息</h3>
        <div class="detail-info">
          <p>
            <i>商品总金额：</i>
            <span>￥1799.00</span>
          </p>
          <p>
            <i>优惠金额：</i>
            <span>￥1799.00</span>
          </p>
          <p>
            <i>订单金额：</i>
            <span>￥1799.00</span>
          </p>
          <p>
            <i>实付金额：</i>
            <span>￥1799.00</span>
          </p>
        </div>
      </div>
    </div>
    <footer class="order-detail-foot" v-if="true">
      <dt-button size='small' plain>删除订单</dt-button>
      <dt-button size='small'>立即支付</dt-button>
    </footer>
  </div>
</template>

<script>
import { DtHeader, DtGoodsShow, DtButton } from '../../global/component';
export default {
  data() {
    return {
      productInfoData: { name: '45', checked: false }
    }
  },
  mounted() {
    this.getAdminList()
  },
  methods: {
    getAdminList() {
      this.showLoading()
      this.$http.getAdminList({ page: 1, search: '12' }).then(data => {
        console.log(data)
      })
    }
  },
  components: {
    DtHeader,
    DtGoodsShow,
    DtButton
  }
}

</script>

<style lang="scss" scoped>
@import '../../scss/color.scss';
@import '../../scss/px2rem.scss';
@import '../../scss/mixin.scss';
.order-detail {
  .main-con {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    padding-bottom: px2rem(156);
  }
  .same {
    height: auto;
    background: #FFF;
    padding: px2rem(30) 0;
    margin: px2rem(20) 0;
    h3 {
      padding: 0 px2rem(54);
      line-height: px2rem(114);
      font-size: px2rem(36);
      font-weight: 700
    }
    .detail-info {
      height: auto;
      &.goods-info {
        padding: px2rem(26) 0;
        background: #f9F9F9;
      }
      p {
        line-height: px2rem(70);
        font-size: px2rem(42);
        padding: 0 px2rem(54);
        i {
          color: $word-second;
        }
      }
    }
  }
  .order-detail-foot {
    position: absolute;
    bottom: 0;
    left: 0;
    height: px2rem(146);
    width: 100%;
    background: #FFF;
    padding: 0 px2rem(20);
    text-align: right;
    .dt-button {
      margin-top: px2rem(18);
    }
  }
}
</style>
