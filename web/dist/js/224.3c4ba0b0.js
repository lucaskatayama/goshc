(self["webpackChunkgoshc"]=self["webpackChunkgoshc"]||[]).push([[224],{3224:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var r=n(3396),o=n(9242);const i=e=>((0,r.dD)("data-v-4253d826"),e=e(),(0,r.Cn)(),e),s={class:"form"},a=i((()=>(0,r._)("div",null,"Family Name",-1))),u=i((()=>(0,r._)("div",null,"Given Name",-1))),c=i((()=>(0,r._)("div",null,"Birth Date",-1))),f={key:0,class:"font-bold justify-center text-xl"},l=i((()=>(0,r._)("div",null,"Name",-1))),d=["onUpdate:modelValue"],p=i((()=>(0,r._)("option",{value:"218"},"Pfizer",-1))),h=i((()=>(0,r._)("option",{value:"511"},"Coronavac",-1))),m=[p,h],v=i((()=>(0,r._)("div",null,"Location",-1))),y=["onUpdate:modelValue"],g=i((()=>(0,r._)("div",null,"Date",-1))),b=["onUpdate:modelValue"],w=i((()=>(0,r._)("div",null,"Lot Number",-1))),x=["onUpdate:modelValue"],E=["onClick"],C=(0,r.Uk)(" Remove Vaccine "),S=i((()=>(0,r._)("div",{class:"h-0.5 my-4 bg-slate-100"},null,-1))),_={class:"justify-center"},N=(0,r.Uk)(" Add Vaccine "),j={class:"justify-center"},O=(0,r.Uk)(" Generate Card ");function U(e,t,n,i,p,h){const U=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",s,[(0,r._)("div",null,[a,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>p.form.familyName=e),placeholder:"Doe"},null,512),[[o.nr,p.form.familyName]])]),(0,r._)("div",null,[u,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>p.form.givenName=e),placeholder:"John Walker"},null,512),[[o.nr,p.form.givenName]])]),(0,r._)("div",null,[c,(0,r.wy)((0,r._)("input",{type:"date",pattern:"YYYY-MM-DD","onUpdate:modelValue":t[2]||(t[2]=e=>p.form.birthDate=e),placeholder:"1975-12-30"},null,512),[[o.nr,p.form.birthDate]])]),p.form.vaccines.length>0?((0,r.wg)(),(0,r.iD)("div",f," Vaccines ")):(0,r.kq)("",!0),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(p.form.vaccines,((e,t)=>((0,r.wg)(),(0,r.iD)(r.HY,{key:t},[(0,r._)("div",null,[l,(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":t=>e.cvx=t},m,8,d),[[o.bM,e.cvx]])]),(0,r._)("div",null,[v,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":t=>e.performer=t,placeholder:"ABC Hospital"},null,8,y),[[o.nr,e.performer]])]),(0,r._)("div",null,[g,(0,r.wy)((0,r._)("input",{type:"date",pattern:"YYYY-MM-DD","onUpdate:modelValue":t=>e.date=t,placeholder:"2021-12-30"},null,8,b),[[o.nr,e.date]])]),(0,r._)("div",null,[w,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":t=>e.lotNumber=t,placeholder:"ABC123"},null,8,x),[[o.nr,e.lotNumber]])]),(0,r._)("button",{onClick:e=>h.delVaccine(t)},[(0,r.Wm)(U,{icon:"times"}),C],8,E),S],64)))),128)),(0,r._)("div",_,[(0,r._)("button",{onClick:t[3]||(t[3]=e=>h.addVaccine())},[(0,r.Wm)(U,{icon:"syringe"}),N])]),(0,r._)("div",j,[(0,r._)("button",{onClick:t[4]||(t[4]=e=>h.generateCard())},[(0,r.Wm)(U,{icon:"qrcode"}),O])])])])}var k=n(6265),A=n.n(k),R={name:"CardView",data(){return{form:{vaccines:[]}}},methods:{delVaccine(e){this.form.vaccines.splice(e,1)},addVaccine(){this.form.vaccines.push({cvx:"218"})},async generateCard(){const e=await A().post("/v1/card",this.form).then((e=>e.data));await this.$router.push({name:"qrcode",query:{jws:e}})}}},T=n(89);const P=(0,T.Z)(R,[["render",U],["__scopeId","data-v-4253d826"]]);var D=P},6265:function(e,t,n){e.exports=n(9435)},4951:function(e,t,n){"use strict";var r=n(6642),o=n(6806),i=n(3833),s=n(4360),a=n(5047),u=n(5976),c=n(9896),f=n(4393),l=n(8711),d=n(692);e.exports=function(e){return new Promise((function(t,n){var p,h=e.data,m=e.headers,v=e.responseType;function y(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}r.isFormData(h)&&delete m["Content-Type"];var g=new XMLHttpRequest;if(e.auth){var b=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(b+":"+w)}var x=a(e.baseURL,e.url);function E(){if(g){var r="getAllResponseHeaders"in g?u(g.getAllResponseHeaders()):null,i=v&&"text"!==v&&"json"!==v?g.response:g.responseText,s={data:i,status:g.status,statusText:g.statusText,headers:r,config:e,request:g};o((function(e){t(e),y()}),(function(e){n(e),y()}),s),g=null}}if(g.open(e.method.toUpperCase(),s(x,e.params,e.paramsSerializer),!0),g.timeout=e.timeout,"onloadend"in g?g.onloadend=E:g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&setTimeout(E)},g.onabort=function(){g&&(n(f("Request aborted",e,"ECONNABORTED",g)),g=null)},g.onerror=function(){n(f("Network Error",e,null,g)),g=null},g.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||l.transitional;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(f(t,e,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",g)),g=null},r.isStandardBrowserEnv()){var C=(e.withCredentials||c(x))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;C&&(m[e.xsrfHeaderName]=C)}"setRequestHeader"in g&&r.forEach(m,(function(e,t){"undefined"===typeof h&&"content-type"===t.toLowerCase()?delete m[t]:g.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(g.withCredentials=!!e.withCredentials),v&&"json"!==v&&(g.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&g.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&g.upload&&g.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(p=function(e){g&&(n(!e||e&&e.type?new d("canceled"):e),g.abort(),g=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),h||(h=null),g.send(h)}))}},9435:function(e,t,n){"use strict";var r=n(6642),o=n(5955),i=n(7104),s=n(8186),a=n(8711);function u(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n.create=function(t){return u(s(e,t))},n}var c=u(a);c.Axios=i,c.Cancel=n(692),c.CancelToken=n(6016),c.isCancel=n(5936),c.VERSION=n(4679).version,c.all=function(e){return Promise.all(e)},c.spread=n(5431),c.isAxiosError=n(786),e.exports=c,e.exports["default"]=c},692:function(e){"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},6016:function(e,t,n){"use strict";var r=n(692);function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},o.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},o.source=function(){var e,t=new o((function(t){e=t}));return{token:t,cancel:e}},e.exports=o},5936:function(e){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},7104:function(e,t,n){"use strict";var r=n(6642),o=n(4360),i=n(999),s=n(6559),a=n(8186),u=n(6298),c=u.validators;function f(e){this.defaults=e,this.interceptors={request:new i,response:new i}}f.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=a(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&u.assertOptions(t,{silentJSONParsing:c.transitional(c.boolean),forcedJSONParsing:c.transitional(c.boolean),clarifyTimeoutError:c.transitional(c.boolean)},!1);var n=[],r=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(e)||(r=r&&t.synchronous,n.unshift(t.fulfilled,t.rejected))}));var o,i=[];if(this.interceptors.response.forEach((function(e){i.push(e.fulfilled,e.rejected)})),!r){var f=[s,void 0];Array.prototype.unshift.apply(f,n),f=f.concat(i),o=Promise.resolve(e);while(f.length)o=o.then(f.shift(),f.shift());return o}var l=e;while(n.length){var d=n.shift(),p=n.shift();try{l=d(l)}catch(h){p(h);break}}try{o=s(l)}catch(h){return Promise.reject(h)}while(i.length)o=o.then(i.shift(),i.shift());return o},f.prototype.getUri=function(e){return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){f.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){f.prototype[e]=function(t,n,r){return this.request(a(r||{},{method:e,url:t,data:n}))}})),e.exports=f},999:function(e,t,n){"use strict";var r=n(6642);function o(){this.handlers=[]}o.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},5047:function(e,t,n){"use strict";var r=n(4777),o=n(2381);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},4393:function(e,t,n){"use strict";var r=n(5891);e.exports=function(e,t,n,o,i){var s=new Error(e);return r(s,t,n,o,i)}},6559:function(e,t,n){"use strict";var r=n(6642),o=n(3756),i=n(5936),s=n(8711),a=n(692);function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a("canceled")}e.exports=function(e){u(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||s.adapter;return t(e).then((function(t){return u(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},5891:function(e){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},8186:function(e,t,n){"use strict";var r=n(6642);e.exports=function(e,t){t=t||{};var n={};function o(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function i(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(e[n],t[n])}function s(e){if(!r.isUndefined(t[e]))return o(void 0,t[e])}function a(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(void 0,t[n])}function u(n){return n in t?o(e[n],t[n]):n in e?o(void 0,e[n]):void 0}var c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||i,o=t(e);r.isUndefined(o)&&t!==u||(n[e]=o)})),n}},6806:function(e,t,n){"use strict";var r=n(4393);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},3756:function(e,t,n){"use strict";var r=n(6642),o=n(8711);e.exports=function(e,t,n){var i=this||o;return r.forEach(n,(function(n){e=n.call(i,e,t)})),e}},8711:function(e,t,n){"use strict";var r=n(6642),o=n(1446),i=n(5891),s={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function u(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(e=n(4951)),e}function c(e,t,n){if(r.isString(e))try{return(t||JSON.parse)(e),r.trim(e)}catch(o){if("SyntaxError"!==o.name)throw o}return(n||JSON.stringify)(e)}var f={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:u(),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)||t&&"application/json"===t["Content-Type"]?(a(t,"application/json"),c(e)):e}],transformResponse:[function(e){var t=this.transitional||f.transitional,n=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,s=!n&&"json"===this.responseType;if(s||o&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(a){if(s){if("SyntaxError"===a.name)throw i(a,this,"E_JSON_PARSE");throw a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){f.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){f.headers[e]=r.merge(s)})),e.exports=f},4679:function(e){e.exports={version:"0.24.0"}},5955:function(e){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},4360:function(e,t,n){"use strict";var r=n(6642);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var s=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),i=s.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},2381:function(e){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},3833:function(e,t,n){"use strict";var r=n(6642);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},4777:function(e){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},786:function(e){"use strict";e.exports=function(e){return"object"===typeof e&&!0===e.isAxiosError}},9896:function(e,t,n){"use strict";var r=n(6642);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},1446:function(e,t,n){"use strict";var r=n(6642);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},5976:function(e,t,n){"use strict";var r=n(6642),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,s={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},5431:function(e){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},6298:function(e,t,n){"use strict";var r=n(4679).version,o={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){o[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var i={};function s(e,t,n){if("object"!==typeof e)throw new TypeError("options must be an object");var r=Object.keys(e),o=r.length;while(o-- >0){var i=r[o],s=t[i];if(s){var a=e[i],u=void 0===a||s(a,i,e);if(!0!==u)throw new TypeError("option "+i+" must be "+u)}else if(!0!==n)throw Error("Unknown option "+i)}}o.transitional=function(e,t,n){function o(e,t){return"[Axios v"+r+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,s){if(!1===e)throw new Error(o(r," has been removed"+(t?" in "+t:"")));return t&&!i[r]&&(i[r]=!0,console.warn(o(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,s)}},e.exports={assertOptions:s,validators:o}},6642:function(e,t,n){"use strict";var r=n(5955),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function s(e){return"undefined"===typeof e}function a(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function u(e){return"[object ArrayBuffer]"===o.call(e)}function c(e){return"undefined"!==typeof FormData&&e instanceof FormData}function f(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function l(e){return"string"===typeof e}function d(e){return"number"===typeof e}function p(e){return null!==e&&"object"===typeof e}function h(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function m(e){return"[object Date]"===o.call(e)}function v(e){return"[object File]"===o.call(e)}function y(e){return"[object Blob]"===o.call(e)}function g(e){return"[object Function]"===o.call(e)}function b(e){return p(e)&&g(e.pipe)}function w(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function x(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function E(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function C(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function S(){var e={};function t(t,n){h(e[n])&&h(t)?e[n]=S(e[n],t):h(t)?e[n]=S({},t):i(t)?e[n]=t.slice():e[n]=t}for(var n=0,r=arguments.length;n<r;n++)C(arguments[n],t);return e}function _(e,t,n){return C(t,(function(t,o){e[o]=n&&"function"===typeof t?r(t,n):t})),e}function N(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}e.exports={isArray:i,isArrayBuffer:u,isBuffer:a,isFormData:c,isArrayBufferView:f,isString:l,isNumber:d,isObject:p,isPlainObject:h,isUndefined:s,isDate:m,isFile:v,isBlob:y,isFunction:g,isStream:b,isURLSearchParams:w,isStandardBrowserEnv:E,forEach:C,merge:S,extend:_,trim:x,stripBOM:N}}}]);
//# sourceMappingURL=224.3c4ba0b0.js.map