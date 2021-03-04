import './index.css';

import routes from 'pages-generated';
import { ViteSSG } from 'vite-ssg';

import App from './App.vue';

export const createApp = ViteSSG(App, { routes });
