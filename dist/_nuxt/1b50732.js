(window.webpackJsonp=window.webpackJsonp||[]).push([[21,6],{303:function(t,e,n){"use strict";n.r(e);n(29);var r=n(9),c=(n(64),n(16),n(81),{name:"SectionPlatform",data:function(){return{platforms:[]}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://frytolnacestach-api.vercel.app/api/platforms").then((function(t){return t.json()}));case 2:t.platforms=e.sent;case 3:case"end":return e.stop()}}),e)})))()}))}),o=c,l=n(12),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-platform"},[e("div",{staticClass:"o-platform__outer"},[e("div",{staticClass:"o-platform__inner"},[e("div",{staticClass:"o-platform__items"},t._l(t.platforms,(function(t){return e("div",{key:t.id,staticClass:"o-platform__item"},[e("div",{staticClass:"o-platform__icon"},[e("a",{class:"o-platform__icon-file o-platform__icon-file--"+t.slug,attrs:{href:t.url,target:"_blank",title:t.name}})])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports},324:function(t,e,n){"use strict";n.r(e);n(29);var r=n(24),c=n(9),o=(n(64),n(30),n(82),n(16),n(32),n(33),n(107)),l=n(303),f={name:"PageKontinenty",components:{SectionHero:o.default,SectionPlatform:l.default},methods:{getSlugURL:function(t){return(t=t.replace("https://youtu.be/","").replace("https://youtube.com/shorts/","")).replace(" ","")}},data:function(){return{headline:"Kontinenty"}},head:{title:"Kontinenty | Frytol na cestách",meta:[{hid:"description",name:"description",content:"Oběvuj svět a jeho místá s Frytolem na cestách"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/og/og-default.png"}]},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,o,l,f,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,Promise.all([n.$get("https://frytolnacestach-api.vercel.app/api/places-continents"),n.$get("https://frytolnacestach-api.vercel.app/api/places-states"),n.$get("https://frytolnacestach-api.vercel.app/api/places-cities")]);case 3:return c=e.sent,o=Object(r.a)(c,3),l=o[0],f=o[1],m=o[2],e.abrupt("return",{placesContinents:l,placesStates:f,placesCities:m});case 9:case"end":return e.stop()}}),e)})))()}},m=n(12),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"t-main"},[e("section",{staticClass:"t-section"},[e("SectionHero",{attrs:{headline:t.headline}})],1),t._v(" "),e("section",{staticClass:"t-section my-4"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"o-cover-place"},[e("div",{staticClass:"o-cover-place__outer"},[e("div",{staticClass:"o-cover-place__items"},t._l(t.placesContinents,(function(n){return e("div",{key:n.id,staticClass:"o-cover-place__item"},[e("div",{staticClass:"o-cover-place__content"},[e("div",{staticClass:"o-cover-place__image"},[e("div",{staticClass:"o-cover-place__image-file",style:{"background-image":"url("+(n.image_cover?n.image_cover:"https://image.frytolnacestach.cz/storage/_default/hero.png")+")"}})]),t._v(" "),e("h3",{staticClass:"o-cover-place__name"},[t._v("\n                                    "+t._s(n.name)+"\n                                ")]),t._v(" "),e("NuxtLink",{staticClass:"o-cover-place__link",attrs:{to:"/svet/kontinent/".concat(n.slug)}})],1)])})),0)])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionHero:n(107).default})}}]);