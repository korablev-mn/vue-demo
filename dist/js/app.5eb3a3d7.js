(function(t){function e(e){for(var r,o,a=e[0],i=e[1],u=e[2],l=0,b=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);d&&d(e);while(b.length)b.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},c={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-demo/dist/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var d=i;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0b9e":function(t,e,n){},"0bd2":function(t,e,n){"use strict";n("87ad")},"11de":function(t,e,n){"use strict";n("c480")},"1e66":function(t,e,n){"use strict";n("cff9")},2247:function(t,e,n){"use strict";n("cf4f")},"230b":function(t,e,n){"use strict";n("d081")},2613:function(t,e,n){},"2ce3":function(t,e,n){"use strict";n("4249")},3273:function(t,e,n){},"3bef":function(t,e,n){},"3ce5":function(t,e,n){},"3cf6":function(t,e,n){"use strict";n("65cf")},4249:function(t,e,n){},4375:function(t,e,n){"use strict";n("d338")},"4f8c":function(t,e,n){},5033:function(t){t.exports=JSON.parse('[{"id":0,"avatar":"https://picsum.photos/300/300","username":"One","title":"1"},{"id":1,"avatar":"https://picsum.photos/300/300","username":"One 2","title":"2"},{"id":2,"avatar":"https://picsum.photos/300/300","username":"Two","title":"2"},{"id":3,"avatar":"https://picsum.photos/300/300","username":"Three3","title":"3"},{"id":4,"avatar":"https://picsum.photos/300/300","username":"Three4","title":"4"},{"id":5,"avatar":"https://picsum.photos/300/300","username":"Three5","title":"5"},{"id":6,"avatar":"https://picsum.photos/300/300","username":"Three4","title":"6"},{"id":7,"avatar":"https://picsum.photos/300/300","username":"Three5","title":"7"},{"id":8,"avatar":"https://picsum.photos/300/300","username":"Three4","title":"8"},{"id":9,"avatar":"https://picsum.photos/300/300","username":"Three5","title":"9"},{"id":10,"avatar":"https://picsum.photos/300/300","username":"Three4","title":"10"},{"id":11,"avatar":"https://picsum.photos/300/300","username":"Three5","title":"11"}]')},"56d7":function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"home",(function(){return U})),n.d(r,"exit",(function(){return R})),n.d(r,"logo",(function(){return Y})),n.d(r,"triangle",(function(){return rt})),n.d(r,"star",(function(){return dt})),n.d(r,"forks",(function(){return Ot})),n.d(r,"close",(function(){return Lt}));var c={};n.r(c),n.d(c,"getTrendings",(function(){return Ne}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("7a23");function o(t,e,n,r,c,o){var a=Object(s["B"])("router-view");return Object(s["t"])(),Object(s["d"])(a)}var a={},i=(n("11de"),n("6b0d")),u=n.n(i);const d=u()(a,[["render",o]]);var l=d,b=n("6c02"),f={class:"heading"},p={class:"topline"},j={class:"menu"},v={class:"icon mr-8 mb-6"},O={class:"ava mr-8"},m={class:"icon-exit"},h={class:"stories"};function g(t,e,n,r,c,o){var a=Object(s["B"])("icon"),i=Object(s["B"])("avatar"),u=Object(s["B"])("story-user-item"),d=Object(s["B"])("heading"),l=Object(s["B"])("posts");return Object(s["t"])(),Object(s["f"])("div",f,[Object(s["i"])(d,null,{headline:Object(s["H"])((function(){return[Object(s["g"])("div",p,[Object(s["g"])("div",null,[Object(s["i"])(a,{name:"logo",class:"items"})]),Object(s["g"])("div",j,[Object(s["g"])("div",v,[Object(s["i"])(a,{name:"home",class:"items"})]),Object(s["g"])("div",O,[Object(s["i"])(i,{url:"https://picsum.photos/300/300",size:38})]),Object(s["g"])("div",m,[Object(s["i"])(a,{name:"exit",class:"items"})])])])]})),content:Object(s["H"])((function(){return[Object(s["g"])("ul",h,[(Object(s["t"])(!0),Object(s["f"])(s["a"],null,Object(s["z"])(c.items,(function(t){return Object(s["t"])(),Object(s["f"])("li",{key:t.id,class:"stories-item mr-8"},[Object(s["i"])(u,{class:"story-user-item",avatar:t.owner.avatar_url,username:t.owner.login,onOnPress:function(e){return o.handlePress(t.id)}},null,8,["avatar","username","onOnPress"])])})),128))])]})),_:1}),Object(s["i"])(l)])}var C=n("1da1"),_=(n("96cf"),{class:"c-heading"}),w={class:"x-container"},L={class:"headline"},y={key:0,class:"content"};function B(t,e,n,r,c,o){return Object(s["t"])(),Object(s["f"])("div",_,[Object(s["g"])("div",w,[Object(s["g"])("div",L,[Object(s["A"])(t.$slots,"headline",{},void 0,!0)]),t.$slots.content?(Object(s["t"])(),Object(s["f"])("div",y,[Object(s["A"])(t.$slots,"content",{},void 0,!0)])):Object(s["e"])("",!0)])])}var x={name:"Head"};n("dee6");const S=u()(x,[["render",B],["__scopeId","data-v-3329f024"]]);var k=S;n("b0c0");function H(t,e,n,r,c,o){return Object(s["t"])(),Object(s["d"])(Object(s["C"])(n.name))}var T=n("5530"),I=(n("caad"),n("2532"),n("b64b"),{preserveAspectRatio:"none",viewBox:"0 0 24 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"}),M=Object(s["g"])("path",{d:"M10.0692 1.06704C11.1853 0.128491 12.8147 0.128491 13.9308 1.06704L22.9308 8.63522C23.6087 9.20524 24 10.0456 24 10.9313V23.5C24 24.6046 23.1046 25.5 22 25.5H16.5C15.3954 25.5 14.5 24.6046 14.5 23.5V16.5H9.5V23.5C9.5 24.6046 8.60457 25.5 7.5 25.5H2C0.895431 25.5 0 24.6046 0 23.5V10.9313C0 10.0456 0.391346 9.20524 1.0692 8.63522L10.0692 1.06704Z",fill:"currentColor"},null,-1),P=[M];function V(t,e){return Object(s["t"])(),Object(s["f"])("svg",I,P)}const z={},J=u()(z,[["render",V]]);var U=J,$={preserveAspectRatio:"none",viewBox:"0 0 24 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Z=Object(s["g"])("path",{d:"M13 1.44273V9.125L13.0007 9.75621L22.3025 9.755L20.1495 7.60032C19.8167 7.26743 19.7865 6.7466 20.0589 6.37963L20.1497 6.2745C20.4826 5.94172 21.0034 5.91155 21.3704 6.18393L21.4755 6.27472L25.2213 10.0218C25.5538 10.3544 25.5842 10.8746 25.3125 11.2416L25.2219 11.3467L21.4762 15.101C21.1105 15.4676 20.5169 15.4683 20.1503 15.1026C19.8171 14.7701 19.7863 14.2493 20.0582 13.882L20.1488 13.7767L22.29 11.63L13.0007 11.6312L13 20.0625C13 20.6455 12.4735 21.0871 11.8994 20.9857L1.27444 19.1091C0.826512 19.03 0.5 18.6408 0.5 18.1859V3.18752C0.5 2.72839 0.832518 2.33681 1.28558 2.26241L11.9106 0.517622C12.4813 0.423892 13 0.864318 13 1.44273ZM8.62769 10.375C7.93585 10.375 7.375 10.9359 7.375 11.6277C7.375 12.3196 7.93585 12.8804 8.62769 12.8804C9.31953 12.8804 9.88037 12.3196 9.88037 11.6277C9.88037 10.9359 9.31953 10.375 8.62769 10.375ZM14.25 19.1266L15.2064 19.1268L15.3338 19.1183C15.7919 19.056 16.1447 18.663 16.1439 18.1878L16.135 12.875H14.25V19.1266ZM14.2525 8.50002L14.25 6.9067V2.25002L15.1816 2.25002C15.6556 2.25002 16.0476 2.60192 16.1103 3.05891L16.1191 3.18597L16.1275 8.50002H14.2525Z",fill:"currentColor"},null,-1),A=[Z];function E(t,e){return Object(s["t"])(),Object(s["f"])("svg",$,A)}const F={},N=u()(F,[["render",E]]);var R=N,q={class:"logo"};function D(t,e){return Object(s["t"])(),Object(s["f"])("h1",q,"Gitogram /")}n("0bd2");const K={},G=u()(K,[["render",D],["__scopeId","data-v-3ad5453e"]]);var Y=G,Q={width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},W=Object(s["g"])("path",{d:"M9.79959 5.26034C9.51774 5.56387 9.04319 5.58144 8.73966 5.29959L5 1.77348L1.26033 5.29959C0.956802 5.58144 0.482254 5.56387 0.200401 5.26034C-0.0814505 4.9568 -0.0638752 4.48225 0.239658 4.2004L4.48966 0.200402C4.77742 -0.0668049 5.22257 -0.0668049 5.51033 0.200402L9.76034 4.2004C10.0639 4.48225 10.0814 4.9568 9.79959 5.26034Z",fill:"#212121"},null,-1),X=[W];function tt(t,e){return Object(s["t"])(),Object(s["f"])("svg",Q,X)}const et={},nt=u()(et,[["render",tt]]);var rt=nt,ct={preserveAspectRatio:"none",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},st=Object(s["g"])("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.86393 0.25C8.00395 0.24991 8.14119 0.289014 8.26013 0.362887C8.37907 0.43676 8.47495 0.542452 8.53693 0.668L10.4189 4.483L14.6289 5.095C14.7674 5.11511 14.8975 5.17355 15.0044 5.26372C15.1114 5.35388 15.1911 5.47218 15.2343 5.60523C15.2776 5.73829 15.2828 5.8808 15.2493 6.01665C15.2159 6.1525 15.1451 6.27628 15.0449 6.374L11.9989 9.344L12.7179 13.536C12.7416 13.6739 12.7263 13.8157 12.6736 13.9454C12.6209 14.0751 12.533 14.1874 12.4198 14.2697C12.3066 14.352 12.1726 14.401 12.033 14.4111C11.8934 14.4212 11.7538 14.3921 11.6299 14.327L7.86393 12.347L4.09793 14.327C3.97412 14.392 3.8346 14.4211 3.69512 14.411C3.55565 14.4009 3.42177 14.352 3.30861 14.2699C3.19546 14.1877 3.10752 14.0755 3.05475 13.946C3.00197 13.8165 2.98644 13.6749 3.00993 13.537L3.72993 9.343L0.681934 6.374C0.5815 6.27632 0.510433 6.15247 0.476786 6.01647C0.443138 5.88047 0.448256 5.73777 0.491558 5.60453C0.534861 5.47129 0.614617 5.35284 0.72179 5.26261C0.828962 5.17238 0.959262 5.11397 1.09793 5.094L5.30793 4.483L7.19093 0.668C7.25291 0.542452 7.3488 0.43676 7.46774 0.362887C7.58668 0.289014 7.72392 0.24991 7.86393 0.25ZM7.86393 2.695L6.47893 5.5C6.42515 5.6089 6.34572 5.70311 6.24748 5.77453C6.14923 5.84595 6.03511 5.89244 5.91493 5.91L2.81793 6.36L5.05793 8.544C5.14508 8.62886 5.21029 8.73365 5.24792 8.84933C5.28555 8.96501 5.29448 9.0881 5.27393 9.208L4.74593 12.292L7.51493 10.836C7.62256 10.7794 7.74234 10.7499 7.86393 10.7499C7.98553 10.7499 8.1053 10.7794 8.21293 10.836L10.9829 12.292L10.4529 9.208C10.4324 9.0881 10.4413 8.96501 10.4789 8.84933C10.5166 8.73365 10.5818 8.62886 10.6689 8.544L12.9089 6.361L9.81293 5.911C9.69275 5.89344 9.57863 5.84695 9.48039 5.77553C9.38214 5.70411 9.30272 5.6099 9.24893 5.501L7.86393 2.694V2.695Z",fill:"currentColor"},null,-1),ot=[st];function at(t,e){return Object(s["t"])(),Object(s["f"])("svg",ct,ot)}const it={},ut=u()(it,[["render",at]]);var dt=ut,lt={width:"12",height:"15",viewBox:"0 0 12 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},bt=Object(s["g"])("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3 2.25001C3 2.44892 2.92099 2.63969 2.78033 2.78034C2.63968 2.92099 2.44892 3.00001 2.25 3.00001C2.05109 3.00001 1.86033 2.92099 1.71967 2.78034C1.57902 2.63969 1.5 2.44892 1.5 2.25001C1.5 2.05109 1.57902 1.86033 1.71967 1.71968C1.86033 1.57902 2.05109 1.50001 2.25 1.50001C2.44892 1.50001 2.63968 1.57902 2.78033 1.71968C2.92099 1.86033 3 2.05109 3 2.25001ZM3 4.37201C3.50042 4.19509 3.92217 3.84696 4.19073 3.38915C4.45929 2.93134 4.55735 2.39333 4.4676 1.87021C4.37785 1.34709 4.10605 0.87253 3.70025 0.53043C3.29445 0.18832 2.78077 0.00069046 2.25 0.00069046C1.71924 0.00069046 1.20556 0.18832 0.799762 0.53043C0.393962 0.87253 0.122161 1.34709 0.0324114 1.87021C-0.0573486 2.39333 0.0407214 2.93134 0.309281 3.38915C0.577841 3.84696 0.999591 4.19509 1.5 4.37201V5.25001C1.5 5.84674 1.73706 6.41904 2.15901 6.841C2.58097 7.26295 3.15327 7.50001 3.75 7.50001H5.25V9.628C4.74932 9.8049 4.3273 10.1532 4.05855 10.6112C3.78981 11.0692 3.69164 11.6075 3.78139 12.1309C3.87115 12.6543 4.14306 13.1291 4.54905 13.4714C4.95504 13.8136 5.46897 14.0014 6 14.0014C6.53104 14.0014 7.04497 13.8136 7.45096 13.4714C7.85695 13.1291 8.1289 12.6543 8.2186 12.1309C8.3084 11.6075 8.2102 11.0692 7.94146 10.6112C7.67271 10.1532 7.25069 9.8049 6.75 9.628V7.50001H8.25C8.8467 7.50001 9.419 7.26295 9.841 6.841C10.263 6.41904 10.5 5.84674 10.5 5.25001V4.37201C11.0004 4.19509 11.4222 3.84696 11.6907 3.38915C11.9593 2.93134 12.0574 2.39333 11.9676 1.87021C11.8778 1.34709 11.6061 0.87253 11.2002 0.53043C10.7944 0.18832 10.2808 0.00069046 9.75 0.00069046C9.2192 0.00069046 8.7056 0.18832 8.2998 0.53043C7.89396 0.87253 7.62216 1.34709 7.53241 1.87021C7.44265 2.39333 7.54072 2.93134 7.80928 3.38915C8.0778 3.84696 8.4996 4.19509 9 4.37201V5.25001C9 5.44892 8.921 5.63969 8.7803 5.78034C8.6397 5.92099 8.4489 6.00001 8.25 6.00001H3.75C3.55109 6.00001 3.36033 5.92099 3.21967 5.78034C3.07902 5.63969 3 5.44892 3 5.25001V4.37201ZM6.75 11.75C6.75 11.9489 6.67099 12.1397 6.53033 12.2803C6.38968 12.421 6.19892 12.5 6 12.5C5.80109 12.5 5.61033 12.421 5.46967 12.2803C5.32902 12.1397 5.25 11.9489 5.25 11.75C5.25 11.5511 5.32902 11.3603 5.46967 11.2197C5.61033 11.079 5.80109 11 6 11C6.19892 11 6.38968 11.079 6.53033 11.2197C6.67099 11.3603 6.75 11.5511 6.75 11.75ZM9.75 3.00001C9.9489 3.00001 10.1397 2.92099 10.2803 2.78034C10.421 2.63969 10.5 2.44892 10.5 2.25001C10.5 2.05109 10.421 1.86033 10.2803 1.71968C10.1397 1.57902 9.9489 1.50001 9.75 1.50001C9.5511 1.50001 9.3603 1.57902 9.2197 1.71968C9.079 1.86033 9 2.05109 9 2.25001C9 2.44892 9.079 2.63969 9.2197 2.78034C9.3603 2.92099 9.5511 3.00001 9.75 3.00001Z",fill:"#000"},null,-1),ft=[bt];function pt(t,e){return Object(s["t"])(),Object(s["f"])("svg",lt,ft)}const jt={},vt=u()(jt,[["render",pt]]);var Ot=vt,mt={width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ht=Object(s["g"])("path",{d:"M0.899054 0.887401L1.01256 0.762563C1.65578 0.119347 2.67513 0.0815103 3.3626 0.649054L3.48744 0.762563L11.75 9.025L20.0126 0.762563C20.696 0.0791457 21.804 0.0791457 22.4874 0.762563C23.1709 1.44598 23.1709 2.55402 22.4874 3.23744L14.225 11.5L22.4874 19.7626C23.1307 20.4058 23.1685 21.4251 22.6009 22.1126L22.4874 22.2374C21.8442 22.8807 20.8249 22.9185 20.1374 22.3509L20.0126 22.2374L11.75 13.975L3.48744 22.2374C2.80402 22.9209 1.69598 22.9209 1.01256 22.2374C0.329146 21.554 0.329146 20.446 1.01256 19.7626L9.275 11.5L1.01256 3.23744C0.369347 2.59422 0.33151 1.57487 0.899054 0.887401L1.01256 0.762563L0.899054 0.887401Z",fill:"white"},null,-1),gt=[ht];function Ct(t,e){return Object(s["t"])(),Object(s["f"])("svg",mt,gt)}const _t={},wt=u()(_t,[["render",Ct]]);var Lt=wt,yt={name:"Icon",components:Object(T["a"])({},r),props:{name:{type:String,required:!0,valiator:function(t){return Object.keys(r).includes(t)}}}};const Bt=u()(yt,[["render",H]]);var xt=Bt,St={class:"username"};function kt(t,e,n,r,c,o){var a=Object(s["B"])("avatar");return Object(s["t"])(),Object(s["f"])("button",{class:"c-story-user-item",onClick:e[0]||(e[0]=function(e){return t.$emit("onPress")})},[Object(s["i"])(a,{url:n.avatar,size:92,border:"red"},null,8,["url"]),Object(s["g"])("div",St,Object(s["E"])(n.username),1)])}var Ht=["src"];function Tt(t,e,n,r,c,o){return Object(s["t"])(),Object(s["f"])("div",{class:Object(s["o"])([{active:c.hover},"avatar"]),style:Object(s["p"])([r.Style,{width:n.size+"px",height:n.size+"px"}]),onMouseover:e[0]||(e[0]=function(t){return c.hover=!0}),onMouseleave:e[1]||(e[1]=function(t){return c.hover=!1})},[Object(s["g"])("img",{src:n.url,class:"img",alt:"username "},null,8,Ht)],38)}n("a9e3");var It={name:"Avatar",props:{url:{type:String,default:"https://picsum.photos/300/300"},size:{type:Number,default:37},border:{type:String,default:"none"}},data:function(){return{hover:!1}},setup:function(t){var e={red:{borderColor:"#A6328D"},blue:{borderColor:"#0000ff"},none:{border:"none"}},n=e[t.border];return{Style:n}}};n("762f");const Mt=u()(It,[["render",Tt],["__scopeId","data-v-d3121960"]]);var Pt=Mt,Vt={name:"StoryUserItem",components:{avatar:Pt},props:{avatar:{type:String,required:!0},username:{type:String,required:!0}},setup:function(){return{}},methods:{onPress:function(){this.$emit("handlePress")}}};n("1e66");const zt=u()(Vt,[["render",kt],["__scopeId","data-v-11b16a9a"]]);var Jt=zt,Ut=n("5033"),$t={class:"posts-container"},Zt={class:"posts__list"};function At(t,e,n,r,c,o){var a=Object(s["B"])("card"),i=Object(s["B"])("post");return Object(s["t"])(),Object(s["f"])("div",$t,[Object(s["g"])("ul",Zt,[(Object(s["t"])(!0),Object(s["f"])(s["a"],null,Object(s["z"])(c.posts,(function(t){return Object(s["t"])(),Object(s["f"])("li",{key:t.id,class:"posts__item"},[Object(s["i"])(i,{Url:t.avatar,username:t.username},{card:Object(s["H"])((function(){return[Object(s["i"])(a,{title:t.title},null,8,["title"])]})),_:2},1032,["Url","username"])])})),128))])])}var Et=function(t){return Object(s["w"])("data-v-51c0d8cc"),t=t(),Object(s["u"])(),t},Ft={class:"post"},Nt={class:"post__user mt-16 mb-16 ml-12"},Rt={class:"post__card"},qt={key:0},Dt={class:"post__comment comment__list mb-16"},Kt=Et((function(){return Object(s["g"])("p",null,[Object(s["g"])("span",{class:"comment_user mb-16"},"User Name"),Object(s["h"])(" KJNKNKLBLJHBLJHBLBJHBLHVKUHVKHVLHBLJBHIUHBLJHVLJHBLIJBJHBJHVBMHVMGHV fndfndfndfhndfhn dfn dfhndfhn fbsfbsbsfgbsfgb ")],-1)})),Gt=[Kt];function Yt(t,e,n,r,c,o){var a=Object(s["B"])("user"),i=Object(s["B"])("toggler");return Object(s["t"])(),Object(s["f"])("div",Ft,[Object(s["g"])("div",Nt,[Object(s["i"])(a,{src:n.Url,name:"username"},null,8,["src"])]),Object(s["g"])("div",Rt,[Object(s["A"])(t.$slots,"card",{},void 0,!0)]),Object(s["i"])(i,{onOnToggle:o.toggleClick},null,8,["onOnToggle"]),c.isShow?(Object(s["t"])(),Object(s["f"])("div",qt,[Object(s["g"])("ul",Dt,[(Object(s["t"])(),Object(s["f"])(s["a"],null,Object(s["z"])(5,(function(t){return Object(s["g"])("li",{class:"commetn__item",key:t},Gt)})),64))])])):Object(s["e"])("",!0)])}var Qt={class:"user"},Wt={class:"user__name mb-4"},Xt={key:0,class:"user__type"};function te(t,e,n,r,c,o){var a=Object(s["B"])("Avatar");return Object(s["t"])(),Object(s["f"])("div",Qt,[Object(s["i"])(a,{class:"user__avatar mr-12",url:n.src,size:o.getSize(n.size)},null,8,["url","size"]),Object(s["g"])("div",null,[Object(s["g"])("div",Wt,Object(s["E"])(n.name),1),n.type?(Object(s["t"])(),Object(s["f"])("div",Xt,Object(s["E"])(n.type),1)):Object(s["e"])("",!0)])])}var ee={name:"User",components:{Avatar:Pt},props:{src:{type:String,default:"https://picsum.photos/300/300"},name:{type:String,default:"John Doe"},type:{type:String,default:""},size:{type:String,default:"s"}},methods:{getSize:function(t){return"l"===t?92:"m"===t?52:37}}};n("fcfe");const ne=u()(ee,[["render",te],["__scopeId","data-v-533f8f50"]]);var re=ne,ce={class:"mr-4"};function se(t,e,n,r,c,o){var a=Object(s["B"])("icon");return Object(s["t"])(),Object(s["f"])("button",{onClick:e[0]||(e[0]=function(){return o.onToggle&&o.onToggle.apply(o,arguments)}),class:Object(s["o"])([{active:c.show},"button"])},[Object(s["g"])("span",ce,Object(s["E"])(o.buttonText)+" issue ",1),Object(s["g"])("span",null,[Object(s["i"])(a,{name:"triangle",class:"icon"})])],2)}var oe={name:"Toggler",components:{icon:xt},emits:["onToggle"],data:function(){return{show:!1}},computed:{buttonText:function(){return this.show?"Hide":"Show"}},methods:{onToggle:function(){this.show=!this.show,this.$emit("onToggle",this.show)}}};n("c691");const ae=u()(oe,[["render",se],["__scopeId","data-v-67ecf02a"]]);var ie=ae,ue={name:"Post",components:{user:re,toggler:ie},props:{Url:{type:String,default:"https://picsum.photos/300/300"},username:{type:String,default:"User"}},data:function(){return{isShow:!1}},methods:{toggleClick:function(t){this.isShow=t}}};n("2ce3");const de=u()(ue,[["render",Yt],["__scopeId","data-v-51c0d8cc"]]);var le=de,be=function(t){return Object(s["w"])("data-v-397a0ee2"),t=t(),Object(s["u"])(),t},fe={class:"card"},pe={class:"card__title_wrap mb-12"},je={class:"card__title"},ve=be((function(){return Object(s["g"])("div",{class:"card__desc mb-32"}," hdfvjknsdfkjvjhkdfsvjsdfnj;vnjsdfnjvnsjdfnvjlsnjldfbvnjsdnjfvnjlsdfnl/vnljsdfnjl/bdnjf ",-1)})),Oe={class:"card__stats"};function me(t,e,n,r,c,o){var a=Object(s["B"])("stats");return Object(s["t"])(),Object(s["f"])("div",fe,[Object(s["g"])("div",pe,[Object(s["g"])("h2",je,Object(s["E"])(n.title),1)]),ve,Object(s["g"])("div",Oe,[Object(s["i"])(a,{stars:10,forks:4})])])}var he=function(t){return Object(s["w"])("data-v-52f25f99"),t=t(),Object(s["u"])(),t},ge={class:"stats"},Ce={class:"stats__border stats__right"},_e={class:"stats__icon mr-4"},we=he((function(){return Object(s["g"])("span",null,"Star",-1)})),Le={class:"stats__border"},ye={class:"stats__border"},Be={class:"stats__icon mr-4"},xe=he((function(){return Object(s["g"])("span",null,"Forks",-1)})),Se={class:"stats__border stats__left"};function ke(t,e,n,r,c,o){var a=Object(s["B"])("icon");return Object(s["t"])(),Object(s["f"])("div",ge,[Object(s["g"])("div",Ce,[Object(s["g"])("div",_e,[Object(s["i"])(a,{name:"star"})]),we]),Object(s["g"])("div",Le,Object(s["E"])(n.stars),1),Object(s["g"])("div",ye,[Object(s["g"])("div",Be,[Object(s["i"])(a,{name:"forks"})]),xe]),Object(s["g"])("div",Se,Object(s["E"])(n.forks),1)])}var He={name:"Stats",components:{icon:xt},props:{stars:{type:Number,required:!0},forks:{type:Number,required:!0}},setup:function(){return{}}};n("dc3e");const Te=u()(He,[["render",ke],["__scopeId","data-v-52f25f99"]]);var Ie=Te,Me={name:"Card",components:{stats:Ie},props:{title:{type:String,default:"Title"}}};n("230b");const Pe=u()(Me,[["render",me],["__scopeId","data-v-397a0ee2"]]);var Ve=Pe,ze={name:"Posts",components:{post:le,card:Ve},data:function(){return{posts:[]}},created:function(){this.posts=Ut,console.log(Ut)}};n("9e19");const Je=u()(ze,[["render",At],["__scopeId","data-v-6fc96e66"]]);var Ue=Je,$e=(n("d3b7"),n("3ca3"),n("ddb0"),n("9861"),n("a15b"),n("bc3a")),Ze=n.n($e),Ae="https://api.github.com",Ee=function(t){var e=t.url,n=t.method,r=void 0===n?"get":n,c=t.data,s=void 0===c?{}:c,o=t.headers,a=void 0===o?{}:o;return Ze()({url:e,method:r,data:s,baseURL:Ae,headers:a})},Fe=function(t){return t<10?"0".concat(t):t},Ne=function(){var t=new URLSearchParams,e=6048e5,n=new Date(Date.now()-e),r=[n.getFullYear(),Fe(n.getMonth()+1),Fe(n.getDate())].join("-");return t.append("order","desc"),t.append("sort","stars"),t.append("per_page",10),t.append("q","language:{lang} created:>".concat(r)),Ee({url:"/search/repositories?".concat(t)})},Re={name:"Feeds",components:{heading:k,icon:xt,StoryUserItem:Jt,avatar:Pt,posts:Ue},data:function(){return{stories:Ut,items:[]}},methods:{handlePress:function(t){this.$router.push("/stories")}},created:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.getTrendings();case 3:n=e.sent,r=n.data,t.items=r.items,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}};n("cb61");const qe=u()(Re,[["render",g],["__scopeId","data-v-0664d34b"]]);var De=qe,Ke={class:"wrapper"},Ge={class:"hedline"},Ye={class:"x-container"},Qe={class:"content"};function We(t,e,n,r,c,o){var a=Object(s["B"])("icon"),i=Object(s["B"])("stories-slider");return Object(s["t"])(),Object(s["f"])("div",Ke,[Object(s["g"])("div",Ge,[Object(s["g"])("div",Ye,[Object(s["g"])("button",{class:"logo mt-32",onClick:e[0]||(e[0]=function(e){return t.$router.push("/")})},[Object(s["i"])(a,{name:"logo"})]),Object(s["g"])("button",{class:"close-btn mt-32",onClick:e[1]||(e[1]=function(e){return t.$router.push("/")})},[Object(s["i"])(a,{name:"close"})])])]),Object(s["g"])("div",Qe,[Object(s["i"])(i)])])}var Xe={class:"c-stories-slider"},tn={class:"stories-contaner"};function en(t,e,n,r,c,o){var a=Object(s["B"])("story-post-item");return Object(s["t"])(),Object(s["f"])("div",Xe,[Object(s["g"])("div",tn,[Object(s["i"])(a)])])}var nn={class:"stories-container"},rn={class:"header"},cn={class:"progress"},sn={class:"user"},on={class:"content"},an={key:0,class:"loader"},un={key:1,class:"info"},dn=["innerHTML"],ln={class:"button"},bn=Object(s["h"])("Follow"),fn={class:"btn btn-next"},pn={class:"icon"},jn={class:"btn btn-prev"},vn={class:"icon"};function On(t,e,n,r,c,o){var a,i=Object(s["B"])("x-progress"),u=Object(s["B"])("user"),d=Object(s["B"])("spinner"),l=Object(s["B"])("placeholder"),b=Object(s["B"])("x-button"),f=Object(s["B"])("icon");return Object(s["t"])(),Object(s["f"])("div",{class:Object(s["o"])(["c-story-post-item",{active:n.active}])},[Object(s["g"])("div",nn,[Object(s["g"])("div",rn,[Object(s["g"])("div",cn,[Object(s["i"])(i,{active:n.active},null,8,["active"])]),Object(s["g"])("div",sn,[Object(s["i"])(u,{name:n.data.username,src:n.data.url},null,8,["name","src"])])]),Object(s["g"])("div",on,[n.loading?(Object(s["t"])(),Object(s["f"])("div",an,[Object(s["i"])(d)])):(Object(s["t"])(),Object(s["f"])("div",un,[null!==(a=n.data.content)&&void 0!==a&&a.lenght?(Object(s["t"])(),Object(s["f"])("div",{key:0,class:"content-text",innerHTML:n.data.content},null,8,dn)):(Object(s["t"])(),Object(s["d"])(l,{key:1,paragraphs:2}))]))]),Object(s["g"])("div",ln,[Object(s["i"])(b,{class:"follow"},{default:Object(s["H"])((function(){return[bn]})),_:1})]),n.active?(Object(s["t"])(),Object(s["f"])(s["a"],{key:0},[Object(s["g"])("button",fn,[Object(s["g"])("span",pn,[Object(s["i"])(f,{name:"arrow"})])]),Object(s["g"])("button",jn,[Object(s["g"])("span",vn,[Object(s["i"])(f,{name:"arrow"})])])],64)):Object(s["e"])("",!0)])],2)}var mn={ref:"indicator",class:"indicator"};function hn(t,e,n,r,c,o){return Object(s["t"])(),Object(s["f"])("div",{class:Object(s["o"])([{active:c.active},"c-progress"])},[Object(s["g"])("div",mn,null,512)],2)}var gn={name:"Progress",data:function(){return{active:!1}},emits:["onFinish"],methods:{eFinish:function(){this.$emit("onFinish")}},mounted:function(){var t=this;this.$nextTick((function(){t.active=!0})),this.$refs.indicator.addEventListener("transitionend",this.eFinish)},beforeUnmount:function(){this.$refs.indicator.removeEventListener("transitionend",this.eFinish)}};n("d798");const Cn=u()(gn,[["render",hn],["__scopeId","data-v-060f5752"]]);var _n=Cn,wn={class:"spinner"};function Ln(t,e,n,r,c,o){return Object(s["t"])(),Object(s["f"])("div",wn)}var yn={};n("2247");const Bn=u()(yn,[["render",Ln],["__scopeId","data-v-5416b01b"]]);var xn=Bn;function Sn(t,e,n,r,c,o){return Object(s["t"])(),Object(s["f"])("div",{class:"btn",style:Object(s["p"])({width:n.width+"px",height:n.height+"px",background:n.colorBtn})},Object(s["E"])(n.text),5)}var kn={name:"Button",props:{text:{type:String,required:!0,default:"text"},width:{type:Number,default:52},height:{type:Number,default:32},colorBtn:{type:String,default:"rgba(49, 174, 84, 1)"}}};n("a2cf");const Hn=u()(kn,[["render",Sn],["__scopeId","data-v-23da8a82"]]);var Tn=Hn,In={name:"StoryPostItem",components:{user:re,xButton:Tn,xProgress:_n,icon:xt,spinner:xn},props:{active:Boolean,loading:Boolean,data:{type:Object,required:!0,default:function(){return{}}}}};n("3cf6");const Mn=u()(In,[["render",On],["__scopeId","data-v-2dedb636"]]);var Pn=Mn,Vn=n("5502"),zn={components:{storyPostItem:Pn},data:function(){return{}},computed:Object(T["a"])({},Object(Vn["c"])({trends:function(t){return t.trends.data}})),methods:Object(T["a"])(Object(T["a"])({},Object(Vn["b"])({fetchTrends:"trends/fetchTrends"})),{},{getStoryData:function(t){var e,n;return{id:t.id,urlAvatar:null===(e=t.owner)||void 0===e?void 0:e.avatar_url,username:null===(n=t.owner)||void 0===n?void 0:n.login,content:t.readme}}}),created:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.fetchTrends();case 1:case"end":return e.stop()}}),e)})))()}};n("4375");const Jn=u()(zn,[["render",en],["__scopeId","data-v-515e2ecc"]]);var Un=Jn,$n={components:{icon:xt,storiesSlider:Un}};n("cffe");const Zn=u()($n,[["render",We],["__scopeId","data-v-b34b6fde"]]);var An=Zn,En=[{path:"/",component:De},{path:"/stories",component:An},{path:"/storiesPost",component:Pn},{path:"/slider",component:void 0}],Fn=Object(b["a"])({history:Object(b["b"])(),routes:En}),Nn=Object(Vn["a"])({state:{},getters:{},mutations:{},actions:{}}),Rn=Object(s["c"])(l);Rn.use(Fn),Rn.use(Nn),Rn.mount("#app")},"65cf":function(t,e,n){},"6ec6":function(t,e,n){},"762f":function(t,e,n){"use strict";n("8c1c")},"87ad":function(t,e,n){},"8c1c":function(t,e,n){},"9e19":function(t,e,n){"use strict";n("4f8c")},a2cf:function(t,e,n){"use strict";n("3bef")},b62c:function(t,e,n){},b6ff:function(t,e,n){},c480:function(t,e,n){},c691:function(t,e,n){"use strict";n("b62c")},cb61:function(t,e,n){"use strict";n("b6ff")},cf4f:function(t,e,n){},cff9:function(t,e,n){},cffe:function(t,e,n){"use strict";n("3ce5")},d081:function(t,e,n){},d338:function(t,e,n){},d798:function(t,e,n){"use strict";n("3273")},dc3e:function(t,e,n){"use strict";n("0b9e")},dee6:function(t,e,n){"use strict";n("2613")},fcfe:function(t,e,n){"use strict";n("6ec6")}});
//# sourceMappingURL=app.5eb3a3d7.js.map