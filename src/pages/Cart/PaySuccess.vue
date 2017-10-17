<template>
  <div class="pay-success">
    <dt-header :is-home='false' title="支付成功"></dt-header>
    <div class="main-con">
      <div class="success-img"></div>
      <p class="success-p">您的订单已成功支付，请等待后台确认配送！</p>
      <p class="success-p">商城负责人电话：13410090909</p>
      <dt-button size='large'>返回商城首页</dt-button>
    </div>
  </div>
</template>

<script>
import { DtHeader, DtButton } from '../../global/component';
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
.pay-success {
  .main-con {
    overflow-y: auto;
    .dt-button {
      width: 60%;
      margin: px2rem(220) 0 0 20%;
      height: px2rem(136);
    }
  }
  .success-img {
    height: px2rem(540);
    background: url('./img/bg_chenggong.png') no-repeat center center/px2rem(210) auto;
  }
  .success-p {
    line-height: px2rem(70);
    margin-bottom: px2rem(35);
    text-align: center
  }
}
</style>
