<template>
  <div class="cart-page">
    <dt-header :is-home='false' title="购物车"></dt-header>
    <div class="main-con">
      <!-- 购物车不为空 -->
      <div class="cart-have" v-if="goodsList.length">
        <ul class="goods-ul">
          <li v-for="(item,index) in goodsList" :key="index">
            <dt-goods-list @checkUpdate='checkedUpdate' @deleteActive='toDelete' :productInfo='item' :productIndex='index'></dt-goods-list>
          </li>
        </ul>
      </div>
      <!-- 购物车为空 -->
      <div class="cart-empty" v-else>
        <img src="./img/icon_quxiao _nor.png" alt="">
        <p>
          <i>购物车竟然是空的</i>
          <span @click="toHome">去逛逛</span>
        </p>
      </div>
    </div>
    <!-- 底部 -->
    <footer class="dt-cart-bottom">
      <div class="icon">
        <i class="iconfont icon-xuanzhong" @click='changeAllCheck(false)' v-if="allChecked"></i>
        <i class="iconfont icon-weixuanzhong" @click='changeAllCheck(true)' v-else></i>
      </div>
      <div class="left">全选</div>
      <div class="mid">
        <b>合计：</b>
        <b>￥1799.00</b>
      </div>
      <div class="right">
        <dt-button size='large' @click.native="toSureOrder">结算</dt-button>
      </div>
    </footer>
    <!-- 底部导航 -->
    <dt-footer which='Cart'></dt-footer>
  </div>
</template>

<script>
import { mixinSubmit } from '../../global/mixins';
import { isAllChecked } from '../../global/funs';
import { DtHeader, DtFooter, DtGoodsList, DtButton } from '../../global/component'
import socket from '../../fetch/mqtt'
export default {
  mixins: [mixinSubmit],
  data() {
    return {
      goodsList: [{ name: '45', checked: false }, { name: '45', checked: false }, { name: '45', checked: false }, { name: '46', checked: true }, { name: '457', checked: false }, { name: '458', checked: false }],
      allChecked: false
    }
  },
  mounted() {
    this.getAdminList()
    socket('123', this.getFromSocket)
  },
  methods: {
    getAdminList() {
      this.showLoading()
      this.$http.getAdminList({ page: 1, search: '12' }).then(data => {
        console.log(data)
      })
    },
    getFromSocket(data) {
      console.log(data)
    },
    toHome() {
      this.$router.push({ name: 'Home' })
    },
    toDelete(evt, index) {
      this.goodsList.splice(index, 1)
      console.log(this.goodsList)
    },
    changeAllCheck(flag) {
      this.allChecked = flag;
    },
    checkedUpdate() {
      console.log(isAllChecked(this.goodsList));
      this.allChecked = isAllChecked(this.goodsList);
    },
    toSureOrder() {
      console.log(12);
      this.$router.push({ name: 'SureOrder' })
    }
  },
  components: {
    DtHeader,
    DtFooter,
    DtGoodsList,
    DtButton
  }
}

</script>

<style lang="scss" scoped>
@import '../../scss/px2rem.scss';
.cart-page {
  .main-con {
    padding-bottom: px2rem(300);
    overflow: auto;
  }
  .cart-empty {
    width: 100%;
    height: 100%;
    text-align: center;
    img {
      width: px2rem(210);
      margin-top: px2rem(234)
    }
    p {
      line-height: px2rem(60);
      span {
        color: blueviolet
      }
    }
  }

  .goods-ul {
    height: auto;
    margin-top: px2rem(20);
    li {
      height: auto;
      background: #FFF;
      padding: px2rem(50) 0;
      margin-bottom: px2rem(20);
    }
  }
  .dt-cart-bottom {
    position: absolute;
    z-index: 100;
    left: 0;
    bottom: px2rem(150);
    display: block;
    width: 100%;
    height: px2rem(150);
    background: #FFF;
    overflow: hidden;
    border-top: 1px solid #D5D5D5;
    border-bottom: 1px solid #D5D5D5;
    display: flex;
    .icon {
      width: px2rem(130);
      line-height: px2rem(148);
      text-align: center;
      & .icon-xuanzhong {
        color: #F6C048;
        font-size: px2rem(66);
      }
      & .icon-weixuanzhong {
        color: #979797;
        font-size: px2rem(66);
      }
    }
    .left {
      width: px2rem(100);
      line-height: px2rem(148);
      text-align: center;
      font-size: px2rem(36);
      color: #4A4A4A;
    }
    .mid {
      flex: 1;
      line-height: px2rem(148);
      text-align: right;
      b:nth-of-type(1) {
        font-size: px2rem(42);
      }
      b:nth-of-type(2) {
        font-size: px2rem(48);
        color: #F64848;
      }
    }
    .right {
      width: px2rem(340);
      padding: 0 px2rem(20);
      .dt-button {
        height: px2rem(120);
        margin-top: px2rem(15)
      }
    }
  }
}
</style>
