parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"dAjQ":[function(require,module,exports) {
for(var r=[],o=0;o<256;++o)r[o]=(o+256).toString(16).substr(1);function t(o,t){var n=t||0,u=r;return[u[o[n++]],u[o[n++]],u[o[n++]],u[o[n++]],"-",u[o[n++]],u[o[n++]],"-",u[o[n++]],u[o[n++]],"-",u[o[n++]],u[o[n++]],"-",u[o[n++]],u[o[n++]],u[o[n++]],u[o[n++]],u[o[n++]],u[o[n++]]].join("")}module.exports=t;
},{}],"1CuY":[function(require,module,exports) {
var r=require("./bytesToUuid");function e(r){var e=[];return r.replace(/[a-fA-F0-9]{2}/g,function(r){e.push(parseInt(r,16))}),e}function a(r){r=unescape(encodeURIComponent(r));for(var e=new Array(r.length),a=0;a<r.length;a++)e[a]=r.charCodeAt(a);return e}module.exports=function(n,t,o){var u=function(n,u,c,f){var i=c&&f||0;if("string"==typeof n&&(n=a(n)),"string"==typeof u&&(u=e(u)),!Array.isArray(n))throw TypeError("value must be an array of bytes");if(!Array.isArray(u)||16!==u.length)throw TypeError("namespace must be uuid string or an Array of 16 byte values");var s=o(u.concat(n));if(s[6]=15&s[6]|t,s[8]=63&s[8]|128,c)for(var y=0;y<16;++y)c[i+y]=s[y];return c||r(s)};try{u.name=n}catch(c){}return u.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",u.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",u};
},{"./bytesToUuid":"dAjQ"}],"Y++Q":[function(require,module,exports) {
"use strict";function r(r,e,n,t){switch(r){case 0:return e&n^~e&t;case 1:return e^n^t;case 2:return e&n^e&t^n&t;case 3:return e^n^t}}function e(r,e){return r<<e|r>>>32-e}function n(n){var t=[1518500249,1859775393,2400959708,3395469782],a=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof n){var o=unescape(encodeURIComponent(n));n=new Array(o.length);for(var f=0;f<o.length;f++)n[f]=o.charCodeAt(f)}n.push(128);var c=n.length/4+2,u=Math.ceil(c/16),h=new Array(u);for(f=0;f<u;f++){h[f]=new Array(16);for(var s=0;s<16;s++)h[f][s]=n[64*f+4*s]<<24|n[64*f+4*s+1]<<16|n[64*f+4*s+2]<<8|n[64*f+4*s+3]}h[u-1][14]=8*(n.length-1)/Math.pow(2,32),h[u-1][14]=Math.floor(h[u-1][14]),h[u-1][15]=8*(n.length-1)&4294967295;for(f=0;f<u;f++){for(var l=new Array(80),i=0;i<16;i++)l[i]=h[f][i];for(i=16;i<80;i++)l[i]=e(l[i-3]^l[i-8]^l[i-14]^l[i-16],1);var v=a[0],g=a[1],p=a[2],w=a[3],y=a[4];for(i=0;i<80;i++){var A=Math.floor(i/20),M=e(v,5)+r(A,g,p,w)+y+t[A]+l[i]>>>0;y=w,w=p,p=e(g,30)>>>0,g=v,v=M}a[0]=a[0]+v>>>0,a[1]=a[1]+g>>>0,a[2]=a[2]+p>>>0,a[3]=a[3]+w>>>0,a[4]=a[4]+y>>>0}return[a[0]>>24&255,a[0]>>16&255,a[0]>>8&255,255&a[0],a[1]>>24&255,a[1]>>16&255,a[1]>>8&255,255&a[1],a[2]>>24&255,a[2]>>16&255,a[2]>>8&255,255&a[2],a[3]>>24&255,a[3]>>16&255,a[3]>>8&255,255&a[3],a[4]>>24&255,a[4]>>16&255,a[4]>>8&255,255&a[4]]}module.exports=n;
},{}],"2KYx":[function(require,module,exports) {
var e=require("./lib/v35.js"),r=require("./lib/sha1");module.exports=e("v5",80,r);
},{"./lib/v35.js":"1CuY","./lib/sha1":"Y++Q"}],"7QCb":[function(require,module,exports) {
"use strict";var t=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};exports.__esModule=!0;var a=t(require("uuid/v5")),e={gravatarMonster:{host:"https://www.gravatar.com/avatar/",params:"?d=monsterid&s=256",hash:!0},gravatarRetro:{host:"https://www.gravatar.com/avatar/",params:"?d=retro&s=256",hash:!0},gravatarIdenticon:{host:"https://www.gravatar.com/avatar/",params:"?d=identicon&s=256",hash:!0},githubIdenticon:{host:"https://github.com/identicons/",params:".png",space:""},uiAvatars:{host:"https://ui-avatars.com/api/?name=",params:"&size=420"},roboHash:{host:"https://robohash.org/",params:"?set=set2&bgset=bg1&size=420x420"},adorableAvatars:{host:"https://api.adorable.io/avatars/420/",params:".png"}},r=Object.keys(e)[0],s=function(t){var e=a.default(t||"",a.default.DNS);return e=e.replace(/-/g,"0")},o=function(t,a){return t=t||"a","string"==typeof a.space&&(t=t.replace(/\s/g,a.space)),a.hash&&(t=s(t)),t},n=function(t,a,s){var n=e[r];s=o(s,n),t.src=n.host+s+n.params,a.textContent=t.src},u=document.querySelector("input"),i=document.querySelector("select"),c=document.querySelector("img"),h=document.querySelector(".link");u.addEventListener("input",function(t){n(c,h,u.value)}),i.addEventListener("input",function(t){r=i.value,n(c,h,u.value)});
},{"uuid/v5":"2KYx"}]},{},["7QCb"], null)
//# sourceMappingURL=src.7b98b546.js.map