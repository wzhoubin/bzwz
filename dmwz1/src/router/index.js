import { createRouter, createWebHashHistory } from "vue-router";
import Main from "@/views/Main/index";
import Home from "@/Home/index";
import Login from "@/views/Login";
import Register from "@/views/register";
import Boutique from "@/views/Boutique/index";
import New from "@/views/New/index";
import Hot from "@/views/Hot/index";
import bangdan from "@/views/bangdan/index";
import Draw from "@/views/Draw/index";
import Search from "@/views/Search/index";
import Section from "@/views/Section/index";
import Create from "@/views/Create/index";
import allPicutre from "@/views/allPicutre/index";

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      component: Main,
      redirect: "/home",
      children: [
        {
          path: "home",
          name: "首页",
          component: Home
        },
        {
          path: "Boutique",
          name: "精品",
          component: Boutique
        },
        {
          path: "New",
          name: "新作",
          component: New
        },
        {
          path: "Hot",
          name: "热门",
          component: Hot
        },
        {
          path: "bangdan",
          name: "榜单",
          component: bangdan
        },
        {
          path: "Search",
          name: "搜索",
          component: Search
        },
        {
          path: "draw/:id",
          name: "展示",
          component: Draw
        },
        {
          path: "Section/:id",
          name: "分类区",
          component: Section
        },
        {
          path: "/work/create",
          name: "投稿",
          component: Create
        },
        {
          path: "allPicutre",
          name: "图片大全",
          component: allPicutre
        }
      ]
    },
    {
      path: "/Login",
      component: Login
    },
    {
      path: "/Register",
      component: Register
    }
  ]
});

export default router;
