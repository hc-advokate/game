export const errorRoutes = [
	{
		path: "/:path(.*)*",
		name: "redirect",
		redirect: "/404",
		meta: {
			auth: false,
			isHide: true,
		},
	},
	{
		path: "/:pathMatch(.*)*",
		name: "redirect",
		redirect: "/404",
		meta: {
			auth: false,
			isHide: true,
		},
	},
	{
		path: "/401",
		name: "noPower",
		component: () => import("@/views/error/NoPower.vue"),
		meta: {
			title: "NoPower",
			name: "NoPower",
			auth: false,
			isHide: true,
		},
	},
	{
		path: "/404",
		name: "notFound",
		component: () => import("@/views/error/NotFound.vue"),
		meta: {
			title: "NotFound",
			name: "NotFound",
			auth: false,
			isHide: true,
		},
	},
	{
		path: "/500",
		name: "serverError",
		component: () => import("@/views/error/ServerError.vue"),
		meta: {
			title: "ServerError",
			name: "ServerError",
			auth: false,
			isHide: true,
		},
	},
	{
		path: "/tips",
		name: "tips",
		component: () => import("@/views/error/Tips.vue"),
		meta: {
			title: "tips",
			name: "tips",
			auth: false,
			isHide: true,
		},
	},
];

export const baseRoutes = [
	{
		path: "",
		name: "",
		meta: {
			auth: false,
			isHide: false,
		},
		redirect: (to) => {
			return { path: "/home" };
		},
		children: [
			{
				path: "/index",
				name: "Index",
				component: () => import("@/views/Index.vue"),
				meta: {
					title: "Index",
					name: "Index",
				},
			},
			{
				path: "/home",
				name: "Home",
				component: () => import("@/views/Index.vue"),
				meta: {
					title: "Home",
					name: "Home",
				},
			},
		],
	},
	{
		path: "/info",
		name: "Info",
		component: () => import("@/views/Info.vue"),
		meta: {
			title: "Info",
			name: "Info",
		},
	},
	{
		path: "/task",
		name: "Task",
		component: () => import("@/views/Task.vue"),
		meta: {
			title: "Task",
			name: "Task",
		},
	},
	{
		path: "/battle",
		name: "Battle",
		component: () => import("@/views/Battle.vue"),
		meta: {
			title: "Battle",
			name: "Battle",
		},
	},
	{
		path: "/battle-start",
		name: "BattleStart",
		component: () => import("@/views/BattleStart.vue"),
		meta: {
			title: "BattleStart",
			name: "BattleStart",
		},
	},
	{
		path: "/battle-end",
		name: "BattleEnd",
		component: () => import("@/views/BattleEnd.vue"),
		meta: {
			title: "BattleEnd",
			name: "BattleEnd",
		},
	},
	{
		path: "/battle-pk",
		name: "BattlePk",
		component: () => import("@/views/BattlePk.vue"),
		meta: {
			title: "BattlePk",
			name: "BattlePk",
		},
	},
];

export default [...errorRoutes, ...baseRoutes];
