(window.webpackJsonp=window.webpackJsonp||[]).push([[32,122],{591:function(e,t,n){"use strict";n.r(t);var r={name:"SkeletonoArticleListUserComponent",props:{styleThema:{type:String,required:!0}}},c=n(2),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-o-article-list-user"},[t("div",{staticClass:"skeleton-o-article-list-user-list__outer"},[t("div",{staticClass:"skeleton-o-article-list-user__items"},e._l(3,(function(n){return t("div",{key:n,staticClass:"skeleton-o-article-list-user__item"},[t("div",{staticClass:"skeleton-o-article-list-user__item-inner"},[t("div",{class:"skeleton-o-article-list-user__image loading-image"+e.styleThema}),e._v(" "),t("div",{staticClass:"skeleton-o-article-list-user__text"},[t("h3",{class:"skeleton-o-article-list-user__title loading-image"+e.styleThema}),e._v(" "),t("p",{class:"skeleton-o-article-list-user__perex loading-image"+e.styleThema})])])])})),0)])])}),[],!1,null,null,null);t.default=component.exports},613:function(e,t,n){"use strict";n.r(t);n(252),n(12),n(57),n(25);var r={name:"OrganismsoArticleListComponent",components:{skeletonoArticleListUser:n(591).default},props:{posts:{type:Array,required:!0},images:{type:Array,required:!0},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1},skeleton:{type:Boolean,required:!0}}},c=n(2),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[e.posts&&0===e.posts.length&&e.skeleton?t("skeletonoArticleListUser",{attrs:{styleThema:" -skeleton-blue"}}):e._e(),e._v(" "),null!==e.posts?t("client-only",[t("div",{class:"o-article-list-user"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")},[t("div",{staticClass:"o-article-list-user-list__outer"},[t("div",{staticClass:"o-article-list-user__items"},e._l(e.posts,(function(n){return t("div",{key:n.id,staticClass:"o-article-list-user__item print-section"},[t("div",{staticClass:"o-article-list-user__item-inner"},[t("div",{staticClass:"o-article-list-user__image loading-image -blue"},[e.images&&e.images.find((function(image){return image.id===n.id_image_cover}))?t("div",{staticClass:"o-article-list-user__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-article-list-user__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 320px, (max-width: 374px) 340px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 360px, (max-width: 1019px) 320px, (max-width: 1219px) 384px, (max-width: 1399px) 442px, 620px","data-srcset":"\n                                            https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"h-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-320.webp 320w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"h-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-340.webp 340w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"h-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-360.webp 360w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"h-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-384.webp 384w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"h-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-420.webp 420w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"h-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-536.webp 536w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"h-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-620.webp 620w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"h-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-640-2x.webp 640w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"h-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-680-2x.webp 680w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"h-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-720-2x.webp 720w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"h-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-768-2x.webp 768w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"h-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-840-2x.webp 840w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"h-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-1072-2x.webp 1072w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"h-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-1240-2x.webp 1240w\n                                            "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,".webp"),alt:n.title?n.title:"Obrázek článku"}})]):t("div",{staticClass:"o-article-list-user__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-article-list-user__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 320px, (max-width: 374px) 340px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 360px, (max-width: 1019px) 320px, (max-width: 1219px) 384px, (max-width: 1399px) 442px, 620px","data-srcset":"\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-320.webp 320w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-340.webp 340w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-360.webp 360w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-384.webp 384w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-420.webp 420w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-536.webp 536w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-620.webp 620w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-640-2x.webp 640w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-680-2x.webp 680w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-720-2x.webp 720w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-768-2x.webp 768w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-840-2x.webp 840w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-1072-2x.webp 1072w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-1240-2x.webp 1240w\n                                            ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:n.title?n.title:"Obrázek článku"}})]),e._v(" "),n.slug?t("NuxtLink",{staticClass:"o-article-list-user__image-link",attrs:{to:"/clanky/".concat(n.slug),"aria-label":"Přečti si článek ".concat(n.title)}}):e._e()],1),e._v(" "),t("div",{staticClass:"o-article-list-user__text"},[n.title?t("h3",{staticClass:"o-article-list-user__title"},[t("NuxtLink",{staticClass:"o-article-list-user__title-link",attrs:{to:"/clanky/".concat(n.slug)}},[e._v(e._s(n.title))])],1):e._e(),e._v(" "),n.perex?t("p",{staticClass:"o-article-list-user__perex"},[t("NuxtLink",{staticClass:"o-article-list-user__perex-link",attrs:{to:"/clanky/".concat(n.slug)}},[e._v(e._s(n.perex))])],1):e._e()])])])})),0)])])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);