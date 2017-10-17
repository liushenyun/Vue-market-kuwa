<template>
  <div class="address-page">
    <dt-header :is-home='false' title="收货地址"></dt-header>
    <div class="main-con">
      <ul class="address-ul">
        <li v-for="(item,index) in  addressList" :key='index'>
          <dt-address-item :isChoiceAddress="true"></dt-address-item>
        </li>
      </ul>
      <p class="add-new">
        <i @click="toAddress">
          <img src="./img/icon_add.png" alt="">
          <span>新增收货地址</span>
        </i>
      </p>

    </div>
  </div>
</template>

<script>
import { DtHeader, DtAddressItem } from '../../global/component';
export default {
  data() {
    return {
      addressList: [1, 2, 3, 4, 56]
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
    toAddress() {
      console.log('添加地址');
      this.$router.push({
        name: 'AddressAdd'
      });
    }
  },
  components: {
    DtHeader,
    DtAddressItem
  }
}

</script>

<style lang="scss" scoped>
@import '../../scss/px2rem.scss';
@import '../../scss/mixin.scss';
@import '../../scss/color.scss';

.address-page {
  .main-con {
    overflow-y: auto;
    padding-bottom: px2rem(80);
  }
  .address-ul {
    height: auto;
    li {
      height: auto;
      margin: px2rem(20) 0;
    }
  }
  .add-new {
    line-height: px2rem(60);
    height: px2rem(60);
    text-align: center;
    margin-top: px2rem(120);
    img {
      width: px2rem(48);
      vertical-align: top;
    }
    span {
      display: inline-block;
      height: px2rem(48);
      line-height: px2rem(48);
      vertical-align: top;
    }
  }
}
</style>
