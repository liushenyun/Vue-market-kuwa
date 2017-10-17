let abc = {};
abc.install = function (Vue) {
  Vue.prototype.$msg = (data) => {
    return data;
  }
}

export default abc;
// export default {
//   install(Vue) {
//     Vue.prototype.$ss = (data) => {
//       return data;
//     }
//   }
// }
