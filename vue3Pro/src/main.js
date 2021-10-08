import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import { ElMessage } from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';
import store from './store';

router.beforeEach((to, form, next) => {
  if (to.fullPath === '/' || to.fullPath === '/home') {
    if (!(store.state.user.userName && store.state.user.password)) {
      ElMessage.warning('请先登录...');
      router.push({ path: '/login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

createApp(App)
  .provide('$message', ElMessage)
  .provide('$notify')
  .use(ElementPlus)
  .use(store)
  .use(router)
  .mount('#app');
