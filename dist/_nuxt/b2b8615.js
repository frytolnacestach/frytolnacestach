(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{318:function(t,e,o){"use strict";o.r(e);o(29);var c=o(9),n=(o(64),{name:"PageBlogSlug",props:{adStyle:{type:String,requred:!1,default:"display:block"},adClient:{type:String,requred:!1,default:"ca-pub-5217753750259737"},adSlot:{type:String,requred:!1,default:"5043852899"},adFormat:{type:String,requred:!1,default:"auto"},adResponsive:{type:String,requred:!1,default:"true"}},methods:{adsenseAddLoad:function(){var t=document.createElement("script");t.type="text/javascript",t.text="(adsbygoogle = window.adsbygoogle || []).push({});",document.getElementsByTagName("body")[0].appendChild(t)},formatDate:function(t){return new Date(t).toLocaleDateString("cs",{year:"numeric",month:"long",day:"numeric"})}},data:function(){return{place:""}},head:function(){return{title:"".concat(this.place[0].name," | Frytol na cestách"),meta:[{hid:"description",name:"description",content:"".concat(this.place[0].perex)},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/og/og-".concat(this.place[0].slug,".jpg")}]}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var o,c,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$axios,c=t.params,e.prev=1,e.next=4,o.$get("https://frytolnacestach-api.vercel.app/api/places-state/".concat(c.slug));case 4:return n=e.sent,e.next=7,o.$get("https://frytolnacestach-api.vercel.app/api/places-cities-state/".concat(n[0].id));case 7:return l=e.sent,e.abrupt("return",{place:n,placesCities:l});case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))()},mounted:function(){this.adsenseAddLoad()}}),l=o(12),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("main",[e("div",{staticClass:"t-main"},[e("section",[e("div",{staticClass:"o-hero-article",style:{"background-image":"url("+(t.place[0].image_hero?t.place[0].image_hero:"https://image.frytolnacestach.cz/storage/_default/hero.png")+")"}},[e("div",{staticClass:"o-hero-article__outer"},[e("div",{staticClass:"o-hero-article__inner"},[t.place[0].name?e("h1",{staticClass:"o-hero-article__headline"},[t._v(t._s(t.place[0].name))]):t._e()])])])]),t._v(" "),e("section",[e("div",{staticClass:"o-hot-info"},[e("div",{staticClass:"o-hot-info__outer"},[e("div",{staticClass:"o-hot-info__inner"},[e("div",{staticClass:"o-hot-info__items"},[e("div",{staticClass:"o-hot-info__item"},[e("h4",{staticClass:"o-hot-info__title"},[t._v("Kontinent")]),t._v(" "),e("span",{staticClass:"o-hot-info__value"},[t._v(t._s(t.place[0].id_continent))])]),t._v(" "),e("div",{staticClass:"o-hot-info__item"},[e("h4",{staticClass:"o-hot-info__title"},[t._v("Počet měst")]),t._v(" "),e("span",{staticClass:"o-hot-info__value"},[t._v(t._s(t.place[0].number_cities))])]),t._v(" "),e("div",{staticClass:"o-hot-info__item"},[e("h4",{staticClass:"o-hot-info__title"},[t._v("MPZ")]),t._v(" "),e("span",{staticClass:"o-hot-info__value"},[t._v(t._s(t.place[0].mpz))])]),t._v(" "),e("div",{staticClass:"o-hot-info__item"},[e("h4",{staticClass:"o-hot-info__title"},[t._v("TLD")]),t._v(" "),e("span",{staticClass:"o-hot-info__value"},[t._v(t._s(t.place[0].tld))])]),t._v(" "),e("div",{staticClass:"o-hot-info__item"},[e("h4",{staticClass:"o-hot-info__title"},[t._v("Rozloha")]),t._v(" "),e("span",{staticClass:"o-hot-info__value"},[t._v(t._s(t.place[0].area)+" km2")])]),t._v(" "),e("div",{staticClass:"o-hot-info__item"},[e("h4",{staticClass:"o-hot-info__title"},[t._v("Populace")]),t._v(" "),e("span",{staticClass:"o-hot-info__value"},[t._v(t._s(t.place[0].population))])])])])])])]),t._v(" "),e("div",{staticClass:"t-col2"},[e("div",{staticClass:"t-col2__content my-2"},[t.place[0].information_chatgpt?e("section",{staticClass:"t-section py-2"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"o-information-block"},[e("div",{staticClass:"o-information-block__outer"},[e("div",{staticClass:"o-information-block__inner"},[e("h2",{staticClass:"o-information-block__title"},[t._v("O státu "+t._s(t.place[0].name))]),t._v(" "),e("div",{staticClass:"o-information-block__perex text-align-center-mobile text-align-left-desktop"},[e("div",{staticClass:"o-information-block_wysiwyg",domProps:{innerHTML:t._s(t.place[0].information_chatgpt)}}),t._v(" "),t._m(0)])])])])])]):t._e(),t._v(" "),e("section",{staticClass:"t-section my-4"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"m-headline mb-2 text-align-center"},[e("h2",{staticClass:"m-headline__title"},[t._v("Největší města ve státě "+t._s(t.place[0].name))])]),t._v(" "),e("div",{staticClass:"o-cover-place-detail"},[e("div",{staticClass:"o-cover-place-detail__outer"},[e("div",{staticClass:"o-cover-place-detail__items"},t._l(t.placesCities,(function(o){return e("div",{key:o.id,staticClass:"o-cover-place-detail__item"},[e("div",{staticClass:"o-cover-place-detail__content"},[e("div",{staticClass:"o-cover-place-detail__image"},[e("div",{staticClass:"o-cover-place-detail__image-file",style:{"background-image":"url("+(o.image_cover?o.image_cover:"https://image.frytolnacestach.cz/storage/_default/hero.png")+")"}})]),t._v(" "),e("h3",{staticClass:"o-cover-place-detail__name"},[t._v("\n                                                "+t._s(o.name)+"\n                                            ")]),t._v(" "),e("NuxtLink",{staticClass:"o-cover-place-detail__link",attrs:{to:"/svet/mesto/".concat(o.slug)}})],1)])})),0)])])])])]),t._v(" "),e("div",{staticClass:"t-col2__sidebar my-2"},[e("section",{staticClass:"t-section my-2"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"o-ad-sidebar-article-detail"},[e("ins",{staticClass:"adsbygoogle",style:t.adStyle,attrs:{"data-ad-client":t.adClient,"data-ad-slot":t.adSlot,"data-ad-format":t.adFormat,"data-full-width-responsive":t.adResponsive}})])])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-information-block__author"},[e("i",{staticClass:"m-author"},[t._v("zdroj. "),e("a",{staticClass:"m-author__link",attrs:{href:"https://chat.openai.com/chat",target:"_blank"}},[t._v("ChatGPT")])])])}],!1,null,null,null);e.default=component.exports}}]);