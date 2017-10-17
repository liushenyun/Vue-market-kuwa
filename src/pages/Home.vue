<template>
  <div id="home">
    <transition name="fade" mode="out-in">
      <router-view class="main"></router-view>
    </transition>
  </div>
</template>

<script>
import { mixinSubmit } from '../global/mixins'
import DtHeader from '../components/header/header';
import socket from '../fetch/mqtt'
export default {
  mixins: [mixinSubmit],
  data: () => ({
    formData: {
      username: '18118453056',
      password: '123456',
      remember: ''
    }
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
    getFromSocket(data) {
      console.log(data)
    }
  },
  components: {
    DtHeader
  }
}

</script>

<style lang="scss">
// @import '../style/home';
@import '../scss/px2rem.scss';
// #home,
// #Cart,
// #Person {
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0
// }
// .main {
//   position: relative;
//   width: 100%;
//   height: 100%;
// }
// .main-con {
//   width: 100%;
//   height: 100%;
//   padding-top: 40px;
// }
</style>
