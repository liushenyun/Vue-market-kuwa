<template>
  <div class="home-page">
    <dt-header :is-home='true' title="商城首页"></dt-header>
    <div class="main-con">
      <div class="home-banner"></div>
      <ul class='goods-list'>
        <li v-for='(item,index) in listData' :key='index' @click='toGoodsDetail(item)'>
          <div class="inner">
            <img src="./img/bg_com_pic_1.png" alt="暂无图片">
            <p>MAX-UF</p>
            <p>酷蛙净水器</p>
          </div>
        </li>
      </ul>
    </div>
    <dt-footer which='Home'></dt-footer>
  </div>
</template>

<script>
import { mixinSubmit } from '../../global/mixins';
import DtHeader from '../../components/header/header';
import DtFooter from '../../components/footer/footer';
import socket from '../../fetch/mqtt';
export default {
  mixins: [mixinSubmit],
  data: () => ({
    formData: {
      username: '18118453056',
      password: '123456',
      remember: ''
    },
    listData: [1, 2, 3, 4, 11, 12]
  }),
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
    toGoodsDetail(msg) {
      console.log(msg);
      this.$router.push({ name: 'GoodsDetail', params: { id: msg } })
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
// @import '../../scss/px2rem.scss';
.home-page {
  .main-con {
    width: 100%;
    height: 100%;
    overflow: auto;
    padding-bottom: px2rem(150);
  }
  .home-banner {
    height: px2rem(500);
    background: url("./img/bg_banner_1.png") no-repeat 0 0 /100% 100%;
  }
  .goods-list {
    width: 100%;
    height: auto;
    overflow: hidden;
    padding: px2rem(24);
    li {
      position: relative;
      width: 49%;
      padding-top: 49%;
      background: #FFF;
      float: left;
      .inner {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        padding: px2rem(26) px2rem(60);
        img {
          height: px2rem(260);
          width: 100%;
          display: inline-block;
          font-size: px2rem(36);
        }
        p {
          line-height: px2rem(50);
          height: px2rem(50);
          font-size: px2rem(36);
        }
      }
    }
    li:nth-child(odd) {
      margin: 0 2% px2rem(24) 0;
    }
    li::nth-child(even) {
      margin: 0 0 px2rem(24) 0;
    }
  }
}
</style>
