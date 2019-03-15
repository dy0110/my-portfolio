import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Profile from "./views/Profile.vue";
import Skill from "./views/Skill.vue";
import Repositories from "./views/Repositories.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: "/skill",
      name: "skill",
      component: Skill
    },
    {
      path: "/repositories",
      name: "repositories",
      component: Repositories
    },
    {
      // 上記以外のURLのパスが与えられたとき
      path: "*",
      redirect: "/"
    }
  ]
});
