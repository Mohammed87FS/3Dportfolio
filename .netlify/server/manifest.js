export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["ai.svg","android.svg","comer.png","comerco.png","commerce.jpg","design.svg","dis1.png","dis2.png","dis3.png","dis4.png","dis5.png","dis6.png","disconnect.png","eco1.png","eco2.png","eco3.png","eco4.png","email.svg","favicon.png","for1.gif","for2.gif","for3.gif","for4.png","for5.png","for6.png","games.svg","git.svg","gym1.png","gym2.png","gym3.png","gym4.png","gym5.png","gym6.png","ibm.glb","insta.svg","mail.svg","mathe1.png","mathe2.png","mathe3.png","mathe4.png","mathe5.png","mathe6.png","mathemello.png","mygym.png","MyGymBro.png","phone3.png","portfolio.jpg","rosa.png","rosa1.png","rosa2.png","rosa3.png","rosa4.png","rosa5.png","rosa6.png","rosetta.png","sky.jpg","web.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg",".gif":"image/gif",".glb":"model/gltf-binary"},
	_: {
		client: {"start":"_app/immutable/entry/start.C7oFdSvT.js","app":"_app/immutable/entry/app.BAtfj2WJ.js","imports":["_app/immutable/entry/start.C7oFdSvT.js","_app/immutable/chunks/entry.BW6JSnqe.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.BAtfj2WJ.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.C64imYdq.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
