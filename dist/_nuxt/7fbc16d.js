(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{392:function(t,e,n){"use strict";n.r(e);var r=n(10),o=(n(54),n(13),n(88),{name:"OrganismsoDonateComponent",props:{showHeadline:{type:Boolean,required:!1}},data:function(){return{base:this.base}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://frytolnacestach-api.vercel.app/api/base").then((function(t){return t.json()}));case 2:t.base=e.sent;case 3:case"end":return e.stop()}}),e)})))()}))}),c=o,l=n(2),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-donate"},[e("div",{staticClass:"o-donate__outer"},[e("div",{staticClass:"o-donate__inner"},[!0===t.showHeadline?e("h2",{staticClass:"o-donate__title"},[t._v("Jak mě podpořit")]):t._e(),t._v(" "),e("p",{staticClass:"o-donate__perex"},[t._v(t._s(t.base[0].donate))])])])])}),[],!1,null,null,null);e.default=component.exports}}]);