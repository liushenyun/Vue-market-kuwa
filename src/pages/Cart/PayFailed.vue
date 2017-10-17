<template>
  <div class="pay-failed">
    <dt-header :is-home='false' title="支付失败"></dt-header>
    <div class="main-con">
      <div class="fail-img"></div>
      <p class="fail-p">订单支付失败，请重新支付</p>
      <div class="fail-btn">
        <dt-button plain @click.native='back'>返回商城首页</dt-button>
        <dt-button ref="chil">重新支付</dt-button>

      </div>
      <div class="wrap">
        <switch-button></switch-button>
      </div>
      <switch-button></switch-button>
      <button @click="testClick">testclcik</button>
      <p ref="p">这是p标签</p>
    </div>
  </div>
</template>

<script>
import { DtHeader } from '../../global/component';
import SwitchButton from '../../components/SwitchButton/SwitchButton';
// import DtHeader from '../../components/header/header';
// import DtButton from '../../components/Button/Button'
export default {
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
    back() {
      console.log(545);
      console.log(this.$msg(45465456));
    },
    testClick() {
      this.$refs.chil.reftest();
      console.log(this.$refs);
      console.log(this.$refs.p.innerHTML);
    }
  },
  components: {
    DtHeader,
    SwitchButton
  }
}

</script>

<style lang="scss" scoped>
@import '../../scss/px2rem.scss';
@import '../../scss/color.scss';
.pay-failed {
  .main-con {
    overflow-y: auto;
  }
  .fail-img {
    height: px2rem(540);
    background: url('./img/bg_shibai.png') no-repeat center center/px2rem(210) auto;
  }
  .fail-p {
    line-height: px2rem(70);
    margin-bottom: px2rem(35);
    text-align: center
  }
  .fail-btn {
    height: auto;
    text-align: center;
    margin-top: px2rem(326);
    .dt-button {
      width: 42%;
      height: px2rem(136);
    }
    .dt-button:nth-of-type(1) {
      color: $cart-xuanzhong;
      border-color: $cart-xuanzhong
    }
  }
  .wrap {
    width: 100px;
  }
}
</style>
