(window.webpackJsonp=window.webpackJsonp||[]).push([[101,19],{414:function(t,o,e){"use strict";e.r(o);e(28);var n=e(10),r=(e(54),e(13),e(88),{name:"OrganismsoBoxPlatformComponent",data:function(){return{platforms:[]}},fetch:function(t){function o(){return t.apply(this,arguments)}return o.toString=function(){return t.toString()},o}((function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,fetch("https://api.frytolnacestach.cz/api/platforms").then((function(t){return t.json()}));case 2:t.platforms=o.sent;case 3:case"end":return o.stop()}}),o)})))()}))}),c=r,l=e(2),component=Object(l.a)(c,(function(){var t=this,o=t._self._c;return o("section",[o("div",{staticClass:"o-box-platform"},[o("div",{staticClass:"o-box-platform__outer"},[o("div",{staticClass:"o-box-platform__inner"},[o("div",{staticClass:"o-box-platform__items"},t._l(t.platforms,(function(e){return o("div",{key:e.id,staticClass:"o-box-platform__item"},[o("div",{class:"o-box-platform__icon -"+e.slug},[o("div",{staticClass:"o-box-platform__icon-file"})]),t._v(" "),o("div",{staticClass:"o-box-platform__text"},[o("h3",{staticClass:"o-box-platform__headline"},[t._v(t._s(e.name))]),t._v(" "),o("p",{staticClass:"o-box-platform__perex"},[t._v("\n                                "+t._s(e.perex)+"\n                            ")]),t._v(" "),o("div",{staticClass:"o-box-platform__statistic"},[o("div",{staticClass:"o-box-platform__statistic-items"},t._l(e.facts,(function(e){return o("div",{key:e.name,staticClass:"o-box-platform__statistic-item"},[o("span",{staticClass:"o-box-platform__statistic-name"},[t._v(t._s(e.name)+": ")]),o("span",{staticClass:"o-box-platform__statistic-value"},[t._v(t._s(e.value))])])})),0),t._v(" "),o("span",{staticClass:"o-box-platform__statistic-info"},[t._v(t._s(e.date))])]),t._v(" "),o("div",{staticClass:"o-box-platform__button"},[o("a",{class:"a-button-fill-social -social-"+e.slug,attrs:{href:e.url,target:"_blank",title:e.name}},[t._v("Přejít na "+t._s(e.name))])])])])})),0)])])])])}),[],!1,null,null,null);o.default=component.exports},465:function(t,o,e){"use strict";e.r(o);var n=e(414),r={name:"SocialPage",components:{oHero:e(148).default,oBoxPlatform:n.default},data:function(){return{headline:"Kde mě najdete"}},head:{title:"Kde mě najdeš | Cestovatelský portál Frytol na cestách",meta:[{hid:"description",name:"description",content:"Sociální sítě a platformy kde najdete Frytola na cestách."},{name:"keywords",content:"sociální sítě, cestovatelská videa, cestování, svět"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:"Kde mě najdeš | Cestovatelský portál Frytol na cestách"},{hid:"og:description",content:"Sociální sítě a platformy kde najdete Frytola na cestách."},{hid:"og:url",content:"".concat("https://frytolnacestach.cz","/social")},{hid:"og:type",content:"website"}]}},c=e(2),component=Object(c.a)(r,(function(){var t=this,o=t._self._c;return o("main",{staticClass:"t-main -gray -pt-menu",attrs:{role:"main"}},[o("section",{staticClass:"t-section -p0 mb-1 mt-2"},[o("div",{staticClass:"t-section__inner"},[o("oHero",{attrs:{headline:t.headline,modifierCSS:" -gray"}})],1)]),t._v(" "),o("section",{staticClass:"t-section -p0 mt-1 mb-2 px-2"},[o("div",{staticClass:"t-section__inner"},[o("oBoxPlatform")],1)])])}),[],!1,null,null,null);o.default=component.exports}}]);