import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

 
let routes = [
  {
    path: "/krishna",
    name:'krishna',
    component: require("../components/KrishnaComponent").default
  }
  
];

export default new VueRouter({
  routes,
  linkActiveClass: "active"
});
