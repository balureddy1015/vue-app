

const routes = [
    {path: '/', component: homePage},
    {path: '/detail/:name', component: detailPage},
];
const router = new VueRouter({
    routes
});

const app = new Vue({
    el: '#app',
    router,
    data: {
        name: 'hello world',
    }
});
