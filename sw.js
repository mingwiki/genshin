if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const d=e=>i(e,l),o={module:{uri:l},exports:t,require:d};s[l]=Promise.all(n.map((e=>o[e]||d(e)))).then((e=>(r(...e),t)))}}define(["./workbox-b3e22772"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.458f9883.css",revision:null},{url:"assets/index.5f1a4fd5.js",revision:null},{url:"assets/index.6abc733c.js",revision:null},{url:"assets/index.9a67a3b0.js",revision:null},{url:"assets/index.a0f3f1d0.js",revision:null},{url:"assets/index.a1daba10.js",revision:null},{url:"assets/index.d1bd33dd.js",revision:null},{url:"assets/index.d80679d4.js",revision:null},{url:"index.html",revision:"08afdd8ba8c4bc8d69cf80b238686003"},{url:"registerSW.js",revision:"95db9703e4b64c2f248cb060c3e7ed61"},{url:"manifest.webmanifest",revision:"1ae53e22f29fcec1551fdacec09121ce"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map