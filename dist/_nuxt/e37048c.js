(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{327:function(t,e,o){"use strict";o.r(e);o(29);var n=o(9),r=(o(64),{name:"PageBlogSlug",props:{adStyle:{type:String,requred:!1,default:"display:block"},adClient:{type:String,requred:!1,default:"ca-pub-5217753750259737"},adSlot:{type:String,requred:!1,default:"5043852899"},adFormat:{type:String,requred:!1,default:"auto"},adResponsive:{type:String,requred:!1,default:"true"}},methods:{adsenseAddLoad:function(){var t=document.createElement("script");t.type="text/javascript",t.text="(adsbygoogle = window.adsbygoogle || []).push({});",document.getElementsByTagName("body")[0].appendChild(t)},formatDate:function(t){return new Date(t).toLocaleDateString("cs",{year:"numeric",month:"long",day:"numeric"})}},data:function(){return{post:""}},head:function(){return{title:"".concat(this.post[0].title," | Frytol na cestách"),meta:[{hid:"description",name:"description",content:"".concat(this.post[0].perex)},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/og/og-".concat(this.post[0].slug,".jpg")}]}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$axios,n=t.params,e.next=3,o.$get("https://frytolnacestach-api.vercel.app/api/post/".concat(n.slug));case 3:return r=e.sent,e.abrupt("return",{post:r});case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){this.adsenseAddLoad()}}),_=o(12),component=Object(_.a)(r,(function(){var t=this,e=t._self._c;return e("main",[e("div",{staticClass:"t-main"},[e("section",[e("div",{staticClass:"o-hero-article",style:{"background-image":"url("+t.post[0].imageHero+")"}},[e("div",{staticClass:"o-hero-article__outer"},[e("div",{staticClass:"o-hero-article__inner"},[t.post[0].title?e("h1",{staticClass:"o-hero-article__headline"},[t._v(t._s(t.post[0].title))]):t._e(),t._v(" "),t.post[0].perex?e("p",{staticClass:"o-hero-article__perex"},[t._v(t._s(t.post[0].perex))]):t._e(),t._v(" "),t.post[0].date?e("span",{staticClass:"o-hero-article__date"},[t._v(t._s(t.formatDate(t.post[0].date))+" "),t.post[0].dateUpdate?e("span",[t._v("(aktualizace "+t._s(t.formatDate(t.post[0].dateUpdate))+")")]):t._e()]):t._e()])])])]),t._v(" "),t.post[0].locations?e("section",[e("div",{staticClass:"o-hot-info"},[e("div",{staticClass:"o-hot-info__outer"},[e("div",{staticClass:"o-hot-info__inner"},[e("div",{staticClass:"o-hot-info__items"},t._l(t.post[0].locations,(function(o){return e("div",{key:o.type,staticClass:"o-hot-info__item"},[e("h4",{staticClass:"o-hot-info__title"},[t._v(t._s(o.type))]),t._v(" "),e("span",{staticClass:"o-hot-info__value"},[t._v(t._s(o.name))])])})),0)])])])]):t._e(),t._v(" "),e("div",{staticClass:"t-col2"},[e("div",{staticClass:"t-col2__content my-2"},[t.post[0].textOpener?e("section",{staticClass:"t-section pt-2"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"o-opener-text"},[e("p",{staticClass:"o-opener-text__perex"},[t._v("\n                                "+t._s(t.post[0].textOpener)+"\n                            ")])])])]):t._e(),t._v(" "),t.post[0].textAuthor?e("section",{staticClass:"t-section pb-2"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"o-wysiwyg",domProps:{innerHTML:t._s(t.post[0].textAuthor)}})])]):t._e(),t._v(" "),t.post[0].urlYoutube?e("section",{staticClass:"t-section py-2"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"o-youtube"},[e("div",{staticClass:"o-youtube__outer"},[e("div",{staticClass:"o-youtube__inner"},[e("div",{staticClass:"o-youtube__video"},[e("iframe",{staticClass:"o-youtube__video-iframe",attrs:{src:t.post[0].urlYoutube,frameborder:"0",allowfullscreen:""}})])])])])])]):t._e(),t._v(" "),t.post[0].urlMap?e("section",{staticClass:"t-section t-section--hidden-desktop my-2"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"o-map-mapy"},[e("div",{staticClass:"o-map-mapy__outer"},[e("div",{staticClass:"o-map-mapy__inner"},[e("div",{staticClass:"o-map-mapy__map"},[e("a",{staticClass:"o-map-mapy__map-link",attrs:{href:t.post[0].urlMap,target:"_blank"}},[e("img",{staticClass:"o-map-mapy__map-image",attrs:{src:t.post[0].imageMap}})])]),t._v(" "),e("a",{staticClass:"o-map-mapy__link",attrs:{href:t.post[0].urlMap,target:"_blank"}},[t._v("zobrazit mapu na mapy.cz")])])])])])]):t._e(),t._v(" "),t.post[0].textWiki?e("section",{staticClass:"t-section py-2"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"o-wiki"},[e("div",{staticClass:"o-wiki__outer"},[e("div",{staticClass:"o-wiki__inner"},[e("h2",{staticClass:"o-wiki__title"},[t._v("Wikipedia")]),t._v(" "),e("div",{staticClass:"o-wiki__perex text-align-center-mobile text-align-left-desktop"},[e("div",{staticClass:"o-wysiwyg",domProps:{innerHTML:t._s(t.post[0].textWiki)}}),t._v(" "),e("div",{staticClass:"o-wiki__author"},[e("i",{staticClass:"m-author"},[t._v("zdroj. "),e("a",{staticClass:"m-author__link",attrs:{href:t.post[0].urlWiki,target:"_blank"}},[t._v("Wikipedia")])])])])])])])])]):t._e(),t._v(" "),t.post[0].travels?e("section",{staticClass:"t-section py-2"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"o-transport"},[e("div",{staticClass:"o-transport__outer"},[e("div",{staticClass:"o-transport__inner"},[e("h2",{staticClass:"o-transport__title"},[t._v("Jak se sem dostat")]),t._v(" "),e("div",{staticClass:"o-transport__items"},t._l(t.post[0].travels,(function(o){return e("div",{key:o.name,staticClass:"o-transport__item"},[e("div",{staticClass:"o-transport__icon"},[e("div",{class:"o-transport__icon-file o-transport__icon-file--"+o.icon})]),t._v(" "),e("div",{staticClass:"o-transport__text"},[e("h4",{staticClass:"o-transport__name"},[t._v(t._s(o.name))]),t._v(" "),e("p",{staticClass:"o-transport__text"},[t._v(t._s(o.text))])])])})),0)])])])])]):t._e(),t._v(" "),t.post[0].prices?e("section",{staticClass:"t-section py-2"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"o-trip-information o-trip-information--bg-brand1-a"},[e("div",{staticClass:"o-trip-information__outer"},[e("div",{staticClass:"o-trip-information__inner"},[e("h2",{staticClass:"o-trip-information__title"},[t._v("Ceny")]),t._v(" "),e("p",{staticClass:"o-trip-information__perex"},[t._v(t._s(t.post[0].perexPrice))]),t._v(" "),e("div",{staticClass:"o-trip-information__items"},t._l(t.post[0].prices,(function(o){return e("div",{key:o.name,staticClass:"o-trip-information__item"},[e("h4",{staticClass:"o-trip-information__name"},[t._v(t._s(o.name)),e("span",{staticClass:"o-trip-information__name-sub"},[t._v(" "+t._s(o.subname))])]),t._v(" "),e("span",{staticClass:"o-trip-information__value"},[t._v(t._s(o.value))])])})),0)])])])])]):t._e(),t._v(" "),t.post[0].triplengths?e("section",{staticClass:"t-section py-2"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"o-trip-information o-trip-information--bg-brand2-a"},[e("div",{staticClass:"o-trip-information__outer"},[e("div",{staticClass:"o-trip-information__inner"},[e("h2",{staticClass:"o-trip-information__title"},[t._v("Délka výletu")]),t._v(" "),e("p",{staticClass:"o-trip-information__perex"},[t._v(t._s(t.post[0].perexTriplength))]),t._v(" "),e("div",{staticClass:"o-trip-information__items"},t._l(t.post[0].triplengths,(function(o){return e("div",{key:o.name,staticClass:"o-trip-information__item"},[e("h4",{staticClass:"o-trip-information__name"},[t._v(t._s(o.name)),e("span",{staticClass:"o-trip-information__name-sub"},[t._v(" "+t._s(o.subname))])]),t._v(" "),e("span",{staticClass:"o-trip-information__value"},[t._v(t._s(o.value))])])})),0)])])])])]):t._e(),t._v(" "),t.post[0].times?e("section",{staticClass:"t-section py-2"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"o-trip-information o-trip-information--bg-brand2-a"},[e("div",{staticClass:"o-trip-information__outer"},[e("div",{staticClass:"o-trip-information__inner"},[e("h2",{staticClass:"o-trip-information__title"},[t._v("Časová náročnost")]),t._v(" "),e("p",{staticClass:"o-trip-information__perex"},[t._v(t._s(t.post[0].perexTime))]),t._v(" "),e("div",{staticClass:"o-trip-information__items"},t._l(t.post[0].times,(function(time){return e("div",{key:time.name,staticClass:"o-trip-information__item"},[e("h4",{staticClass:"o-trip-information__name"},[t._v(t._s(time.name)),e("span",{staticClass:"o-trip-information__name-sub"},[t._v(" "+t._s(time.subname))])]),t._v(" "),e("span",{staticClass:"o-trip-information__value"},[t._v(t._s(time.value))])])})),0)])])])])]):t._e(),t._v(" "),t.post[0].reviewText?e("section",{staticClass:"t-section py-2"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"o-review"},[e("div",{staticClass:"o-review__outer"},[e("div",{staticClass:"o-review__inner"},[e("h2",{staticClass:"o-review__title"},[t._v("Hodnocení")]),t._v(" "),e("p",{staticClass:"o-review__perex"},[t._v("\n                                        "+t._s(t.post[0].reviewText)+"\n                                    ")]),t._v(" "),e("span",{staticClass:"o-review__number"},[t._v(t._s(t.post[0].reviewValue))])])])])])]):t._e(),t._v(" "),t.post[0].dateInformation?e("section",{staticClass:"t-section py-2"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"o-information"},[e("div",{staticClass:"o-information__outer"},[e("div",{staticClass:"o-information__inner"},[e("div",{staticClass:"o-information__text"},[e("p",{staticClass:"o-information__perex"},[t._v("\n                                            Informace jsou platné k "+t._s(t.formatDate(t.post[0].dateInformation))+". Jestli tu najdete informaci, která již není platná budu rád za nahlašení na email "),e("a",{attrs:{href:"mailto:frytolnacestach@gmail.com",target:"_blank"}},[t._v("frytolnacestach@gmail.com")])])])])])])])]):t._e()]),t._v(" "),e("div",{staticClass:"t-col2__sidebar my-2"},[t.post[0].urlMap?e("section",{staticClass:"t-section t-section--hidden-mobile my-2"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"o-sidebar-map-mapy"},[e("div",{staticClass:"o-sidebar-map-mapy__outer"},[e("div",{staticClass:"o-sidebar-map-mapy__inner"},[e("div",{staticClass:"o-sidebar-map-mapy__map"},[e("a",{staticClass:"o-sidebar-map-mapy__map-link",attrs:{href:t.post[0].urlMap,target:"_blank"}},[e("img",{staticClass:"o-sidebar-map-mapy__map-image",attrs:{src:t.post[0].imageMap}})])]),t._v(" "),e("a",{staticClass:"o-sidebar-map-mapy__link",attrs:{href:t.post[0].urlMap,target:"_blank"}},[t._v("zobrazit mapu na mapy.cz")])])])])])]):t._e(),t._v(" "),t.post[0].tags?e("section",{staticClass:"t-section my-2"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"o-sidebar-tag__outer"},[e("div",{staticClass:"o-sidebar-tag__inner"},[e("div",{staticClass:"o-sidebar-tag__items"},t._l(t.post[0].tags,(function(o){return e("div",{key:o.name,staticClass:"o-sidebar-tag__item"},[e("a",{staticClass:"o-sidebar-tag__link"},[t._v(t._s(o.name))])])})),0)])])])]):t._e(),t._v(" "),e("section",{staticClass:"t-section my-2"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"o-ad-google-sidebar"},[e("ins",{staticClass:"adsbygoogle",style:t.adStyle,attrs:{"data-ad-client":t.adClient,"data-ad-slot":t.adSlot,"data-ad-format":t.adFormat,"data-full-width-responsive":t.adResponsive}})])])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);