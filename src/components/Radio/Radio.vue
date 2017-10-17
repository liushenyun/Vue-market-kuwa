<template>
  <ul class="dt-radio">
    <li v-for="(item,index) in options" :key="index">
      <div class="is-left">
        <i class="iconfont" :class="'icon-'+item.className"></i>
      </div>
      <div class="is-mid">
        {{item.title}}
      </div>
      <div class="is-right">
        <i class="iconfont icon-xuanzhong" @click="checkType(index)" v-if="index==checkedIndex"></i>
        <i class="iconfont icon-weixuanzhong" @click="checkType(index)" v-else></i>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4],
      checkedIndex: this.payType
    }
  },
  methods: {
    checkType(index) {
      this.checkedIndex = index;
      this.$emit('updatePayType', this.checkedIndex)
    }
  },
  props: {
    options: {
      type: [Array]
    },
    payType: {
      type: [String, Number],
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/px2rem.scss';
@import '../../scss/color.scss';
.dt-radio {
  height: auto;
  li {
    height: 41px;
    line-height: 40px;
    display: flex;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: #D5D5D5;
      transform: scaleY(0.5)
    }
    &:nth-last-child(1)::after {
      height: 0;
    }
    .is-left {
      width: px2rem(166);
      text-align: center;
      .iconfont {
        font-size: px2rem(66);
      }
      .icon-pay-wechat {
        color: #3ED429
      }
      .icon-zhifubao {
        color: #19A0E5
      }
      .icon-xuanzhong {
        color: #F76037
      }
    }
    .is-mid {
      flex: 1
    }
    .is-right {
      width: px2rem(166);
      text-align: center;
      .iconfont {
        font-size: px2rem(60);
      }
      .icon-xuanzhong {
        color: $word-xuanzhong
      }
    }
  }
}
</style>
