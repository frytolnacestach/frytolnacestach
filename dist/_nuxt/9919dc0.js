(window.webpackJsonp=window.webpackJsonp||[]).push([[172,37,67],{408:function(t,e,n){"use strict";n.r(e);var o={name:"OrganismsoHeroComponent",props:{modifierCSS:{type:String,required:!1,default:" "},classCSS:{type:String,required:!1,default:" "},headline:{type:String,required:!0},perex:{type:String,required:!1}}},r=n(1),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{class:"o-hero"+t.modifierCSS+t.classCSS},[e("div",{staticClass:"o-hero__outer"},[e("div",{staticClass:"o-hero__inner"},[e("h1",{staticClass:"o-hero__headline"},[t._v(t._s(t.headline))]),t._v(" "),t.perex?e("p",{staticClass:"o-hero__perex",domProps:{innerHTML:t._s(t.perex)}}):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},646:function(t,e,n){"use strict";n.r(e);n(25);var o=n(9),r=(n(36),n(58),n(12),n(38),{name:"OrganismsoBoxPlatformComponent",data:function(){return{platforms:[]}},head:function(){return this.platforms||null!==this.platforms?{script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"ItemList",name:"Sociální Sítě",itemListElement:this.platforms.map((function(t,e){return{"@type":"WebPage",position:e+1,name:t.name,url:t.url,description:t.perex}}))}}]}:{script:[]}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.frytolnacestach.cz/api/platforms").then((function(t){return t.json()}));case 2:t.platforms=e.sent;case 3:case"end":return e.stop()}}),e)})))()}))}),l=r,c=n(1),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"o-box-platform"},[e("div",{staticClass:"o-box-platform__outer"},[e("div",{staticClass:"o-box-platform__inner"},[e("div",{staticClass:"o-box-platform__items"},t._l(t.platforms,(function(n){return e("div",{key:n.id,staticClass:"o-box-platform__item print-section"},[e("div",{class:"o-box-platform__icon -"+n.slug},[e("div",{staticClass:"o-box-platform__icon-file"})]),t._v(" "),e("div",{staticClass:"o-box-platform__text"},[e("h3",{staticClass:"o-box-platform__headline"},[t._v(t._s(n.name))]),t._v(" "),e("p",{staticClass:"o-box-platform__perex"},[t._v("\n                                "+t._s(n.perex)+"\n                            ")]),t._v(" "),e("div",{staticClass:"o-box-platform__statistic"},[e("div",{staticClass:"o-box-platform__statistic-items"},t._l(n.facts,(function(n){return e("div",{key:n.name,staticClass:"o-box-platform__statistic-item"},[e("span",{staticClass:"o-box-platform__statistic-name"},[t._v(t._s(n.name)+": ")]),e("span",{staticClass:"o-box-platform__statistic-value"},[t._v(t._s(n.value))])])})),0),t._v(" "),e("span",{staticClass:"o-box-platform__statistic-info"},[t._v(t._s(n.date))])]),t._v(" "),e("div",{staticClass:"o-box-platform__button"},[e("a",{class:"a-button-fill-social -social-"+n.slug,attrs:{href:n.url,target:"_blank",rel:"noopener",title:n.name}},[t._v("Přejít na "+t._s(n.name))])])])])})),0)])])])])}),[],!1,null,null,null);e.default=component.exports},746:function(t,e,n){"use strict";n.r(e);var o=n(646),r={name:"SocialPage",components:{oHero:n(408).default,oBoxPlatform:o.default},data:function(){return{headline:"Kde mě najdete"}},head:function(){var title,t,e,n,o,r;return"sociální sítě, cestovatelská videa, cestování, svět",e="https://image.frytolnacestach.cz/storage/main/og-default.png",n=title="Kde mě najdeš | Cestovatelský portál Frytol na cestách",o=t="Sociální sítě a platformy kde najdete Frytola na cestách.","website",{title:title,meta:[{hid:"title",name:"title",content:title},{hid:"description",name:"description",content:t},{name:"keywords",content:"sociální sítě, cestovatelská videa, cestování, svět"},{hid:"og:type",content:"website"},{hid:"og:url",content:r="".concat("https://frytolnacestach.cz","/social")},{hid:"og:title",content:n},{hid:"og:description",content:o},{property:"og:image",content:e},{name:"twitter:title",content:n},{name:"twitter:description",content:o},{name:"twitter:image",content:e},{name:"twitter:url",content:r}],link:[{rel:"canonical",href:r}],script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"WebPage",name:title,description:t,url:r,datePublished:"2024-01-31",author:{"@type":"Organization",name:"Frytol na cestách",url:"https://www.frytolnacestach.cz/"}}}]}}},l=n(1),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"t-main -gray -pt-menu",attrs:{role:"main"}},[e("section",{staticClass:"t-section -p0 mt-2 mb-4"},[e("div",{staticClass:"t-section__inner"},[e("oHero",{attrs:{headline:t.headline,perex:"Kam se vydat v digitálním vesmíru? Zde naleznete mé odkazy na sociální sítě, kde se dělím o své dobrodružství, myšlenky a zážitky. Připojte se ke mně na této cestě virtuálním světem!",modifierCSS:" -gray -w640"}})],1)]),t._v(" "),e("section",{staticClass:"t-section -p0 mt-1 mb-2 px-2"},[e("div",{staticClass:"t-section__inner"},[e("oBoxPlatform")],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);