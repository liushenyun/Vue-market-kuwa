<template>
  <div class="home-list">
    <dt-header></dt-header>
    <div class="main-con">
      list
    </div>
  </div>
</template>

<script>
import { mixinSubmit } from '../../global/mixins'
import DtHeader from '../../components/header/header';
import socket from '../../fetch/mqtt'
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
@import '../../style/home';
</style>
