(window.webpackJsonp=window.webpackJsonp||[]).push([[54,5,7,8,10,14,17,22,37],{318:function(t,e,n){"use strict";n.r(e);var o={name:"MoleculesmHeadlineComponent",props:{title:{type:String,required:!0},titleValue:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},r=n(6),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{class:"m-headline"+(t.styleThema?t.styleThema:"")+(t.styleAlign?t.styleAlign:"")+(t.styleGap?t.styleGap:"")},[e("h2",{staticClass:"m-headline__title"},[t._v(t._s(t.title)+" "+t._s(t.titleValue?t.titleValue:""))]),t._v(" "),t.perex?e("p",{staticClass:"m-headline__perex pt-1"},[t._v(t._s(t.perex))]):t._e()])}),[],!1,null,null,null);e.default=component.exports},319:function(t,e,n){"use strict";n.r(e);n(210),n(13),n(65),n(27),n(42);var o={name:"OrganismsoVideoListComponent",props:{videos:{type:Array,required:!0},images:{type:Array,required:!0},type:{type:String,required:!1},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1}},computed:{filteredVideos:function(){var t=this;return this.type?this.videos.filter((function(video){return video.type===t.type})):this.videos}}},r=n(6),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{class:"o-video-list"+(t.styleThema?t.styleThema:"")+(t.styleAlign?t.styleAlign:"")},[e("div",{staticClass:"o-video-list__outer"},[e("div",{staticClass:"o-video-list__items"},t._l(t.filteredVideos,(function(video){return e("div",{key:video.id,staticClass:"o-video-list__item"},[e("div",{staticClass:"o-video-list__item-inner"},[e("div",{staticClass:"o-video-list__image loading-image"},[t.images&&t.images.find((function(image){return image.id===video.id_image}))?e("div",{staticClass:"o-video-list__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-video-list__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 340px, (max-width: 439px) 400px, (max-width: 575px) 540px, (max-width: 767px) 400px, (max-width: 991px) 340px, 400px","data-srcset":"\n                                    https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===video.id_image})).source+t.images.find((function(image){return image.id===video.id_image})).name,"-340.webp 340w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+t.images.find((function(image){return image.id===video.id_image})).name,"-400.webp 400w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+t.images.find((function(image){return image.id===video.id_image})).name,"-540.webp 540w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+t.images.find((function(image){return image.id===video.id_image})).name,"-680-2x.webp 680w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+t.images.find((function(image){return image.id===video.id_image})).name,"-800-2x.webp 800w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+t.images.find((function(image){return image.id===video.id_image})).name,"-1080-2x.webp 1080w\n                                    "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===video.id_image})).source+t.images.find((function(image){return image.id===video.id_image})).name,".webp"),alt:video.title?video.title:"Obrázek videa"}})]):e("div",{staticClass:"o-video-list__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-video-list__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 340px, (max-width: 439px) 400px, (max-width: 575px) 540px, (max-width: 767px) 400px, (max-width: 991px) 340px, 400px","data-srcset":"\n                                    https://image.frytolnacestach.cz/storage/_default/hero-340.webp 340w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-400.webp 400w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-540.webp 540w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-680-2x.webp 680w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-800-2x.webp 800w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-1080-2x.webp 1080w\n                                    ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:video.title?video.title:"Obrázek videa"}})]),t._v(" "),video.slug?e("NuxtLink",{staticClass:"o-video-list__image-link",attrs:{to:"/videa/".concat(video.slug),"aria-label":"Koukni se na video ".concat(video.title)}}):t._e()],1),t._v(" "),e("div",{staticClass:"o-video-list__text"},[video.title?e("h3",{staticClass:"o-video-list__title"},[e("NuxtLink",{staticClass:"o-video-list__title-link",attrs:{to:"/videa/".concat(video.slug)}},[t._v(t._s(video.title))])],1):t._e()])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},320:function(t,e,n){"use strict";n.r(e);n(210),n(13),n(65),n(27);var o={name:"OrganismsoArticleListComponent",props:{posts:{type:Array,required:!0},images:{type:Array,required:!0},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1}}},r=n(6),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{class:"o-article-list"+(t.styleThema?t.styleThema:"")+(t.styleAlign?t.styleAlign:"")},[e("div",{staticClass:"o-article-list-list__outer"},[e("div",{staticClass:"o-article-list__items"},t._l(t.posts,(function(n){return e("div",{key:n.id,staticClass:"o-article-list__item"},[e("div",{staticClass:"o-article-list__item-inner"},[e("div",{staticClass:"o-article-list__image loading-image"},[t.images&&t.images.find((function(image){return image.id===n.id_image_cover}))?e("div",{staticClass:"o-article-list__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-article-list__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 340px, (max-width: 439px) 400px, (max-width: 575px) 540px, (max-width: 767px) 400px, (max-width: 991px) 340px, 400px","data-srcset":"\n                                    https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-340.webp 340w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-400.webp 400w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-767.webp 540w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-680-2x.webp 680w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-800-2x.webp 800w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-1080-2x.webp 1080w\n                                    "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,".webp"),alt:n.title?n.title:"Obrázek článku"}})]):e("div",{staticClass:"o-article-list__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-article-list__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 340px, (max-width: 439px) 400px, (max-width: 575px) 540px, (max-width: 767px) 400px, (max-width: 991px) 340px, 992px","data-srcset":"\n                                    https://image.frytolnacestach.cz/storage/_default/hero-340.webp 340w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-400.webp 400w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-767.webp 540w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-680-2x.webp 680w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-800-2x.webp 800w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-1080-2x.webp 1080w\n                                    ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:n.title?n.title:"Obrázek článku"}})]),t._v(" "),n.slug?e("NuxtLink",{staticClass:"o-article-list__image-link",attrs:{to:"/clanky/".concat(n.slug),"aria-label":"Přečti si článek ".concat(n.title)}}):t._e()],1),t._v(" "),e("div",{staticClass:"o-article-list__text"},[n.title?e("h3",{staticClass:"o-article-list__title"},[e("NuxtLink",{staticClass:"o-article-list__title-link",attrs:{to:"/clanky/".concat(n.slug)}},[t._v(t._s(n.title))])],1):t._e(),t._v(" "),n.perex?e("p",{staticClass:"o-article-list__perex"},[e("NuxtLink",{staticClass:"o-article-list__perex-link",attrs:{to:"/clanky/".concat(n.slug)}},[t._v(t._s(n.perex))])],1):t._e()])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},322:function(t,e,n){"use strict";n.r(e);var o={name:"OrganismsoAdGoogleSidebarComponent",props:{adStyle:{type:String,requred:!1,default:"display:block"},adClient:{type:String,requred:!1,default:"ca-pub-5217753750259737"},adSlot:{type:String,requred:!1,default:"5043852899"},adFormat:{type:String,requred:!1,default:"auto"},adResponsive:{type:String,requred:!1,default:"true"}},methods:{adsenseAddLoad:function(){var t=document.createElement("script");t.type="text/javascript",t.text="(adsbygoogle = window.adsbygoogle || []).push({});",document.getElementsByTagName("body")[0].appendChild(t)}},mounted:function(){this.adsenseAddLoad()}},r=n(6),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-ad-google-sidebar"},[e("ins",{staticClass:"adsbygoogle",style:t.adStyle,attrs:{"data-ad-client":t.adClient,"data-ad-slot":t.adSlot,"data-ad-format":t.adFormat,"data-full-width-responsive":t.adResponsive}})])}),[],!1,null,null,null);e.default=component.exports},330:function(t,e,n){"use strict";n.r(e);n(27);var o={name:"MoleculesmNavBreadcrumbsComponent",props:{links:{type:Array,required:!0},place:{type:Object,required:!0},tab:{type:String,required:!1},tabName:{type:String,required:!1}}},r=n(6),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"m-nav-breadcrumbs"},[e("div",{staticClass:"m-nav-breadcrumbs__outer"},[e("div",{staticClass:"m-nav-breadcrumbs__inner"},[e("ul",{staticClass:"m-nav-breadcrumbs__items"},[t._l(t.links,(function(n){return e("li",{key:n.id,staticClass:"m-nav-breadcrumbs__item"},["link"===n.status?e("NuxtLink",{staticClass:"m-nav-breadcrumbs__link",attrs:{to:n.url}},[t._v(t._s(n.name))]):"span"===n.status?e("span",{staticClass:"m-nav-breadcrumbs__span"},[t._v(t._s(n.name))]):t._e()],1)})),t._v(" "),t.place?e("li",{staticClass:"m-nav-breadcrumbs__item"},[void 0!==t.tab&&"default"!==t.tab?e("NuxtLink",{staticClass:"m-nav-breadcrumbs__link",attrs:{to:t.links[1].url+"/"+t.place.slug}},[t._v(t._s(t.place.name))]):e("span",{staticClass:"m-nav-breadcrumbs__span"},[t._v(t._s(t.place.name))])],1):t._e(),t._v(" "),void 0!==t.tab&&"default"!==t.tab?e("li",{staticClass:"m-nav-breadcrumbs__item"},[e("span",{staticClass:"m-nav-breadcrumbs__span"},[t._v(t._s(t.tabName))])]):t._e()],2)])])])}),[],!1,null,null,null);e.default=component.exports},331:function(t,e,n){"use strict";n.r(e);n(210),n(13),n(65),n(27),n(42);var o={name:"OrganismsoCoverPlaceDetailComponent",props:{places:{type:Array,required:!0},images:{type:Array,default:null},type:{type:String,required:!0},biggest:{type:String,required:!1}},computed:{filteredPlaces:function(){return"big"===this.biggest?this.places.filter((function(t){return"yes"===t.biggest})):"nobig"===this.biggest?this.places.filter((function(t){return"yes"!==t.biggest})):this.places}}},r=n(6),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-cover-place-detail"},[e("div",{staticClass:"o-cover-place-detail__outer"},[e("div",{staticClass:"o-cover-place-detail__inner"},[e("div",{staticClass:"o-cover-place-detail__items"},t._l(t.filteredPlaces,(function(n){return e("div",{key:n.id,staticClass:"o-cover-place-detail__item"},[e("div",{staticClass:"o-cover-place-detail__content"},[e("div",{staticClass:"o-cover-place-detail__image loading-image"},[t.images&&t.images.find((function(image){return image.id===n.id_image_cover}))?e("div",{staticClass:"o-cover-place-detail__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-cover-place-detail__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 250px, (max-width: 575px) 220px, (max-width: 1920px) 280px, 360px","data-srcset":"\n                                        https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-220.webp 220w,\n                                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-250.webp 250w,\n                                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-280.webp 280w,\n                                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-360.webp 360w,\n                                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-440-2x.webp 440w,\n                                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-500-2x.webp 500w,\n                                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-560-2x.webp 560w,\n                                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-720-2x.webp 720w\n                                        "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,".webp"),alt:n.name}})]):e("div",{staticClass:"o-cover-place-detail__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-cover-place-detail__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 250px, (max-width: 575px) 220px, (max-width: 1920px) 280px, 360px","data-srcset":"\n                                        https://image.frytolnacestach.cz/storage/_default/hero-220.webp 220w,\n                                        https://image.frytolnacestach.cz/storage/_default/hero-250.webp 250w,\n                                        https://image.frytolnacestach.cz/storage/_default/hero-280.webp 280w,\n                                        https://image.frytolnacestach.cz/storage/_default/hero-360.webp 360w,\n                                        https://image.frytolnacestach.cz/storage/_default/hero-440-2x.webp 440w,\n                                        https://image.frytolnacestach.cz/storage/_default/hero-500-2x.webp 500w,\n                                        https://image.frytolnacestach.cz/storage/_default/hero-560-2x.webp 560w,\n                                        https://image.frytolnacestach.cz/storage/_default/hero-720-2x.webp 720w\n                                        ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:n.name}})])]),t._v(" "),n.name?e("h3",{staticClass:"o-cover-place-detail__name"},[t._v("\n                            "+t._s(n.name)+"\n                        ")]):t._e(),t._v(" "),n.slug?e("NuxtLink",{staticClass:"o-cover-place-detail__link",attrs:{to:"/svet/".concat(t.type,"/").concat(n.slug),"aria-label":"Čti více o místě ".concat(n.name)}}):t._e()],1)])})),0)])])])}),[],!1,null,null,null);e.default=component.exports},332:function(t,e,n){"use strict";n.r(e);n(210),n(13),n(65),n(27);var o={name:"OrganismsoHeroPlaceComponent",props:{place:{type:Array,required:!0},images:{type:Array,required:!0}}},r=n(6),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-hero-place"},[e("div",{staticClass:"o-hero-place__container"},[e("div",{staticClass:"o-hero-place__image loading-image"},[t.images&&t.images.find((function(image){return image.id===t.place[0].id_image_hero}))?e("div",{staticClass:"o-hero-place__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-hero-place__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1920px","data-srcset":"\n                        https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===t.place[0].id_image_cover})).source+t.images.find((function(image){return image.id===t.place[0].id_image_cover})).name,"-374.webp 374w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.place[0].id_image_cover})).source+t.images.find((function(image){return image.id===t.place[0].id_image_cover})).name,"-575.webp 575w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.place[0].id_image_cover})).source+t.images.find((function(image){return image.id===t.place[0].id_image_cover})).name,"-767.webp 767w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.place[0].id_image_cover})).source+t.images.find((function(image){return image.id===t.place[0].id_image_cover})).name,"-991.webp 991w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.place[0].id_image_cover})).source+t.images.find((function(image){return image.id===t.place[0].id_image_cover})).name,"-1139.webp 1139w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.place[0].id_image_cover})).source+t.images.find((function(image){return image.id===t.place[0].id_image_cover})).name,"-1219.webp 1219w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.place[0].id_image_cover})).source+t.images.find((function(image){return image.id===t.place[0].id_image_cover})).name,"-1399.webp 1399w,\n                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===t.place[0].id_image_cover})).source+t.images.find((function(image){return image.id===t.place[0].id_image_cover})).name,"-1920.webp 1920w\n                        "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===t.place[0].id_image_cover})).source+t.images.find((function(image){return image.id===t.place[0].id_image_cover})).name,".webp"),alt:t.place[0].name?t.place[0].name:"Úvodní obrázek",preload:!0}})]):e("div",{staticClass:"o-hero-place__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-hero-place__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1920px","data-srcset":"\n                        https://image.frytolnacestach.cz/storage/_default/hero-374.webp 374w,\n                        https://image.frytolnacestach.cz/storage/_default/hero-575.webp 575w,\n                        https://image.frytolnacestach.cz/storage/_default/hero-767.webp 767w,\n                        https://image.frytolnacestach.cz/storage/_default/hero-991.webp 991w,\n                        https://image.frytolnacestach.cz/storage/_default/hero-1139.webp 1139w,\n                        https://image.frytolnacestach.cz/storage/_default/hero-1219.webp 1219w,\n                        https://image.frytolnacestach.cz/storage/_default/hero-1399.webp 1399w,\n                        https://image.frytolnacestach.cz/storage/_default/hero-1920.webp 1920w,\n                        https://image.frytolnacestach.cz/storage/_default/hero-748-2x.webp 748w,\n                        https://image.frytolnacestach.cz/storage/_default/hero-1150-2x.webp 1150w,\n                        https://image.frytolnacestach.cz/storage/_default/hero-1534-2x.webp 1534w,\n                        https://image.frytolnacestach.cz/storage/_default/hero-1982-2x.webp 1982w,\n                        https://image.frytolnacestach.cz/storage/_default/hero-2278-2x.webp 2278w,\n                        https://image.frytolnacestach.cz/storage/_default/hero-2438-2x.webp 2438w,\n                        https://image.frytolnacestach.cz/storage/_default/hero-2798-2x.webp 2798w,\n                        https://image.frytolnacestach.cz/storage/_default/hero-3840-2x.webp 3840w\n                        ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:t.place[0].name?t.place[0].name:"Úvodní obrázek",preload:!0}})]),t._v(" "),e("div",{staticClass:"o-hero-place__outer"},[e("div",{staticClass:"o-hero-place__inner"},[t.place[0].name?e("h1",{staticClass:"o-hero-place__headline"},[t._v(t._s(t.place[0].name))]):t._e()])])])])])}),[],!1,null,null,null);e.default=component.exports},333:function(t,e,n){"use strict";n.r(e);n(27);var o=n(23),r=(n(65),{name:"OrganismsoInformationBlockComponent",props:{styleThema:{type:String,required:!1},title:{type:String,required:!1},subtitle:{type:String,required:!1},perexWysiwyg:{type:String,required:!1},perexList:{type:Array,required:!1},perexListItemValueSubfix:{type:String,required:!1},perexInfo:{type:Array,required:!1},authorName:{type:String,required:!1},authorLink:{type:String,required:!1},authorTarget:{type:String,required:!1}},methods:{formatDate:function(t){var e=t.split("-"),n=Object(o.a)(e,2),r=n[0],c=n[1];return new Date("".concat(c,"-").concat(r,"-01")).toLocaleDateString("cs",{month:"long",year:"numeric"})}}}),c=n(6),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{class:"o-information-block"+(t.styleThema?t.styleThema:"")},[e("div",{staticClass:"o-information-block__outer"},[e("div",{staticClass:"o-information-block__inner"},[t.title?e("h2",{staticClass:"o-information-block__title",class:{"-m0":t.subtitle}},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.subtitle?e("span",{staticClass:"o-information-block__title-info"},[t._v(t._s(t.subtitle))]):t._e(),t._v(" "),e("div",{staticClass:"o-information-block__perex"},[t.perexWysiwyg?e("div",{staticClass:"o-information-block_wysiwyg",domProps:{innerHTML:t._s(t.perexWysiwyg)}}):t._e(),t._v(" "),t.perexList?e("div",{staticClass:"o-information-block__list"},[e("ul",{staticClass:"o-information-block__list-ul"},t._l(t.perexList,(function(n){return e("li",{key:n.name,staticClass:"o-information-block__list-li"},[e("h3",{staticClass:"o-information-block__list-h3"},[t._v(t._s(n.name))]),t._v(" "),e("span",{staticClass:"o-information-block__list-span"},[t._v(t._s(n.value)+" "+t._s(t.perexListItemValueSubfix))]),t._v(" "),e("i",{staticClass:"o-information-block__list-info"},[t._v("("+t._s(t.formatDate(n.date_update))+")")])])})),0)]):t._e(),t._v(" "),t.perexInfo?e("i",{staticClass:"o-information-block__info"},[t._v(t._s(t.perexInfo))]):t._e(),t._v(" "),t.authorName?e("div",{staticClass:"o-information-block__author"},[e("i",{staticClass:"m-author"},[t._v("zdroj. "),t.authorLink?e("a",{staticClass:"m-author__link",attrs:{href:t.authorLink,target:t.authorTarget}},[t._v(t._s(t.authorName))]):e("span",{staticClass:"m-author__span"},[t._v(t._s(t.authorName))])])]):t._e()])])])])}),[],!1,null,null,null);e.default=component.exports},373:function(t,e,n){"use strict";n.r(e);n(27);var o=n(10),r=(n(53),n(22),n(66),n(35),n(210),n(13),n(65),n(42),n(43),n(107),n(67),n(330)),c=n(318),l=n(322),d=n(320),m=n(331),_=n(332),f=n(333),h=n(319),v={name:"SvetKontinentSlugPage",components:{mNavBreadcrumbsPlace:r.default,mHeadline:c.default,oAdGoogleSidebar:l.default,oArticleList:d.default,oCoverPlaceDetail:m.default,oHeroPlace:_.default,oInformationBlock:f.default,oVideoList:h.default},data:function(){return{place:this.place,placesStates:this.placesStates,posts:this.posts,videos:this.videos,mNavBreadcrumbsPlaceArray:[{id:1,name:"Svět",url:"/svet",status:"link"},{id:2,name:"Kontinenty",url:"/svet/kontinent",status:"link"}]}},head:function(){var t=this;return{title:"".concat(this.place[0].name?this.place[0].name:"Kontinent"," | Frytol na cestách"),meta:[{hid:"description",name:"description",content:"".concat(this.place[0].information_chatgpt?this.place[0].information_chatgpt.slice(0,this.place[0].information_chatgpt.lastIndexOf(" ",150)).replace(/<\/?[^>]+(>|$)/g,""):this.place[0].name)},{name:"keywords",content:"".concat(this.place[0].name+", kontinent, státy, cestování, svět")},{property:"og:image",content:"".concat(this.place[0].id_image_hero?"https://image.frytolnacestach.cz/storage/"+this.imagePlace.find((function(image){return image.id===t.place[0].id_image_hero})).source+this.imagePlace.find((function(image){return image.id===t.place[0].id_image_hero})).name+".jpg":"https://image.frytolnacestach.cz/storage/main/og-default.png")},{hid:"og:title",content:"".concat(this.place[0].name?this.place[0].name:"Kontinent","  | Frytol na cestách")},{hid:"og:description",content:"".concat(this.place[0].information_chatgpt?this.place[0].information_chatgpt.slice(0,this.place[0].information_chatgpt.lastIndexOf(" ",150)).replace(/<\/?[^>]+(>|$)/g,""):this.place[0].name?this.place[0].name:"Kontinent")},{hid:"og:url",content:"".concat("https://frytolnacestach.cz","/svet/kontinent/").concat(this.place[0].slug)},{hid:"og:type",content:"website"}]}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,data,c,l,d,m,_,f,h,v,y,x,w;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.$axios,o=t.params,r=!1,data=null;case 3:if(r){e.next=44;break}return e.prev=4,e.next=7,n.$get("https://frytolnacestach-api.vercel.app/api/places-continent/".concat(o.slug));case 7:return c=e.sent,e.next=10,n.$get("https://frytolnacestach-api.vercel.app/api/places-states-continent/".concat(c[0].id));case 10:return l=e.sent,e.next=13,n.$get("https://frytolnacestach-api.vercel.app/api/videos-id-continent/".concat(c[0].id));case 13:return d=e.sent,e.next=16,n.$get("https://frytolnacestach-api.vercel.app/api/posts-id-continent/".concat(c[0].id));case 16:return m=e.sent,_=l.map((function(t){return t.id_image_cover})).filter((function(t){return null!==t&&""!==t})),f=d.map((function(video){return video.id_image})).filter((function(t){return null!==t&&""!==t})),h=m.map((function(t){return t.id_image_cover})).filter((function(t){return null!==t&&""!==t})),e.next=22,n.$get("https://frytolnacestach-api.vercel.app/api/image-id/".concat(c[0].id_image_hero));case 22:return v=e.sent,e.next=25,n.$get("https://frytolnacestach-api.vercel.app/api/images-array?id=".concat(_.join(",")));case 25:return y=e.sent,e.next=28,n.$get("https://frytolnacestach-api.vercel.app/api/images-array?id=".concat(f.join(",")));case 28:return x=e.sent,e.next=31,n.$get("https://frytolnacestach-api.vercel.app/api/images-array?id=".concat(h.join(",")));case 31:w=e.sent,data={place:c,placesStates:l,videos:d,posts:m,imagePlace:v,imagesStates:y,imagesVideos:x,imagesPosts:w},r=!0,e.next=42;break;case 36:return e.prev=36,e.t0=e.catch(4),console.log("API ERROR - KONTINENT DETAIL: ".concat(o.slug)),console.error(e.t0),e.next=42,new Promise((function(t){return setTimeout(t,1e3)}));case 42:e.next=3;break;case 44:return e.abrupt("return",data);case 45:case"end":return e.stop()}}),e,null,[[4,36]])})))()},updated:function(){window.lazySizes&&window.lazySizes.update()}},y=n(6),component=Object(y.a)(v,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"t-main -bg-world -pt-menu",attrs:{role:"main"}},[e("section",{staticClass:"t-section -px-world mt-2 -p0"},[e("div",{staticClass:"t-section__inner"},[e("mNavBreadcrumbsPlace",{attrs:{links:t.mNavBreadcrumbsPlaceArray,place:t.place[0]}})],1)]),t._v(" "),e("section",{staticClass:"t-section -px-world -p0"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"t-grid -world-hero"},[e("div",{staticClass:"t-grid__section -hero-place"},[e("oHeroPlace",{attrs:{place:t.place,images:t.imagePlace}})],1),t._v(" "),e("div",{staticClass:"t-grid__section -hot-info-hero"},[e("div",{staticClass:"js_o-hot-info-hero o-hot-info-hero"},[e("div",{staticClass:"o-hot-info-hero__outer"},[e("div",{staticClass:"o-hot-info-hero__inner"},[e("div",{staticClass:"o-hot-info-hero__items"},[t.place[0].number_states?e("div",{staticClass:"o-hot-info-hero__item"},[e("div",{staticClass:"o-hot-info-hero__container"},[e("div",{staticClass:"o-hot-info-hero__content"},[e("div",{staticClass:"o-hot-info-hero__text"},[e("span",{staticClass:"o-hot-info-hero__title"},[t._v("Počet států")]),t._v(" "),e("span",{staticClass:"o-hot-info-hero__value"},[t._v(t._s(t.place[0].number_states))])])])])]):t._e(),t._v(" "),t.place[0].area?e("div",{staticClass:"o-hot-info-hero__item"},[e("div",{staticClass:"o-hot-info-hero__container"},[e("div",{staticClass:"o-hot-info-hero__content"},[e("div",{staticClass:"o-hot-info-hero__text"},[e("span",{staticClass:"o-hot-info-hero__title"},[t._v("Rozloha")]),t._v(" "),e("span",{staticClass:"o-hot-info-hero__value"},[t._v(t._s(0!==t.place[0].area?t.place[0].area.toLocaleString("cs-CZ"):t.place[0].area)+" km²")])])])])]):t._e(),t._v(" "),t.place[0].population?e("div",{staticClass:"o-hot-info-hero__item"},[e("div",{staticClass:"o-hot-info-hero__container"},[e("div",{staticClass:"o-hot-info-hero__content"},[e("div",{staticClass:"o-hot-info-hero__text"},[e("span",{staticClass:"o-hot-info-hero__title"},[t._v("Počet obyvatel")]),t._v(" "),e("span",{staticClass:"o-hot-info-hero__value"},[t._v(t._s(0!==t.place[0].population?t.place[0].population.toLocaleString("cs-CZ"):t.place[0].population))])])])])]):t._e(),t._v(" "),t.place[0].population_density?e("div",{staticClass:"o-hot-info-hero__item"},[e("div",{staticClass:"o-hot-info-hero__container"},[e("div",{staticClass:"o-hot-info-hero__content"},[e("div",{staticClass:"o-hot-info-hero__text"},[e("span",{staticClass:"o-hot-info-hero__title"},[t._v("Hustota obyvatel")]),t._v(" "),e("span",{staticClass:"o-hot-info-hero__value"},[t._v(t._s(0!==t.place[0].population_density?t.place[0].population_density.toLocaleString("cs-CZ"):t.place[0].population_density)+"/km²")])])])])]):t._e()])])])])])])])]),t._v(" "),e("section",{staticClass:"t-section -px-world -p0"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"t-grid -world-content-with-ad"},[e("div",{staticClass:"t-grid__section -content"},[t.place[0].information_chatgpt?e("section",{staticClass:"t-section"},[e("div",{staticClass:"t-section__inner"},[e("oInformationBlock",{attrs:{title:"O kontinentu "+(t.place[0].name?t.place[0].name:""),perexWysiwyg:t.place[0].information_chatgpt,authorName:"ChatGPT",authorLink:"https://chat.openai.com/chat",authorTarget:"_blank"}})],1)]):t._e()]),t._v(" "),e("div",{staticClass:"t-grid__section -ad"},[e("section",{staticClass:"t-section -px-world my-2"},[e("div",{staticClass:"t-section__inner"},[e("oAdGoogleSidebar")],1)])])])])]),t._v(" "),e("section",{staticClass:"t-section -p0"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"t-grid -world-ful"},[e("div",{staticClass:"t-grid__section -content"},[e("section",{staticClass:"t-section -p0 -py4 -px-world-big -h-scroll"},[e("div",{staticClass:"t-section__inner"},[e("mHeadline",{attrs:{title:"Všechny státy na kontinentu",titleValue:t.place[0].name,styleAlign:" -p-left",styleThema:" -world",styleGap:" mb-2"}}),t._v(" "),e("oCoverPlaceDetail",{attrs:{places:t.placesStates,images:t.imagesStates,type:"stat"}})],1)]),t._v(" "),t.videos[0]?e("section",{staticClass:"t-section -p0 -bg-extra-dark-gray py-4"},[e("div",{staticClass:"t-section__inner"},[e("mHeadline",{attrs:{title:"Videa z kontinentu",titleValue:t.place[0].name,styleThema:" -world-dark",styleAlign:" -p-left",styleGap:" mb-2"}}),t._v(" "),e("oVideoList",{attrs:{videos:t.videos,images:t.imagesVideos,type:"travel",styleThema:" -world",styleAlign:" -p-left"}})],1)]):t._e(),t._v(" "),t.posts[0]?e("section",{staticClass:"t-section -p0 -bg-extra-dark-gray py-4"},[e("div",{staticClass:"t-section__inner"},[e("mHeadline",{attrs:{title:"Články z kontinetu",titleValue:t.place[0].name,styleThema:" -world-dark",styleAlign:" -p-left",styleGap:" mb-2"}}),t._v(" "),e("oArticleList",{attrs:{posts:t.posts,images:t.imagesPosts,styleThema:" -world",styleAlign:" -p-left"}})],1)]):t._e()])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);