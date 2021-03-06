import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/views/Home'
import Network from '../components/views/Network'
import Settings from '../components/views/Settings';
import NotFound from '../components/views/NotFound'
Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/network',
		name: 'Network',
		component: Network
	},
	{
		path: '/settings',
		name: 'Settings',
		component: Settings
	},
	{
		path: '*',
		component: NotFound
	}

];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});


export default router;
