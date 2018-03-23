import Vue from 'vue';
import App from './App.vue';
import { User } from './user';

const app = new Vue({
  el: '#app',
  render: h => h(App),
});
