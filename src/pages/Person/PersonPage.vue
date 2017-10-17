<template>
  <div class="person-page">
    <dt-header :is-home='false' title="个人中心"></dt-header>
    <div class="main-con">
      <ul class="center-ul">
        <li>
          <div class="left">我的订单</div>
          <div class="right" @click="toMyOrder">
            <span>查看全部订单</span>
            <i class="iconfont icon-you"></i>
          </div>
        </li>
        <li class="order-tabs">
          <div class="right">
            <div class="order-tabs-same" v-for="(item,index) in orderTitleData " :key='index'>
              <div class="tabs-inner" @click="toOrderDetail(index)">
                <div class="icon-wrap">
                  <i class="iconfont" :class="'icon-'+item.iconName">
                    <label>{{item.num}}</label>
                  </i>
                </div>
                <span>{{item.title}}</span>
              </div>
            </div>

          </div>
        </li>
        <li>
          <div class="left">地址管理</div>
          <div class="right" @click="toAddress">
            <i class="iconfont icon-you"></i>
          </div>
        </li>
        <li>
          <div class="left">关于商城</div>
          <div class="right">
            <i class="iconfont icon-you"></i>
          </div>
        </li>

      </ul>
    </div>
    <dt-footer which='Person'></dt-footer>
  </div>
</template>

<script>
import { mixinSubmit } from '../../global/mixins'
import socket from '../../fetch/mqtt'
import DtHeader from '../../components/header/header';
import DtFooter from '../../components/footer/footer';
export default {
  mixins: [mixinSubmit],
  data() {
    return {
      orderTitleData: [{
        title: '待支付',
        iconName: 'daizhifu',
        num: '12'
      }, {
        title: '待配送',
        iconName: 'daipeisong',
        num: '13'
      }, {
        title: '配送中',
        iconName: 'peisong',
        num: '12'
      }, {
        title: '交易成功',
        iconName: 'renminbi',
        num: '12'
      }, {
        title: '已取消',
        iconName: 'yiquxiao',
        num: '12'
      }
      ]
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
    toOrderDetail(index) {
      console.log(index);
    },
    toMyOrder() {
      console.log(12);
      this.$router.push({ name: 'PersonOrder' })
    },
    toAddress() {
      this.$router.push({ name: 'Address' })
    }
  },
  components: {
    DtHeader,
    DtFooter
  }
}

</script>

<style lang="scss" scoped>
@import '../../scss/px2rem.scss';
@import '../../scss/color.scss';
@import '../../scss/mixin.scss';
.center-ul {
  height: auto;
  margin-top: px2rem(20);
  li {
    height: px2rem(148);
    line-height: px2rem(148);
    background: #FFF;
    padding: 0 px2rem(48) 0 px2rem(58);
    display: flex;
    position: relative;
    &::after {
      @include pxBorderBottom
    }
    .left {
      width: px2rem(240);
      font-size: px2rem(42);
    }
    .right {
      flex: 1;
      text-align: right;
      color: $word-second;
      span {
        // vertical-align: middle;
        font-size: px2rem(36); // height: px2rem(42);
        // line-height: px2rem(42);
      }
      .iconfont {
        font-size: px2rem(60);
        vertical-align: middle
      }
    }
    &.order-tabs {
      height: px2rem(244);
      margin-bottom: px2rem(20);
    }
    &.order-tabs .right {
      display: flex;
      justify-content: space-between;
      .order-tabs-same {
        // width: px2rem(110); // background: red;
      }
      .tabs-inner {
        padding: px2rem(56) 0 px2rem(40) 0;
        height: 100%;
        text-align: center;
        .icon-wrap {
          height: px2rem(80);
          line-height: px2rem(80);
          label {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(70%, -60%);
            min-width: px2rem(50); // height: px2rem(60);
            height: px2rem(50);
            line-height: px2rem(50);
            background: #F64848;
            color: #FFF;
            text-align: center;
            border-radius: px2rem(30);
            padding: 0 2px;
            font-size: px2rem(30);
          }
          i {
            position: relative;
            font-size: px2rem(70);
          }
        }

        span {
          display: block;
          font-size: px2rem(36);
          line-height: px2rem(50);
          text-align: center;
          margin-top: px2rem(20)
        }
      }
    }
  }
}
</style>
