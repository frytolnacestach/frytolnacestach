(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{324:function(t,e,o){"use strict";o.r(e);o(29);var n=o(9),c=(o(64),{name:"PageContinentSlug",props:{adStyle:{type:String,requred:!1,default:"display:block"},adClient:{type:String,requred:!1,default:"ca-pub-5217753750259737"},adSlot:{type:String,requred:!1,default:"5043852899"},adFormat:{type:String,requred:!1,default:"auto"},adResponsive:{type:String,requred:!1,default:"true"}},methods:{adsenseAddLoad:function(){var t=document.createElement("script");t.type="text/javascript",t.text="(adsbygoogle = window.adsbygoogle || []).push({});",document.getElementsByTagName("body")[0].appendChild(t)},formatDate:function(t){return new Date(t).toLocaleDateString("cs",{year:"numeric",month:"long",day:"numeric"})}},data:function(){return{place:""}},head:function(){return{title:"".concat(this.place[0].name," | Frytol na cestách"),meta:[{hid:"description",name:"description",content:"".concat(this.place[0].perex)},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/og/og-".concat(this.place[0].slug,".jpg")}]}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$axios,n=t.params,e.prev=1,e.next=4,o.$get("https://frytolnacestach-api.vercel.app/api/places-continent/".concat(n.slug));case 4:return c=e.sent,e.next=7,o.$get("https://frytolnacestach-api.vercel.app/api/places-states-continent/".concat(c[0].id));case 7:return l=e.sent,e.abrupt("return",{place:c,placesStates:l});case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))()},mounted:function(){this.adsenseAddLoad()}}),l=o(12),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("main",[e("div",{staticClass:"t-main"},[e("section",{staticClass:"t-section"},[e("div",{staticClass:"o-hero-place",style:{"background-image":"url("+(t.place[0].image_hero?t.place[0].image_hero:"https://image.frytolnacestach.cz/storage/_default/hero.png")+")"}},[e("div",{staticClass:"o-hero-place__outer"},[e("div",{staticClass:"o-hero-place__inner"},[t.place[0].name?e("h1",{staticClass:"o-hero-place__headline"},[t._v(t._s(t.place[0].name))]):t._e()])])]),t._v(" "),e("div",{staticClass:"js_o-hot-info-hero o-hot-info-hero"},[e("div",{staticClass:"o-hot-info-hero__outer"},[e("div",{staticClass:"o-hot-info-hero__inner"},[e("div",{staticClass:"o-hot-info-hero__items"},[e("div",{staticClass:"o-hot-info-hero__item"},[e("h4",{staticClass:"o-hot-info-hero__title"},[t._v("Počet států")]),t._v(" "),e("span",{staticClass:"o-hot-info-hero__value"},[t._v(t._s(t.place[0].number_states))])]),t._v(" "),e("div",{staticClass:"o-hot-info-hero__item"},[e("h4",{staticClass:"o-hot-info-hero__title"},[t._v("Rozloha")]),t._v(" "),e("span",{staticClass:"o-hot-info-hero__value"},[t._v(t._s(t.place[0].area)+" km2")])]),t._v(" "),e("div",{staticClass:"o-hot-info-hero__item"},[e("h4",{staticClass:"o-hot-info-hero__title"},[t._v("Počet obyvatel na km2")]),t._v(" "),e("span",{staticClass:"o-hot-info-hero__value"},[t._v(t._s(t.place[0].population_density))])])])])])])]),t._v(" "),e("div",{staticClass:"t-col2"},[e("div",{staticClass:"t-col2__content my-2"},[t.place[0].information_chatgpt?e("section",{staticClass:"t-section py-2"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"o-information-block"},[e("div",{staticClass:"o-information-block__outer"},[e("div",{staticClass:"o-information-block__inner"},[e("h2",{staticClass:"o-information-block__title"},[t._v("O kontinentu "+t._s(t.place[0].name))]),t._v(" "),e("div",{staticClass:"o-information-block__perex text-align-center-mobile text-align-left-desktop"},[e("div",{staticClass:"o-information-block_wysiwyg",domProps:{innerHTML:t._s(t.place[0].information_chatgpt)}}),t._v(" "),t._m(0)])])])])])]):t._e()]),t._v(" "),e("div",{staticClass:"t-col2__sidebar my-2"},[e("section",{staticClass:"t-section my-2"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"o-ad-google-sidebar"},[e("ins",{staticClass:"adsbygoogle",style:t.adStyle,attrs:{"data-ad-client":t.adClient,"data-ad-slot":t.adSlot,"data-ad-format":t.adFormat,"data-full-width-responsive":t.adResponsive}})])])])])]),t._v(" "),e("div",{staticClass:"t-layout-full"},[e("section",{staticClass:"t-section -bg-gray py-4"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"m-headline mb-2"},[e("h2",{staticClass:"m-headline__title"},[t._v("Všechny státy na kontinentu "+t._s(t.place[0].name))])]),t._v(" "),e("div",{staticClass:"o-cover-place-detail"},[e("div",{staticClass:"o-cover-place-detail__outer"},[e("div",{staticClass:"o-cover-place-detail__inner"},[e("div",{staticClass:"o-cover-place-detail__items"},t._l(t.placesStates,(function(o){return e("div",{key:o.id,staticClass:"o-cover-place-detail__item"},[e("div",{staticClass:"o-cover-place-detail__content"},[e("div",{staticClass:"o-cover-place-detail__image"},[e("div",{staticClass:"o-cover-place-detail__image-file",style:{"background-image":"url("+(o.image_cover?o.image_cover:"https://image.frytolnacestach.cz/storage/_default/hero.png")+")"}})]),t._v(" "),e("h3",{staticClass:"o-cover-place-detail__name"},[t._v("\n                                                "+t._s(o.name)+"\n                                            ")]),t._v(" "),e("NuxtLink",{staticClass:"o-cover-place-detail__link",attrs:{to:"/svet/stat/".concat(o.slug)}})],1)])})),0)])])])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-information-block__author"},[e("i",{staticClass:"m-author"},[t._v("zdroj. "),e("a",{staticClass:"m-author__link",attrs:{href:"https://chat.openai.com/chat",target:"_blank"}},[t._v("ChatGPT")])])])}],!1,null,null,null);e.default=component.exports}}]);