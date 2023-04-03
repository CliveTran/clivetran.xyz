import{n as be,s as ot,o as ze,t as ce}from"../chunks/index.40c2ccfa.js";function it(e,a){return e==="/"||a==="ignore"?e:a==="never"?e.endsWith("/")?e.slice(0,-1):e:a==="always"&&!e.endsWith("/")?e+"/":e}function st(e){return e.split("%25").map(decodeURI).join("%25")}function lt(e){for(const a in e)e[a]=decodeURIComponent(e[a]);return e}const ct=["href","pathname","search","searchParams","toString","toJSON"];function ft(e,a){const i=new URL(e);for(const s of ct){let u=i[s];Object.defineProperty(i,s,{get(){return a(),u},enumerable:!0,configurable:!0})}return ut(i),i}function ut(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const dt="/__data.json";function pt(e){return e.replace(/\/$/,"")+dt}const K=[];function Re(e,a=be){let i;const s=new Set;function u(l){if(ot(e,l)&&(e=l,i)){const m=!K.length;for(const p of s)p[1](),K.push(p,e);if(m){for(let p=0;p<K.length;p+=2)K[p][0](K[p+1]);K.length=0}}}function d(l){u(l(e))}function w(l,m=be){const p=[l,m];return s.add(p),s.size===1&&(i=a(u)||be),l(e),()=>{s.delete(p),s.size===0&&i&&(i(),i=null)}}return{set:u,update:d,subscribe:w}}var Xe;const M=((Xe=globalThis.__sveltekit_yg0q8s)==null?void 0:Xe.base)??"";var Ze;const ht=((Ze=globalThis.__sveltekit_yg0q8s)==null?void 0:Ze.assets)??M,gt="1680537546167",Qe="sveltekit:snapshot",et="sveltekit:scroll",C="sveltekit:index",de={tap:1,hover:2,viewport:3,eager:4,off:-1};function Ge(e){let a=e.baseURI;if(!a){const i=e.getElementsByTagName("base");a=i.length?i[0].href:e.URL}return a}function te(){return{x:pageXOffset,y:pageYOffset}}function Y(e,a){return e.getAttribute(`data-sveltekit-${a}`)}const He={...de,"":de.hover};function tt(e){let a=e.assignedSlot??e.parentNode;return(a==null?void 0:a.nodeType)===11&&(a=a.host),a}function Be(e,a){for(;e&&e!==a;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=tt(e)}}function ve(e,a){let i;try{i=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const s=e instanceof SVGAElement?e.target.baseVal:e.target,u=!i||!!s||ue(i,a)||(e.getAttribute("rel")||"").split(/\s+/).includes("external")||e.hasAttribute("download");return{url:i,external:u,target:s}}function fe(e){let a=null,i=null,s=null,u=null,d=null,w=null,l=e;for(;l&&l!==document.documentElement;)s===null&&(s=Y(l,"preload-code")),u===null&&(u=Y(l,"preload-data")),a===null&&(a=Y(l,"keepfocus")),i===null&&(i=Y(l,"noscroll")),d===null&&(d=Y(l,"reload")),w===null&&(w=Y(l,"replacestate")),l=tt(l);return{preload_code:He[s??"off"],preload_data:He[u??"off"],keep_focus:a==="off"?!1:a===""?!0:null,noscroll:i==="off"?!1:i===""?!0:null,reload:d==="off"?!1:d===""?!0:null,replace_state:w==="off"?!1:w===""?!0:null}}function Je(e){const a=Re(e);let i=!0;function s(){i=!0,a.update(w=>w)}function u(w){i=!1,a.set(w)}function d(w){let l;return a.subscribe(m=>{(l===void 0||i&&m!==l)&&w(l=m)})}return{notify:s,set:u,subscribe:d}}function mt(){const{set:e,subscribe:a}=Re(!1);let i;async function s(){clearTimeout(i);const u=await fetch(`${ht}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(u.ok){const w=(await u.json()).version!==gt;return w&&(e(!0),clearTimeout(i)),w}else throw new Error(`Version check failed: ${u.status}`)}return{subscribe:a,check:s}}function ue(e,a){return e.origin!==location.origin||!e.pathname.startsWith(a)}function nt(e){try{return JSON.parse(sessionStorage[e])}catch{}}function Ke(e,a){const i=JSON.stringify(a);try{sessionStorage[e]=i}catch{}}function yt(...e){let a=5381;for(const i of e)if(typeof i=="string"){let s=i.length;for(;s;)a=a*33^i.charCodeAt(--s)}else if(ArrayBuffer.isView(i)){const s=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);let u=s.length;for(;u;)a=a*33^s[--u]}else throw new TypeError("value must be a string or TypedArray");return(a>>>0).toString(36)}const pe=window.fetch;window.fetch=(e,a)=>((e instanceof Request?e.method:(a==null?void 0:a.method)||"GET")!=="GET"&&ae.delete(Ae(e)),pe(e,a));const ae=new Map;function wt(e,a){const i=Ae(e,a),s=document.querySelector(i);if(s!=null&&s.textContent){const{body:u,...d}=JSON.parse(s.textContent),w=s.getAttribute("data-ttl");return w&&ae.set(i,{body:u,init:d,ttl:1e3*Number(w)}),Promise.resolve(new Response(u,d))}return pe(e,a)}function _t(e,a,i){if(ae.size>0){const s=Ae(e,i),u=ae.get(s);if(u){if(performance.now()<u.ttl&&["default","force-cache","only-if-cached",void 0].includes(i==null?void 0:i.cache))return new Response(u.body,u.init);ae.delete(s)}}return pe(a,i)}function Ae(e,a){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(a!=null&&a.headers||a!=null&&a.body){const u=[];a.headers&&u.push([...new Headers(a.headers)].join(",")),a.body&&(typeof a.body=="string"||ArrayBuffer.isView(a.body))&&u.push(a.body),s+=`[data-hash="${yt(...u)}"]`}return s}const bt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function vt(e){const a=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${kt(e).map(s=>{const u=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(u)return a.push({name:u[1],matcher:u[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(d)return a.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const w=s.split(/\[(.+?)\](?!\])/);return"/"+w.map((m,p)=>{if(p%2){if(m.startsWith("x+"))return Ee(String.fromCharCode(parseInt(m.slice(2),16)));if(m.startsWith("u+"))return Ee(String.fromCharCode(...m.slice(2).split("-").map(I=>parseInt(I,16))));const y=bt.exec(m);if(!y)throw new Error(`Invalid param: ${m}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,$,U,k,O]=y;return a.push({name:k,matcher:O,optional:!!$,rest:!!U,chained:U?p===1&&w[0]==="":!1}),U?"(.*?)":$?"([^/]*)?":"([^/]+?)"}return Ee(m)}).join("")}).join("")}/?$`),params:a}}function Et(e){return!/^\([^)]+\)$/.test(e)}function kt(e){return e.slice(1).split("/").filter(Et)}function St(e,a,i){const s={},u=e.slice(1);let d=0;for(let w=0;w<a.length;w+=1){const l=a[w],m=u[w-d];if(l.chained&&l.rest&&d){s[l.name]=u.slice(w-d,w+1).filter(p=>p).join("/"),d=0;continue}if(m===void 0){l.rest&&(s[l.name]="");continue}if(!l.matcher||i[l.matcher](m)){s[l.name]=m;const p=a[w+1],y=u[w+1];p&&!p.rest&&p.optional&&y&&(d=0);continue}if(l.optional&&l.chained){d++;continue}return}if(!d)return s}function Ee(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Rt({nodes:e,server_loads:a,dictionary:i,matchers:s}){const u=new Set(a);return Object.entries(i).map(([l,[m,p,y]])=>{const{pattern:$,params:U}=vt(l),k={id:l,exec:O=>{const I=$.exec(O);if(I)return St(I,U,s)},errors:[1,...y||[]].map(O=>e[O]),layouts:[0,...p||[]].map(w),leaf:d(m)};return k.errors.length=k.layouts.length=Math.max(k.errors.length,k.layouts.length),k});function d(l){const m=l<0;return m&&(l=~l),[m,e[l]]}function w(l){return l===void 0?l:[u.has(l),e[l]]}}let ne=class{constructor(a,i){this.status=a,typeof i=="string"?this.body={message:i}:i?this.body=i:this.body={message:`Error: ${a}`}}toString(){return JSON.stringify(this.body)}},Ye=class{constructor(a,i){this.status=a,this.location=i}};function At(e){e.client}const F={url:Je({}),page:Je({}),navigating:Re(null),updated:mt()};async function Lt(e){var a;for(const i in e)if(typeof((a=e[i])==null?void 0:a.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(e).map(async([s,u])=>[s,await u])));return e}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const It=-1,Ut=-2,Ot=-3,Pt=-4,Nt=-5,Tt=-6;function jt(e,a){if(typeof e=="number")return u(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const i=e,s=Array(i.length);function u(d,w=!1){if(d===It)return;if(d===Ot)return NaN;if(d===Pt)return 1/0;if(d===Nt)return-1/0;if(d===Tt)return-0;if(w)throw new Error("Invalid input");if(d in s)return s[d];const l=i[d];if(!l||typeof l!="object")s[d]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const m=l[0],p=a==null?void 0:a[m];if(p)return s[d]=p(u(l[1]));switch(m){case"Date":s[d]=new Date(l[1]);break;case"Set":const y=new Set;s[d]=y;for(let k=1;k<l.length;k+=1)y.add(u(l[k]));break;case"Map":const $=new Map;s[d]=$;for(let k=1;k<l.length;k+=2)$.set(u(l[k]),u(l[k+1]));break;case"RegExp":s[d]=new RegExp(l[1],l[2]);break;case"Object":s[d]=Object(l[1]);break;case"BigInt":s[d]=BigInt(l[1]);break;case"null":const U=Object.create(null);s[d]=U;for(let k=1;k<l.length;k+=2)U[l[k]]=u(l[k+1]);break;default:throw new Error(`Unknown type ${m}`)}}else{const m=new Array(l.length);s[d]=m;for(let p=0;p<l.length;p+=1){const y=l[p];y!==Ut&&(m[p]=u(y))}}else{const m={};s[d]=m;for(const p in l){const y=l[p];m[p]=u(y)}}return s[d]}return u(0)}function $t(e){return e.filter(a=>a!=null)}const B=nt(et)??{},ee=nt(Qe)??{};function ke(e){B[e]=te()}function xt(e,a){var Ve;const i=Rt(e),s=e.nodes[0],u=e.nodes[1];s(),u();const d=document.documentElement,w=[],l=[];let m=null;const p={before_navigate:[],after_navigate:[]};let y={branch:[],error:null,url:null},$=!1,U=!1,k=!0,O=!1,I=!1,W=!1,z=!1,V,T=(Ve=history.state)==null?void 0:Ve[C];T||(T=Date.now(),history.replaceState({...history.state,[C]:T},"",location.href));const he=B[T];he&&(history.scrollRestoration="manual",scrollTo(he.x,he.y));let G,Le,re;async function Ie(){re=re||Promise.resolve(),await re,re=null;const n=new URL(location.href),t=Z(n,!0);m=null,await Te(t,n,[])}function Ue(n){l.some(t=>t==null?void 0:t.snapshot)&&(ee[n]=l.map(t=>{var o;return(o=t==null?void 0:t.snapshot)==null?void 0:o.capture()}))}function Oe(n){var t;(t=ee[n])==null||t.forEach((o,r)=>{var f,c;(c=(f=l[r])==null?void 0:f.snapshot)==null||c.restore(o)})}function Pe(){ke(T),Ke(et,B),Ue(T),Ke(Qe,ee)}async function ge(n,{noScroll:t=!1,replaceState:o=!1,keepFocus:r=!1,state:f={},invalidateAll:c=!1},g,h){return typeof n=="string"&&(n=new URL(n,Ge(document))),le({url:n,scroll:t?te():null,keepfocus:r,redirect_chain:g,details:{state:f,replaceState:o},nav_token:h,accepted:()=>{c&&(z=!0)},blocked:()=>{},type:"goto"})}async function Ne(n){return m={id:n.id,promise:xe(n).then(t=>(t.type==="loaded"&&t.state.error&&(m=null),t))},m.promise}async function oe(...n){const o=i.filter(r=>n.some(f=>r.exec(f))).map(r=>Promise.all([...r.layouts,r.leaf].map(f=>f==null?void 0:f[1]())));await Promise.all(o)}async function Te(n,t,o,r,f,c={},g){var _,b,A;Le=c;let h=n&&await xe(n);if(!h){if(ue(t,M))return await J(t);h=await Ce(t,{id:null},await Q(new Error(`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(n==null?void 0:n.url)||t,Le!==c)return!1;if(h.type==="redirect")if(o.length>10||o.includes(t.pathname))h=await ie({status:500,error:await Q(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return ge(new URL(h.location,t).href,{},[...o,t.pathname],c),!1;else((_=h.props.page)==null?void 0:_.status)>=400&&await F.updated.check()&&await J(t);if(w.length=0,z=!1,O=!0,r&&(ke(r),Ue(r)),(b=h.props.page)!=null&&b.url&&h.props.page.url.pathname!==t.pathname&&(t.pathname=(A=h.props.page)==null?void 0:A.url.pathname),f&&f.details){const{details:E}=f,L=E.replaceState?0:1;if(E.state[C]=T+=L,history[E.replaceState?"replaceState":"pushState"](E.state,"",t),!E.replaceState){let R=T+1;for(;ee[R]||B[R];)delete ee[R],delete B[R],R+=1}}if(m=null,U?(y=h.state,h.props.page&&(h.props.page.url=t),V.$set(h.props)):je(h),f){const{scroll:E,keepfocus:L}=f,{activeElement:R}=document;if(await ce(),k){const P=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));E?scrollTo(E.x,E.y):P?P.scrollIntoView():scrollTo(0,0)}const v=document.activeElement!==R&&document.activeElement!==document.body;!L&&!v&&await Se()}else await ce();k=!0,h.props.page&&(G=h.props.page),g&&g(),O=!1}function je(n){var r;y=n.state;const t=document.querySelector("style[data-sveltekit]");t&&t.remove(),G=n.props.page,V=new e.root({target:a,props:{...n.props,stores:F,components:l},hydrate:!0}),Oe(T);const o={from:null,to:{params:y.params,route:{id:((r=y.route)==null?void 0:r.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};p.after_navigate.forEach(f=>f(o)),U=!0}async function X({url:n,params:t,branch:o,status:r,error:f,route:c,form:g}){let h="never";for(const R of o)(R==null?void 0:R.slash)!==void 0&&(h=R.slash);n.pathname=it(n.pathname,h),n.search=n.search;const _={type:"loaded",state:{url:n,params:t,branch:o,error:f,route:c},props:{constructors:$t(o).map(R=>R.node.component)}};g!==void 0&&(_.props.form=g);let b={},A=!G,E=0;for(let R=0;R<Math.max(o.length,y.branch.length);R+=1){const v=o[R],P=y.branch[R];(v==null?void 0:v.data)!==(P==null?void 0:P.data)&&(A=!0),v&&(b={...b,...v.data},A&&(_.props[`data_${E}`]=b),E+=1)}return(!y.url||n.href!==y.url.href||y.error!==f||g!==void 0&&g!==G.form||A)&&(_.props.page={error:f,params:t,route:{id:(c==null?void 0:c.id)??null},status:r,url:new URL(n),form:g??null,data:A?b:G.data}),_}async function me({loader:n,parent:t,url:o,params:r,route:f,server_data_node:c}){var b,A,E;let g=null;const h={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},_=await n();if((b=_.universal)!=null&&b.load){let L=function(...v){for(const P of v){const{href:D}=new URL(P,o);h.dependencies.add(D)}};const R={route:{get id(){return h.route=!0,f.id}},params:new Proxy(r,{get:(v,P)=>(h.params.add(P),v[P])}),data:(c==null?void 0:c.data)??null,url:ft(o,()=>{h.url=!0}),async fetch(v,P){let D;v instanceof Request?(D=v.url,P={body:v.method==="GET"||v.method==="HEAD"?void 0:await v.blob(),cache:v.cache,credentials:v.credentials,headers:v.headers,integrity:v.integrity,keepalive:v.keepalive,method:v.method,mode:v.mode,redirect:v.redirect,referrer:v.referrer,referrerPolicy:v.referrerPolicy,signal:v.signal,...P}):D=v;const q=new URL(D,o);return L(q.href),q.origin===o.origin&&(D=q.href.slice(o.origin.length)),U?_t(D,q.href,P):wt(D,P)},setHeaders:()=>{},depends:L,parent(){return h.parent=!0,t()}};g=await _.universal.load.call(null,R)??null,g=g?await Lt(g):null}return{node:_,loader:n,server:c,universal:(A=_.universal)!=null&&A.load?{type:"data",data:g,uses:h}:null,data:g??(c==null?void 0:c.data)??null,slash:((E=_.universal)==null?void 0:E.trailingSlash)??(c==null?void 0:c.slash)}}function $e(n,t,o,r,f){if(z)return!0;if(!r)return!1;if(r.parent&&n||r.route&&t||r.url&&o)return!0;for(const c of r.params)if(f[c]!==y.params[c])return!0;for(const c of r.dependencies)if(w.some(g=>g(new URL(c))))return!0;return!1}function ye(n,t){return(n==null?void 0:n.type)==="data"?n:(n==null?void 0:n.type)==="skip"?t??null:null}async function xe({id:n,invalidating:t,url:o,params:r,route:f}){if((m==null?void 0:m.id)===n)return m.promise;const{errors:c,layouts:g,leaf:h}=f,_=[...g,h];c.forEach(S=>S==null?void 0:S().catch(()=>{})),_.forEach(S=>S==null?void 0:S[1]().catch(()=>{}));let b=null;const A=y.url?n!==y.url.pathname+y.url.search:!1,E=y.route?f.id!==y.route.id:!1;let L=!1;const R=_.map((S,x)=>{var H;const N=y.branch[x],j=!!(S!=null&&S[0])&&((N==null?void 0:N.loader)!==S[1]||$e(L,E,A,(H=N.server)==null?void 0:H.uses,r));return j&&(L=!0),j});if(R.some(Boolean)){try{b=await We(o,R)}catch(S){return ie({status:S instanceof ne?S.status:500,error:await Q(S,{url:o,params:r,route:{id:f.id}}),url:o,route:f})}if(b.type==="redirect")return b}const v=b==null?void 0:b.nodes;let P=!1;const D=_.map(async(S,x)=>{var we;if(!S)return;const N=y.branch[x],j=v==null?void 0:v[x];if((!j||j.type==="skip")&&S[1]===(N==null?void 0:N.loader)&&!$e(P,E,A,(we=N.universal)==null?void 0:we.uses,r))return N;if(P=!0,(j==null?void 0:j.type)==="error")throw j;return me({loader:S[1],url:o,params:r,route:f,parent:async()=>{var Me;const Fe={};for(let _e=0;_e<x;_e+=1)Object.assign(Fe,(Me=await D[_e])==null?void 0:Me.data);return Fe},server_data_node:ye(j===void 0&&S[0]?{type:"skip"}:j??null,S[0]?N==null?void 0:N.server:void 0)})});for(const S of D)S.catch(()=>{});const q=[];for(let S=0;S<_.length;S+=1)if(_[S])try{q.push(await D[S])}catch(x){if(x instanceof Ye)return{type:"redirect",location:x.location};let N=500,j;if(v!=null&&v.includes(x))N=x.status??N,j=x.error;else if(x instanceof ne)N=x.status,j=x.body;else{if(await F.updated.check())return await J(o);j=await Q(x,{params:r,url:o,route:{id:f.id}})}const H=await De(S,q,c);return H?await X({url:o,params:r,branch:q.slice(0,H.idx).concat(H.node),status:N,error:j,route:f}):await Ce(o,{id:f.id},j,N)}else q.push(void 0);return await X({url:o,params:r,branch:q,status:200,error:null,route:f,form:t?void 0:null})}async function De(n,t,o){for(;n--;)if(o[n]){let r=n;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await o[n](),loader:o[n],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:n,error:t,url:o,route:r}){const f={};let c=null;if(e.server_loads[0]===0)try{const b=await We(o,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;c=b.nodes[0]??null}catch{(o.origin!==location.origin||o.pathname!==location.pathname||$)&&await J(o)}const h=await me({loader:s,url:o,params:f,route:r,parent:()=>Promise.resolve({}),server_data_node:ye(c)}),_={node:await u(),loader:u,universal:null,server:null,data:null};return await X({url:o,params:f,branch:[h,_],status:n,error:t,route:null})}function Z(n,t){if(ue(n,M))return;const o=se(n);for(const r of i){const f=r.exec(o);if(f)return{id:n.pathname+n.search,invalidating:t,route:r,params:lt(f),url:n}}}function se(n){return st(n.pathname.slice(M.length)||"/")}function qe({url:n,type:t,intent:o,delta:r}){var h,_;let f=!1;const c={from:{params:y.params,route:{id:((h=y.route)==null?void 0:h.id)??null},url:y.url},to:{params:(o==null?void 0:o.params)??null,route:{id:((_=o==null?void 0:o.route)==null?void 0:_.id)??null},url:n},willUnload:!o,type:t};r!==void 0&&(c.delta=r);const g={...c,cancel:()=>{f=!0}};return I||p.before_navigate.forEach(b=>b(g)),f?null:c}async function le({url:n,scroll:t,keepfocus:o,redirect_chain:r,details:f,type:c,delta:g,nav_token:h,accepted:_,blocked:b}){const A=Z(n,!1),E=qe({url:n,type:c,delta:g,intent:A});if(!E){b();return}const L=T;_(),I=!0,U&&F.navigating.set(E),await Te(A,n,r,L,{scroll:t,keepfocus:o,details:f},h,()=>{I=!1,p.after_navigate.forEach(R=>R(E)),F.navigating.set(null)})}async function Ce(n,t,o,r){return n.origin===location.origin&&n.pathname===location.pathname&&!$?await ie({status:r,error:o,url:n,route:t}):await J(n)}function J(n){return location.href=n.href,new Promise(()=>{})}function rt(){let n;d.addEventListener("mousemove",c=>{const g=c.target;clearTimeout(n),n=setTimeout(()=>{r(g,2)},20)});function t(c){r(c.composedPath()[0],1)}d.addEventListener("mousedown",t),d.addEventListener("touchstart",t,{passive:!0});const o=new IntersectionObserver(c=>{for(const g of c)g.isIntersecting&&(oe(se(new URL(g.target.href))),o.unobserve(g.target))},{threshold:0});function r(c,g){const h=Be(c,d);if(!h)return;const{url:_,external:b}=ve(h,M);if(b)return;const A=fe(h);if(!A.reload)if(g<=A.preload_data){const E=Z(_,!1);E&&Ne(E)}else g<=A.preload_code&&oe(se(_))}function f(){o.disconnect();for(const c of d.querySelectorAll("a")){const{url:g,external:h}=ve(c,M);if(h)continue;const _=fe(c);_.reload||(_.preload_code===de.viewport&&o.observe(c),_.preload_code===de.eager&&oe(se(g)))}}p.after_navigate.push(f),f()}function Q(n,t){return n instanceof ne?n.body:e.hooks.handleError({error:n,event:t})??{message:t.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:n=>{ze(()=>(p.after_navigate.push(n),()=>{const t=p.after_navigate.indexOf(n);p.after_navigate.splice(t,1)}))},before_navigate:n=>{ze(()=>(p.before_navigate.push(n),()=>{const t=p.before_navigate.indexOf(n);p.before_navigate.splice(t,1)}))},disable_scroll_handling:()=>{(O||!U)&&(k=!1)},goto:(n,t={})=>ge(n,t,[]),invalidate:n=>{if(typeof n=="function")w.push(n);else{const{href:t}=new URL(n,location.href);w.push(o=>o.href===t)}return Ie()},invalidateAll:()=>(z=!0,Ie()),preload_data:async n=>{const t=new URL(n,Ge(document)),o=Z(t,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${t}`);await Ne(o)},preload_code:oe,apply_action:async n=>{if(n.type==="error"){const t=new URL(location.href),{branch:o,route:r}=y;if(!r)return;const f=await De(y.branch.length,o,r.errors);if(f){const c=await X({url:t,params:y.params,branch:o.slice(0,f.idx).concat(f.node),status:n.status??500,error:n.error,route:r});y=c.state,V.$set(c.props),ce().then(Se)}}else n.type==="redirect"?ge(n.location,{invalidateAll:!0},[]):(V.$set({form:null,page:{...G,form:n.data,status:n.status}}),await ce(),V.$set({form:n.data}),n.type==="success"&&Se())},_start_router:()=>{var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{var r;let o=!1;if(Pe(),!I){const f={from:{params:y.params,route:{id:((r=y.route)==null?void 0:r.id)??null},url:y.url},to:null,willUnload:!0,type:"leave",cancel:()=>o=!0};p.before_navigate.forEach(c=>c(f))}o?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Pe()}),(n=navigator.connection)!=null&&n.saveData||rt(),d.addEventListener("click",t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const o=Be(t.composedPath()[0],d);if(!o)return;const{url:r,external:f,target:c}=ve(o,M);if(!r)return;if(c==="_parent"||c==="_top"){if(window.parent!==window)return}else if(c&&c!=="_self")return;const g=fe(o);if(!(o instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:"))return;if(f||g.reload){qe({url:r,type:"link"})?I=!0:t.preventDefault();return}const[_,b]=r.href.split("#");if(b!==void 0&&_===location.href.split("#")[0]){W=!0,ke(T),y.url=r,F.page.set({...G,url:r}),F.page.notify();return}le({url:r,scroll:g.noscroll?te():null,keepfocus:g.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:g.replace_state??r.href===location.href},accepted:()=>t.preventDefault(),blocked:()=>t.preventDefault(),type:"link"})}),d.addEventListener("submit",t=>{if(t.defaultPrevented)return;const o=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if(((r==null?void 0:r.formMethod)||o.method)!=="get")return;const c=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||o.action);if(ue(c,M))return;const g=t.target,{keep_focus:h,noscroll:_,reload:b,replace_state:A}=fe(g);if(b)return;t.preventDefault(),t.stopPropagation();const E=new FormData(g),L=r==null?void 0:r.getAttribute("name");L&&E.append(L,(r==null?void 0:r.getAttribute("value"))??""),c.search=new URLSearchParams(E).toString(),le({url:c,scroll:_?te():null,keepfocus:h??!1,redirect_chain:[],details:{state:{},replaceState:A??c.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async t=>{var o;if((o=t.state)!=null&&o[C]){if(t.state[C]===T)return;const r=B[t.state[C]];if(y.url.href.split("#")[0]===location.href.split("#")[0]){B[T]=te(),T=t.state[C],scrollTo(r.x,r.y);return}const f=t.state[C]-T;let c=!1;await le({url:new URL(location.href),scroll:r,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{T=t.state[C]},blocked:()=>{history.go(-f),c=!0},type:"popstate",delta:f}),c||Oe(T)}}),addEventListener("hashchange",()=>{W&&(W=!1,history.replaceState({...history.state,[C]:++T},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&F.navigating.set(null)})},_hydrate:async({status:n=200,error:t,node_ids:o,params:r,route:f,data:c,form:g})=>{$=!0;const h=new URL(location.href);({params:r={},route:f={id:null}}=Z(h,!1)||{});let _;try{const b=o.map(async(A,E)=>{const L=c[E];return L!=null&&L.uses&&(L.uses=at(L.uses)),me({loader:e.nodes[A],url:h,params:r,route:f,parent:async()=>{const R={};for(let v=0;v<E;v+=1)Object.assign(R,(await b[v]).data);return R},server_data_node:ye(L)})});_=await X({url:h,params:r,branch:await Promise.all(b),status:n,error:t,form:g,route:i.find(({id:A})=>A===f.id)??null})}catch(b){if(b instanceof Ye){await J(new URL(b.location,location.href));return}_=await ie({status:b instanceof ne?b.status:500,error:await Q(b,{url:h,params:r,route:f}),url:h,route:f})}je(_)}}}async function We(e,a){const i=new URL(e);i.pathname=pt(e.pathname),i.searchParams.append("x-sveltekit-invalidated",a.map(u=>u?"1":"").join("_"));const s=await pe(i.href);if(!s.ok)throw new ne(s.status,await s.json());return new Promise(async u=>{var y;const d=new Map,w=s.body.getReader(),l=new TextDecoder;function m($){return jt($,{Promise:U=>new Promise((k,O)=>{d.set(U,{fulfil:k,reject:O})})})}let p="";for(;;){const{done:$,value:U}=await w.read();if($&&!p)break;for(p+=!U&&p?`
`:l.decode(U);;){const k=p.indexOf(`
`);if(k===-1)break;const O=JSON.parse(p.slice(0,k));if(p=p.slice(k+1),O.type==="redirect")return u(O);if(O.type==="data")(y=O.nodes)==null||y.forEach(I=>{(I==null?void 0:I.type)==="data"&&(I.uses=at(I.uses),I.data=m(I.data))}),u(O);else if(O.type==="chunk"){const{id:I,data:W,error:z}=O,V=d.get(I);d.delete(I),z?V.reject(m(z)):V.fulfil(m(W))}}}})}function at(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url)}}function Se(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const a=document.body,i=a.getAttribute("tabindex");return a.tabIndex=-1,a.focus({preventScroll:!0}),i!==null?a.setAttribute("tabindex",i):a.removeAttribute("tabindex"),new Promise(s=>{setTimeout(()=>{var u;s((u=getSelection())==null?void 0:u.removeAllRanges())})})}}async function Vt(e,a,i){const s=xt(e,a);At({client:s}),i?await s._hydrate(i):s.goto(location.href,{replaceState:!0}),s._start_router()}export{Vt as start};
