(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{576:function(t,n,r){"use strict";r.r(n);r(25);var e=r(9),o=(r(39),r(12),r(36),{name:"OrganismsoPlatformComponent",data:function(){return{platforms:this.platforms}},fetch:function(t){function n(){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.frytolnacestach.cz/api/platforms").then((function(t){return t.json()}));case 2:t.platforms=n.sent;case 3:case"end":return n.stop()}}),n)})))()}))}),l=o,c=r(2),component=Object(c.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"o-platform"},[n("div",{staticClass:"o-platform__outer"},[n("div",{staticClass:"o-platform__inner"},[n("div",{staticClass:"o-platform__items"},t._l(t.platforms,(function(t){return n("div",{key:t.id,staticClass:"o-platform__item"},[n("div",{staticClass:"o-platform__item-content"},[n("div",{staticClass:"o-platform__icon"},[n("a",{class:"o-platform__icon-file -"+t.slug,attrs:{href:t.url,target:"_blank",rel:"noopener",title:t.name}})])])])})),0)])])])}),[],!1,null,null,null);n.default=component.exports}}]);