<template>
  <div class="cart-page">
    <dt-header :is-home='false' title="确认订单"></dt-header>
    <div class="main-con">
      <div class="area">
        <div class="area-empty" v-if="false"></div>
        <div class="area-have" v-else>
          <span @click="toAddAddress">
            <i class="iconfont icon-didian"></i>
            <b>请选择收货地址</b>
          </span>
        </div>
      </div>
      <!-- 支付方式 -->
      <div class="pay-type">
        <dt-radio :payType='payType' @updatePayType='updateType' :options='payOptions'></dt-radio>
      </div>
      <!-- 特殊说明 -->
      <div class="special-word">
        <input class="dt-input" type="text" placeholder="选填 特殊说明">
      </div>
      <!-- 订单 -->
      <div class="list-wrap">
        <ul class="goods-ul">
          <li v-for="(item,index) in goodsList" :key="index">
            <dt-goods-show :productInfo='item' :productIndex='index'></dt-goods-show>
          </li>
        </ul>
      </div>

      <!-- 底部 -->
      <footer class="in-bottom">
        <div class="left">
          <i>合计：</i>
          <span>￥1799.00</span>
        </div>
        <div class="right">
          <dt-button type='large'>提交订单</dt-button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { DtHeader, DtButton, DtRadio, DtGoodsShow } from '../../global/component';
// import DtHeader from '../../components/header/header';
// import DtButton from '../../components/Button/Button'
export default {
  data() {
    return {
      payOptions: [
        { title: '微信支付', className: 'pay-wechat', checked: true },
        { title: '支付宝支付', className: 'zhifubao', checked: true },
        { title: '货到付款', className: 'xuanzhong', checked: true }
      ],
      goodsList: [{ name: '45', checked: false }, { name: '45', checked: false }, { name: '45', checked: false }, { name: '46', checked: true }, { name: '457', checked: false }, { name: '458', checked: false }],
      payType: 1
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
    },
    updateType(type) {
      console.log(type);
    },
    toAddAddress() {
      this.$router.push({ name: 'AddressAdd' });
    }
  },
  components: {
    DtHeader,
    DtButton,
    DtRadio,
    DtGoodsShow
  }
}

</script>

<style lang="scss" scoped>
@import '../../scss/px2rem.scss';
.cart-page {
  .main-con {
    padding-bottom: px2rem(150);
    overflow: auto
  }
  .area {
    height: px2rem(260);
    background: #FFF;
    margin-top: px2rem(20);
    .area-have {
      text-align: center;
      line-height: px2rem(260);
    }
  }
  .pay-type {
    min-height: px2rem(350);
    margin: px2rem(20) 0;
    background: #FFF;
    padding: px2rem(40) 0;
  }
  .list-wrap {
    min-height: px2rem(350);
    margin: px2rem(20) 0;
    background: #FFF;
    padding: px2rem(40) 0;
  }
  .in-bottom {
    position: absolute;
    z-index: 100;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: px2rem(150);
    background: #FFF;
    overflow: hidden;
    border-top: 1px solid #D5D5D5;
    display: flex;
    .left {
      flex: 2;
      line-height: px2rem(150);
      font-size: px2rem(48);
      i {
        margin-left: px2rem(58);
      }
      span {
        color: #F64848;
      }
    }
    .right {
      flex: 1;
      padding: 0 px2rem(16);
      button {
        height: px2rem(120);
        margin-top: px2rem(15);
      }
    }
  }
  .goods-ul {
    height: auto;
    margin-top: px2rem(20);
    li {
      height: auto;
      background: #F9F9F9;
      padding: px2rem(30) 0;
      margin-bottom: px2rem(20);
    }
  }
  .special-word {
    height: px2rem(136);
    background: #FFF;
    margin-bottom: px2rem(20);
    padding: 0 px2rem(74);
    .dt-input {
      border: 0
    }
  }
}
</style>
