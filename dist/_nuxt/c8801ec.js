(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{656:function(t,o,n){"use strict";n.r(o);n(25);var e=n(9),r=(n(36),n(57),n(12),n(38),{name:"OrganismsoBoxPlatformComponent",data:function(){return{platforms:[]}},head:function(){return this.platforms||null!==this.platforms?{script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"ItemList",name:"Sociální Sítě",itemListElement:this.platforms.map((function(t,o){return{"@type":"WebPage",position:o+1,name:t.name,url:t.url,description:t.perex}}))}}]}:{script:[]}},fetch:function(t){function o(){return t.apply(this,arguments)}return o.toString=function(){return t.toString()},o}((function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,fetch("https://api.frytolnacestach.cz/api/platforms").then((function(t){return t.json()}));case 2:t.platforms=o.sent;case 3:case"end":return o.stop()}}),o)})))()}))}),l=r,c=n(1),component=Object(c.a)(l,(function(){var t=this,o=t._self._c;return o("section",[o("div",{staticClass:"o-box-platform"},[o("div",{staticClass:"o-box-platform__outer"},[o("div",{staticClass:"o-box-platform__inner"},[o("div",{staticClass:"o-box-platform__items"},t._l(t.platforms,(function(n){return o("div",{key:n.id,staticClass:"o-box-platform__item print-section"},[o("div",{class:"o-box-platform__icon -"+n.slug},[o("div",{staticClass:"o-box-platform__icon-file"})]),t._v(" "),o("div",{staticClass:"o-box-platform__text"},[o("h3",{staticClass:"o-box-platform__headline"},[t._v(t._s(n.name))]),t._v(" "),o("p",{staticClass:"o-box-platform__perex"},[t._v("\n                                "+t._s(n.perex)+"\n                            ")]),t._v(" "),o("div",{staticClass:"o-box-platform__statistic"},[o("div",{staticClass:"o-box-platform__statistic-items"},t._l(n.facts,(function(n){return o("div",{key:n.name,staticClass:"o-box-platform__statistic-item"},[o("span",{staticClass:"o-box-platform__statistic-name"},[t._v(t._s(n.name)+": ")]),o("span",{staticClass:"o-box-platform__statistic-value"},[t._v(t._s(n.value))])])})),0),t._v(" "),o("span",{staticClass:"o-box-platform__statistic-info"},[t._v(t._s(n.date))])]),t._v(" "),o("div",{staticClass:"o-box-platform__button"},[o("a",{class:"a-button-fill-social -social-"+n.slug,attrs:{href:n.url,target:"_blank",rel:"noopener",title:n.name}},[t._v("Přejít na "+t._s(n.name))])])])])})),0)])])])])}),[],!1,null,null,null);o.default=component.exports}}]);