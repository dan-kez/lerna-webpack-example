!function(e){function t(t){for(var r,c,l=t[0],u=t[1],i=t[2],s=0,d=[];s<l.length;s++)c=l[s],a[c]&&d.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(p&&p(t);d.length;)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={2:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var o=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=12e4,c.nc&&l.setAttribute("nonce",c.nc),l.src=c.p+""+({0:"async-leaf"}[e]||e)+".js";var u=setTimeout(function(){i({type:"timeout",target:l})},12e4);function i(t){l.onerror=l.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");c.type=r,c.request=o,n[1](c)}a[e]=void 0}}l.onerror=l.onload=i,o.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},c.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/lerna-webpack-example/",c.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var p=u;o.push([36,1]),n()}({36:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(21),c=n(20),l=n(19),u=n.n(l),i=n(6),p="/lerna-webpack-example",s=u()({loader:function(){return n.e(0).then(n.bind(null,37))},delay:5e3,loading:function(){return a.a.createElement("div",{style:{background:"aqua",width:"100px",height:"100px"}},"Loading...")}}),d=document.createElement("div");d.setAttribute("id","dynamic-react-root"),d.setAttribute("style","height: 100%; margin: 0;"),document.body.appendChild(d),Object(o.render)(a.a.createElement(function(){return a.a.createElement(i.a,null,a.a.createElement("div",null,a.a.createElement("a",{href:"".concat(p,"/async")},"Hard redirect to /async"),a.a.createElement("br",null),a.a.createElement("a",{href:"".concat(p,"/")},"Hard redirect to /"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(i.b,{exact:!0,path:p,component:c.a}),a.a.createElement(i.b,{path:"".concat(p,"/async"),component:s})))},null),d)}});