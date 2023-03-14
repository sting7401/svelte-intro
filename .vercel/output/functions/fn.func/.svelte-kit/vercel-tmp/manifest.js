export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.0037a066.js","imports":["_app/immutable/entry/start.0037a066.js","_app/immutable/chunks/index.ad164662.js","_app/immutable/chunks/singletons.12767435.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.88da54e9.js","imports":["_app/immutable/entry/app.88da54e9.js","_app/immutable/chunks/index.ad164662.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/inrto",
				pattern: /^\/inrto\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
