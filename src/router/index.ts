import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue'
// import CategorySetting from '@/C'
// import CategorySetting from '@/views/CategorySetting.vue';
// import LotterySetting from '@/views/LotterySetting.vue';
// import TargetCustomer from '@/views/TargetCustomer.vue';
// import TicketPurchaseList from '@/views/TicketPurchaseList.vue';
import Error from '@/pages/Error.vue';
import Bai3 from '@/pages/Bai3/Bai3.vue';
import Home from '@/pages/Home.vue'
import Bai5 from '@/pages/Bai5/Bai5.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/bai3',
			name: 'bai3',
			component: Bai3,
		},
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/bai5',
			name: 'bai5',
			component: Bai5,
		},
		// {
		// 	path: '/lottery',
		// 	name: 'lottery',
		// 	// route level code-splitting
		// 	// this generates a separate chunk (About.[hash].js) for this route
		// 	// which is lazy-loaded when the route is visited.
		// 	component: LotterySetting,
		// },
		// {
		// 	path: '/targetCustomer',
		// 	name: 'target customer',
		// 	// route level code-splitting
		// 	// this generates a separate chunk (About.[hash].js) for this route
		// 	// which is lazy-loaded when the route is visited.
		// 	component: TargetCustomer,
		// },
		// {
		// 	path: '/purchaseList',
		// 	name: 'ticket purchase list',
		// 	// route level code-splitting
		// 	// this generates a separate chunk (About.[hash].js) for this route
		// 	// which is lazy-loaded when the route is visited.
		// 	component: TicketPurchaseList,
		// },
		{
			path: '/:catchAll(.*)',
			component: Error,
		},
	],
});

export default router;
