require('./styles/usage/app.scss');

var common = require('./scripts/utils/util.common.js');
var indexString = require('./scripts/tpls/index.string');

common.render(indexString);


// components
import index from "./scripts/components/index.vue";
import home from "./scripts/components/home.vue";
import mine from "./scripts/components/mine.vue";
import detail from "./scripts/components/detail.vue";
import miaokai from "./scripts/components/miaokai.vue";

// router
/*const routes = [{
    path: '/',
    component: index,
    children: [{
        path: '/',
        component: home
    }]
}]*/
const routes = [{
    path: '/',
    component: index,
    children: [{
        path: '/',
        component: home
    }, {
        path: '/miaokai',
        component: miaokai
    }, {
        path: '/mine',
        component: mine
    }]
}, {
    path: '/detail',
    component: detail
}]

const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})

const app = new Vue({
    router
}).$mount('#app')
