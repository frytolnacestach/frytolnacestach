(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{710:function(e,t,r){"use strict";r.r(t);var n=r(9),o=(r(36),r(254),r(12),r(74),{name:"OrganismsmAutorComponent",props:{author:{type:Number,required:!0}},data:function(){return{user:[]}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,data,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=!1,data=null;case 2:if(r){t.next=19;break}return t.prev=3,t.next=6,e.$axios.$get("https://api.frytolnacestach.cz/api/user-id/".concat(e.author));case 6:n=t.sent,data={user:n},r=!0,t.next=17;break;case 11:return t.prev=11,t.t0=t.catch(3),console.log("API ERROR - M AUTHOR"),console.error(t.t0),t.next=17,new Promise((function(e){return setTimeout(e,1e3)}));case 17:t.next=2;break;case 19:Object.assign(e,data);case 20:case"end":return t.stop()}}),t,null,[[3,11]])})))()}}),c=r(1),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("i",{staticClass:"m-author"},[e._v("zdroj. "),e.user[0]?t("nuxtLink",{staticClass:"m-author__link",attrs:{to:"/cestovatel/".concat(e.user[0].slug)}},[e._v(e._s(e.user[0].nickname))]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);