<template>
  <div id="Cart">
    <transition name="fade" mode="out-in">
      <router-view class="main"></router-view>
    </transition>
  </div>
</template>

<script>
import { mixinSubmit } from '../global/mixins'
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
  }
}

</script>

<style lang="scss">

</style>
