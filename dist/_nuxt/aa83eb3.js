(window.webpackJsonp=window.webpackJsonp||[]).push([[225,9,17,19,26,45,69,75],{403:function(e,t,n){"use strict";n.r(t);var r={name:"MoleculesmHeadlineComponent",components:{aButtonFill:n(404).default},props:{title:{type:String,required:!1},titleValue:{type:String,required:!1},url:{type:String,required:!1},urlText:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1,default:"h2"},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"m-headline"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")+(e.styleGap?e.styleGap:"")},[t("div",{staticClass:"m-headline__outer"},[t("div",{staticClass:"m-headline__inner"},[e.title&&"h1"===e.styleSize?t("h1",{staticClass:"m-headline__title"},[e._v("\n                "+e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:"")+"\n                "),e.url?t("aButtonFill",{attrs:{url:e.url,text:e.urlText,styleThema:" -small -green",target:"internal"}}):e._e()],1):e._e(),e._v(" "),e.title&&"h2"===e.styleSize?t("h2",{staticClass:"m-headline__title"},[e._v("\n                "+e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:"")+"\n                "),e.url?t("aButtonFill",{attrs:{url:e.url,text:e.urlText,styleThema:" -small -green",target:"internal"}}):e._e()],1):e._e(),e._v(" "),e.perex?t("p",{staticClass:"m-headline__perex pt-1",domProps:{innerHTML:e._s(e.perex)}}):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},404:function(e,t,n){"use strict";n.r(t);var r={name:"AtomsaButtonFillComponent",props:{url:{type:String,required:!1},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return"internal"===e.target?t("NuxtLink",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print",attrs:{to:e.url}},[e._v(e._s(e.text))]):"span"===e.target?t("span",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print"},[e._v(e._s(e.text))]):t("a",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print",attrs:{href:e.url,target:"_blank",rel:"noopener"}},[e._v(e._s(e.text))])}),[],!1,null,null,null);t.default=component.exports},407:function(e,t,n){"use strict";n.r(t);var r={name:"OrganismsoAdGoogleSidebarComponent",props:{styleThema:{type:String,requred:!1},adStyle:{type:String,requred:!1,default:"display:block"},adClient:{type:String,requred:!1,default:"ca-pub-5217753750259737"},adSlot:{type:String,requred:!1,default:"5043852899"},adFormat:{type:String,requred:!1,default:"auto"},adResponsive:{type:String,requred:!1,default:"true"}},methods:{adsenseAddLoad:function(){var e=document.createElement("script");e.type="text/javascript",e.text="(adsbygoogle = window.adsbygoogle || []).push({});",document.getElementsByTagName("body")[0].appendChild(e)}},mounted:function(){this.adsenseAddLoad()}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"o-ad-google-sidebar"+(e.styleThema?e.styleThema:"")+" mt-2 hidden-print"},[t("div",{staticClass:"o-ad-google-sidebar__outer"},[t("div",{staticClass:"o-ad-google-sidebar__inner"},[t("div",{staticClass:"o-ad-google-sidebar__content"},[t("ins",{staticClass:"adsbygoogle",style:e.adStyle,attrs:{"data-ad-client":e.adClient,"data-ad-slot":e.adSlot,"data-ad-format":e.adFormat,"data-full-width-responsive":e.adResponsive}})])])])])}),[],!1,null,null,null);t.default=component.exports},417:function(e,t,n){"use strict";n.r(t);n(25);var r=n(18),o=(n(57),{name:"OrganismsoInformationBlockComponent",props:{styleThema:{type:String,required:!1},title:{type:String,required:!1},subtitle:{type:String,required:!1},perexWysiwyg:{type:String,required:!1},perexList:{type:Array,required:!1},perexListItemValueSubfix:{type:String,required:!1},perexInfo:{type:String,required:!1},authorName:{type:String,required:!1},authorLink:{type:String,required:!1},authorTarget:{type:String,required:!1}},methods:{formatDate:function(e){var t=e.split("-"),n=Object(r.a)(t,2),o=n[0],c=n[1];return new Date("".concat(c,"-").concat(o,"-01")).toLocaleDateString("cs",{month:"long",year:"numeric"})}}}),c=n(1),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{class:"o-information-block"+(e.styleThema?e.styleThema:"")},[t("div",{staticClass:"o-information-block__outer"},[t("div",{staticClass:"o-information-block__inner"},[e.title?t("h2",{staticClass:"o-information-block__title",class:{"-m0":e.subtitle}},[e._v(e._s(e.title))]):e._e(),e._v(" "),e.subtitle?t("span",{staticClass:"o-information-block__title-info"},[e._v(e._s(e.subtitle))]):e._e(),e._v(" "),t("div",{staticClass:"o-information-block__perex"},[e.perexWysiwyg?t("div",{class:"o-information-block__wysiwyg o-wysiwyg"+(e.styleThema?e.styleThema:""),domProps:{innerHTML:e._s(e.perexWysiwyg)}}):e._e(),e._v(" "),e.perexList?t("div",{staticClass:"o-information-block__list"},[t("ul",{staticClass:"o-information-block__list-ul"},e._l(e.perexList,(function(n){return t("li",{key:n.name,staticClass:"o-information-block__list-li"},[t("h3",{staticClass:"o-information-block__list-h3"},[e._v(e._s(n.name))]),e._v(" "),t("span",{staticClass:"o-information-block__list-span"},[e._v(e._s(n.value)+" "+e._s(e.perexListItemValueSubfix))]),e._v(" "),t("i",{staticClass:"o-information-block__list-info"},[e._v("("+e._s(e.formatDate(n.date_update))+")")])])})),0)]):e._e(),e._v(" "),e.perexInfo?t("i",{staticClass:"o-information-block__info"},[e._v(e._s(e.perexInfo))]):e._e(),e._v(" "),e.authorName?t("div",{staticClass:"o-information-block__author"},[t("i",{staticClass:"m-author"},[e.authorLink?t("a",{staticClass:"m-author__link",attrs:{href:e.authorLink,target:e.authorTarget}},[e._v(e._s(e.authorName))]):t("span",{staticClass:"m-author__span"},[e._v(e._s(e.authorName))])])]):e._e()])])])])}),[],!1,null,null,null);t.default=component.exports},430:function(e,t,n){"use strict";n.r(t);n(25);var r={name:"MoleculesmNavBreadcrumbsFoodComponent",props:{links:{type:Array,required:!0},item:{type:Object,required:!0}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("nav",{staticClass:"m-nav-breadcrumbs-item"},[t("div",{staticClass:"m-nav-breadcrumbs-item__outer"},[t("div",{staticClass:"m-nav-breadcrumbs-item__inner"},[t("ul",{staticClass:"m-nav-breadcrumbs-item__items"},[e._l(e.links,(function(n){return t("li",{key:n.id,staticClass:"m-nav-breadcrumbs-item__item"},["link"===n.status?t("NuxtLink",{staticClass:"m-nav-breadcrumbs-item__link",attrs:{to:n.url}},[e._v(e._s(n.name))]):"span"===n.status?t("span",{staticClass:"m-nav-breadcrumbs-item__span"},[e._v(e._s(n.name))]):e._e()],1)})),e._v(" "),e.item?t("li",{staticClass:"m-nav-breadcrumbs-item__item"},[t("span",{staticClass:"m-nav-breadcrumbs-item__span"},[e._v(e._s(e.item.name))])]):e._e()],2)])])])}),[],!1,null,null,null);t.default=component.exports},433:function(e,t,n){"use strict";n.r(t);n(253),n(12),n(57),n(25);var r={name:"OrganismsoHeroItemComponent",props:{item:{type:Array,required:!0},images:{type:Array,required:!0},showTitle:{type:Boolean,required:!1,default:!0}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-hero-item-detail"},[t("div",{staticClass:"o-hero-item-detail__container"},[t("div",{staticClass:"o-hero-item-detail__image loading-image -green"},[e.images&&e.images.find((function(image){return image.id===e.item[0].id_image_hero}))?t("div",{staticClass:"o-hero-item-detail__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-hero-item-detail__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 330px, (max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1920px","data-srcset":"\n                        https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===e.item[0].id_image_hero})).source+"h-"+e.images.find((function(image){return image.id===e.item[0].id_image_hero})).name,"-334.webp 330w,\n                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.item[0].id_image_hero})).source+"h-"+e.images.find((function(image){return image.id===e.item[0].id_image_hero})).name,"-360.webp 354w,\n                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.item[0].id_image_hero})).source+"h-"+e.images.find((function(image){return image.id===e.item[0].id_image_hero})).name,"-360.webp 360w,\n                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.item[0].id_image_hero})).source+"h-"+e.images.find((function(image){return image.id===e.item[0].id_image_hero})).name,"-420.webp 420w,\n                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.item[0].id_image_hero})).source+"h-"+e.images.find((function(image){return image.id===e.item[0].id_image_hero})).name,"-536.webp 536w,\n                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.item[0].id_image_hero})).source+"h-"+e.images.find((function(image){return image.id===e.item[0].id_image_hero})).name,"-728.webp 728w,\n                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.item[0].id_image_hero})).source+"h-"+e.images.find((function(image){return image.id===e.item[0].id_image_hero})).name,"-952.webp 952w,\n                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.item[0].id_image_hero})).source+"h-"+e.images.find((function(image){return image.id===e.item[0].id_image_hero})).name,"-780.webp 780w,\n                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.item[0].id_image_hero})).source+"h-"+e.images.find((function(image){return image.id===e.item[0].id_image_hero})).name,"-900.webp 900w,\n                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.item[0].id_image_hero})).source+"h-"+e.images.find((function(image){return image.id===e.item[0].id_image_hero})).name,"-1248.webp 1248w,\n                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.item[0].id_image_hero})).source+"h-"+e.images.find((function(image){return image.id===e.item[0].id_image_hero})).name,"-668-2x.webp 660w,\n                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.item[0].id_image_hero})).source+"h-"+e.images.find((function(image){return image.id===e.item[0].id_image_hero})).name,"-720-2x.webp 708w,\n                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.item[0].id_image_hero})).source+"h-"+e.images.find((function(image){return image.id===e.item[0].id_image_hero})).name,"-720-2x.webp 720w,\n                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.item[0].id_image_hero})).source+"h-"+e.images.find((function(image){return image.id===e.item[0].id_image_hero})).name,"-840-2x.webp 840w,\n                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.item[0].id_image_hero})).source+"h-"+e.images.find((function(image){return image.id===e.item[0].id_image_hero})).name,"-1072-2x.webp 1072w,\n                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.item[0].id_image_hero})).source+"h-"+e.images.find((function(image){return image.id===e.item[0].id_image_hero})).name,"-1456-2x.webp 1456w,\n                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.item[0].id_image_hero})).source+"h-"+e.images.find((function(image){return image.id===e.item[0].id_image_hero})).name,"-1904-2x.webp 1904w,\n                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.item[0].id_image_hero})).source+"h-"+e.images.find((function(image){return image.id===e.item[0].id_image_hero})).name,"-1560-2x.webp 1560w,\n                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.item[0].id_image_hero})).source+"h-"+e.images.find((function(image){return image.id===e.item[0].id_image_hero})).name,"-1800-2x.webp 1800w,\n                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.item[0].id_image_hero})).source+"h-"+e.images.find((function(image){return image.id===e.item[0].id_image_hero})).name,"-2496-2x.webp 2496w\n                        "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===e.item[0].id_image_hero})).source+e.images.find((function(image){return image.id===e.item[0].id_image_hero})).name,".webp"),alt:e.item[0].name?e.item[0].name:"Úvodní obrázek",preload:!0}})]):t("div",{staticClass:"o-hero-item-detail__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-hero-item-detail__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 330px, (max-width: 374px) 374px, (max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1920px","data-srcset":"\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-334.webp 330w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-360.webp 354w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-360.webp 360w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-420.webp 420w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-536.webp 536w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-728.webp 728w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-952.webp 952w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-780.webp 780w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-900.webp 900w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-1248.webp 1248w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-668-2x.webp 660w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-720-2x.webp 708w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-720-2x.webp 720w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-840-2x.webp 840w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-1072-2x.webp 1072w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-1456-2x.webp 1456w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-1904-2x.webp 1904w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-1560-2x.webp 1560w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-1800-2x.webp 1800w,\n                        https://image.frytolnacestach.cz/storage/_default/h-hero-2496-2x.webp 2496w\n                        ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:e.item[0].name?e.item[0].name:"Úvodní obrázek",preload:!0}})]),e._v(" "),e.showTitle?t("div",{staticClass:"o-hero-item-detail__outer"},[t("div",{staticClass:"o-hero-item-detail__inner"},[e.item[0].name?t("h1",{staticClass:"o-hero-item-detail__headline"},[e._v(e._s(e.item[0].name))]):e._e()])]):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},584:function(e,t,n){"use strict";n.r(t);n(253),n(12),n(57),n(25),n(58);var r={name:"OrganismsoCoverStatesComponent",props:{items:{type:Array,required:!0},images:{type:Array,required:!0}},head:function(){return this.items||null!==this.items?{script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"ItemList",name:"Státy výskytu",itemListElement:this.items.map((function(e,t){return{"@type":"ListItem",position:t+1,item:{"@id":"https://frytolnacestach.cz"+"/svet/stat/".concat(e.slug),name:e.name}}}))}}]}:{script:[]}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-cover-states"},[t("div",{staticClass:"o-cover-states__outer"},[t("div",{staticClass:"o-cover-states__items"},e._l(e.items,(function(n){return t("div",{key:n.id,staticClass:"o-cover-states__item"},[t("div",{staticClass:"o-cover-states__content"},[t("div",{staticClass:"o-cover-states__image loading-image -green"},[e.images&&e.images.find((function(image){return image.id===n.id_image_cover}))?t("div",{staticClass:"o-cover-states__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-cover-states__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 180px, (max-width: 459px) 210px, (max-width: 575px) 274px, (max-width: 767px) 240px, (max-width: 991px) 234px, (max-width: 1219px) 166px, (max-width: 1399px) 202px, 306px","data-srcset":"\n                                    https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-166.webp 160w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 172w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 180w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-210.webp 210w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-274.webp 274w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-240.webp 240w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-240.webp 234w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 166w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-210.webp 202w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-306.webp 306w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-232-2x.webp 320w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 344w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 360w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-420-2x.webp 420w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-548-2x.webp 548w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-480-2x.webp 480w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-480-2x.webp 468w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 332w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-420-2x.webp 404w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-612-2x.webp 612w\n                                    "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,".webp"),alt:n.name}})]):t("div",{staticClass:"o-cover-states__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-cover-states__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 180px, (max-width: 459px) 210px, (max-width: 575px) 274px, (max-width: 767px) 240px, (max-width: 991px) 234px, (max-width: 1219px) 166px, (max-width: 1399px) 202px, 306px","data-srcset":"\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-166.webp 160w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 172w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 180w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-210.webp 210w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-274.webp 274w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-240.webp 240w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-240.webp 234w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 166w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-210.webp 202w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-306.webp 306w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-232-2x.webp 320w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 344w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 360w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-420-2x.webp 420w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-548-2x.webp 548w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-480-2x.webp 480w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-480-2x.webp 468w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 332w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-420-2x.webp 404w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-612-2x.webp 612w\n                                    ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:n.name}})])]),e._v(" "),t("h3",{staticClass:"o-cover-states__name"},[e._v("\n                        "+e._s(n.name)+"\n                    ")]),e._v(" "),t("NuxtLink",{staticClass:"o-cover-states__link",attrs:{to:"/svet/stat/".concat(n.slug),"aria-label":"Čti více o jídle ".concat(n.name)}})],1)])})),0)])])}),[],!1,null,null,null);t.default=component.exports},813:function(e,t,n){"use strict";n.r(t);n(37),n(49),n(25);var r=n(9),o=(n(36),n(32),n(22),n(75),n(154),n(58),n(253),n(12),n(57),n(41),n(74),n(403)),c=n(430),m=n(407),d=n(584),l=n(433),h=n(417),_={name:"brandSlugPage",components:{mHeadline:o.default,mNavBreadcrumbsItem:c.default,oAdGoogleSidebar:m.default,oCoverStates:d.default,oHeroItemDetail:l.default,oInformationBlock:h.default},data:function(){return{brand:this.brand,imageBrand:this.imageBrand,placesStates:this.placesStates,imagesStates:this.imagesStates,mNavBreadcrumbsBrandArray:[{id:1,name:"Značka",url:"/znacka",status:"link"}]}},head:function(){var title,e,t,n,r,o,c,m=this;title="".concat(this.brand[0].name?this.brand[0].name:"brand"," | Cestovatelský portál Frytol na cestách"),e="".concat(this.brand[0].description?this.brand[0].description.replace(/<\/?[^>]+(>|$)/g,"").slice(0,this.brand[0].description.lastIndexOf(" ",160)):this.brand[0].name);var d="";return this.brand[0].seo_tags&&this.brand[0].seo_tags.length>0&&(d=", "+this.brand[0].seo_tags.map((function(e){return e.tag})).join(", ")),t=(this.brand[0].name?this.brand[0].name:"")+d+", brand, Živočichové, informace o živočichách, plánuj cestu, cestovatelský portál, cestování, svět",n="".concat(this.brand[0].id_image_hero?"https://image.frytolnacestach.cz/storage/"+this.imageBrand.find((function(image){return image.id===m.brand[0].id_image_hero})).source+this.imageBrand.find((function(image){return image.id===m.brand[0].id_image_hero})).name+".jpg":"https://image.frytolnacestach.cz/storage/main/og-default.png"),r=title,o=e,"website",{title:title,meta:[{hid:"title",name:"title",content:title},{hid:"description",name:"description",content:e},{name:"keywords",content:t},{hid:"og:type",content:"website"},{hid:"og:url",content:c="".concat("https://frytolnacestach.cz","/brand/").concat(this.brand[0].slug)},{hid:"og:title",content:r},{hid:"og:description",content:o},{property:"og:image",content:n},{name:"twitter:title",content:r},{name:"twitter:description",content:o},{name:"twitter:image",content:n},{name:"twitter:url",content:c}],link:[{rel:"canonical",href:c}],script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"Product",name:this.brand&&this.brand.length>0&&this.brand[0].name?this.brand[0].name:"",description:this.brand&&this.brand.length>0&&this.brand[0].description?this.brand[0].description.replace(/<\/?[^>]+(>|$)/g,""):"",image:this.imageBrand&&this.imageBrand.length>0&&this.imageBrand[0]&&this.imageBrand[0].id?"https://image.frytolnacestach.cz/storage/brands/"+this.imageBrand[0].name+".webp":""}}]}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,data,c,m,d,l,h,_;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.$axios,r=e.params,o=!1,data=null;case 3:if(o){t.next=31;break}return t.prev=4,t.next=7,n.$get("https://api.frytolnacestach.cz/api/brand/".concat(r.slug));case 7:return c=t.sent,t.next=10,n.$get("https://api.frytolnacestach.cz/api/image-id/".concat(c[0].id_image_hero));case 10:return m=t.sent,d=c[0].ids_states.map((function(e){return e.id})),t.next=14,n.$get("https://api.frytolnacestach.cz/api/places-states-array?id=".concat(d.join(",")));case 14:return l=t.sent,h=l.map((function(e){return e.id_image_cover})).filter((function(e){return null!==e&&""!==e})),t.next=18,n.$get("https://api.frytolnacestach.cz/api/images-array?id=".concat(h.join(",")));case 18:_=t.sent,data={brand:c,placesStates:l,imageBrand:m,imagesStates:_},o=!0,t.next=29;break;case 23:return t.prev=23,t.t0=t.catch(4),console.log("API ERROR - BRAND DETAIL: ".concat(r.slug)),console.error(t.t0),t.next=29,new Promise((function(e){return setTimeout(e,1e3)}));case 29:t.next=3;break;case 31:return t.abrupt("return",data);case 32:case"end":return t.stop()}}),t,null,[[4,23]])})))()}},f=n(1),component=Object(f.a)(_,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -green -pt-menu",attrs:{role:"main"}},[t("section",{staticClass:"t-section -px-world mt-2 -p0"},[t("div",{staticClass:"t-section__inner"},[t("mNavBreadcrumbsItem",{attrs:{links:e.mNavBreadcrumbsBrandArray,item:e.brand[0]}})],1)]),e._v(" "),t("section",{staticClass:"t-section -px-world -p0"},[t("div",{staticClass:"t-section__inner"},[t("div",{staticClass:"t-grid -world-content-with-ad"},[t("div",{staticClass:"t-grid__section -content"},[t("section",{staticClass:"t-section print-section"},[t("div",{staticClass:"t-section__inner"},[t("oHeroItemDetail",{attrs:{item:e.brand,images:e.imageBrand}})],1)]),e._v(" "),e.brand[0].description?t("section",{staticClass:"t-section"},[t("div",{staticClass:"t-section__inner"},[t("oInformationBlock",{attrs:{title:e.brand[0].name?e.brand[0].name:"",perexWysiwyg:e.brand[0].description,authorName:"ChatGPT",authorLink:"https://chat.openai.com/chat",authorTarget:"_blank"}})],1)]):e._e(),e._v(" "),e.placesStates?t("div",{staticClass:"t-section"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Výrobek "+e.brand[0].name+" se vyrábí v techto státech",styleThema:" -world",styleAlign:" -p-left",styleGap:" mb-2 mt-4"}}),e._v(" "),t("oCoverStates",{attrs:{items:e.placesStates,images:e.imagesStates}})],1)]):e._e()]),e._v(" "),t("div",{staticClass:"t-grid__section -ad"},[t("section",{staticClass:"t-section -px-world mt-4 mb-2"},[t("div",{staticClass:"t-section__inner"},[t("oAdGoogleSidebar",{attrs:{styleThema:" -green"}})],1)])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);