<template>
  <div class="cart-page">
    <dt-header :is-home='false' title="地址编辑"></dt-header>
    <div class="main-con">
      地址编辑
    </div>
  </div>
</template>

<script>
import DtHeader from '../../components/header/header';
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
    DtHeader
  }
}

</script>

<style lang="scss" scoped>

</style>
