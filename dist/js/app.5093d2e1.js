(function(t){function e(e){for(var r,a,o=e[0],i=e[1],u=e[2],d=0,f=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==c[i]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},c={app:0},s=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-demo/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=i;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0bd2":function(t,e,n){"use strict";n("87ad")},"11de":function(t,e,n){"use strict";n("c480")},2571:function(t,e,n){"use strict";n("f777")},"3b9d":function(t,e,n){},5033:function(t){t.exports=JSON.parse('[{"id":0,"avatar":"https://picsum.photos/300/300","username":"One","title":"1"},{"id":1,"avatar":"https://picsum.photos/300/300","username":"One 2","title":"2"},{"id":2,"avatar":"https://picsum.photos/300/300","username":"Two","title":"2"},{"id":3,"avatar":"https://picsum.photos/300/300","username":"Three3","title":"3"},{"id":4,"avatar":"https://picsum.photos/300/300","username":"Three4","title":"4"},{"id":5,"avatar":"https://picsum.photos/300/300","username":"Three5","title":"5"},{"id":6,"avatar":"https://picsum.photos/300/300","username":"Three4","title":"6"},{"id":7,"avatar":"https://picsum.photos/300/300","username":"Three5","title":"7"},{"id":8,"avatar":"https://picsum.photos/300/300","username":"Three4","title":"8"},{"id":9,"avatar":"https://picsum.photos/300/300","username":"Three5","title":"9"},{"id":10,"avatar":"https://picsum.photos/300/300","username":"Three4","title":"10"},{"id":11,"avatar":"https://picsum.photos/300/300","username":"Three5","title":"11"}]')},"56d7":function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"home",(function(){return M})),n.d(r,"exit",(function(){return U})),n.d(r,"logo",(function(){return K})),n.d(r,"triangle",(function(){return W})),n.d(r,"star",(function(){return ct})),n.d(r,"forks",(function(){return dt}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function s(t,e,n,r,s,a){var o=Object(c["o"])("feeds");return Object(c["j"])(),Object(c["c"])(o)}var a={class:"heading"},o={class:"topline"},i={class:"menu"},u={class:"icon mr-8 mb-6"},l={class:"ava mr-8"},d={class:"icon-exit"},f={class:"stories"};function b(t,e,n,r,s,b){var j=Object(c["o"])("icon"),p=Object(c["o"])("avatar"),v=Object(c["o"])("story-user-item"),O=Object(c["o"])("heading"),m=Object(c["o"])("posts");return Object(c["j"])(),Object(c["e"])("div",a,[Object(c["h"])(O,null,{headline:Object(c["r"])((function(){return[Object(c["f"])("div",o,[Object(c["f"])("div",null,[Object(c["h"])(j,{name:"logo",class:"items"})]),Object(c["f"])("div",i,[Object(c["f"])("div",u,[Object(c["h"])(j,{name:"home",class:"items"})]),Object(c["f"])("div",l,[Object(c["h"])(p,{avatar:"https://picsum.photos/300/300",size:""})]),Object(c["f"])("div",d,[Object(c["h"])(j,{name:"exit",class:"items"})])])])]})),content:Object(c["r"])((function(){return[Object(c["f"])("ul",f,[(Object(c["j"])(!0),Object(c["e"])(c["a"],null,Object(c["m"])(s.stories,(function(e){return Object(c["j"])(),Object(c["e"])("li",{key:e.id,class:"stories-item mr-8"},[Object(c["h"])(v,{class:"story-user-item",avatar:e.avatar,username:e.username,onOnPress:function(n){return t.handlePress(e.id)}},null,8,["avatar","username","onOnPress"])])})),128))])]})),_:1}),Object(c["h"])(m)])}var j={class:"c-heading"},p={class:"x-container"},v={class:"headline"},O={key:0,class:"content"};function m(t,e,n,r,s,a){return Object(c["j"])(),Object(c["e"])("div",j,[Object(c["f"])("div",p,[Object(c["f"])("div",v,[Object(c["n"])(t.$slots,"headline",{},void 0,!0)]),t.$slots.content?(Object(c["j"])(),Object(c["e"])("div",O,[Object(c["n"])(t.$slots,"content",{},void 0,!0)])):Object(c["d"])("",!0)])])}var h={},C=(n("ecc8"),n("6b0d")),g=n.n(C);const _=g()(h,[["render",m],["__scopeId","data-v-5ff87c71"]]);var L=_;n("b0c0");function w(t,e,n,r,s,a){return Object(c["j"])(),Object(c["c"])(Object(c["p"])(n.name))}var y=n("5530"),k=(n("caad"),n("2532"),n("b64b"),{preserveAspectRatio:"none",viewBox:"0 0 24 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"}),H=Object(c["f"])("path",{d:"M10.0692 1.06704C11.1853 0.128491 12.8147 0.128491 13.9308 1.06704L22.9308 8.63522C23.6087 9.20524 24 10.0456 24 10.9313V23.5C24 24.6046 23.1046 25.5 22 25.5H16.5C15.3954 25.5 14.5 24.6046 14.5 23.5V16.5H9.5V23.5C9.5 24.6046 8.60457 25.5 7.5 25.5H2C0.895431 25.5 0 24.6046 0 23.5V10.9313C0 10.0456 0.391346 9.20524 1.0692 8.63522L10.0692 1.06704Z",fill:"currentColor"},null,-1),S=[H];function x(t,e){return Object(c["j"])(),Object(c["e"])("svg",k,S)}const T={},V=g()(T,[["render",x]]);var M=V,B={preserveAspectRatio:"none",viewBox:"0 0 24 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I=Object(c["f"])("path",{d:"M13 1.44273V9.125L13.0007 9.75621L22.3025 9.755L20.1495 7.60032C19.8167 7.26743 19.7865 6.7466 20.0589 6.37963L20.1497 6.2745C20.4826 5.94172 21.0034 5.91155 21.3704 6.18393L21.4755 6.27472L25.2213 10.0218C25.5538 10.3544 25.5842 10.8746 25.3125 11.2416L25.2219 11.3467L21.4762 15.101C21.1105 15.4676 20.5169 15.4683 20.1503 15.1026C19.8171 14.7701 19.7863 14.2493 20.0582 13.882L20.1488 13.7767L22.29 11.63L13.0007 11.6312L13 20.0625C13 20.6455 12.4735 21.0871 11.8994 20.9857L1.27444 19.1091C0.826512 19.03 0.5 18.6408 0.5 18.1859V3.18752C0.5 2.72839 0.832518 2.33681 1.28558 2.26241L11.9106 0.517622C12.4813 0.423892 13 0.864318 13 1.44273ZM8.62769 10.375C7.93585 10.375 7.375 10.9359 7.375 11.6277C7.375 12.3196 7.93585 12.8804 8.62769 12.8804C9.31953 12.8804 9.88037 12.3196 9.88037 11.6277C9.88037 10.9359 9.31953 10.375 8.62769 10.375ZM14.25 19.1266L15.2064 19.1268L15.3338 19.1183C15.7919 19.056 16.1447 18.663 16.1439 18.1878L16.135 12.875H14.25V19.1266ZM14.2525 8.50002L14.25 6.9067V2.25002L15.1816 2.25002C15.6556 2.25002 16.0476 2.60192 16.1103 3.05891L16.1191 3.18597L16.1275 8.50002H14.2525Z",fill:"currentColor"},null,-1),q=[I];function J(t,e){return Object(c["j"])(),Object(c["e"])("svg",B,q)}const Z={},P=g()(Z,[["render",J]]);var U=P,z={class:"logo"};function A(t,e){return Object(c["j"])(),Object(c["e"])("h1",z,"Gitogram /")}n("0bd2");const N={},$=g()(N,[["render",A],["__scopeId","data-v-3ad5453e"]]);var K=$,R={width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},G=Object(c["f"])("path",{d:"M9.79959 5.26034C9.51774 5.56387 9.04319 5.58144 8.73966 5.29959L5 1.77348L1.26033 5.29959C0.956802 5.58144 0.482254 5.56387 0.200401 5.26034C-0.0814505 4.9568 -0.0638752 4.48225 0.239658 4.2004L4.48966 0.200402C4.77742 -0.0668049 5.22257 -0.0668049 5.51033 0.200402L9.76034 4.2004C10.0639 4.48225 10.0814 4.9568 9.79959 5.26034Z",fill:"#212121"},null,-1),D=[G];function F(t,e){return Object(c["j"])(),Object(c["e"])("svg",R,D)}const E={},Q=g()(E,[["render",F]]);var W=Q,X={preserveAspectRatio:"none",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Y=Object(c["f"])("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.86393 0.25C8.00395 0.24991 8.14119 0.289014 8.26013 0.362887C8.37907 0.43676 8.47495 0.542452 8.53693 0.668L10.4189 4.483L14.6289 5.095C14.7674 5.11511 14.8975 5.17355 15.0044 5.26372C15.1114 5.35388 15.1911 5.47218 15.2343 5.60523C15.2776 5.73829 15.2828 5.8808 15.2493 6.01665C15.2159 6.1525 15.1451 6.27628 15.0449 6.374L11.9989 9.344L12.7179 13.536C12.7416 13.6739 12.7263 13.8157 12.6736 13.9454C12.6209 14.0751 12.533 14.1874 12.4198 14.2697C12.3066 14.352 12.1726 14.401 12.033 14.4111C11.8934 14.4212 11.7538 14.3921 11.6299 14.327L7.86393 12.347L4.09793 14.327C3.97412 14.392 3.8346 14.4211 3.69512 14.411C3.55565 14.4009 3.42177 14.352 3.30861 14.2699C3.19546 14.1877 3.10752 14.0755 3.05475 13.946C3.00197 13.8165 2.98644 13.6749 3.00993 13.537L3.72993 9.343L0.681934 6.374C0.5815 6.27632 0.510433 6.15247 0.476786 6.01647C0.443138 5.88047 0.448256 5.73777 0.491558 5.60453C0.534861 5.47129 0.614617 5.35284 0.72179 5.26261C0.828962 5.17238 0.959262 5.11397 1.09793 5.094L5.30793 4.483L7.19093 0.668C7.25291 0.542452 7.3488 0.43676 7.46774 0.362887C7.58668 0.289014 7.72392 0.24991 7.86393 0.25ZM7.86393 2.695L6.47893 5.5C6.42515 5.6089 6.34572 5.70311 6.24748 5.77453C6.14923 5.84595 6.03511 5.89244 5.91493 5.91L2.81793 6.36L5.05793 8.544C5.14508 8.62886 5.21029 8.73365 5.24792 8.84933C5.28555 8.96501 5.29448 9.0881 5.27393 9.208L4.74593 12.292L7.51493 10.836C7.62256 10.7794 7.74234 10.7499 7.86393 10.7499C7.98553 10.7499 8.1053 10.7794 8.21293 10.836L10.9829 12.292L10.4529 9.208C10.4324 9.0881 10.4413 8.96501 10.4789 8.84933C10.5166 8.73365 10.5818 8.62886 10.6689 8.544L12.9089 6.361L9.81293 5.911C9.69275 5.89344 9.57863 5.84695 9.48039 5.77553C9.38214 5.70411 9.30272 5.6099 9.24893 5.501L7.86393 2.694V2.695Z",fill:"currentColor"},null,-1),tt=[Y];function et(t,e){return Object(c["j"])(),Object(c["e"])("svg",X,tt)}const nt={},rt=g()(nt,[["render",et]]);var ct=rt,st={width:"12",height:"15",viewBox:"0 0 12 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},at=Object(c["f"])("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3 2.25001C3 2.44892 2.92099 2.63969 2.78033 2.78034C2.63968 2.92099 2.44892 3.00001 2.25 3.00001C2.05109 3.00001 1.86033 2.92099 1.71967 2.78034C1.57902 2.63969 1.5 2.44892 1.5 2.25001C1.5 2.05109 1.57902 1.86033 1.71967 1.71968C1.86033 1.57902 2.05109 1.50001 2.25 1.50001C2.44892 1.50001 2.63968 1.57902 2.78033 1.71968C2.92099 1.86033 3 2.05109 3 2.25001ZM3 4.37201C3.50042 4.19509 3.92217 3.84696 4.19073 3.38915C4.45929 2.93134 4.55735 2.39333 4.4676 1.87021C4.37785 1.34709 4.10605 0.87253 3.70025 0.53043C3.29445 0.18832 2.78077 0.00069046 2.25 0.00069046C1.71924 0.00069046 1.20556 0.18832 0.799762 0.53043C0.393962 0.87253 0.122161 1.34709 0.0324114 1.87021C-0.0573486 2.39333 0.0407214 2.93134 0.309281 3.38915C0.577841 3.84696 0.999591 4.19509 1.5 4.37201V5.25001C1.5 5.84674 1.73706 6.41904 2.15901 6.841C2.58097 7.26295 3.15327 7.50001 3.75 7.50001H5.25V9.628C4.74932 9.8049 4.3273 10.1532 4.05855 10.6112C3.78981 11.0692 3.69164 11.6075 3.78139 12.1309C3.87115 12.6543 4.14306 13.1291 4.54905 13.4714C4.95504 13.8136 5.46897 14.0014 6 14.0014C6.53104 14.0014 7.04497 13.8136 7.45096 13.4714C7.85695 13.1291 8.1289 12.6543 8.2186 12.1309C8.3084 11.6075 8.2102 11.0692 7.94146 10.6112C7.67271 10.1532 7.25069 9.8049 6.75 9.628V7.50001H8.25C8.8467 7.50001 9.419 7.26295 9.841 6.841C10.263 6.41904 10.5 5.84674 10.5 5.25001V4.37201C11.0004 4.19509 11.4222 3.84696 11.6907 3.38915C11.9593 2.93134 12.0574 2.39333 11.9676 1.87021C11.8778 1.34709 11.6061 0.87253 11.2002 0.53043C10.7944 0.18832 10.2808 0.00069046 9.75 0.00069046C9.2192 0.00069046 8.7056 0.18832 8.2998 0.53043C7.89396 0.87253 7.62216 1.34709 7.53241 1.87021C7.44265 2.39333 7.54072 2.93134 7.80928 3.38915C8.0778 3.84696 8.4996 4.19509 9 4.37201V5.25001C9 5.44892 8.921 5.63969 8.7803 5.78034C8.6397 5.92099 8.4489 6.00001 8.25 6.00001H3.75C3.55109 6.00001 3.36033 5.92099 3.21967 5.78034C3.07902 5.63969 3 5.44892 3 5.25001V4.37201ZM6.75 11.75C6.75 11.9489 6.67099 12.1397 6.53033 12.2803C6.38968 12.421 6.19892 12.5 6 12.5C5.80109 12.5 5.61033 12.421 5.46967 12.2803C5.32902 12.1397 5.25 11.9489 5.25 11.75C5.25 11.5511 5.32902 11.3603 5.46967 11.2197C5.61033 11.079 5.80109 11 6 11C6.19892 11 6.38968 11.079 6.53033 11.2197C6.67099 11.3603 6.75 11.5511 6.75 11.75ZM9.75 3.00001C9.9489 3.00001 10.1397 2.92099 10.2803 2.78034C10.421 2.63969 10.5 2.44892 10.5 2.25001C10.5 2.05109 10.421 1.86033 10.2803 1.71968C10.1397 1.57902 9.9489 1.50001 9.75 1.50001C9.5511 1.50001 9.3603 1.57902 9.2197 1.71968C9.079 1.86033 9 2.05109 9 2.25001C9 2.44892 9.079 2.63969 9.2197 2.78034C9.3603 2.92099 9.5511 3.00001 9.75 3.00001Z",fill:"#000"},null,-1),ot=[at];function it(t,e){return Object(c["j"])(),Object(c["e"])("svg",st,ot)}const ut={},lt=g()(ut,[["render",it]]);var dt=lt,ft={name:"Icon",components:Object(y["a"])({},r),props:{name:{type:String,required:!0,valiator:function(t){return Object.keys(r).includes(t)}}}};const bt=g()(ft,[["render",w]]);var jt=bt,pt={class:"avatar"},vt=["src"],Ot={class:"username"};function mt(t,e,n,r,s,a){return Object(c["j"])(),Object(c["e"])("button",{class:"c-story-user-item",onClick:e[0]||(e[0]=function(e){return t.$emit("onPress")})},[Object(c["f"])("div",pt,[Object(c["f"])("img",{src:n.avatar,class:"img",alt:"username avatar"},null,8,vt)]),Object(c["f"])("div",Ot,Object(c["q"])(n.username),1)])}var ht={props:{avatar:{type:String,required:!0},username:{type:String,required:!0}}};n("ef0e");const Ct=g()(ht,[["render",mt],["__scopeId","data-v-1e3d85bf"]]);var gt=Ct,_t=n("5033"),Lt={class:"avatar"},wt=["src"];function yt(t,e,n,r,s,a){return Object(c["j"])(),Object(c["e"])("div",Lt,[Object(c["f"])("img",{src:n.avatar,class:"img",alt:"username avatar"},null,8,wt)])}var kt={props:{avatar:{type:String,required:!0,default:"https://picsum.photos/300/300"},size:{type:String,required:!0}}};n("9e9b");const Ht=g()(kt,[["render",yt],["__scopeId","data-v-765f7a97"]]);var St=Ht,xt={class:"posts-container"},Tt={class:"posts__list"};function Vt(t,e,n,r,s,a){var o=Object(c["o"])("card"),i=Object(c["o"])("post");return Object(c["j"])(),Object(c["e"])("div",xt,[Object(c["f"])("ul",Tt,[(Object(c["j"])(!0),Object(c["e"])(c["a"],null,Object(c["m"])(s.posts,(function(t){return Object(c["j"])(),Object(c["e"])("li",{key:t.id,class:"posts__item"},[Object(c["h"])(i,{avatarUrl:t.avatar,username:t.username},{card:Object(c["r"])((function(){return[Object(c["h"])(o,{title:t.title},null,8,["title"])]})),_:2},1032,["avatarUrl","username"])])})),128))])])}var Mt=function(t){return Object(c["l"])("data-v-355ba5c9"),t=t(),Object(c["k"])(),t},Bt={class:"post"},It=Object(c["g"])(" My post component "),qt={class:"post__user"},Jt={class:"post__card"},Zt={key:0},Pt={class:"post__comment comment__list mb-16"},Ut=Mt((function(){return Object(c["f"])("p",null,[Object(c["f"])("span",{class:"comment_user mb-16"},"User Name"),Object(c["g"])(" KJNKNKLBLJHBLJHBLBJHBLHVKUHVKHVLHBLJBHIUHBLJHVLJHBLIJBJHBJHVBMHVMGHV fndfndfndfhndfhn dfn dfhndfhn fbsfbsbsfgbsfgb ")],-1)})),zt=[Ut];function At(t,e,n,r,s,a){var o=Object(c["o"])("user"),i=Object(c["o"])("toggler");return Object(c["j"])(),Object(c["e"])("div",Bt,[It,Object(c["f"])("div",qt,[Object(c["h"])(o,{src:n.avatarUrl,name:n.username},null,8,["src","name"])]),Object(c["f"])("div",Jt,[Object(c["n"])(t.$slots,"card",{},void 0,!0)]),Object(c["h"])(i,{onOnToggle:a.toggleClick},null,8,["onOnToggle"]),s.isShow?(Object(c["j"])(),Object(c["e"])("div",Zt,[Object(c["f"])("ul",Pt,[(Object(c["j"])(),Object(c["e"])(c["a"],null,Object(c["m"])(5,(function(t){return Object(c["f"])("li",{class:"commetn__item",key:t},zt)})),64))])])):Object(c["d"])("",!0)])}var Nt={class:"user"},$t={class:"user__name mb-4"},Kt={key:0,class:"user__type"};function Rt(t,e,n,r,s,a){var o=Object(c["o"])("Avatar");return Object(c["j"])(),Object(c["e"])("div",Nt,[Object(c["h"])(o,{class:"user__avatar mr-12",avatar:n.src,size:n.size},null,8,["avatar","size"]),Object(c["f"])("div",null,[Object(c["f"])("div",$t,Object(c["q"])(n.name),1),n.type?(Object(c["j"])(),Object(c["e"])("div",Kt,Object(c["q"])(n.type),1)):Object(c["d"])("",!0)])])}var Gt={components:{Avatar:St},props:{src:{type:String,default:"https://picsum.photos/300/300"},name:{type:String,default:"John Doe"},type:{type:String,default:""},size:{type:String,default:"s"}},setup:function(t){return{}}};n("f7a3");const Dt=g()(Gt,[["render",Rt],["__scopeId","data-v-93998d46"]]);var Ft=Dt,Et={class:"mr-4"};function Qt(t,e,n,r,s,a){var o=Object(c["o"])("icon");return Object(c["j"])(),Object(c["e"])("button",{onClick:e[0]||(e[0]=function(){return a.onToggle&&a.onToggle.apply(a,arguments)}),class:Object(c["i"])([{active:s.show},"button"])},[Object(c["f"])("span",Et,Object(c["q"])(a.buttonText)+" issue ",1),Object(c["f"])("span",null,[Object(c["h"])(o,{name:"triangle",class:"icon"})])],2)}var Wt={components:{icon:jt},emits:["onToggle"],data:function(){return{show:!1}},computed:{buttonText:function(){return this.show?"Hide":"Show"}},methods:{onToggle:function(){this.show=!this.show,this.$emit("onToggle",this.show)}}};n("2571");const Xt=g()(Wt,[["render",Qt],["__scopeId","data-v-918b25fc"]]);var Yt=Xt,te={components:{user:Ft,toggler:Yt},props:{avatarUrl:{type:String,default:"https://picsum.photos/300/300"},username:{type:String,default:"User"}},data:function(){return{isShow:!1}},methods:{toggleClick:function(t){this.isShow=t}}};n("698a");const ee=g()(te,[["render",At],["__scopeId","data-v-355ba5c9"]]);var ne=ee,re=function(t){return Object(c["l"])("data-v-ea7b67f4"),t=t(),Object(c["k"])(),t},ce={class:"card"},se={class:"card__title_wrap mb-12"},ae={class:"card__title"},oe=re((function(){return Object(c["f"])("div",{class:"card__desc mb-32"}," hdfvjknsdfkjvjhkdfsvjsdfnj;vnjsdfnjvnsjdfnvjlsnjldfbvnjsdnjfvnjlsdfnl/vnljsdfnjl/bdnjf ",-1)})),ie={class:"card__stats"};function ue(t,e,n,r,s,a){var o=Object(c["o"])("stats");return Object(c["j"])(),Object(c["e"])("div",ce,[Object(c["f"])("div",se,[Object(c["f"])("h2",ae,Object(c["q"])(n.title),1)]),oe,Object(c["f"])("div",ie,[Object(c["h"])(o,{stars:10,forks:4})])])}var le=function(t){return Object(c["l"])("data-v-27ebf154"),t=t(),Object(c["k"])(),t},de={class:"stats"},fe={class:"stats__border stats__right"},be={class:"stats__icon mr-4"},je=le((function(){return Object(c["f"])("span",null,"Star",-1)})),pe={class:"stats__border"},ve={class:"stats__border"},Oe={class:"stats__icon mr-4"},me=le((function(){return Object(c["f"])("span",null,"Forks",-1)})),he={class:"stats__border stats__left"};function Ce(t,e,n,r,s,a){var o=Object(c["o"])("icon");return Object(c["j"])(),Object(c["e"])("div",de,[Object(c["f"])("div",fe,[Object(c["f"])("div",be,[Object(c["h"])(o,{name:"star"})]),je]),Object(c["f"])("div",pe,Object(c["q"])(n.stars),1),Object(c["f"])("div",ve,[Object(c["f"])("div",Oe,[Object(c["h"])(o,{name:"forks"})]),me]),Object(c["f"])("div",he,Object(c["q"])(n.forks),1)])}n("a9e3");var ge={components:{icon:jt},props:{stars:{type:Number,required:!0},forks:{type:Number,required:!0}},setup:function(){return{}}};n("a9cf");const _e=g()(ge,[["render",Ce],["__scopeId","data-v-27ebf154"]]);var Le=_e,we={components:{stats:Le},props:{title:{type:String,default:"Title"}}};n("63c3");const ye=g()(we,[["render",ue],["__scopeId","data-v-ea7b67f4"]]);var ke=ye,He={components:{post:ne,card:ke},data:function(){return{posts:[]}},created:function(){this.posts=_t,console.log(_t)}};n("d720");const Se=g()(He,[["render",Vt],["__scopeId","data-v-6c5c91a8"]]);var xe=Se,Te={name:"feeds",components:{heading:L,icon:jt,StoryUserItem:gt,avatar:St,posts:xe},data:function(){return{stories:_t}}};n("ff13");const Ve=g()(Te,[["render",b],["__scopeId","data-v-86a13e78"]]);var Me=Ve,Be={name:"App",components:{feeds:Me}};n("11de");const Ie=g()(Be,[["render",s]]);var qe=Ie;Object(c["b"])(qe).mount("#app")},"63c3":function(t,e,n){"use strict";n("f488")},"698a":function(t,e,n){"use strict";n("3b9d")},"87ad":function(t,e,n){},"8dbd":function(t,e,n){},"9e9b":function(t,e,n){"use strict";n("d8d3")},a355:function(t,e,n){},a9cf:function(t,e,n){"use strict";n("b963")},b963:function(t,e,n){},c480:function(t,e,n){},d720:function(t,e,n){"use strict";n("e21d")},d8d3:function(t,e,n){},e21d:function(t,e,n){},eb22:function(t,e,n){},ecc8:function(t,e,n){"use strict";n("f889")},ef0e:function(t,e,n){"use strict";n("eb22")},f488:function(t,e,n){},f777:function(t,e,n){},f7a3:function(t,e,n){"use strict";n("a355")},f889:function(t,e,n){},ff13:function(t,e,n){"use strict";n("8dbd")}});
//# sourceMappingURL=app.5093d2e1.js.map