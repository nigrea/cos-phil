import Vue from "vue";
import VueRouter from "vue-router";

import UserSpa from "./components/pages/UserSpa";
import UserCreate from "./components/components/user/UserCreate";
import UserIndex from "./components/components/user/UserIndex";
import UserLogin from "./components/components/user/UserLogin";
import UserShow from "./components/components/user/UserShow";

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
        path: "login",
        component: UserLogin
      },
      {
        path: "index",
        component: UserIndex
      },
      {
        path: "show",
        component: UserShow
      }
    ]
  }
];

export default new VueRouter({
  routes // short for `routes: routes`
});
