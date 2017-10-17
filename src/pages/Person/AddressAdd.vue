<template>
  <div class="address-page">
    <dt-header :is-home='false' title="新增地址"></dt-header>
    <div class="main-con">
      <ul class="add-ul">
        <li>
          <div class="left">收货人</div>
          <div class="right">
            <input type="text" class="dt-input" placeholder="小马">
          </div>
        </li>
        <li>
          <div class="left">手机号码</div>
          <div class="right">
            <input type="text" class="dt-input" placeholder="小马">
          </div>
        </li>
        <li class="set-area">
          <div class="left">所在地区</div>
          <div class="right" :value="address" @click="showPicker">
            <span>{{address}}</span>
            <i class="iconfont icon-you"></i>
          </div>
        </li>
        <li class="address-deail">
          <textarea placeholder="请输入详细地址" class="dt-textarea"></textarea>
        </li>
        <li class="set-default">
          <div class="left">设置默认</div>
          <div class="right">
            <i class="iconfont icon-xuanzhong" @click="setAddressDefault(false)" v-if="setDefault"></i>
            <i class="iconfont icon-weixuanzhong" @click="setAddressDefault(true)" v-else></i>
          </div>
        </li>
      </ul>
      <dt-button class="save-btn" size='large' @click.native='addreddSave'>保存</dt-button>
    </div>
    <my-address :showAddressPicker="showAddressPicker" @save-address="saveAddress" @hide-picker="hidePicker" :init="address">
    </my-address>
  </div>
</template>

<script>
import { DtHeader, MyAddress, DtButton } from '../../global/component';
// import DtHeader from '../../components/header/header';
// import MyAddress from '../../components/address-picker/Address.vue'
export default {
  data() {
    return {
      showAddressPicker: false,
      address: '广东-深圳市-福田区',
      setDefault: true
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
    },
    setAddressDefault(flag) {
      this.setDefault = flag;
    },
    hidePicker() {
      // 接受子组件关闭popup事件
      this.showAddressPicker = false
    },
    showPicker() {
      console.log(this.showAddressPicker);
      this.showAddressPicker = !this.showAddressPicker
    },
    saveAddress(val) {
      // 从子组件接受返回所选值 val
      this.address = val
      this.showAddressPicker = !this.showAddressPicker
    },
    addreddSave() {
      console.log('保存');
    }
  },
  components: {
    DtHeader,
    MyAddress,
    DtButton
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/px2rem.scss';
@import '../../scss/color.scss';
.add-ul {
  height: auto;
  margin-top: px2rem(20);
  li {
    position: relative;
    padding: 0 px2rem(78) 0 px2rem(58);
    line-height: px2rem(150);
    background: #FFF;
    display: flex;
    .left {
      width: px2rem(280);
    }
    .right {
      flex: 1;
      .dt-input {
        border: 0;
      }
    }
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 1px;
      background: #D5D5D5;
      transform: scaleY(0.5);
    }
    &.set-area {
      .right {
        text-align: right;
        color: $word-second;
        span {
          vertical-align: middle;
        }
        .iconfont {
          font-size: px2rem(60);
          vertical-align: middle
        }
      }
    }
    &.address-deail {
      height: px2rem(260);
      padding: px2rem(20) px2rem(58);
      .dt-textarea {
        border: 0;
        width: 100%;
        height: 100%;
        padding: px2rem(10) 0 0 0;
      }
    }
    &.set-default {
      margin-top: px2rem(28);
      .right {
        text-align: right;
        .iconfont {
          font-size: px2rem(60)
        }
        .icon-weixuanzhong {
          color: $word-weixuanzhong
        }
        .icon-xuanzhong {
          color: $word-xuanzhong
        }
      }
    }
  }
}

.save-btn.dt-button {
  width: 60%;
  margin: px2rem(130) 0 0 20%;
}
</style>
