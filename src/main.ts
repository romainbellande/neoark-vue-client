import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router/router';
import './styles.scss';

const app = createApp(App);

app.use(router).mount('#app');
