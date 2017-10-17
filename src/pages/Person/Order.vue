<template>
  <div class="order-page">
    <dt-header :is-home='false' title="我的订单"></dt-header>
    <div class="main-con">
      <div class="order-menu">
        <span :class="{'order-checked':orderIndex==index}" @click="checkOrder(index)" v-for="(item,index) in ['全部','待支付','待配送','配送中','交易成功','已取消']" :key='index'>{{item}}</span>
      </div>
      <div class="order-list-wrap">
        <ul class="order-list-ul">
          <li v-for="(item,index) in [1,2,3,4]" :key="index" @click="toOrderDetail">
            <dt-order-over-view></dt-order-over-view>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template> 

<script>
import { DtHeader, DtOrderOverView } from '../../global/component';
export default {
  data() {
    return {
      orderIndex: 0
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
    checkOrder(index) {
      this.orderIndex = index;
    },
    toOrderDetail() {
      this.$router.push({ name: 'OrderDetail' })
    }
  },
  components: {
    DtHeader, DtOrderOverView
  }
}

</script>

<style lang="scss" scoped>
@import '../../scss/px2rem.scss';
@import '../../scss/mixin.scss';
@import '../../scss/color.scss';
.order-page {
  .main-con {
    position: relative;
  }
  .order-menu {
    padding: 0 px2rem(24);
    height: px2rem(144);
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: px2rem(30);
    span {
      display: block;
      height: px2rem(80);
      line-height: px2rem(80);
      font-size: px2rem(24);
      border-bottom: px2rem(6) solid rgba(0, 0, 0, 0);
      color: $word-second;
      transition: all ease-in 0.3s;
      &.order-checked {
        color: #F76037;
        border-bottom: px2rem(6) solid #F76037;
      }
    }
  }
  .order-list-wrap {
    position: absolute;
    top: px2rem(290);
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0 0 px2rem(300) 0;
    overflow-y: auto
  }
  .order-list-ul {
    height: auto;
    li {
      height: auto;
      margin-bottom: px2rem(20)
    }
  }
}
</style>
