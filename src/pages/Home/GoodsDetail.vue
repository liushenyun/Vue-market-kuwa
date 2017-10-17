<template>
  <div class="goods-detail">
    <dt-header :title='$route.params.id'></dt-header>
    <div class="main-con">
      <!-- goods-detail {{$route.params}} -->
      <div class="detail-top">
        <div class="swiper">
          <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
          </mt-swipe>
        </div>
        <p>MAX-UF</p>
        <p>￥1799.00</p>
      </div>
      <div class="detail-con">
        <h3>商品详情</h3>
        <div class="pic">
        </div>
      </div>
      <!-- 底部 -->
      <footer class="dt-detail-bottom">
        <div class="che">
          <b @click="toCart">
            <i class="iconfont icon-gouwuchekong"></i>
            <label>8</label>
          </b>
        </div>
        <div class="jo">
          <dt-button @click.native='joinCart' size='large' type='danger'>加入购物车</dt-button>
        </div>
        <!-- <div class="by">
                          <dt-button @click.native='buyNow' size='large'>立即购买</dt-button>
                        </div> -->
      </footer>

    </div>
  </div>
</template>

<script>
import { mixinSubmit } from '../../global/mixins'
import DtHeader from '../../components/header/header';
import DtButton from '../../components/Button/Button';
export default {
  mixins: [mixinSubmit],
  data() {
    return {

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
    toCart() {
      this.$router.push({ name: 'Cart' })
    },
    joinCart(msg) {
      console.log(12, msg);
    }
  },
  components: {
    DtHeader,
    DtButton
  }
}

</script>

<style lang="scss" scoped>
@import '../../scss/px2rem.scss';
.goods-detail .main-con {
  padding-bottom: px2rem(146);
  overflow: auto;
}

.detail-top {
  height: auto;
  background: #FFF;
  padding: px2rem(20) px2rem(80);
  p {
    line-height: px2rem(68);
    margin: px2rem(20) 0;
  }
  p:nth-of-type(1) {
    font-size: px2rem(48);
    color: #333333;
  }
  p:nth-of-type(2) {
    font-size: px2rem(54);
    color: #F64848;
  }
}

.swiper {
  height: px2rem(796);
}

.detail-con {
  height: auto;
  background: #FFF;
  margin-top: px2rem(20);
  h3 {
    text-align: center;
    font-size: px2rem(42);
    line-height: px2rem(150);
  }
  .pic {
    height: 500px;
  }
}

.dt-detail-bottom {
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
  &>.che {
    flex: 1;
    text-align: center;
    line-height: px2rem(150);
    b {
      display: inline-block;
      width: px2rem(80);
      height: px2rem(80);
      line-height: 1;
      vertical-align: middle;
      position: relative;
      i {
        font-size: px2rem(80)
      }
      label {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(60%, -50%);
        min-width: px2rem(60); // height: px2rem(60);
        height: px2rem(60);
        line-height: px2rem(60);
        background: #F64848;
        color: #FFF;
        text-align: center;
        border-radius: px2rem(30);
        padding: 0 2px;
        font-size: px2rem(30);
      }
    }
  }
  &>.jo {
    // &>.by {
    flex: 1;
    padding: 0 px2rem(16);
    .dt-button {
      height: px2rem(120);
      margin-top: px2rem(15);
    }
  }
}
</style>
