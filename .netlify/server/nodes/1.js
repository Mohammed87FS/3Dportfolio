

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.N1PxTJ1D.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.C64imYdq.js","_app/immutable/chunks/entry.BW6JSnqe.js"];
export const stylesheets = [];
export const fonts = [];
