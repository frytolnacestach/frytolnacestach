(window.webpackJsonp=window.webpackJsonp||[]).push([[45,126],{606:function(e,t,n){"use strict";n.r(t);var c={name:"SkeletonoCoverTitleItemComponent",props:{styleThema:{type:String,required:!0}}},o=n(2),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-o-cover-title-item"},[t("div",{staticClass:"skeleton-o-cover-title-item__outer"},[t("div",{staticClass:"skeleton-o-cover-title-item__items"},e._l(15,(function(n){return t("div",{key:n,staticClass:"skeleton-o-cover-title-item__item"},[t("div",{staticClass:"skeleton-o-cover-title-item__content"},[t("div",{class:"skeleton-o-cover-title-item__image loading-image"+e.styleThema})]),e._v(" "),t("div",{staticClass:"skeleton-o-cover-title-item__name"},[t("div",{class:"skeleton-o-cover-title-item__name-link loading-image"+e.styleThema})])])})),0)])])}),[],!1,null,null,null);t.default=component.exports},631:function(e,t,n){"use strict";n.r(t);n(252),n(12),n(57),n(25);var c={name:"OrganismsoCoverTitleItemComponent",components:{skeletonoCoverTitleItem:n(606).default},props:{items:{type:Array,required:!0},images:{type:Array,required:!0},type:{type:String,required:!0},skeleton:{type:Boolean,required:!1}}},o=n(2),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[null===e.items&&!0===e.skeleton?t("skeletonoCoverTitleItem",{attrs:{styleThema:" -skeleton-green"}}):e._e(),e._v(" "),null!==e.items&&!0!==e.skeleton?t("client-only",[t("div",{staticClass:"o-cover-title-item"},[t("div",{staticClass:"o-cover-title-item__outer"},[t("div",{staticClass:"o-cover-title-item__items"},e._l(e.items,(function(n){return t("div",{key:n.id,staticClass:"o-cover-title-item__item"},[t("div",{staticClass:"o-cover-title-item__content"},[t("div",{staticClass:"o-cover-title-item__image loading-image -green"},[e.images&&e.images.find((function(image){return image.id===n.id_image_cover}))?t("div",{staticClass:"o-cover-title-item__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-cover-title-item__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px","data-srcset":"\n                                            https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-172.webp 160w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-172.webp 172w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 186w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-224.webp 216w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-274.webp 274w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-240.webp 230w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-224.webp 224w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-224.webp 220w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-274.webp 256w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-360.webp 360w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-344-2x.webp 320w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-344-2x.webp 344w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 372w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-448-2x.webp 432w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-548-2x.webp 548w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-480-2x.webp 460w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-448-2x.webp 448w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-448-2x.webp 440w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-548-2x.webp 512w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-720-2x.webp 720w\n                                            "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,".webp"),alt:n.name}})]):t("div",{staticClass:"o-cover-title-item__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-cover-title-item__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px","data-srcset":"\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-172.webp 160w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-172.webp 172w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 186w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-224.webp 216w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-274.webp 274w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-240.webp 230w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-224.webp 224w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-224.webp 220w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-274.webp 256w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-360.webp 360w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-344-2x.webp 320w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-344-2x.webp 344w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 372w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-448-2x.webp 432w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-548-2x.webp 548w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-480-2x.webp 460w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-448-2x.webp 448w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-448-2x.webp 440w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-548-2x.webp 512w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-720-2x.webp 720w\n                                            ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:n.name}})]),e._v(" "),t("NuxtLink",{staticClass:"o-cover-title-item__link",attrs:{to:"/".concat(e.type,"/").concat(n.slug),"aria-label":"Čti více o ".concat(n.name)}})],1)]),e._v(" "),t("h2",{staticClass:"o-cover-title-item__name"},[t("NuxtLink",{staticClass:"o-cover-title-item__name-link",attrs:{to:"/".concat(e.type,"/").concat(n.slug),"aria-label":"Čti více o ".concat(n.name)}},[e._v(e._s(n.name))])],1)])})),0)])])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);