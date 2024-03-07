import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import * as THREE from "three";
import "@tweenjs/tween.js";
const css = {
  code: '.spacer.svelte-1bgx2o4.svelte-1bgx2o4{width:4%;height:100%;flex-shrink:0}.footer.svelte-1bgx2o4.svelte-1bgx2o4{position:fixed;left:0;bottom:0;width:100%;background-color:#000000;color:white;display:flex;justify-content:center;align-items:center;padding:10px 0;border-radius:5px}.footer.svelte-1bgx2o4 img.svelte-1bgx2o4{height:35px;width:auto;cursor:pointer;filter:brightness(0) invert(1);transition:transform 0.2s;margin:0 10px}.footer.svelte-1bgx2o4 img.svelte-1bgx2o4:hover{transform:scale(1.1)}.navbar.svelte-1bgx2o4.svelte-1bgx2o4{display:flex;justify-content:space-evenly;align-items:center;background-color:#000000;padding:10px;border-radius:5px;visibility:hidden;text-align:center;opacity:0}.svelte-1bgx2o4 .nav-item.svelte-1bgx2o4{padding:10px;margin:5px 0;background-color:#000000;color:#ffffff;text-align:center;cursor:pointer;font-family:"Press Start 2P", cursive;font-size:1.2rem;border-radius:5px;text-transform:uppercase;transition:background-color 0.3s,\r\n      color 0.3s,\r\n      transform 0.1s}.active.svelte-1bgx2o4.svelte-1bgx2o4{padding:10px;margin:5px 0;text-transform:uppercase;text-align:center;cursor:pointer;font-family:"Press Start 2P", cursive;font-size:1.2rem;color:#ffaa00;text-shadow:1px 1px 0 #ff6666,\r\n      /* Lighter red for a subtler effect */ 2px 2px 0 #ff6666,\r\n      3px 3px 0 #ff0000,\r\n      4px 4px 0 #ff0000}.nav-item.svelte-1bgx2o4.svelte-1bgx2o4:hover{background-color:#ffffff;color:#000000}.nav-item.svelte-1bgx2o4.svelte-1bgx2o4:active{transform:scale(0.95)}',
  map: null
};
const ThreeScene = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let container;
  new THREE.Vector2();
  [
    {
      position: new THREE.Vector3(0, 1850, 3050),
      lookAt: new THREE.Vector3(0, 0, 0)
    },
    {
      position: new THREE.Vector3(0, 1850, 3050),
      lookAt: new THREE.Vector3(0, 0, 0)
    },
    {
      position: new THREE.Vector3(0, 1850, 3050),
      lookAt: new THREE.Vector3(0, 0, 0)
    },
    {
      position: new THREE.Vector3(0, 1850, 3050),
      lookAt: new THREE.Vector3(0, 0, 0)
    },
    {
      position: new THREE.Vector3(-100, 180, 4500),
      lookAt: new THREE.Vector3(0, 0, 0)
    },
    {
      position: new THREE.Vector3(0, 1850, 3050),
      lookAt: new THREE.Vector3(0, 0, 0)
    }
  ];
  $$result.css.add(css);
  return `<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"> <div style="font-family: 'Press Start 2P'; position: fixed; width: 100%; height: 100%; background: black; color: orange; display: flex; justify-content: center; align-items: center; font-size: 24px; z-index: 9999;" class="terminal" id="loading-screen" data-svelte-h="svelte-d280hf">Loading...</div> <div class="navbar svelte-1bgx2o4"> <div class="${[
    "svelte-1bgx2o4",
    " nav-item"
  ].join(" ").trim()}" data-svelte-h="svelte-1jsz90u">About</div> <div class="${[
    "svelte-1bgx2o4",
    " nav-item"
  ].join(" ").trim()}" data-svelte-h="svelte-18k3jag">Skills</div> <div class="${[
    "svelte-1bgx2o4",
    " nav-item"
  ].join(" ").trim()}" data-svelte-h="svelte-ddytg0">Projects</div></div> <div class="container" style="width: 100%; height: 88vh;"${add_attribute("this", container, 0)}></div> <footer class="footer svelte-1bgx2o4" data-svelte-h="svelte-nzh9fd"><img src="/insta.svg" alt="Instagram Icon" id="instagramIcon" style="cursor:pointer;" class="svelte-1bgx2o4"> <img src="/email.svg" alt="email Icon" id="mail" style="cursor:pointer;" class="svelte-1bgx2o4"> <img src="/git.svg" alt="github Icon" id="git" style="cursor:pointer;" class="svelte-1bgx2o4"> <div class="spacer svelte-1bgx2o4"></div> </footer>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(ThreeScene, "ThreeScene").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
