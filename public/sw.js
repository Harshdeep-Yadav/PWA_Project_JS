if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const o=e=>n(e,i),r={module:{uri:i},exports:c,require:o};s[i]=Promise.all(t.map((e=>r[e]||o(e)))).then((e=>(a(...e),c)))}}define(["./workbox-057e3b91"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"e498176f9ce8a4b1cb417aaad610c71d"},{url:"/_next/static/chunks/4bd1b696-09a07ecdfc7e9943.js",revision:"o_qvEVrnNZF5DOd9JvUZ2"},{url:"/_next/static/chunks/517-560161103a427e02.js",revision:"o_qvEVrnNZF5DOd9JvUZ2"},{url:"/_next/static/chunks/app/(root)/dashboard/page-0c04e4a584a27a88.js",revision:"o_qvEVrnNZF5DOd9JvUZ2"},{url:"/_next/static/chunks/app/(root)/profile/page-9b0e4a6703bbd744.js",revision:"o_qvEVrnNZF5DOd9JvUZ2"},{url:"/_next/static/chunks/app/_not-found/page-7812e96615473c71.js",revision:"o_qvEVrnNZF5DOd9JvUZ2"},{url:"/_next/static/chunks/app/layout-360cf84be3641de1.js",revision:"o_qvEVrnNZF5DOd9JvUZ2"},{url:"/_next/static/chunks/framework-0d635b52335dc518.js",revision:"o_qvEVrnNZF5DOd9JvUZ2"},{url:"/_next/static/chunks/main-72254d287cc45e3d.js",revision:"o_qvEVrnNZF5DOd9JvUZ2"},{url:"/_next/static/chunks/main-app-523029ad06a3644d.js",revision:"o_qvEVrnNZF5DOd9JvUZ2"},{url:"/_next/static/chunks/pages/_app-d23763e3e6c904ff.js",revision:"o_qvEVrnNZF5DOd9JvUZ2"},{url:"/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js",revision:"o_qvEVrnNZF5DOd9JvUZ2"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-5adebf9f62dc3001.js",revision:"o_qvEVrnNZF5DOd9JvUZ2"},{url:"/_next/static/o_qvEVrnNZF5DOd9JvUZ2/_buildManifest.js",revision:"80de33b19c6a9264717126b66d9ead2e"},{url:"/_next/static/o_qvEVrnNZF5DOd9JvUZ2/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/image/Sun.png",revision:"fd6ec3d94ba2d3769753793128964889"},{url:"/manifest.json",revision:"772d2a0c9899cdb250187fcd137f8339"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
