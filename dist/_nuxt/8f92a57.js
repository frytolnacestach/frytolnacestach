(window.webpackJsonp=window.webpackJsonp||[]).push([[134,18,24,55,62,64],{380:function(t,e,n){"use strict";n.r(e);var r={name:"OrganismsoAdGoogleSidebarComponent",props:{adStyle:{type:String,requred:!1,default:"display:block"},adClient:{type:String,requred:!1,default:"ca-pub-5217753750259737"},adSlot:{type:String,requred:!1,default:"5043852899"},adFormat:{type:String,requred:!1,default:"auto"},adResponsive:{type:String,requred:!1,default:"true"}},methods:{adsenseAddLoad:function(){var t=document.createElement("script");t.type="text/javascript",t.text="(adsbygoogle = window.adsbygoogle || []).push({});",document.getElementsByTagName("body")[0].appendChild(t)}},mounted:function(){this.adsenseAddLoad()}},o=n(2),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-ad-google-sidebar mt-2 hidden-print"},[e("div",{staticClass:"o-ad-google-sidebar__outer"},[e("div",{staticClass:"o-ad-google-sidebar__inner"},[e("div",{staticClass:"o-ad-google-sidebar__content"},[e("ins",{staticClass:"adsbygoogle",style:t.adStyle,attrs:{"data-ad-client":t.adClient,"data-ad-slot":t.adSlot,"data-ad-format":t.adFormat,"data-full-width-responsive":t.adResponsive}})])])])])}),[],!1,null,null,null);e.default=component.exports},384:function(t,e,n){"use strict";n.r(e);n(29);var r=n(23),o=(n(68),{name:"OrganismsoInformationBlockComponent",props:{styleThema:{type:String,required:!1},title:{type:String,required:!1},subtitle:{type:String,required:!1},perexWysiwyg:{type:String,required:!1},perexList:{type:Array,required:!1},perexListItemValueSubfix:{type:String,required:!1},perexInfo:{type:String,required:!1},authorName:{type:String,required:!1},authorLink:{type:String,required:!1},authorTarget:{type:String,required:!1}},methods:{formatDate:function(t){var e=t.split("-"),n=Object(r.a)(e,2),o=n[0],c=n[1];return new Date("".concat(c,"-").concat(o,"-01")).toLocaleDateString("cs",{month:"long",year:"numeric"})}}}),c=n(2),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{class:"o-information-block"+(t.styleThema?t.styleThema:"")},[e("div",{staticClass:"o-information-block__outer"},[e("div",{staticClass:"o-information-block__inner"},[t.title?e("h2",{staticClass:"o-information-block__title",class:{"-m0":t.subtitle}},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.subtitle?e("span",{staticClass:"o-information-block__title-info"},[t._v(t._s(t.subtitle))]):t._e(),t._v(" "),e("div",{staticClass:"o-information-block__perex"},[t.perexWysiwyg?e("div",{staticClass:"o-information-block_wysiwyg",domProps:{innerHTML:t._s(t.perexWysiwyg)}}):t._e(),t._v(" "),t.perexList?e("div",{staticClass:"o-information-block__list"},[e("ul",{staticClass:"o-information-block__list-ul"},t._l(t.perexList,(function(n){return e("li",{key:n.name,staticClass:"o-information-block__list-li"},[e("h3",{staticClass:"o-information-block__list-h3"},[t._v(t._s(n.name))]),t._v(" "),e("span",{staticClass:"o-information-block__list-span"},[t._v(t._s(n.value)+" "+t._s(t.perexListItemValueSubfix))]),t._v(" "),e("i",{staticClass:"o-information-block__list-info"},[t._v("("+t._s(t.formatDate(n.date_update))+")")])])})),0)]):t._e(),t._v(" "),t.perexInfo?e("i",{staticClass:"o-information-block__info"},[t._v(t._s(t.perexInfo))]):t._e(),t._v(" "),t.authorName?e("div",{staticClass:"o-information-block__author"},[e("i",{staticClass:"m-author"},[t._v("zdroj. "),t.authorLink?e("a",{staticClass:"m-author__link",attrs:{href:t.authorLink,target:t.authorTarget}},[t._v(t._s(t.authorName))]):e("span",{staticClass:"m-author__span"},[t._v(t._s(t.authorName))])])]):t._e()])])])])}),[],!1,null,null,null);e.default=component.exports},392:function(t,e,n){"use strict";n.r(e);n(29);var r={name:"MoleculesmNavBreadcrumbsFoodComponent",props:{links:{type:Array,required:!0},item:{type:Object,required:!0}}},o=n(2),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"m-nav-breadcrumbs-item"},[e("div",{staticClass:"m-nav-breadcrumbs-item__outer"},[e("div",{staticClass:"m-nav-breadcrumbs-item__inner"},[e("ul",{staticClass:"m-nav-breadcrumbs-item__items"},[t._l(t.links,(function(n){return e("li",{key:n.id,staticClass:"m-nav-breadcrumbs-item__item"},["link"===n.status?e("NuxtLink",{staticClass:"m-nav-breadcrumbs-item__link",attrs:{to:n.url}},[t._v(t._s(n.name))]):"span"===n.status?e("span",{staticClass:"m-nav-breadcrumbs-item__span"},[t._v(t._s(n.name))]):t._e()],1)})),t._v(" "),t.item?e("li",{staticClass:"m-nav-breadcrumbs-item__item"},[e("span",{staticClass:"m-nav-breadcrumbs-item__span"},[t._v(t._s(t.item.name))])]):t._e()],2)])])])}),[],!1,null,null,null);e.default=component.exports},403:function(t,e,n){"use strict";n.r(e);n(241),n(13),n(68),n(29);var r={name:"OrganismsoHeroItemComponent",props:{item:{type:Array,required:!0},images:{type:Array,required:!0}}},o=n(2),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-hero-item-detail"},[e("div",{staticClass:"o-hero-item-detail__container"},[e("div",{staticClass:"o-hero-item-detail__image loading-image -green"},[t.images&&t.images.find((function(image){return image.id===t.item[0].id_image_hero}))?e("div",{staticClass:"o-hero-item-detail__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-hero-item-detail__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 330px, (max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1920px","data-srcset":"\n                        https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===t.item[0].id_image_cover})).source+"h-"+t.images.find((function(image){return image.id===t.item[0].id_image_cover})).name,"-334.webp 330w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.item[0].id_image_cover})).source+"h-"+t.images.find((function(image){return image.id===t.item[0].id_image_cover})).name,"-360.webp 354w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.item[0].id_image_cover})).source+"h-"+t.images.find((function(image){return image.id===t.item[0].id_image_cover})).name,"-360.webp 360w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.item[0].id_image_cover})).source+"h-"+t.images.find((function(image){return image.id===t.item[0].id_image_cover})).name,"-420.webp 420w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.item[0].id_image_cover})).source+"h-"+t.images.find((function(image){return image.id===t.item[0].id_image_cover})).name,"-536.webp 536w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.item[0].id_image_cover})).source+"h-"+t.images.find((function(image){return image.id===t.item[0].id_image_cover})).name,"-728.webp 728w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.item[0].id_image_cover})).source+"h-"+t.images.find((function(image){return image.id===t.item[0].id_image_cover})).name,"-952.webp 952w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.item[0].id_image_cover})).source+"h-"+t.images.find((function(image){return image.id===t.item[0].id_image_cover})).name,"-780.webp 780w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.item[0].id_image_cover})).source+"h-"+t.images.find((function(image){return image.id===t.item[0].id_image_cover})).name,"-900.webp 900w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.item[0].id_image_cover})).source+"h-"+t.images.find((function(image){return image.id===t.item[0].id_image_cover})).name,"-1248.webp 1248w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.item[0].id_image_cover})).source+"h-"+t.images.find((function(image){return image.id===t.item[0].id_image_cover})).name,"-668-2x.webp 660w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.item[0].id_image_cover})).source+"h-"+t.images.find((function(image){return image.id===t.item[0].id_image_cover})).name,"-720-2x.webp 708w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.item[0].id_image_cover})).source+"h-"+t.images.find((function(image){return image.id===t.item[0].id_image_cover})).name,"-720-2x.webp 720w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.item[0].id_image_cover})).source+"h-"+t.images.find((function(image){return image.id===t.item[0].id_image_cover})).name,"-840-2x.webp 840w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.item[0].id_image_cover})).source+"h-"+t.images.find((function(image){return image.id===t.item[0].id_image_cover})).name,"-1072-2x.webp 1072w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.item[0].id_image_cover})).source+"h-"+t.images.find((function(image){return image.id===t.item[0].id_image_cover})).name,"-1456-2x.webp 1456w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.item[0].id_image_cover})).source+"h-"+t.images.find((function(image){return image.id===t.item[0].id_image_cover})).name,"-1904-2x.webp 1904w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.item[0].id_image_cover})).source+"h-"+t.images.find((function(image){return image.id===t.item[0].id_image_cover})).name,"-1560-2x.webp 1560w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.item[0].id_image_cover})).source+"h-"+t.images.find((function(image){return image.id===t.item[0].id_image_cover})).name,"-1800-2x.webp 1800w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.item[0].id_image_cover})).source+"h-"+t.images.find((function(image){return image.id===t.item[0].id_image_cover})).name,"-2496-2x.webp 2496w\n                        "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===t.item[0].id_image_cover})).source+t.images.find((function(image){return image.id===t.item[0].id_image_cover})).name,".webp"),alt:t.item[0].name?t.item[0].name:"Úvodní obrázek",preload:!0}})]):e("div",{staticClass:"o-hero-item-detail__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-hero-item-detail__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 330px, (max-width: 374px) 374px, (max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1920px","data-srcset":"\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-334.webp 330w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-360.webp 354w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-360.webp 360w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-420.webp 420w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-536.webp 536w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-728.webp 728w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-952.webp 952w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-780.webp 780w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-900.webp 900w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-1248.webp 1248w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-668-2x.webp 660w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-720-2x.webp 708w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-720-2x.webp 720w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-840-2x.webp 840w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-1072-2x.webp 1072w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-1456-2x.webp 1456w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-1904-2x.webp 1904w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-1560-2x.webp 1560w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-1800-2x.webp 1800w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-2496-2x.webp 2496w\n                        ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:t.item[0].name?t.item[0].name:"Úvodní obrázek",preload:!0}})]),t._v(" "),e("div",{staticClass:"o-hero-item-detail__outer"},[e("div",{staticClass:"o-hero-item-detail__inner"},[t.item[0].name?e("h1",{staticClass:"o-hero-item-detail__headline"},[t._v(t._s(t.item[0].name))]):t._e()])])])])])}),[],!1,null,null,null);e.default=component.exports},548:function(t,e,n){"use strict";n.r(e);n(29);var r={name:"OrganismsoItemStatesComponent",props:{items:{type:Array,required:!0},itemName:{type:String,required:!0},text:{type:String,required:!0}}},o=n(2),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-item-states"},[e("div",{staticClass:"o-item-states__outer"},[e("div",{staticClass:"o-item-states__inner"},[e("h3",{staticClass:"o-item-states__headline"},[t._v(t._s(t.text)+" "+t._s(t.itemName)+"?")]),t._v(" "),e("ul",{staticClass:"o-item-states__items"},t._l(t.items,(function(n){return e("li",{key:n.name,staticClass:"o-item-states__item"},[e("NuxtLink",{staticClass:"o-item-states__link",attrs:{to:"/svet/stat/".concat(n.slug),"aria-label":"Čti více o státu ".concat(n.name)}},[t._v(t._s(n.name))])],1)})),0)])])])}),[],!1,null,null,null);e.default=component.exports},716:function(t,e,n){"use strict";n.r(e);n(29),n(35),n(46);var r=n(10),o=(n(54),n(20),n(70),n(27),n(241),n(13),n(68),n(44),n(113),n(43),n(69),n(392)),c=n(380),m=n(548),d=n(403),l=n(384),_={name:"FaunaSlugPage",components:{mNavBreadcrumbsItem:o.default,oAdGoogleSidebar:c.default,oItemStates:m.default,oHeroItemDetail:d.default,oInformationBlock:l.default},data:function(){return{fauna:this.fauna,imageFauna:this.imageFauna,placesStates:this.placesStates,imagesStates:this.imagesStates,mNavBreadcrumbsFaunaArray:[{id:1,name:"Fauna",url:"/fauna",status:"link"}]}},head:function(){var t=this;return{title:"".concat(this.fauna[0].name?this.fauna[0].name:"Fauna"," | Cestovatelský portál Frytol na cestách"),meta:[{hid:"description",name:"description",content:"".concat(this.fauna[0].description?this.fauna[0].description.slice(0,this.fauna[0].description.lastIndexOf(" ",150)).replace(/<\/?[^>]+(>|$)/g,""):this.fauna[0].name)},{name:"keywords",content:"".concat(this.fauna[0].name+", Fauna, Živočichové, informace o živočichách, plánuj cestu, cestovatelský portál, cestování, svět")},{property:"og:image",content:"".concat(this.fauna[0].id_image_hero?"https://image.frytolnacestach.cz/storage/"+this.imageFauna.find((function(image){return image.id===t.fauna[0].id_image_hero})).source+this.imageFauna.find((function(image){return image.id===t.fauna[0].id_image_hero})).name+".jpg":"https://image.frytolnacestach.cz/storage/main/og-default.png")},{hid:"og:title",content:"".concat(this.fauna[0].name?this.fauna[0].name:"Flóra"," | Cestovatelský portál Frytol na cestách")},{hid:"og:description",content:"".concat(this.fauna[0].description?this.fauna[0].description.slice(0,this.fauna[0].description.lastIndexOf(" ",150)).replace(/<\/?[^>]+(>|$)/g,""):this.fauna[0].name?this.fauna[0].name:"Fauna")},{hid:"og:url",content:"".concat("https://frytolnacestach.cz","/fauna/").concat(this.fauna[0].slug)},{hid:"og:type",content:"website"}]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,data,c,m,d,l,_,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.$axios,r=t.params,o=!1,data=null;case 3:if(o){e.next=31;break}return e.prev=4,e.next=7,n.$get("https://api.frytolnacestach.cz/api/fauna/".concat(r.slug));case 7:return c=e.sent,e.next=10,n.$get("https://api.frytolnacestach.cz/api/image-id/".concat(c[0].id_image_hero));case 10:return m=e.sent,d=c[0].ids_states.map((function(t){return t.id})),e.next=14,n.$get("https://api.frytolnacestach.cz/api/places-states-array?id=".concat(d.join(",")));case 14:return l=e.sent,_=l.map((function(t){return t.id_image_cover})).filter((function(t){return null!==t&&""!==t})),e.next=18,n.$get("https://api.frytolnacestach.cz/api/images-array?id=".concat(_.join(",")));case 18:f=e.sent,data={fauna:c,imageFauna:m,placesStates:l,imagesStates:f},o=!0,e.next=29;break;case 23:return e.prev=23,e.t0=e.catch(4),console.log("API ERROR - FAUNA DETAIL: ".concat(r.slug)),console.error(e.t0),e.next=29,new Promise((function(t){return setTimeout(t,1e3)}));case 29:e.next=3;break;case 31:return e.abrupt("return",data);case 32:case"end":return e.stop()}}),e,null,[[4,23]])})))()}},f=n(2),component=Object(f.a)(_,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"t-main -green -pt-menu",attrs:{role:"main"}},[e("section",{staticClass:"t-section -px-world mt-2 -p0"},[e("div",{staticClass:"t-section__inner"},[e("mNavBreadcrumbsItem",{attrs:{links:t.mNavBreadcrumbsFaunaArray,item:t.fauna[0]}})],1)]),t._v(" "),e("section",{staticClass:"t-section -px-world -p0"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"t-grid -food-hero"},[e("div",{staticClass:"t-grid__section -hero-food"},[e("oHeroItemDetail",{attrs:{item:t.fauna,images:t.imageFauna}})],1),t._v(" "),e("div",{staticClass:"t-grid__section -states"},[e("oItemStates",{attrs:{items:t.placesStates,itemName:t.fauna[0].name,text:"Kde žije"}})],1)])])]),t._v(" "),e("section",{staticClass:"t-section -px-world -p0"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"t-grid -world-content-with-ad"},[e("div",{staticClass:"t-grid__section -content"},[t.fauna[0].description?e("section",{staticClass:"t-section"},[e("div",{staticClass:"t-section__inner"},[e("oInformationBlock",{attrs:{title:t.fauna[0].name?t.fauna[0].name:"",perexWysiwyg:t.fauna[0].description,authorName:"ChatGPT",authorLink:"https://chat.openai.com/chat",authorTarget:"_blank"}})],1)]):t._e()]),t._v(" "),e("div",{staticClass:"t-grid__section -ad"},[e("section",{staticClass:"t-section -px-world my-2"},[e("div",{staticClass:"t-section__inner"},[e("oAdGoogleSidebar")],1)])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);