import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/base.scss'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

//Add a rule
/*extend('secret', {
//validate: value => value === 'example',
  validate: value => value.lenght > 2, 
//message: 'This is not the magic word'
  message: 'Min 2 chars'
});

extend(
  'positive', value => {
    return +value > 0;
  });

extend(
  'required', {
    validate: value => value,
    message: 'Field required'
  });*/

//Install rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
});

//Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
