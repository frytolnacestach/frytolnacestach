(window.webpackJsonp=window.webpackJsonp||[]).push([[107,133],{605:function(e,t,n){"use strict";n.r(t);var c={name:"SkeletonoUserListComponent",props:{styleThema:{type:String,required:!0}}},r=n(2),component=Object(r.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-o-user-list"},[t("div",{staticClass:"skeleton-o-user-list__outer"},[t("div",{staticClass:"skeleton-o-user-list__items"},e._l(20,(function(n){return t("div",{key:n,staticClass:"skeleton-o-user-list__item"},[t("div",{staticClass:"skeleton-o-user-list__content-outer"},[t("div",{staticClass:"skeleton-o-user-list__content-inner"},[t("div",{class:"skeleton-o-user-list__image loading-image"+e.styleThema})])])])})),0)])])}),[],!1,null,null,null);t.default=component.exports},628:function(e,t,n){"use strict";n.r(t);n(252),n(12),n(57),n(25);var c={name:"OrganismsoUserListComponent",components:{skeletonoUserList:n(605).default},props:{items:{type:Array,required:!0},images:{type:Array,required:!0},skeleton:{type:Boolean,required:!1}}},r=n(2),component=Object(r.a)(c,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[null===e.items&&!0===e.skeleton?t("skeletonoUserList",{attrs:{styleThema:" -skeleton-blue"}}):e._e(),e._v(" "),null!==e.items&&0!==e.items.length&&!0!==e.skeleton?t("client-only",[t("div",{staticClass:"o-user-list"},[t("div",{staticClass:"o-user-list__outer"},[t("div",{staticClass:"o-user-list__items"},e._l(e.items,(function(n){return t("div",{key:n.id,staticClass:"o-user-list__item"},[t("div",{staticClass:"o-user-list__content-outer"},[t("div",{staticClass:"o-user-list__content-inner"},[t("div",{staticClass:"o-user-list__image"},[e.images&&e.images.find((function(image){return image.id===n.id_image_cover}))?t("div",{staticClass:"o-user-list__image-lazyload loading-image -blue"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-user-list__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px","data-srcset":"\n                                                https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 160w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 172w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 186w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-230.webp 216w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-274.webp 274w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-230.webp 230w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-230.webp 224w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-230.webp 220w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-256.webp 256w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-360.webp 360w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 320w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 344w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 372w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-460-2x.webp 432w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-548-2x.webp 548w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-460-2x.webp 460w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-460-2x.webp 448w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-460-2x.webp 440w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-512-2x.webp 512w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-720-2x.webp 720w \n\n                                                "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,".webp"),alt:n.nickname}}),e._v(" "),t("NuxtLink",{staticClass:"o-user-list__image-link",attrs:{to:"/cestovatel/".concat(n.slug),"aria-label":"Čti více o cestovateli ".concat(n.nickname)}})],1):t("div",{staticClass:"o-user-list__image-lazyload loading-image -blue"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-user-list__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px","data-srcset":"\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 160w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 172w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 186w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-230.webp 216w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-274.webp 274w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-230.webp 230w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-230.webp 224w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-230.webp 220w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-256.webp 256w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-360.webp 360w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 320w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 344w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 372w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-460-2x.webp 432w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-548-2x.webp 548w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-460-2x.webp 460w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-460-2x.webp 448w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-460-2x.webp 440w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-512-2x.webp 512w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-720-2x.webp 720w \n                                                ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:n.nickname}}),e._v(" "),t("NuxtLink",{staticClass:"o-user-list__image-link",attrs:{to:"/cestovatel/".concat(n.slug),"aria-label":"Čti více o cestovateli ".concat(n.nickname)}})],1)]),e._v(" "),t("div",{staticClass:"o-user-list__text"},[t("span",{staticClass:"o-user-list__nickname"},[t("NuxtLink",{staticClass:"o-user-list__nickname-link",attrs:{to:"/cestovatel/".concat(n.slug),"aria-label":"Čti více o cestovateli ".concat(n.nickname)}},[e._v(e._s(n.nickname))])],1)])])])])})),0)])])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);