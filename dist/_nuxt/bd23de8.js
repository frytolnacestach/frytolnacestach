(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{366:function(e,t,r){"use strict";var n=r(11),o=r(5),c=r(6),f=r(114),l=r(19),v=r(14),h=r(231),_=r(45),N=r(89),d=r(230),m=r(4),I=r(90).f,E=r(37).f,x=r(18).f,A=r(367),w=r(368).trim,O="Number",R=o.Number,k=R.prototype,S=o.TypeError,T=c("".slice),y=c("".charCodeAt),C=function(e){var t=d(e,"number");return"bigint"==typeof t?t:F(t)},F=function(e){var t,r,n,o,c,f,l,code,v=d(e,"number");if(N(v))throw S("Cannot convert a Symbol value to a number");if("string"==typeof v&&v.length>2)if(v=w(v),43===(t=y(v,0))||45===t){if(88===(r=y(v,2))||120===r)return NaN}else if(48===t){switch(y(v,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+v}for(f=(c=T(v,2)).length,l=0;l<f;l++)if((code=y(c,l))<48||code>o)return NaN;return parseInt(c,n)}return+v};if(f(O,!R(" 0o1")||!R("0b1")||R("+0x1"))){for(var j,L=function(e){var t=arguments.length<1?0:R(C(e)),r=this;return _(k,r)&&m((function(){A(r)}))?h(Object(t),r,L):t},M=n?I(R):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),P=0;M.length>P;P++)v(R,j=M[P])&&!v(L,j)&&x(L,j,E(R,j));L.prototype=k,k.constructor=L,l(o,O,L,{constructor:!0})}},367:function(e,t,r){var n=r(6);e.exports=n(1..valueOf)},368:function(e,t,r){var n=r(6),o=r(29),c=r(15),f=r(369),l=n("".replace),v="["+f+"]",h=RegExp("^"+v+v+"*"),_=RegExp(v+v+"*$"),N=function(e){return function(t){var r=c(o(t));return 1&e&&(r=l(r,h,"")),2&e&&(r=l(r,_,"")),r}};e.exports={start:N(1),end:N(2),trim:N(3)}},369:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},547:function(e,t,r){"use strict";r.r(t);var n=r(10),o=(r(54),r(366),r(13),r(67),{name:"OrganismsoAutorSidebarComponent",props:{author:{type:Number,required:!0}},data:function(){return{user:[]}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,data,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=!1,data=null;case 2:if(r){t.next=19;break}return t.prev=3,t.next=6,e.$axios.$get("https://api.frytolnacestach.cz/api/user-id/".concat(e.author));case 6:n=t.sent,data={user:n},r=!0,t.next=17;break;case 11:return t.prev=11,t.t0=t.catch(3),console.log("API ERROR - O AUTHOR SIDEBAR"),console.error(t.t0),t.next=17,new Promise((function(e){return setTimeout(e,1e3)}));case 17:t.next=2;break;case 19:Object.assign(e,data);case 20:case"end":return t.stop()}}),t,null,[[3,11]])})))()}}),c=r(2),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-author-sidebar"},[t("div",{staticClass:"o-author-sidebar__outer"},[t("div",{staticClass:"o-author-sidebar__inner"},[t("h4",{staticClass:"o-author-sidebar__headline"},[e._v("Autor")]),e._v(" "),e.user[0]?t("NuxtLink",{staticClass:"o-author-sidebar__name",attrs:{to:"/cestovatel/".concat(e.user[0].slug)}},[e._v(e._s(e.user[0].nickname))]):e._e()],1)])])}),[],!1,null,null,null);t.default=component.exports}}]);