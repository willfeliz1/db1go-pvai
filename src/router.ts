import Vue from 'vue';
import Router from 'vue-router';
import Cadastro from '@/views/Cadastro.vue';
import Consulta from '@/views/Consulta.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Cadastro',
      component: Cadastro,
    },
    {
      path: '/Consulta',
      component: Consulta,
     
    },
    {
      path: '*',
      redirect: '/Consulta',
    },
  ],
});
