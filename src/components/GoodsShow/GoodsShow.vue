<template>
  <div class="dt-goods-list">
    <div class="prduct-img">
      <img src="./bg_zhifubao.png" alt="">
    </div>
    <div class="info">
      <p>{{productInfo.name}}</p>
      <p>￥1799.00</p>
      <p>具体商品详情信息详情信息详情信息详情信息根据商品 而定...........
      </p>
    </div>
    <div class="product-num" v-if='haveNum'>
      &Chi;{{45}}
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

  },
  props: {
    productInfo: {
      type: Object
    },
    productIndex: {
      type: [Number, String]
    },
    haveNum: {
      type: Boolean,
      default: false
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
  background: #F9F9F9;
  .prduct-img {
    width: px2rem(310);
    text-align: center;
    img {
      width: px2rem(216);
      height: 100%;
    }
  }
  .info {
    flex: 1;
    padding: 0 px2rem(50);
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
  .product-num {
    width: px2rem(230);
    text-align: center;
    line-height: px2rem(216);
    font-size: px2rem(36);
    color: $word-second;
  }
}
</style>
