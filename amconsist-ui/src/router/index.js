import Vue from 'vue';
import Router from 'vue-router';
import DailyUsageList from '@/components/DailyUsageList.vue';
import DailyUsageForm from '@/components/DailyUsageForm.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/daily_usages',
      name: 'DailyUsageList',
      component: DailyUsageList
    },
    {
      path: '/daily_usages/new',
      name: 'DailyUsageForm',
      component: DailyUsageForm
    }
  ]
});
