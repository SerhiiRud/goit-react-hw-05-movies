"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[485],{8643:function(n,t,r){r.d(t,{a:function(){return s}});var e,a=r(7689),c=r(1087),u=r(168),i=r(5706).Z.ul(e||(e=(0,u.Z)(["\n  list-style: none;\n"]))),o=r(184),s=function(n){var t=n.movies,r=(0,a.TH)();return(0,o.jsx)(i,{children:t.map((function(n){var t=n.id,e=n.name,a=n.title;return(0,o.jsx)("li",{children:(0,o.jsx)(c.rU,{state:{from:r},to:"/movies/".concat(t),children:a||e})},t)}))})}},3485:function(n,t,r){r.r(t),r.d(t,{default:function(){return h}});var e,a=r(5861),c=r(9439),u=r(4687),i=r.n(u),o=r(2791),s=r(4635),p=r(8643),f=r(155),d=r(168),l=r(5706).Z.h1(e||(e=(0,d.Z)(["\n  margin-bottom: 20px;\n"]))),v=r(184),h=function(){var n=(0,o.useState)([]),t=(0,c.Z)(n,2),r=t[0],e=t[1];return(0,o.useEffect)((function(){var n=function(){var n=(0,a.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.wr)();case 2:t=n.sent,e(t.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,v.jsxs)(f.c,{children:[(0,v.jsx)(l,{children:"Trending today"}),(0,v.jsx)("div",{children:(0,v.jsx)(p.a,{movies:r})})]})}},155:function(n,t,r){r.d(t,{c:function(){return i},l:function(){return o}});var e,a,c=r(168),u=r(5706),i=u.Z.div(e||(e=(0,c.Z)(["\n  padding: 20px;\n"]))),o=u.Z.form(a||(a=(0,c.Z)(["\n  margin-bottom: 20px;\n"])))},4635:function(n,t,r){r.d(t,{Hx:function(){return m},WK:function(){return g},Wg:function(){return d},uV:function(){return v},wr:function(){return p},zD:function(){return s}});var e=r(5861),a=r(4687),c=r.n(a),u=r(1243),i="https://api.themoviedb.org/3",o="9e4f0ad78cbe1148a9d4c0c8389afc83",s="https://image.tmdb.org/t/p/original/";function p(){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(c().mark((function n(){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/trending/all/day?api_key=").concat(o));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"?api_key=").concat(o));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(o));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return y.apply(this,arguments)}function y(){return(y=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=485.dcad5d33.chunk.js.map