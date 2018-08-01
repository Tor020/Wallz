import Vue from 'vue';
Vue.config.productionTip = false;
import Root from './components/Root'; //Must capitalize Component


import style from './sass/style.scss'; 



// new Vue({
//   el:'#root',  // target element
//   template:`<root/>`, // how you pass props
//   components: { Root } //required to output template
// })

new Vue({
  render: h => h(Root)
}).$mount('#root')
