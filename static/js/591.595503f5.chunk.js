"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[591],{591:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r,a=t(861),c=t(439),i=t(687),s=t.n(i),u=t(791),o=t(689),p=t(87),l=t(635),d=t(168),f=t(686).Z.div(r||(r=(0,d.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),h=t(184),v=function(e){var n=e.movie,t=n.poster_path,r=n.original_title,a=n.overview,c=n.genres,i=parseInt(n.release_date),s=Math.ceil(10*n.vote_average);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(f,{children:[(0,h.jsx)("div",{children:(0,h.jsx)("img",{alt:r,src:"".concat(l.zD).concat(t),width:"200"})}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("h1",{children:[r," (",i,")"]}),(0,h.jsxs)("p",{children:["User Score: ",s,"%"]}),(0,h.jsx)("p",{children:"Owerview "}),(0,h.jsx)("p",{children:a}),(0,h.jsx)("p",{children:"Genres "}),(0,h.jsx)("p",{children:c&&c.length>0&&c.map((function(e){return e.name})).join(", ")})]})]}),(0,h.jsx)("p",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(p.rU,{to:"cast",children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(p.rU,{to:"reviews",children:"Reviews"})})]}),(0,h.jsx)(o.j3,{})]})},x=function(){var e,n,t=(0,u.useState)({}),r=(0,c.Z)(t,2),i=r[0],d=r[1],f=(0,u.useState)(null),x=(0,c.Z)(f,2),g=x[0],j=x[1],m=(0,u.useState)(!1),w=(0,c.Z)(m,2),y=w[0],_=w[1],k=(0,o.UO)().movieId,Z=(0,o.TH)(),b=(0,u.useRef)(null!==(e=null===Z||void 0===Z||null===(n=Z.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");return(0,u.useEffect)((function(){_(!0);var e=function(){var e=(0,a.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.Wg)(n);case 3:t=e.sent,d(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),j("Sorry, we have failed to show you this movie. Try again!");case 10:return e.prev=10,_(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(n){return e.apply(this,arguments)}}();e(k)}),[k]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p.rU,{to:b.current,state:{from:"MovieDetails"},children:(0,h.jsx)("button",{type:"button",children:"Go back"})}),y&&(0,h.jsx)("div",{children:"Loading..."}),g&&(0,h.jsx)("div",{children:g}),i.title&&(0,h.jsx)("div",{children:(0,h.jsx)(v,{movie:i})})]})}},635:function(e,n,t){t.d(n,{Hx:function(){return x},WK:function(){return j},Wg:function(){return d},uV:function(){return h},wr:function(){return p},zD:function(){return o}});var r=t(861),a=t(687),c=t.n(a),i=t(243),s="https://api.themoviedb.org/3",u="9e4f0ad78cbe1148a9d4c0c8389afc83",o="https://image.tmdb.org/t/p/original/";function p(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/trending/all/day?api_key=").concat(u));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(n,"?api_key=").concat(u));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(n,"/credits?api_key=").concat(u));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(n,"/reviews?api_key=").concat(u));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/search/movie?api_key=").concat(u,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=591.595503f5.chunk.js.map