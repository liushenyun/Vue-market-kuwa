import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './plugins/rem'
import * as cons from './global/cons'
import * as funs from './global/funs'
import * as apiGroup from './fetch'
import { validate } from './global/validate'
import { Toast, Swipe, SwipeItem, Picker, Popup } from 'mint-ui';
import DtButton from './components/Button/Button.vue';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Picker.name, Picker);
Vue.component(Popup.name, Popup);
// Vue.use(Swipe);
// Vue.use(SwipeItem);
import abc from './global/abc';
Vue.use(abc);

Vue.component(DtButton.name, DtButton);
import 'mint-ui/lib/Swipe/style.css'
import 'mint-ui/lib/Swipe-Item/style.css'
import 'mint-ui/lib/Picker/style.css'
import 'mint-ui/lib/Popup/style.css'

Object.assign(Vue.prototype, {
  $cons: cons,
  $funs: funs,
  $toast: Toast,
  $http: apiGroup,
  $validate: validate
})

Vue.mixin({
  methods: {
    showLoading() {
      this.$store.dispatch('showLoading', true)
    }
  }
})

Vue['config'].productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
