(()=>{"use strict";var e,n,t,r,o,a,i,c,s,d,l,p,u,f,m={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"*{\n    margin: 0px;\n}\nbody {\n    height: 100vh;\n    width: 100vw;\n}\n.top{\n    height: 15vh;\n    min-height: 150px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color:rgb(35, 35, 35);\n    font-size: 70px;\n    font-family: sans-serif;\n    font-weight: 600;\n    letter-spacing: -2px;\n}\n.main{\n    height: 85vh;\n    display: flex;\n    background-color: blanchedalmond;\n}\n.left-column{\n    height: auto;\n    width: 25%;\n    min-width: 250px;\n    padding-top: 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: baseline;\n    background-color: rgb(219, 219, 219);\n}\n.add-project-btn{\n    height: 50px;\n    width: 200px;\n    border-radius: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgb(15, 212, 140);\n    color: white;\n    font-family: sans-serif;\n}\n.add-project-btn:hover{\n    background-color: rgb(26, 220, 149);\n    cursor: pointer;\n}\n.new-project-btn{\n    height: 50px;\n    width: 200px;\n    border-radius: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgb(212, 94, 15);\n    color: white;\n    font-family: sans-serif;\n}\n.right-column{\n    height: auto;\n    width: 75%;\n    display: flex;\n    background-color: rgb(239, 239, 239);\n}\n\n",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},h={};function v(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,exports:{}};return m[e](t,t.exports,v),t.exports}v.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return v.d(n,{a:n}),n},v.d=(e,n)=>{for(var t in n)v.o(n,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},v.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),v.nc=void 0,e=v(379),n=v.n(e),t=v(795),r=v.n(t),o=v(569),a=v.n(o),i=v(565),c=v.n(i),s=v(216),d=v.n(s),l=v(589),p=v.n(l),u=v(426),(f={}).styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),n()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,function(){let e=document.createElement("div");e.classList.add("wrapper"),content.append(e);let n=document.createElement("div");n.classList.add("top"),n.textContent="Todo list",e.append(n);let t=document.createElement("div");t.classList.add("main"),e.append(t);let r=document.createElement("div");r.classList.add("left-column"),t.append(r);let o=document.createElement("div");o.classList.add("add-project-btn"),o.textContent="Add project",o.id="addProject",o.addEventListener("click",(e=>{!function(){let e=document.querySelector(".left-column"),n=prompt("Enter your project name"),t=document.createElement("div");t.classList.add("new-project-btn"),t.textContent=n,e.appendChild(t)}()})),r.append(o);let a=document.createElement("div");a.classList.add("right-column"),t.append(a)}()})();