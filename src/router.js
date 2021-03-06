import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      component: () =>
        import(/* webpackChunkName: "index" */ "./views/index/Index.vue")
    },
    {
      path: "/player",
      name: "player",
      component: () =>
        import(/* webpackChunkName: "player" */ "./views/player/Player.vue")
    }
  ]
});
