(window.webpackJsonp=window.webpackJsonp||[]).push([[166,36,65],{405:function(t,e,o){"use strict";o.r(e);var n={name:"OrganismsoHeroComponent",props:{modifierCSS:{type:String,required:!1,default:" "},classCSS:{type:String,required:!1,default:" "},headline:{type:String,required:!0},perex:{type:String,required:!1}}},r=o(2),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{class:"o-hero"+t.modifierCSS+t.classCSS},[e("div",{staticClass:"o-hero__outer"},[e("div",{staticClass:"o-hero__inner"},[e("h1",{staticClass:"o-hero__headline"},[t._v(t._s(t.headline))]),t._v(" "),t.perex?e("p",{staticClass:"o-hero__perex",domProps:{innerHTML:t._s(t.perex)}}):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},633:function(t,e,o){"use strict";o.r(e);o(25);var n=o(9),r=(o(39),o(12),o(36),{name:"OrganismsoBoxPlatformComponent",data:function(){return{platforms:[]}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.frytolnacestach.cz/api/platforms").then((function(t){return t.json()}));case 2:t.platforms=e.sent;case 3:case"end":return e.stop()}}),e)})))()}))}),l=r,c=o(2),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"o-box-platform"},[e("div",{staticClass:"o-box-platform__outer"},[e("div",{staticClass:"o-box-platform__inner"},[e("div",{staticClass:"o-box-platform__items"},t._l(t.platforms,(function(o){return e("div",{key:o.id,staticClass:"o-box-platform__item print-section"},[e("div",{class:"o-box-platform__icon -"+o.slug},[e("div",{staticClass:"o-box-platform__icon-file"})]),t._v(" "),e("div",{staticClass:"o-box-platform__text"},[e("h3",{staticClass:"o-box-platform__headline"},[t._v(t._s(o.name))]),t._v(" "),e("p",{staticClass:"o-box-platform__perex"},[t._v("\n                                "+t._s(o.perex)+"\n                            ")]),t._v(" "),e("div",{staticClass:"o-box-platform__statistic"},[e("div",{staticClass:"o-box-platform__statistic-items"},t._l(o.facts,(function(o){return e("div",{key:o.name,staticClass:"o-box-platform__statistic-item"},[e("span",{staticClass:"o-box-platform__statistic-name"},[t._v(t._s(o.name)+": ")]),e("span",{staticClass:"o-box-platform__statistic-value"},[t._v(t._s(o.value))])])})),0),t._v(" "),e("span",{staticClass:"o-box-platform__statistic-info"},[t._v(t._s(o.date))])]),t._v(" "),e("div",{staticClass:"o-box-platform__button"},[e("a",{class:"a-button-fill-social -social-"+o.slug,attrs:{href:o.url,target:"_blank",title:o.name}},[t._v("Přejít na "+t._s(o.name))])])])])})),0)])])])])}),[],!1,null,null,null);e.default=component.exports},739:function(t,e,o){"use strict";o.r(e);var n=o(633),r={name:"SocialPage",components:{oHero:o(405).default,oBoxPlatform:n.default},data:function(){return{headline:"Kde mě najdete"}},head:function(){var title,t;return"sociální sítě, cestovatelská videa, cestování, svět","https://image.frytolnacestach.cz/storage/main/og-default.png","website",{title:title="Kde mě najdeš | Cestovatelský portál Frytol na cestách",meta:[{hid:"description",name:"description",content:t="Sociální sítě a platformy kde najdete Frytola na cestách."},{name:"keywords",content:"sociální sítě, cestovatelská videa, cestování, svět"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:title},{hid:"og:description",content:t},{hid:"og:url",content:"".concat("https://frytolnacestach.cz","/social")},{hid:"og:type",content:"website"}]}}},l=o(2),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"t-main -gray -pt-menu",attrs:{role:"main"}},[e("section",{staticClass:"t-section -p0 mt-2 mb-4"},[e("div",{staticClass:"t-section__inner"},[e("oHero",{attrs:{headline:t.headline,perex:"Kam se vydat v digitálním vesmíru? Zde naleznete mé odkazy na sociální sítě, kde se dělím o své dobrodružství, myšlenky a zážitky. Připojte se ke mně na této cestě virtuálním světem!",modifierCSS:" -gray -w640"}})],1)]),t._v(" "),e("section",{staticClass:"t-section -p0 mt-1 mb-2 px-2"},[e("div",{staticClass:"t-section__inner"},[e("oBoxPlatform")],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);