(window.webpackJsonp=window.webpackJsonp||[]).push([[74,9,12,31,37,38],{360:function(t,e,r){"use strict";r.r(e);var n={name:"OrganismsoAdGoogleSidebarComponent",props:{adStyle:{type:String,requred:!1,default:"display:block"},adClient:{type:String,requred:!1,default:"ca-pub-5217753750259737"},adSlot:{type:String,requred:!1,default:"5043852899"},adFormat:{type:String,requred:!1,default:"auto"},adResponsive:{type:String,requred:!1,default:"true"}},methods:{adsenseAddLoad:function(){var t=document.createElement("script");t.type="text/javascript",t.text="(adsbygoogle = window.adsbygoogle || []).push({});",document.getElementsByTagName("body")[0].appendChild(t)}},mounted:function(){this.adsenseAddLoad()}},o=r(2),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-ad-google-sidebar mt-2"},[e("div",{staticClass:"o-ad-google-sidebar__outer"},[e("div",{staticClass:"o-ad-google-sidebar__inner"},[e("div",{staticClass:"o-ad-google-sidebar__content"},[e("ins",{staticClass:"adsbygoogle",style:t.adStyle,attrs:{"data-ad-client":t.adClient,"data-ad-slot":t.adSlot,"data-ad-format":t.adFormat,"data-full-width-responsive":t.adResponsive}})])])])])}),[],!1,null,null,null);e.default=component.exports},362:function(t,e,r){"use strict";r.r(e);r(28);var n=r(23),o=(r(66),{name:"OrganismsoInformationBlockComponent",props:{styleThema:{type:String,required:!1},title:{type:String,required:!1},subtitle:{type:String,required:!1},perexWysiwyg:{type:String,required:!1},perexList:{type:Array,required:!1},perexListItemValueSubfix:{type:String,required:!1},perexInfo:{type:String,required:!1},authorName:{type:String,required:!1},authorLink:{type:String,required:!1},authorTarget:{type:String,required:!1}},methods:{formatDate:function(t){var e=t.split("-"),r=Object(n.a)(e,2),o=r[0],c=r[1];return new Date("".concat(c,"-").concat(o,"-01")).toLocaleDateString("cs",{month:"long",year:"numeric"})}}}),c=r(2),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{class:"o-information-block"+(t.styleThema?t.styleThema:"")},[e("div",{staticClass:"o-information-block__outer"},[e("div",{staticClass:"o-information-block__inner"},[t.title?e("h2",{staticClass:"o-information-block__title",class:{"-m0":t.subtitle}},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.subtitle?e("span",{staticClass:"o-information-block__title-info"},[t._v(t._s(t.subtitle))]):t._e(),t._v(" "),e("div",{staticClass:"o-information-block__perex"},[t.perexWysiwyg?e("div",{staticClass:"o-information-block_wysiwyg",domProps:{innerHTML:t._s(t.perexWysiwyg)}}):t._e(),t._v(" "),t.perexList?e("div",{staticClass:"o-information-block__list"},[e("ul",{staticClass:"o-information-block__list-ul"},t._l(t.perexList,(function(r){return e("li",{key:r.name,staticClass:"o-information-block__list-li"},[e("h3",{staticClass:"o-information-block__list-h3"},[t._v(t._s(r.name))]),t._v(" "),e("span",{staticClass:"o-information-block__list-span"},[t._v(t._s(r.value)+" "+t._s(t.perexListItemValueSubfix))]),t._v(" "),e("i",{staticClass:"o-information-block__list-info"},[t._v("("+t._s(t.formatDate(r.date_update))+")")])])})),0)]):t._e(),t._v(" "),t.perexInfo?e("i",{staticClass:"o-information-block__info"},[t._v(t._s(t.perexInfo))]):t._e(),t._v(" "),t.authorName?e("div",{staticClass:"o-information-block__author"},[e("i",{staticClass:"m-author"},[t._v("zdroj. "),t.authorLink?e("a",{staticClass:"m-author__link",attrs:{href:t.authorLink,target:t.authorTarget}},[t._v(t._s(t.authorName))]):e("span",{staticClass:"m-author__span"},[t._v(t._s(t.authorName))])])]):t._e()])])])])}),[],!1,null,null,null);e.default=component.exports},382:function(t,e,r){"use strict";r.r(e);r(28);var n={name:"MoleculesmNavBreadcrumbsFoodComponent",props:{links:{type:Array,required:!0},item:{type:Object,required:!0}}},o=r(2),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"m-nav-breadcrumbs-item"},[e("div",{staticClass:"m-nav-breadcrumbs-item__outer"},[e("div",{staticClass:"m-nav-breadcrumbs-item__inner"},[e("ul",{staticClass:"m-nav-breadcrumbs-item__items"},[t._l(t.links,(function(r){return e("li",{key:r.id,staticClass:"m-nav-breadcrumbs-item__item"},["link"===r.status?e("NuxtLink",{staticClass:"m-nav-breadcrumbs-item__link",attrs:{to:r.url}},[t._v(t._s(r.name))]):"span"===r.status?e("span",{staticClass:"m-nav-breadcrumbs-item__span"},[t._v(t._s(r.name))]):t._e()],1)})),t._v(" "),t.item?e("li",{staticClass:"m-nav-breadcrumbs-item__item"},[e("span",{staticClass:"m-nav-breadcrumbs-item__span"},[t._v(t._s(t.item.name))])]):t._e()],2)])])])}),[],!1,null,null,null);e.default=component.exports},383:function(t,e,r){"use strict";r.r(e);r(28);var n={name:"OrganismsoItemStatesComponent",props:{items:{type:Array,required:!0},itemName:{type:String,required:!0},text:{type:String,required:!0}}},o=r(2),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-item-states"},[e("div",{staticClass:"o-item-states__outer"},[e("div",{staticClass:"o-item-states__inner"},[e("h3",{staticClass:"o-item-states__headline"},[t._v(t._s(t.text)+" "+t._s(t.itemName)+"?")]),t._v(" "),e("ul",{staticClass:"o-item-states__items"},t._l(t.items,(function(r){return e("li",{key:r.name,staticClass:"o-item-states__item"},[e("NuxtLink",{staticClass:"o-item-states__link",attrs:{to:"/svet/stat/".concat(r.slug),"aria-label":"Čti více o státu ".concat(r.name)}},[t._v(t._s(r.name))])],1)})),0)])])])}),[],!1,null,null,null);e.default=component.exports},384:function(t,e,r){"use strict";r.r(e);r(226),r(13),r(66),r(28);var n={name:"OrganismsoHeroItemComponent",props:{item:{type:Array,required:!0},images:{type:Array,required:!0}}},o=r(2),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-hero-item-detail"},[e("div",{staticClass:"o-hero-item-detail__container"},[e("div",{staticClass:"o-hero-item-detail__image loading-image -green"},[t.images&&t.images.find((function(image){return image.id===t.item[0].id_image_hero}))?e("div",{staticClass:"o-hero-item-detail__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-hero-item-detail__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1920px","data-srcset":"\n                        https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===t.item[0].id_image_cover})).source+t.images.find((function(image){return image.id===t.item[0].id_image_cover})).name,"-374.webp 374w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.item[0].id_image_cover})).source+t.images.find((function(image){return image.id===t.item[0].id_image_cover})).name,"-575.webp 575w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.item[0].id_image_cover})).source+t.images.find((function(image){return image.id===t.item[0].id_image_cover})).name,"-767.webp 767w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.item[0].id_image_cover})).source+t.images.find((function(image){return image.id===t.item[0].id_image_cover})).name,"-991.webp 991w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.item[0].id_image_cover})).source+t.images.find((function(image){return image.id===t.item[0].id_image_cover})).name,"-1139.webp 1139w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.item[0].id_image_cover})).source+t.images.find((function(image){return image.id===t.item[0].id_image_cover})).name,"-1219.webp 1219w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.item[0].id_image_cover})).source+t.images.find((function(image){return image.id===t.item[0].id_image_cover})).name,"-1399.webp 1399w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.item[0].id_image_cover})).source+t.images.find((function(image){return image.id===t.item[0].id_image_cover})).name,"-1920.webp 1920w\n                        "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===t.item[0].id_image_cover})).source+t.images.find((function(image){return image.id===t.item[0].id_image_cover})).name,".webp"),alt:t.item[0].name?t.item[0].name:"Úvodní obrázek",preload:!0}})]):e("div",{staticClass:"o-hero-item-detail__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-hero-item-detail__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1920px","data-srcset":"\n                        https://image.frytolnacestach.cz/storage/_default/hero-374.webp 374w,\n                        https://image.frytolnacestach.cz/storage/_default/hero-575.webp 575w,\n                        https://image.frytolnacestach.cz/storage/_default/hero-767.webp 767w,\n                        https://image.frytolnacestach.cz/storage/_default/hero-991.webp 991w,\n                        https://image.frytolnacestach.cz/storage/_default/hero-1139.webp 1139w,\n                        https://image.frytolnacestach.cz/storage/_default/hero-1219.webp 1219w,\n                        https://image.frytolnacestach.cz/storage/_default/hero-1399.webp 1399w,\n                        https://image.frytolnacestach.cz/storage/_default/hero-1920.webp 1920w,\n                        https://image.frytolnacestach.cz/storage/_default/hero-748-2x.webp 748w,\n                        https://image.frytolnacestach.cz/storage/_default/hero-1150-2x.webp 1150w,\n                        https://image.frytolnacestach.cz/storage/_default/hero-1534-2x.webp 1534w,\n                        https://image.frytolnacestach.cz/storage/_default/hero-1982-2x.webp 1982w,\n                        https://image.frytolnacestach.cz/storage/_default/hero-2278-2x.webp 2278w,\n                        https://image.frytolnacestach.cz/storage/_default/hero-2438-2x.webp 2438w,\n                        https://image.frytolnacestach.cz/storage/_default/hero-2798-2x.webp 2798w,\n                        https://image.frytolnacestach.cz/storage/_default/hero-3840-2x.webp 3840w\n                        ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:t.item[0].name?t.item[0].name:"Úvodní obrázek",preload:!0}})]),t._v(" "),e("div",{staticClass:"o-hero-item-detail__outer"},[e("div",{staticClass:"o-hero-item-detail__inner"},[t.item[0].name?e("h1",{staticClass:"o-hero-item-detail__headline"},[t._v(t._s(t.item[0].name))]):t._e()])])])])])}),[],!1,null,null,null);e.default=component.exports},463:function(t,e,r){"use strict";r.r(e);r(28),r(35),r(46);var n=r(10),o=(r(54),r(22),r(67),r(27),r(226),r(13),r(66),r(44),r(113),r(43),r(68),r(382)),c=r(360),l=r(383),m=r(384),d=r(362),_={name:"FloraSlugPage",components:{mNavBreadcrumbsItem:o.default,oAdGoogleSidebar:c.default,oItemStates:l.default,oHeroItemDetail:m.default,oInformationBlock:d.default},data:function(){return{flora:this.flora,placesStates:this.placesStates,imageFlora:this.imageFlora,imagesStates:this.imagesStates,mNavBreadcrumbsFloraArray:[{id:1,name:"Flóra",url:"/flora",status:"link"}]}},head:function(){var t=this;return{title:"".concat(this.flora[0].name?this.flora[0].name:"Flóra"," | Frytol na cestách"),meta:[{hid:"description",name:"description",content:"".concat(this.flora[0].description?this.flora[0].description.slice(0,this.flora[0].description.lastIndexOf(" ",150)).replace(/<\/?[^>]+(>|$)/g,""):this.flora[0].name)},{name:"keywords",content:"".concat(this.flora[0].name+", Flóra, Rostoucí flóra, informace o rostlinách, plánuj cestu, cestovatelský portál, cestování, svět")},{property:"og:image",content:"".concat(this.flora[0].id_image_hero?"https://image.frytolnacestach.cz/storage/"+this.imageFlora.find((function(image){return image.id===t.flora[0].id_image_hero})).source+this.imageFlora.find((function(image){return image.id===t.flora[0].id_image_hero})).name+".jpg":"https://image.frytolnacestach.cz/storage/main/og-default.png")},{hid:"og:title",content:"".concat(this.flora[0].name?this.flora[0].name:"Flóra","  | Frytol na cestách")},{hid:"og:description",content:"".concat(this.flora[0].description?this.flora[0].description.slice(0,this.flora[0].description.lastIndexOf(" ",150)).replace(/<\/?[^>]+(>|$)/g,""):this.flora[0].name?this.flora[0].name:"Flóra")},{hid:"og:url",content:"".concat("https://frytolnacestach.cz","/flora/").concat(this.flora[0].slug)},{hid:"og:type",content:"website"}]}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,data,c,l,m,d,_,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.$axios,n=t.params,o=!1,data=null;case 3:if(o){e.next=31;break}return e.prev=4,e.next=7,r.$get("https://frytolnacestach-api.vercel.app/api/flora/".concat(n.slug));case 7:return c=e.sent,l=c[0].ids_states.map((function(t){return t.id})),e.next=11,r.$get("https://frytolnacestach-api.vercel.app/api/places-states-array?id=".concat(l.join(",")));case 11:return m=e.sent,d=m.map((function(t){return t.id_image_cover})).filter((function(t){return null!==t&&""!==t})),e.next=15,r.$get("https://frytolnacestach-api.vercel.app/api/image-id/".concat(c[0].id_image_hero));case 15:return _=e.sent,e.next=18,r.$get("https://frytolnacestach-api.vercel.app/api/images-array?id=".concat(d.join(",")));case 18:f=e.sent,data={flora:c,placesStates:m,imageFlora:_,imagesStates:f},o=!0,e.next=29;break;case 23:return e.prev=23,e.t0=e.catch(4),console.log("API ERROR - FLÓRA DETAIL: ".concat(n.slug)),console.error(e.t0),e.next=29,new Promise((function(t){return setTimeout(t,1e3)}));case 29:e.next=3;break;case 31:return e.abrupt("return",data);case 32:case"end":return e.stop()}}),e,null,[[4,23]])})))()}},f=r(2),component=Object(f.a)(_,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"t-main -green -pt-menu",attrs:{role:"main"}},[e("section",{staticClass:"t-section -px-world mt-2 -p0"},[e("div",{staticClass:"t-section__inner"},[e("mNavBreadcrumbsItem",{attrs:{links:t.mNavBreadcrumbsFloraArray,item:t.flora[0]}})],1)]),t._v(" "),e("section",{staticClass:"t-section -px-world -p0"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"t-grid -food-hero"},[e("div",{staticClass:"t-grid__section -hero-food"},[e("oHeroItemDetail",{attrs:{item:t.flora,images:t.imageFlora}})],1),t._v(" "),e("div",{staticClass:"t-grid__section -states"},[e("oItemStates",{attrs:{items:t.placesStates,itemName:t.flora[0].name,text:"Kde roste"}})],1)])])]),t._v(" "),e("section",{staticClass:"t-section -px-world -p0"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"t-grid -world-content-with-ad"},[e("div",{staticClass:"t-grid__section -content"},[t.flora[0].description?e("section",{staticClass:"t-section"},[e("div",{staticClass:"t-section__inner"},[e("oInformationBlock",{attrs:{title:t.flora[0].name?t.flora[0].name:"",perexWysiwyg:t.flora[0].description,authorName:"ChatGPT",authorLink:"https://chat.openai.com/chat",authorTarget:"_blank"}})],1)]):t._e()]),t._v(" "),e("div",{staticClass:"t-grid__section -ad"},[e("section",{staticClass:"t-section -px-world my-2"},[e("div",{staticClass:"t-section__inner"},[e("oAdGoogleSidebar")],1)])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);