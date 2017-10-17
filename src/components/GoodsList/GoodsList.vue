<template>
  <div class="dt-goods-list">
    <div class="choise">
      <i class="iconfont icon-xuanzhong" @click="changeChecked(productInfo,false)" v-if="productInfo.checked"></i>
      <i class="iconfont icon-weixuanzhong" @click="changeChecked(productInfo,true)" v-else></i>
    </div>
    <div class="prduct-img">
      <img src="./bg_zhifubao.png" alt="">
    </div>
    <div class="info">
      <p>{{productInfo.name}}</p>
      <p>￥1799.00</p>
      <p>具体商品详情信息详情信息详情信息详情信息根据商品 而定...........
      </p>
    </div>
    <div class="num">
      <i class="iconfont icon-shanchu" @click="toDelete"></i>
      <p>
        <b @click="reduce">&#45</b>
        <b>{{num}}</b>
        <b @click="add">&#43</b>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1
    }
  },
  methods: {
    reduce() {
      this.num -= 1;
    },
    add() {
      this.num += 1;
    },
    toDelete(evt) {
      this.$emit('deleteActive', evt, this.productIndex)
    },
    changeChecked(x, flag) {
      x.checked = flag;
      this.$emit('checkUpdate')
    }
  },
  props: {
    productInfo: {
      type: Object
    },
    productIndex: {
      type: [Number, String]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/px2rem.scss';
@import '../../scss/color';
@import '../../scss/mixin.scss';
.dt-goods-list {
  height: px2rem(216);
  display: flex;
  background: #FFF;
  .choise {
    width: px2rem(130);
    text-align: center;
    line-height: px2rem(216);
    .iconfont {
      font-size: px2rem(66);
      &.icon-xuanzhong {
        color: $word-xuanzhong;
      }
      &.icon-weixuanzhong {
        color: $word-weixuanzhong;
      }
    }
  }
  .prduct-img {
    width: px2rem(215);
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    flex: 1;
    padding: 0 px2rem(20);
    p {
      line-height: px2rem(60);
      font-size: px2rem(42);
      &:nth-of-type(2) {
        line-height: px2rem(66);
        font-size: px2rem(48);
        color: $word-xuanzhong;
      }
      &:nth-of-type(3) {
        line-height: px2rem(46);
        font-size: px2rem(32);
        @include mulEllipsis(2);
        color: $word-weixuanzhong;
      }
    }
  }
  .num {
    width: px2rem(272);
    position: relative;
    .iconfont {
      font-size: px2rem(60);
    }
    p {
      height: px2rem(56);
      position: absolute;
      left: 0;
      bottom: px2rem(20);
      b {
        display: inline-block;
        width: px2rem(76);
        text-align: center;
        height: px2rem(56);
        line-height: px2rem(50);
        font-size: px2rem(42);
        vertical-align: top;
        &:nth-of-type(2) {
          @include ellipsis
        }
        &:nth-of-type(1),
        &:nth-of-type(3) {
          background: #D8D8D8;
        }
      }
    }
  }
}
</style>
