import{S as y,i as $,s as b,k as f,a as w,l as u,m,h as i,c as x,p as l,O as D,b as _,D as v,n as g,o as M,z as B,A as C,B as E,g as I,d as k,C as q}from"../chunks/index.03f1c08d.js";function A(r){let e,s,t,a,o,d;return{c(){e=f("div"),s=w(),t=f("div"),a=f("a"),o=f("img"),this.h()},l(n){e=u(n,"DIV",{class:!0});var c=m(e);c.forEach(i),s=x(n),t=u(n,"DIV",{class:!0});var p=m(t);a=u(p,"A",{href:!0});var h=m(a);o=u(h,"IMG",{alt:!0,src:!0}),h.forEach(i),p.forEach(i),this.h()},h(){l(e,"class","post-container svelte-xu0wt9"),l(o,"alt","Buy me a coffee"),D(o.src,d="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=clivetran&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff")||l(o,"src",d),l(a,"href","https://www.buymeacoffee.com/clivetran"),l(t,"class","buy-me-a-coffee svelte-xu0wt9")},m(n,c){_(n,e,c),e.innerHTML=r[0],_(n,s,c),_(n,t,c),v(t,a),v(a,o)},p(n,[c]){c&1&&(e.innerHTML=n[0])},i:g,o:g,d(n){n&&i(e),n&&i(s),n&&i(t)}}}function F(r,e,s){let{data:t}=e,a="";return M(()=>{s(0,a=t)}),r.$$set=o=>{"data"in o&&s(1,t=o.data)},[a,t]}class H extends y{constructor(e){super(),$(this,e,F,A,b,{data:1})}}function L(r){let e,s;return e=new H({props:{data:r[0].post}}),{c(){B(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,a){E(e,t,a),s=!0},p(t,[a]){const o={};a&1&&(o.data=t[0].post),e.$set(o)},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){k(e.$$.fragment,t),s=!1},d(t){q(e,t)}}}function P(r,e,s){let{data:t}=e;return r.$$set=a=>{"data"in a&&s(0,t=a.data)},[t]}class T extends y{constructor(e){super(),$(this,e,P,L,b,{data:0})}}export{T as default};