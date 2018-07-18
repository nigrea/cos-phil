import Vue from "vue";
import VueRouter from "vue-router";

import UserSpa from "./components/pages/UserSpa";
import UserCreate from "./components/components/user/UserCreate";
import UserIndex from "./components/components/user/UserIndex";

Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    component: UserSpa,
    children: [
      {
        path: "create",
        component: UserCreate
      },
      {
        path: "index",
        component: UserIndex
      }
    ]
  }
];

export default new VueRouter({
  routes // short for `routes: routes`
});
