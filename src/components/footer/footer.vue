<template>
  <footer class="dt-footer">
    <ul>
      <li :class="{'icon-tianchong':which==='Home'}" @click="footClick('Home')">
        <i class="iconfont icon-shangchengtianchong" v-if="which==='Home'"></i>
        <i class="iconfont icon-shangcheng" v-else></i>
        <span>首页</span>
      </li>
      <li :class="{'icon-tianchong':which==='Cart'}" @click="footClick('Cart')">
        <i class="iconfont icon-gouwuche" v-if="which==='Cart'"></i>
        <i class="iconfont icon-gouwuchekong" v-else></i>
        <span>购物车</span>
      </li>
      <li :class="{'icon-tianchong':which==='Person'}" @click="footClick('Person')">
        <i class="iconfont icon-wode" v-if="which==='Person'"></i>
        <i class="iconfont icon-wode1" v-else></i>
        <span>我的</span>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      index: 0
    }
  },
  methods: {
    footClick(index) {
      let _index = index;
      this.$router.push({ name: _index })
    }
  },
  props: {
    'which': {
      type: [String],
      default: 'Home'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/px2rem.scss';
@import '../../scss/color.scss';
.dt-footer {
  position: absolute;
  z-index: 100;
  left: 0;
  bottom: 0;
  padding: 0 px2rem(130);
  display: block;
  width: 100%;
  height: px2rem(150);
  background: #FFF;
  overflow: hidden;
  & ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: px2rem(24);
    li {
      text-align: center;
      height: px2rem(120);
      i {
        display: block;
        font-size: px2rem(54);
        line-height: px2rem(60);
        color: $cart-weixuanzhong;
      }
      span {
        display: block;
        color: $cart-weixuanzhong;
        font-size: px2rem(32);
        line-height: px2rem(60)
      }
    }
    & li.icon-tianchong {
      i,
      span {
        color: $cart-xuanzhong;
      }
    }
    & li {
      width: px2rem(170);
      text-align: center
    }
  }
}
</style>
