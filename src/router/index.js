import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home.vue';
import Cart from '../pages/Cart.vue';
import Person from '../pages/Person.vue';
// 首页
import HomePage from '../pages/Home/HomePage.vue';

// 购物车
import GoodsDetail from '../pages/Home/GoodsDetail.vue';
import CartPage from '../pages/Cart/CartPage.vue';
import SureOrder from '../pages/Cart/SureOrder.vue'; // 确认订单
import Pay from '../pages/Cart/Pay.vue'; // 支付
import PaySuccess from '../pages/Cart/PaySuccess.vue'; // 支付成功
import PayFailed from '../pages/Cart/PayFailed.vue'; // 支付成功

// 个人中心
import PersonPage from '../pages/Person/PersonPage.vue';
import Order from '../pages/Person/Order.vue'; // 我的订单
import OrderDetail from '../pages/Person/OrderDetail.vue'; // 订单详情
import Address from '../pages/Person/Address.vue'; // 地址管理
import AddressEdit from '../pages/Person/AddressEdit.vue'; // 地址编辑
import AddressAdd from '../pages/Person/AddressAdd.vue'; // 地址选择
import About from '../pages/Person/About.vue'; // 关于商城

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      component: Home,
      children: [
        { path: '', name: 'Home', component: HomePage },
        { path: '/home/detail/:id', name: 'GoodsDetail', component: GoodsDetail }
      ]
    },
    {
      path: '/cart',
      component: Cart,
      children: [
        { path: '', name: 'Cart', component: CartPage },
        { path: '/cart/sureorder', name: 'SureOrder', component: SureOrder },
        { path: '/cart/pay', name: 'Pay', component: Pay },
        { path: '/cart/paysuccess', name: 'PaySuccess', component: PaySuccess },
        { path: '/cart/payfailed', name: 'PayFailed', component: PayFailed }
      ]
    },
    {
      path: '/person',
      component: Person,
      children: [
        { path: '', name: 'Person', component: PersonPage },
        { path: '/person/order', name: 'PersonOrder', component: Order },
        { path: '/person/detail', name: 'OrderDetail', component: OrderDetail },
        { path: '/person/address', name: 'Address', component: Address },
        { path: '/person/address/edit', name: 'AddressEdit', component: AddressEdit },
        { path: '/person/address/add', name: 'AddressAdd', component: AddressAdd },
        { path: '/person/about', name: 'About', component: About }
      ]
    }
  ]
})
