import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import AppCustomers from './components/AppCustomers';
import AppProducts from './components/AppProducts';
import ShowCustomer from './components/ShowCustomer';


const routes = [
  { path: '/customers', component: AppCustomers,
    children: [
      { path: ':id', name: 'customer',  component: ShowCustomer},
    ]},

  { path: '/products', component: AppProducts },  
];

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history',
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
