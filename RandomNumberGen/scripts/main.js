'use strict';function t(h,e,f,k){h.f.fa(h.J,e,f,k,void 0)}function y(h,e,f,k){h.f.l?t(h,e,f,k):h.f.tb()._OnMessageFromDOM({type:"event",component:h.J,handler:e,dispatchOpts:k||null,data:f,responseId:null})}function G(h,e,f){h.f.a(h.J,e,f)}function J(h,e){for(const [f,k]of e)G(h,f,k)}window.F=class{constructor(h,e){this.f=h;this.J=e}Ca(){}};
window.ib=class{constructor(h,e){this.Ua=h;this.Zb=e;this.C=-1;this.X=-Infinity;this.dc=()=>{this.C=-1;this.X=Date.now();this.K=!0;this.Ua();this.K=!1};this.Va=this.K=!1}};"use strict";function K(h,e){const f=e.elementId,k=h.ba(f,e);h.h.set(f,k);e.isVisible||(k.style.display="none");e=h.ha(k);e.addEventListener("focus",()=>{M(h,"elem-focused",f)});e.addEventListener("blur",()=>{M(h,"elem-blurred",f)});h.V&&document.body.appendChild(k)}
function N(h,e,f){G(h,e,k=>{const n=h.h.get(k.elementId);return f(n,k)})}function M(h,e,f,k){k||(k={});k.elementId=f;t(h,e,k)}function O(h,e,f,k){k||(k={});k.elementId=f;y(h,e,k)}
window.Ea=class extends self.F{constructor(h,e){super(h,e);this.h=new Map;this.V=!0;J(this,[["create",f=>K(this,f)],["destroy",f=>{{f=f.elementId;const k=this.h.get(f);this.V&&k.parentElement.removeChild(k);this.h.delete(f)}}],["set-visible",f=>{this.V&&(this.h.get(f.elementId).style.display=f.isVisible?"":"none")}],["update-position",f=>{if(this.V){var k=this.h.get(f.elementId);k.style.left=f.left+"px";k.style.top=f.top+"px";k.style.width=f.width+"px";k.style.height=f.height+"px";f=f.fontSize;null!==
f&&(k.style.fontSize=f+"em")}}],["update-state",f=>{{const k=this.h.get(f.elementId);this.G(k,f)}}],["focus",f=>this.qa(f)],["set-css-style",f=>{this.h.get(f.elementId).style[f.prop]=f.val}],["set-attribute",f=>{this.h.get(f.elementId).setAttribute(f.name,f.val)}],["remove-attribute",f=>{this.h.get(f.elementId).removeAttribute(f.name)}]]);N(this,"get-element",f=>f)}ba(){throw Error("required override");}G(){throw Error("required override");}ha(h){return h}qa(h){const e=this.ha(this.h.get(h.elementId));
h.focus?e.focus():e.blur()}};"use strict";
{const h=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent);let e=0;function f(d,a){const c=document.createElement("script");c.async=!1;"module"===a&&(c.type="module");return d.ic?new Promise(g=>{const l="c3_resolve_"+e;++e;self[l]=g;c.textContent=d.lc+`\n\nself["${l}"]();`;document.head.appendChild(c)}):new Promise((g,l)=>{c.onload=g;c.onerror=l;c.src=d;document.head.appendChild(c)})}let k=!1,n=!1;function z(){if(!k){try{new Worker("blob://",{get type(){n=!0}})}catch(d){}k=
!0}return n}let u=new Audio;const L={"audio/webm; codecs=opus":!!u.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!u.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!u.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!u.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!u.canPlayType("audio/mp4"),"audio/mpeg":!!u.canPlayType("audio/mpeg")};u=null;async function A(d){d=await H(d);return(new TextDecoder("utf-8")).decode(d)}function H(d){return new Promise((a,
c)=>{const g=new FileReader;g.onload=l=>a(l.target.result);g.onerror=l=>c(l);g.readAsArrayBuffer(d)})}const D=[];let x=0;window.RealFile=window.File;const B=[],v=new Map,C=new Map;let E=0;const I=[];self.runOnStartup=function(d){if("function"!==typeof d)throw Error("runOnStartup called without a function");I.push(d)};const b=new Set(["cordova","playable-ad","instant-games"]);window.m=class d{constructor(a){this.l=a.nc;this.M=null;this.c="";this.$=a.kc;this.i=a.bb;this.P={};this.wa=this.Za=null;this.W=
[];this.L=this.g=this.za=null;this.A=-1;this.cc=()=>this.Mb();this.Ya=[];this.b=a.$a;!this.l||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation&&("module"!==this.i||z())||(this.l=!1);b.has(this.b)&&this.l&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."),this.l=!1);this.Y=this.j=null;"html5"!==this.b&&"playable-ad"!==this.b||"file"!==location.protocol.substr(0,4)||alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");
this.a("runtime","cordova-fetch-local-file",c=>this.zb(c));this.a("runtime","create-job-worker",()=>this.Ab());"cordova"===this.b?document.addEventListener("deviceready",()=>this.Ja(a)):this.Ja(a)}Fa(){return h&&"cordova"===this.b}ea(){return h&&b.has(this.b)||navigator.standalone}async Ja(a){if("playable-ad"===this.b){this.j=self.c3_base64files;this.Y={};await this.ob();for(let g=0,l=a.D.length;g<l;++g){var c=a.D[g].toLowerCase();this.Y.hasOwnProperty(c)?a.D[g]={ic:!0,lc:this.Y[c]}:this.j.hasOwnProperty(c)&&
(a.D[g]=URL.createObjectURL(this.j[c]))}}a.ec?this.c=a.ec:(c=location.origin,this.c=("null"===c?"file:///":c)+location.pathname,c=this.c.lastIndexOf("/"),-1!==c&&(this.c=this.c.substr(0,c+1)));a.pc&&(this.P=a.pc);c=new MessageChannel;this.M=c.port1;this.M.onmessage=g=>this._OnMessageFromRuntime(g.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(g=>this.Jb(g));this.L=new self.gb(this);await P(this.L);"object"===typeof window.StatusBar&&window.StatusBar.hide();"object"===typeof window.AndroidFullScreen&&
window.AndroidFullScreen.immersiveMode();this.l?await this.vb(a,c.port2):await this.ub(a,c.port2)}ia(a){a=this.P.hasOwnProperty(a)?this.P[a]:a.endsWith("/workermain.js")&&this.P.hasOwnProperty("workermain.js")?this.P["workermain.js"]:"playable-ad"===this.b&&this.j.hasOwnProperty(a.toLowerCase())?this.j[a.toLowerCase()]:a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async ca(a,c,g){if(a.startsWith("blob:"))return new Worker(a,g);if(this.Fa()&&"file:"===location.protocol)return a=await this.aa(this.$+
a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),g);a=new URL(a,c);if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),g)}return new Worker(a,g)}s(){return Math.max(window.innerWidth,1)}o(){return Math.max(window.innerHeight,1)}Ha(a){var c=this.L;return{baseUrl:this.c,windowInnerWidth:this.s(),windowInnerHeight:this.o(),devicePixelRatio:window.devicePixelRatio,
isFullscreen:d.da(),projectData:a.vc,scriptsType:a.bb,previewImageBlobs:window.cr_previewImageBlobs||this.j,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,previewProjectFileSWUrls:window.cr_previewProjectFiles,swClientId:window.tc||"",exportType:a.$a,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.uc,jobScheduler:{inputPort:c.ua,outputPort:c.ya,maxNumWorkers:c.ac},supportedAudioFormats:L,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.$+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||
this.$+"opus.wasm.wasm",isiOSCordova:this.Fa(),isiOSWebView:this.ea(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async vb(a,c){var g=this.ia(a.oc);this.Za=await this.ca(g,this.c,{type:this.i,name:"Runtime"});this.g=document.createElement("canvas");this.g.style.display="none";g=this.g.transferControlToOffscreen();document.body.appendChild(this.g);window.c3canvas=this.g;this.Za.postMessage(Object.assign(this.Ha(a),{type:"init-runtime",isInWorker:!0,messagePort:c,canvas:g,workerDependencyScripts:a.Ba||
[],engineScripts:a.D,projectScripts:a.R,mainProjectScript:a.ab,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[c,g,...Q(this.L)]);this.W=B.map(l=>new l(this));this.Ga();self.c3_callFunction=(l,p)=>this.za.wb(l,p);"preview"===this.b&&(self.goToLastErrorScript=()=>this.fa("runtime","go-to-last-error-script"))}async ub(a,c){this.g=document.createElement("canvas");this.g.style.display="none";document.body.appendChild(this.g);window.c3canvas=this.g;this.W=B.map(p=>new p(this));this.Ga();var g=a.D.map(p=>
"string"===typeof p?(new URL(p,this.c)).toString():p);Array.isArray(a.Ba)&&g.unshift(...a.Ba);g=await Promise.all(g.map(p=>this.ka(p,this.i)));await Promise.all(g.map(p=>f(p,this.i)));const l=self.C3_ProjectScriptsStatus;if("module"===this.i){g=a.ab;const p=a.R;for(let [r,q]of p)if(q||(q=r),r===g)try{q=await this.ka(q,this.i),await f(q,this.i),"preview"!==this.b||l[r]||this.Pa(r,"main script did not run to completion")}catch(w){this.Pa(r,w)}else if("scriptsInEvents.js"===r||r.endsWith("/scriptsInEvents.js"))q=
await this.ka(q,this.i),await f(q,this.i)}else if(a.R&&0<a.R.length)try{if(await Promise.all(a.R.map(p=>f(p[1],this.i))),Object.values(l).some(p=>!p)){self.setTimeout(()=>this.Qa(l),100);return}}catch(p){console.error("[Preview] Error loading project scripts: ",p);self.setTimeout(()=>this.Qa(l),100);return}"preview"===this.b&&"object"!==typeof self.qc.rc?(this.I(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):
(a=Object.assign(this.Ha(a),{isInWorker:!1,messagePort:c,canvas:this.g,runOnStartupFunctions:I}),this.La(),this.wa=self.C3_CreateRuntime(a),await self.C3_InitRuntime(this.wa,a))}Qa(a){this.I();a=`Failed to load project script '${Object.entries(a).filter(c=>!c[1]).map(c=>c[0])[0]}'. Check all your JavaScript code has valid syntax.`;console.error("[Preview] "+a);alert(a)}Pa(a,c){this.I();console.error(`[Preview] Failed to load project main script (${a}): `,c);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}La(){this.I()}I(){const a=
window.fc;a&&(a.parentElement.removeChild(a),window.fc=null)}async Ab(){const a=await R(this.L);return{outputPort:a,transferables:[a]}}tb(){if(this.l)throw Error("not available in worker mode");return this.wa}fa(a,c,g,l,p){this.M.postMessage({type:"event",component:a,handler:c,dispatchOpts:l||null,data:g,responseId:null},p)}hb(a,c){const g=E++,l=new Promise((p,r)=>{C.set(g,{resolve:p,reject:r})});this.M.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:c,responseId:g},
void 0);return l}["_OnMessageFromRuntime"](a){const c=a.type;if("event"===c)return this.Fb(a);if("result"===c)this.Pb(a);else if("runtime-ready"===c)this.Qb();else if("alert-error"===c)this.I(),alert(a.message);else if("creating-runtime"===c)this.La();else throw Error(`unknown message '${c}'`);}Fb(a){const c=a.component,g=a.handler,l=a.data,p=a.responseId;if(a=v.get(c))if(a=a.get(g)){var r=null;try{r=a(l)}catch(q){console.error(`Exception in '${c}' handler '${g}':`,q);null!==p&&this.T(p,!1,""+q);
return}if(null===p)return r;r&&r.then?r.then(q=>this.T(p,!0,q)).catch(q=>{console.error(`Rejection from '${c}' handler '${g}':`,q);this.T(p,!1,""+q)}):this.T(p,!0,r)}else console.warn(`[DOM] No handler '${g}' for component '${c}'`);else console.warn(`[DOM] No event handlers for component '${c}'`)}T(a,c,g){let l;g&&g.transferables&&(l=g.transferables);this.M.postMessage({type:"result",responseId:a,isOk:c,result:g},l)}Pb(a){const c=a.responseId,g=a.isOk;a=a.result;const l=C.get(c);g?l.resolve(a):l.reject(a);
C.delete(c)}a(a,c,g){let l=v.get(a);l||(l=new Map,v.set(a,l));if(l.has(c))throw Error(`[DOM] Component '${a}' already has handler '${c}'`);l.set(c,g)}static v(a){if(B.includes(a))throw Error("DOM handler already added");B.push(a)}Ga(){for(const a of this.W)if("runtime"===a.J){this.za=a;return}throw Error("cannot find runtime DOM handler");}Jb(a){this.fa("debugger","message",a)}Qb(){for(const a of this.W)a.Ca()}static da(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}Ra(){-1===
this.A&&this.Ya.length&&(this.A=requestAnimationFrame(this.cc))}mb(){-1!==this.A&&(cancelAnimationFrame(this.A),this.A=-1)}Mb(){this.A=-1;for(const a of this.Ya)a();this.Ra()}sa(){this.za.sa()}eb(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}fb(a){return!this.eb(a)}async ka(a,c){return"cordova"===this.b&&"module"===c&&(a.startsWith("file:")||"file:"===location.protocol&&this.fb(a))?(a.startsWith(this.c)&&(a=a.substr(this.c.length)),a=await this.aa(a),URL.createObjectURL(new Blob([a],
{type:"application/javascript"}))):a}async zb(a){const c=a.filename;switch(a.as){case "text":return await this.cb(c);case "buffer":return await this.aa(c);default:throw Error("unsupported type");}}Da(a){const c=window.cordova.file.applicationDirectory+"www/"+a.toLowerCase();return new Promise((g,l)=>{window.resolveLocalFileSystemURL(c,p=>{p.file(g,l)},l)})}async cb(a){a=await this.Da(a);return await A(a)}ga(){if(D.length&&!(8<=x)){x++;var a=D.shift();this.pb(a.filename,a.mc,a.hc)}}aa(a){return new Promise((c,
g)=>{D.push({filename:a,mc:l=>{x--;this.ga();c(l)},hc:l=>{x--;this.ga();g(l)}});this.ga()})}async pb(a,c,g){try{const l=await this.Da(a),p=await H(l);c(p)}catch(l){g(l)}}async ob(){const a=[];for(const [c,g]of Object.entries(this.j))a.push(this.nb(c,g));await Promise.all(a)}async nb(a,c){if("object"===typeof c)this.j[a]=new Blob([c.str],{type:c.type}),this.Y[a]=c.str;else{let g=await this.sb(c);g||(g=this.qb(c));this.j[a]=g}}async sb(a){try{return await (await fetch(a)).blob()}catch(c){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
c),null}}qb(a){a=this.Vb(a);return this.lb(a.data,a.jc)}Vb(a){var c=a.indexOf(",");if(0>c)throw new URIError("expected comma in data: uri");var g=a.substring(c+1);c=a.substring(5,c).split(";");a=c[0]||"";const l=c[2];g="base64"===c[1]||"base64"===l?atob(g):decodeURIComponent(g);return{jc:a,data:g}}lb(a,c){var g=a.length;let l=g>>2,p=new Uint8Array(g),r=new Uint32Array(p.buffer,0,l),q,w;for(w=q=0;q<l;++q)r[q]=a.charCodeAt(w++)|a.charCodeAt(w++)<<8|a.charCodeAt(w++)<<16|a.charCodeAt(w++)<<24;for(g&=
3;g--;)p[w]=a.charCodeAt(w),++w;return new Blob([p],{type:c})}}}"use strict";
{const h=self.m;function e(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}const f=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),k={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},n={dispatchUserScriptEvent:!0},z={dispatchRuntimeEvent:!0};function u(b){return new Promise((d,a)=>{const c=document.createElement("link");c.onload=()=>d(c);c.onerror=g=>a(g);c.rel=
"stylesheet";c.href=b;document.head.appendChild(c)})}function L(b){return new Promise((d,a)=>{const c=new Image;c.onload=()=>d(c);c.onerror=g=>a(g);c.src=b})}async function A(b){b=URL.createObjectURL(b);try{return await L(b)}finally{URL.revokeObjectURL(b)}}function H(b){return new Promise((d,a)=>{let c=new FileReader;c.onload=g=>d(g.target.result);c.onerror=g=>a(g);c.readAsText(b)})}async function D(b,d,a){if(!/firefox/i.test(navigator.userAgent))return await A(b);var c=await H(b);c=(new DOMParser).parseFromString(c,
"image/svg+xml");const g=c.documentElement;if(g.hasAttribute("width")&&g.hasAttribute("height")){const l=g.getAttribute("width"),p=g.getAttribute("height");if(!l.includes("%")&&!p.includes("%"))return await A(b)}g.setAttribute("width",d+"px");g.setAttribute("height",a+"px");c=(new XMLSerializer).serializeToString(c);b=new Blob([c],{type:"image/svg+xml"});return await A(b)}function x(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}const B=new Set(["canvas",
"body","html"]);function v(b){B.has(b.target.tagName.toLowerCase())&&b.preventDefault()}function C(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}self.C3_GetSvgImageSize=async function(b){b=await A(b);if(0<b.width&&0<b.height)return[b.width,b.height];{b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.style.visibility="hidden";document.body.appendChild(b);const d=b.getBoundingClientRect();document.body.removeChild(b);return[d.width,d.height]}};self.C3_RasterSvgImageBlob=async function(b,
d,a,c,g){b=await D(b,d,a);const l=document.createElement("canvas");l.width=c;l.height=g;l.getContext("2d").drawImage(b,0,0,d,a);return l};let E=!1;document.addEventListener("pause",()=>E=!0);document.addEventListener("resume",()=>E=!1);function I(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}h.v(class extends self.F{constructor(b){super(b,"runtime");this.Wa=!0;this.B=-1;this.Aa="any";this.Sa=this.Ta=!1;this.va=this.O=this.u=null;b.a("canvas","update-size",c=>this.Tb(c));
b.a("runtime","invoke-download",c=>this.Ib(c));b.a("runtime","raster-svg-image",c=>this.Nb(c));b.a("runtime","get-svg-image-size",c=>this.Gb(c));b.a("runtime","set-target-orientation",c=>this.Sb(c));b.a("runtime","register-sw",()=>this.Ob());b.a("runtime","post-to-debugger",c=>this.Na(c));b.a("runtime","go-to-script",c=>this.Na(c));b.a("runtime","before-start-ticking",()=>this.yb());b.a("runtime","debug-highlight",c=>this.Bb(c));b.a("runtime","enable-device-orientation",()=>this.kb());b.a("runtime",
"enable-device-motion",()=>this.jb());b.a("runtime","add-stylesheet",c=>this.xb(c));b.a("runtime","alert",c=>this.la(c));b.a("runtime","hide-cordova-splash",()=>this.Hb());const d=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",c=>{const g=c.target;d.has(g.tagName.toLowerCase())||x(g)||c.preventDefault()});const a=b.g;window.addEventListener("selectstart",v);window.addEventListener("gesturehold",v);a.addEventListener("selectstart",v);a.addEventListener("gesturehold",
v);window.addEventListener("touchstart",v,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",v,{passive:!1}),a.addEventListener("pointerdown",v)):a.addEventListener("touchstart",v);this.N=0;window.addEventListener("mousedown",c=>{1===c.button&&c.preventDefault()});window.addEventListener("mousewheel",C,{passive:!1});window.addEventListener("wheel",C,{passive:!1});window.addEventListener("resize",()=>this.Ub());window.addEventListener("fullscreenchange",()=>this.ma());
window.addEventListener("webkitfullscreenchange",()=>this.ma());window.addEventListener("mozfullscreenchange",()=>this.ma());window.addEventListener("fullscreenerror",c=>this.na(c));window.addEventListener("webkitfullscreenerror",c=>this.na(c));window.addEventListener("mozfullscreenerror",c=>this.na(c));b.ea()&&window.addEventListener("focusout",()=>{{const l=document.activeElement;if(l){var c=l.tagName.toLowerCase();var g=new Set("email number password search tel text url".split(" "));c="textarea"===
c?!0:"input"===c?g.has(l.type.toLowerCase()||"text"):x(l)}else c=!1}c||(document.scrollingElement.scrollTop=0)});this.xa=new Set;this.bc=new WeakSet;this.$b=!1}yb(){"cordova"===this.f.b?(document.addEventListener("pause",()=>this.ra(!0)),document.addEventListener("resume",()=>this.ra(!1))):document.addEventListener("visibilitychange",()=>this.ra(document.hidden));return{isSuspended:!(!document.hidden&&!E)}}Ca(){window.addEventListener("focus",()=>this.U("window-focus"));window.addEventListener("blur",
()=>{this.U("window-blur",{parentHasFocus:I()});this.N=0});window.addEventListener("keydown",d=>this.Ma("keydown",d));window.addEventListener("keyup",d=>this.Ma("keyup",d));window.addEventListener("dblclick",d=>this.oa("dblclick",d,k));window.addEventListener("wheel",d=>this.Kb(d));"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",d=>{this.ja(d);this.H("pointerdown",d)}),this.f.l&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.O=new self.ib(()=>this.rb(),
5),this.O.Va=!0,window.addEventListener("pointerrawupdate",d=>this.Lb(d))):window.addEventListener("pointermove",d=>this.H("pointermove",d)),window.addEventListener("pointerup",d=>this.H("pointerup",d)),window.addEventListener("pointercancel",d=>this.H("pointercancel",d))):(window.addEventListener("mousedown",d=>{this.ja(d);this.pa("pointerdown",d)}),window.addEventListener("mousemove",d=>this.pa("pointermove",d)),window.addEventListener("mouseup",d=>this.pa("pointerup",d)),window.addEventListener("touchstart",
d=>{this.ja(d);this.S("pointerdown",d)}),window.addEventListener("touchmove",d=>this.S("pointermove",d)),window.addEventListener("touchend",d=>this.S("pointerup",d)),window.addEventListener("touchcancel",d=>this.S("pointercancel",d)));const b=()=>this.sa();window.addEventListener("pointerup",b,!0);window.addEventListener("touchend",b,!0);window.addEventListener("click",b,!0);window.addEventListener("keydown",b,!0);window.addEventListener("gamepadconnected",b,!0)}U(b,d){t(this,b,d||null,z)}s(){return this.f.s()}o(){return this.f.o()}Ub(){const b=
this.s(),d=this.o();this.U("window-resize",{innerWidth:b,innerHeight:d,devicePixelRatio:window.devicePixelRatio});this.f.ea()&&(-1!==this.B&&clearTimeout(this.B),this.Oa(b,d,0))}Wb(b,d,a){-1!==this.B&&clearTimeout(this.B);this.B=setTimeout(()=>this.Oa(b,d,a),48)}Oa(b,d,a){const c=this.s(),g=this.o();this.B=-1;c!=b||g!=d?this.U("window-resize",{innerWidth:c,innerHeight:g,devicePixelRatio:window.devicePixelRatio}):10>a&&this.Wb(c,g,a+1)}Sb(b){this.Aa=b.targetOrientation}Xb(){const b=this.Aa;if(screen.orientation&&
screen.orientation.lock)screen.orientation.lock(b).catch(d=>console.warn("[Construct 3] Failed to lock orientation: ",d));else try{let d=!1;screen.lockOrientation?d=screen.lockOrientation(b):screen.webkitLockOrientation?d=screen.webkitLockOrientation(b):screen.mozLockOrientation?d=screen.mozLockOrientation(b):screen.msLockOrientation&&(d=screen.msLockOrientation(b));d||console.warn("[Construct 3] Failed to lock orientation")}catch(d){console.warn("[Construct 3] Failed to lock orientation: ",d)}}ma(){const b=
h.da();b&&"any"!==this.Aa&&this.Xb();t(this,"fullscreenchange",{isFullscreen:b,innerWidth:this.s(),innerHeight:this.o()})}na(b){console.warn("[Construct 3] Fullscreen request failed: ",b);t(this,"fullscreenerror",{isFullscreen:h.da(),innerWidth:this.s(),innerHeight:this.o()})}ra(b){b?this.f.mb():this.f.Ra();t(this,"visibilitychange",{hidden:b})}Ma(b,d){"Backspace"===d.key&&v(d);const a=f.get(d.code)||d.code;y(this,b,{code:a,key:d.key,which:d.which,repeat:d.repeat,altKey:d.altKey,ctrlKey:d.ctrlKey,
metaKey:d.metaKey,shiftKey:d.shiftKey,timeStamp:d.timeStamp},k)}Kb(b){t(this,"wheel",{clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,deltaX:b.deltaX,deltaY:b.deltaY,deltaZ:b.deltaZ,deltaMode:b.deltaMode,timeStamp:b.timeStamp},k)}oa(b,d,a){e(d)||y(this,b,{button:d.button,buttons:d.buttons,clientX:d.clientX,clientY:d.clientY,pageX:d.pageX,pageY:d.pageY,timeStamp:d.timeStamp},a)}pa(b,d){if(!e(d)){var a=this.N;"pointerdown"===b&&0!==a?b="pointermove":"pointerup"===b&&0!==d.buttons&&(b=
"pointermove");y(this,b,{pointerId:1,pointerType:"mouse",button:d.button,buttons:d.buttons,lastButtons:a,clientX:d.clientX,clientY:d.clientY,pageX:d.pageX,pageY:d.pageY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:d.timeStamp},k);this.N=d.buttons;this.oa(d.type,d,n)}}H(b,d){if(this.O&&"pointermove"!==b){var a=this.O;a.K||(-1!==a.C&&(self.clearTimeout(a.C),a.C=-1),a.X=Date.now())}a=0;"mouse"===d.pointerType&&(a=this.N);y(this,b,{pointerId:d.pointerId,pointerType:d.pointerType,
button:d.button,buttons:d.buttons,lastButtons:a,clientX:d.clientX,clientY:d.clientY,pageX:d.pageX,pageY:d.pageY,width:d.width||0,height:d.height||0,pressure:d.pressure||0,tangentialPressure:d.tangentialPressure||0,tiltX:d.tiltX||0,tiltY:d.tiltY||0,twist:d.twist||0,timeStamp:d.timeStamp},k);"mouse"===d.pointerType&&(a="mousemove","pointerdown"===b?a="mousedown":"pointerup"===b&&(a="mouseup"),this.oa(a,d,n),this.N=d.buttons)}Lb(b){this.va=b;b=this.O;if(-1===b.C){var d=Date.now(),a=d-b.X,c=b.Zb;a>=c&&
b.Va?(b.X=d,b.K=!0,b.Ua(),b.K=!1):b.C=self.setTimeout(b.dc,Math.max(c-a,4))}}rb(){this.H("pointermove",this.va);this.va=null}S(b,d){for(let a=0,c=d.changedTouches.length;a<c;++a){const g=d.changedTouches[a];y(this,b,{pointerId:g.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:g.clientX,clientY:g.clientY,pageX:g.pageX,pageY:g.pageY,width:2*(g.radiusX||g.webkitRadiusX||0),height:2*(g.radiusY||g.webkitRadiusY||0),pressure:g.force||g.webkitForce||0,tangentialPressure:0,tiltX:0,
tiltY:0,twist:g.rotationAngle||0,timeStamp:d.timeStamp},k)}}ja(b){window!==window.top&&window.focus();this.Ka(b.target)&&document.activeElement&&!this.Ka(document.activeElement)&&document.activeElement.blur()}Ka(b){return!b||b===document||b===window||b===document.body||"canvas"===b.tagName.toLowerCase()}kb(){this.Ta||(this.Ta=!0,window.addEventListener("deviceorientation",b=>this.Db(b)),window.addEventListener("deviceorientationabsolute",b=>this.Eb(b)))}jb(){this.Sa||(this.Sa=!0,window.addEventListener("devicemotion",
b=>this.Cb(b)))}Db(b){t(this,"deviceorientation",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp,webkitCompassHeading:b.webkitCompassHeading,webkitCompassAccuracy:b.webkitCompassAccuracy},k)}Eb(b){t(this,"deviceorientationabsolute",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},k)}Cb(b){let d=null;var a=b.acceleration;a&&(d={x:a.x||0,y:a.y||0,z:a.z||0});a=null;var c=b.accelerationIncludingGravity;c&&(a={x:c.x||
0,y:c.y||0,z:c.z||0});c=null;const g=b.rotationRate;g&&(c={alpha:g.alpha||0,beta:g.beta||0,gamma:g.gamma||0});t(this,"devicemotion",{acceleration:d,accelerationIncludingGravity:a,rotationRate:c,interval:b.interval,timeStamp:b.timeStamp},k)}Tb(b){const d=this.f.g;d.style.width=b.styleWidth+"px";d.style.height=b.styleHeight+"px";d.style.marginLeft=b.marginLeft+"px";d.style.marginTop=b.marginTop+"px";this.Wa&&(d.style.display="",this.Wa=!1)}Ib(b){const d=b.url;b=b.filename;const a=document.createElement("a"),
c=document.body;a.textContent=b;a.href=d;a.download=b;c.appendChild(a);a.click();c.removeChild(a)}async Nb(b){var d=b.imageBitmapOpts;b=await self.C3_RasterSvgImageBlob(b.blob,b.imageWidth,b.imageHeight,b.surfaceWidth,b.surfaceHeight);d=d?await createImageBitmap(b,d):await createImageBitmap(b);return{imageBitmap:d,transferables:[d]}}async Gb(b){return await self.C3_GetSvgImageSize(b.blob)}async xb(b){await u(b.url)}sa(){var b=[...this.xa];this.xa.clear();if(!this.$b)for(const d of b)(b=d.play())&&
b.catch(()=>{this.bc.has(d)||this.xa.add(d)})}Hb(){navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()}Bb(b){if(b.show){this.u||(this.u=document.createElement("div"),this.u.id="inspectOutline",document.body.appendChild(this.u));var d=this.u;d.style.display="";d.style.left=b.left-1+"px";d.style.top=b.top-1+"px";d.style.width=b.width+2+"px";d.style.height=b.height+2+"px";d.textContent=b.name}else this.u&&(this.u.style.display="none")}Ob(){window.C3_RegisterSW&&window.C3_RegisterSW()}Na(b){window.c3_postToMessagePort&&
(b.from="runtime",window.c3_postToMessagePort(b))}wb(b,d){return this.f.hb(this.J,{name:b,params:d})}la(b){alert(b.message)}})}"use strict";async function P(h){if(h.Yb)throw Error("already initialised");h.Yb=!0;var e=h.Z.ia("dispatchworker.js");h.ta=await h.Z.ca(e,h.c,{name:"DispatchWorker"});e=new MessageChannel;h.ua=e.port1;h.ta.postMessage({type:"_init","in-port":e.port2},[e.port2]);h.ya=await R(h)}function Q(h){return[h.ua,h.ya]}
async function R(h){const e=h.Xa.length;var f=h.Z.ia("jobworker.js");f=await h.Z.ca(f,h.c,{name:"JobWorker"+e});const k=new MessageChannel,n=new MessageChannel;h.ta.postMessage({type:"_addJobWorker",port:k.port1},[k.port1]);f.postMessage({type:"init",number:e,"dispatch-port":k.port2,"output-port":n.port2},[k.port2,n.port2]);h.Xa.push(f);return n.port1}
self.gb=class{constructor(h){this.Z=h;this.c=h.c;this.c="preview"===h.b?this.c+"c3/workers/":this.c+h.$;this.ac=Math.min(navigator.hardwareConcurrency||2,16);this.ta=null;this.Xa=[];this.ya=this.ua=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.m({nc:!0,oc:"workermain.js",D:["scripts/c3runtime.js"],R:[],ab:"",bb:"module",kc:"scripts/",Ba:[],$a:"html5"}));"use strict";
{function h(f){f.stopPropagation()}function e(f){13!==f.which&&27!==f.which&&f.stopPropagation()}self.m.v(class extends self.Ea{constructor(f){super(f,"text-input");N(this,"scroll-to-bottom",k=>this.Rb(k))}ba(f,k){let n;const z=k.type;"textarea"===z?(n=document.createElement("textarea"),n.style.resize="none"):(n=document.createElement("input"),n.type=z);n.style.position="absolute";n.autocomplete="off";n.addEventListener("touchstart",h);n.addEventListener("touchmove",h);n.addEventListener("touchend",
h);n.addEventListener("mousedown",h);n.addEventListener("mouseup",h);n.addEventListener("keydown",e);n.addEventListener("keyup",e);n.addEventListener("click",u=>{u.stopPropagation();O(this,"click",f)});n.addEventListener("dblclick",u=>{u.stopPropagation();O(this,"dblclick",f)});n.addEventListener("input",()=>M(this,"change",f,{text:n.value}));k.id&&(n.id=k.id);this.G(n,k);return n}G(f,k){f.value=k.text;f.placeholder=k.placeholder;f.title=k.title;f.disabled=!k.isEnabled;f.readOnly=k.isReadOnly;f.spellcheck=
k.spellCheck;k=k.maxLength;0>k?f.removeAttribute("maxlength"):f.setAttribute("maxlength",k)}Rb(f){f.scrollTop=f.scrollHeight}})}"use strict";self.m.v(class extends self.F{constructor(h){super(h,"mouse");G(this,"cursor",e=>{document.documentElement.style.cursor=e})}});"use strict";function S(h){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(e=>t(h,"sw-message",e.data))}
function T(h){h=h.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(h).catch(e=>console.warn("[Construct 3] Failed to lock orientation: ",e));else try{let e=!1;screen.lockOrientation?e=screen.lockOrientation(h):screen.webkitLockOrientation?e=screen.webkitLockOrientation(h):screen.mozLockOrientation?e=screen.mozLockOrientation(h):screen.msLockOrientation&&(e=screen.msLockOrientation(h));e||console.warn("[Construct 3] Failed to lock orientation")}catch(e){console.warn("[Construct 3] Failed to lock orientation: ",
e)}}
self.m.v(class extends self.F{constructor(h){super(h,"browser");this.b="";J(this,[["get-initial-state",e=>{this.b=e.exportType;return{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isScirraArcade:"undefined"!==typeof window.is_scirra_arcade}}],["ready-for-sw-messages",()=>S(this)],
["alert",e=>this.la(e)],["close",()=>{navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}],["set-focus",e=>this.qa(e)],["vibrate",e=>{navigator.vibrate&&navigator.vibrate(e.pattern)}],["lock-orientation",e=>T(e)],["unlock-orientation",()=>{try{screen.orientation&&screen.orientation.unlock?screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():
screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(e){}}],["navigate",e=>{var f=e.type;if("back"===f)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.back();else if("forward"===f)window.forward();else if("home"===f)window.home();else if("reload"===f)location.reload();else if("url"===f){f=e.url;var k=e.target;e=e.exportType;"windows-uwp"===e&&"undefined"!==typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(f)):
self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(f,"_system"):"preview"===e||"windows-webview2"===e?window.open(f,"_blank"):this.sc||(2===k?window.top.location=f:1===k?window.parent.location=f:window.location=f)}else"new-window"===f&&(f=e.url,k=e.tag,"windows-uwp"===e.exportType&&"undefined"!==typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(f)):self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(f,"_system"):window.open(f,k))}],
["request-fullscreen",e=>{{const f={navigationUI:"auto"};e=e.navUI;1===e?f.navigationUI="hide":2===e&&(f.navigationUI="show");e=document.documentElement;e.requestFullscreen?e.requestFullscreen(f):e.mozRequestFullScreen?e.mozRequestFullScreen(f):e.msRequestFullscreen?e.msRequestFullscreen(f):e.webkitRequestFullScreen&&("undefined"!==typeof Element.ALLOW_KEYBOARD_INPUT?e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):e.webkitRequestFullScreen())}}],["exit-fullscreen",()=>{document.exitFullscreen?
document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}],["set-hash",e=>{location.hash=e.hash}]]);window.addEventListener("online",()=>{t(this,"online-state",{isOnline:!0})});window.addEventListener("offline",()=>{t(this,"online-state",{isOnline:!1})});window.addEventListener("hashchange",()=>{t(this,"hashchange",{location:location.toString()})});
document.addEventListener("backbutton",()=>{t(this,"backbutton")});"undefined"!==typeof Windows&&Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested",e=>{e.handled=!0;t(this,"backbutton")})}la(h){alert(h.message)}qa(h){h=h.isFocus;if("nwjs"===this.b){const e="nwjs"===this.b?nw.Window.get():null;h?e.focus():e.blur()}else h?window.focus():window.blur()}});"use strict";
async function U(h,e){e=e.type;let f=!0;0===e?f=await V():1===e&&(f=await W());t(h,"permission-result",{type:e,result:f})}async function V(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{return"granted"===await self.DeviceOrientationEvent.requestPermission()}catch(h){return console.warn("[Touch] Failed to request orientation permission: ",h),!1}}
async function W(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{return"granted"===await self.DeviceMotionEvent.requestPermission()}catch(h){return console.warn("[Touch] Failed to request motion permission: ",h),!1}}self.m.v(class extends self.F{constructor(h){super(h,"touch");G(this,"request-permission",e=>U(this,e))}});"use strict";
{function h(e){e.stopPropagation()}self.m.v(class extends self.Ea{constructor(e){super(e,"button")}ba(e,f){const k=document.createElement("input");var n=k;f.isCheckbox?(k.type="checkbox",n=document.createElement("label"),n.appendChild(k),n.appendChild(document.createTextNode("")),n.style.fontFamily="sans-serif",n.style.userSelect="none",n.style.webkitUserSelect="none",n.style.display="inline-block",n.style.color="black"):k.type="button";n.style.position="absolute";n.addEventListener("touchstart",
h);n.addEventListener("touchmove",h);n.addEventListener("touchend",h);n.addEventListener("mousedown",h);n.addEventListener("mouseup",h);n.addEventListener("keydown",h);n.addEventListener("keyup",h);k.addEventListener("click",()=>O(this,"click",e,{isChecked:k.checked}));f.id&&(k.id=f.id);this.G(n,f);return n}Ia(e){return"input"===e.tagName.toLowerCase()?e:e.firstChild}ha(e){return this.Ia(e)}G(e,f){const k=this.Ia(e);k.checked=f.isChecked;k.disabled=!f.isEnabled;e.title=f.title;e===k?k.value=f.text:
e.lastChild.textContent=f.text}})};
