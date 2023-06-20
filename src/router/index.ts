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
import User from '@/pages/Bai6/User.vue';
import Detail from '@/pages/Bai6/Detail.vue';
import TestRoute from '@/pages/Bai6/TestRoute.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/bai3',
			name: 'bai3',
			component: Bai3,
		},
		{
			path: '/bai5',
			name: 'bai5',
			component: Bai5,
		},
		{
			path: '/bai6/user/:id',
			children: [
				{
					path: "",
					name: 'user',
					component: User,
				},
				{
					path: "detail",
					name: 'detail',
					component: Detail,
				},
				{
					path: "test",
					name: 'test',
					component: TestRoute,
				},
			]
		},
		{
			path: '/:catchAll(.*)',
			component: Error,
		},
	],
});

export default router;
