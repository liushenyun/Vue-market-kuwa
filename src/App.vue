<template>
  <div id="app">
    <dt-loading></dt-loading>
    <router-view></router-view>
  </div>
</template>

<script>
import DtLoading from './components/Loading'
export default {
  name: 'app',
  components: {
    DtLoading
  }
}

</script>

<style lang="scss">
@import './iconfont/iconfont.css';
@import './scss/reset';
@import './scss/animation';
// @import './scss/button';
@import './scss/atom';
@import './style/mint';
</style>
