(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{316:function(t,e,n){"use strict";n.r(e);n(29);var o=n(24),c=n(9),l=(n(64),n(16),n(32),n(33),{name:"PageBlogSlug",props:{adStyle:{type:String,requred:!1,default:"display:block"},adClient:{type:String,requred:!1,default:"ca-pub-5217753750259737"},adSlot:{type:String,requred:!1,default:"5043852899"},adFormat:{type:String,requred:!1,default:"auto"},adResponsive:{type:String,requred:!1,default:"true"}},methods:{adsenseAddLoad:function(){var t=document.createElement("script");t.type="text/javascript",t.text="(adsbygoogle = window.adsbygoogle || []).push({});",document.getElementsByTagName("body")[0].appendChild(t)},formatDate:function(t){return new Date(t).toLocaleDateString("cs",{year:"numeric",month:"long",day:"numeric"})}},data:function(){return{place:""}},head:function(){return{title:"".concat(this.place[0].name," | Frytol na cestách"),meta:[{hid:"description",name:"description",content:"".concat(this.place[0].perex)},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/og/og-".concat(this.place[0].slug,".jpg")}]}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,l,r,d,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,c=t.params,e.next=3,Promise.all([n.$get("https://frytolnacestach-api.vercel.app/api/places-continent/".concat(c.slug)),n.$get("https://frytolnacestach-api.vercel.app/api/places-states")]);case 3:return l=e.sent,r=Object(o.a)(l,2),d=r[0],_=r[1],e.abrupt("return",{place:d,placesStates:_});case 8:case"end":return e.stop()}}),e)})))()},mounted:function(){this.adsenseAddLoad()}}),r=n(12),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("main",[e("div",{staticClass:"t-main"},[e("section",[e("div",{staticClass:"o-hero-article",style:{"background-image":"url("+t.place[0].imageHero+")"}},[e("div",{staticClass:"o-hero-article__outer"},[e("div",{staticClass:"o-hero-article__inner"},[t.place[0].name?e("h1",{staticClass:"o-hero-article__headline"},[t._v(t._s(t.place[0].name))]):t._e()])])])]),t._v(" "),e("section",[e("div",{staticClass:"o-hot-info"},[e("div",{staticClass:"o-hot-info__outer"},[e("div",{staticClass:"o-hot-info__inner"},[e("div",{staticClass:"o-hot-info__items"},[e("div",{staticClass:"o-hot-info__item"},[e("h4",{staticClass:"o-hot-info__title"},[t._v("Počet států")]),t._v(" "),e("span",{staticClass:"o-hot-info__value"},[t._v(t._s(t.place[0].number_states))])]),t._v(" "),e("div",{staticClass:"o-hot-info__item"},[e("h4",{staticClass:"o-hot-info__title"},[t._v("Počet obyvatel na km2")]),t._v(" "),e("span",{staticClass:"o-hot-info__value"},[t._v(t._s(t.place[0].population_density))])])])])])])]),t._v(" "),e("div",{staticClass:"t-col2"},[e("div",{staticClass:"t-col2__content my-2"},[e("section",{staticClass:"t-section my-4"},[e("div",{staticClass:"t-section__inner"},[t._m(0),t._v(" "),e("div",{staticClass:"o-place-list"},[e("div",{staticClass:"o-place-list__outer"},[e("div",{staticClass:"o-place-list__items"},t._l(t.placesStates,(function(n){return e("div",{key:n.id,staticClass:"o-place-list__item"},[e("div",{staticClass:"o-place-list__item-inner"},[e("div",{staticClass:"o-place-list__text"},[e("h3",{staticClass:"o-place-list__title"},[e("NuxtLink",{staticClass:"o-place-list__title-link",attrs:{to:"/svet/stat/".concat(n.slug)}},[t._v(t._s(n.name))])],1)])])])})),0)])])])])]),t._v(" "),e("div",{staticClass:"t-col2__sidebar my-2"},[e("section",{staticClass:"t-section my-2"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"o-ad-sidebar-article-detail"},[e("ins",{staticClass:"adsbygoogle",style:t.adStyle,attrs:{"data-ad-client":t.adClient,"data-ad-slot":t.adSlot,"data-ad-format":t.adFormat,"data-full-width-responsive":t.adResponsive}})])])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"m-headline mb-2 text-align-center"},[t("h2",{staticClass:"m-headline__title"},[this._v("Státy")])])}],!1,null,null,null);e.default=component.exports}}]);