(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{317:function(t,e,o){"use strict";o.r(e);o(29);var n=o(9),c=(o(64),{name:"PageBlogSlug",props:{adStyle:{type:String,requred:!1,default:"display:block"},adClient:{type:String,requred:!1,default:"ca-pub-5217753750259737"},adSlot:{type:String,requred:!1,default:"5043852899"},adFormat:{type:String,requred:!1,default:"auto"},adResponsive:{type:String,requred:!1,default:"true"}},methods:{adsenseAddLoad:function(){var t=document.createElement("script");t.type="text/javascript",t.text="(adsbygoogle = window.adsbygoogle || []).push({});",document.getElementsByTagName("body")[0].appendChild(t)},formatDate:function(t){return new Date(t).toLocaleDateString("cs",{year:"numeric",month:"long",day:"numeric"})}},data:function(){return{place:""}},head:function(){return{title:"".concat(this.place[0].name," | Frytol na cestách"),meta:[{hid:"description",name:"description",content:"".concat(this.place[0].perex)},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/og/og-".concat(this.place[0].slug,".jpg")}]}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$axios,n=t.params,e.next=3,o.$get("https://frytolnacestach-api.vercel.app/api/places-city/".concat(n.slug));case 3:return c=e.sent,e.abrupt("return",{place:c});case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){this.adsenseAddLoad()}}),l=o(12),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("main",[e("div",{staticClass:"t-main"},[e("section",[e("div",{staticClass:"o-hero-article",style:{"background-image":"url("+t.place[0].imageHero+")"}},[e("div",{staticClass:"o-hero-article__outer"},[e("div",{staticClass:"o-hero-article__inner"},[t.place[0].name?e("h1",{staticClass:"o-hero-article__headline"},[t._v(t._s(t.place[0].name))]):t._e()])])])]),t._v(" "),e("section",[e("div",{staticClass:"o-hot-info"},[e("div",{staticClass:"o-hot-info__outer"},[e("div",{staticClass:"o-hot-info__inner"},[e("div",{staticClass:"o-hot-info__items"},[e("div",{staticClass:"o-hot-info__item"},[e("h4",{staticClass:"o-hot-info__title"},[t._v("Kontinent")]),t._v(" "),e("span",{staticClass:"o-hot-info__value"},[t._v(t._s(t.place[0].id_continent))])]),t._v(" "),e("div",{staticClass:"o-hot-info__item"},[e("h4",{staticClass:"o-hot-info__title"},[t._v("Stát")]),t._v(" "),e("span",{staticClass:"o-hot-info__value"},[t._v(t._s(t.place[0].id_state))])]),t._v(" "),e("div",{staticClass:"o-hot-info__item"},[e("h4",{staticClass:"o-hot-info__title"},[t._v("Administrativní celek")]),t._v(" "),e("span",{staticClass:"o-hot-info__value"},[t._v(t._s(t.place[0].id_administrative_unit))])]),t._v(" "),e("div",{staticClass:"o-hot-info__item"},[e("h4",{staticClass:"o-hot-info__title"},[t._v("Kraj")]),t._v(" "),e("span",{staticClass:"o-hot-info__value"},[t._v(t._s(t.place[0].id_districts))])]),t._v(" "),e("div",{staticClass:"o-hot-info__item"},[e("h4",{staticClass:"o-hot-info__title"},[t._v("Nadmořská výška")]),t._v(" "),e("span",{staticClass:"o-hot-info__value"},[t._v(t._s(t.place[0].altitude)+" m n. m.")])]),t._v(" "),e("div",{staticClass:"o-hot-info__item"},[e("h4",{staticClass:"o-hot-info__title"},[t._v("Rozloha")]),t._v(" "),e("span",{staticClass:"o-hot-info__value"},[t._v(t._s(t.place[0].area)+" km2")])]),t._v(" "),e("div",{staticClass:"o-hot-info__item"},[e("h4",{staticClass:"o-hot-info__title"},[t._v("Populace")]),t._v(" "),e("span",{staticClass:"o-hot-info__value"},[t._v(t._s(t.place[0].population))])])])])])])]),t._v(" "),e("div",{staticClass:"t-col2"},[e("div",{staticClass:"t-col2__content my-2"}),t._v(" "),e("div",{staticClass:"t-col2__sidebar my-2"},[e("section",{staticClass:"t-section my-2"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"o-ad-sidebar-article-detail"},[e("ins",{staticClass:"adsbygoogle",style:t.adStyle,attrs:{"data-ad-client":t.adClient,"data-ad-slot":t.adSlot,"data-ad-format":t.adFormat,"data-full-width-responsive":t.adResponsive}})])])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);