(window.webpackJsonp=window.webpackJsonp||[]).push([[115,142],{421:function(e,t,n){"use strict";n.r(t);var o={name:"SkeletonoVideoListComponent",props:{skeletonThema:{type:String,required:!0},styleThema:{type:String,required:!1}}},r=n(1),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{class:"skeleton-o-video-list"+(e.styleThema?e.styleThema:"")},[t("div",{staticClass:"skeleton-o-video-list__outer"},[t("div",{staticClass:"skeleton-o-video-list__items"},e._l(3,(function(n){return t("div",{key:n,staticClass:"skeleton-o-video-list__item"},[t("div",{staticClass:"skeleton-o-video-list__item-inner"},[t("div",{class:"skeleton-o-video-list__image loading-image"+e.skeletonThema}),e._v(" "),t("div",{staticClass:"skeleton-o-video-list__text"},[t("h3",{class:"skeleton-o-video-list__title loading-image"+e.skeletonThema})])])])})),0)])])}),[],!1,null,null,null);t.default=component.exports},429:function(e,t,n){"use strict";n.r(t);n(253),n(12),n(57),n(25),n(254),n(41);var o={name:"OrganismsoVideoListComponent",components:{skeletonoVideoList:n(421).default},props:{videos:{type:Array,required:!0},images:{type:Array,required:!0},type:{type:String,required:!1},styleThema:{type:String,required:!1},styleThemaLoading:{type:String,required:!1},styleAlign:{type:String,required:!1},skeleton:{type:Boolean,required:!1},skeletonThema:{type:String,required:!1},skeletonNumber:{type:Number,required:!1}},data:function(){return{videosFiltered:[]}},watch:{videos:{handler:function(e){this.filteredVideos()},immediate:!0,deep:!0}},mounted:function(){this.filteredVideos()},methods:{filteredVideos:function(){var e=this;this.type?this.videosFiltered=this.videos.filter((function(video){return video.type===e.type})):this.videosFiltered=this.videos}}},r=n(1),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[null===e.videos&&e.skeleton?t("skeletonoVideoList",{attrs:{styleThema:e.styleThema?e.styleThema:"",skeletonThema:e.skeletonThema?e.skeletonThema:"",skeletonNumber:e.skeletonNumber}}):e._e(),e._v(" "),null===e.videosFiltered||e.skeleton?e._e():t("client-only",[t("div",{class:"o-video-list"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")},[t("div",{staticClass:"o-video-list__outer"},[t("div",{staticClass:"o-video-list__items"},e._l(e.videosFiltered,(function(video){return t("div",{key:video.id,staticClass:"o-video-list__item print-section"},[t("div",{staticClass:"o-video-list__item-inner"},[t("div",{class:"o-video-list__image loading-image "+(e.styleThemaLoading?e.styleThemaLoading:"")},[e.images&&e.images.find((function(image){return image.id===video.id_image}))?t("div",{staticClass:"o-video-list__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-video-list__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 320px, (max-width: 374px) 340px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 360px, (max-width: 1019px) 320px, (max-width: 1219px) 384px, (max-width: 1399px) 442px, 620px","data-srcset":"\n                                            https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===video.id_image})).source+"h-"+e.images.find((function(image){return image.id===video.id_image})).name,"-320.webp 320w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===video.id_image})).source+"h-"+e.images.find((function(image){return image.id===video.id_image})).name,"-340.webp 340w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===video.id_image})).source+"h-"+e.images.find((function(image){return image.id===video.id_image})).name,"-360.webp 360w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===video.id_image})).source+"h-"+e.images.find((function(image){return image.id===video.id_image})).name,"-384.webp 384w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===video.id_image})).source+"h-"+e.images.find((function(image){return image.id===video.id_image})).name,"-420.webp 420w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===video.id_image})).source+"h-"+e.images.find((function(image){return image.id===video.id_image})).name,"-536.webp 536w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===video.id_image})).source+"h-"+e.images.find((function(image){return image.id===video.id_image})).name,"-620.webp 620w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===video.id_image})).source+"h-"+e.images.find((function(image){return image.id===video.id_image})).name,"-640-2x.webp 640w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===video.id_image})).source+"h-"+e.images.find((function(image){return image.id===video.id_image})).name,"-680-2x.webp 680w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===video.id_image})).source+"h-"+e.images.find((function(image){return image.id===video.id_image})).name,"-720-2x.webp 720w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===video.id_image})).source+"h-"+e.images.find((function(image){return image.id===video.id_image})).name,"-768-2x.webp 768w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===video.id_image})).source+"h-"+e.images.find((function(image){return image.id===video.id_image})).name,"-840-2x.webp 840w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===video.id_image})).source+"h-"+e.images.find((function(image){return image.id===video.id_image})).name,"-1072-2x.webp 1072w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===video.id_image})).source+"h-"+e.images.find((function(image){return image.id===video.id_image})).name,"-1240-2x.webp 1240w\n                                            "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===video.id_image})).source+e.images.find((function(image){return image.id===video.id_image})).name,".webp"),alt:video.title?video.title:"Obrázek videa"}})]):t("div",{staticClass:"o-video-list__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-video-list__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 320px, (max-width: 374px) 340px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 360px, (max-width: 1019px) 320px, (max-width: 1219px) 384px, (max-width: 1399px) 442px, 620px","data-srcset":"\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-320.webp 320w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-340.webp 340w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-360.webp 360w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-384.webp 384w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-420.webp 420w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-536.webp 536w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-620.webp 620w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-640-2x.webp 640w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-680-2x.webp 680w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-720-2x.webp 720w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-768-2x.webp 768w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-840-2x.webp 840w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-1072-2x.webp 1072w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-1240-2x.webp 1240w\n                                            ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:video.title?video.title:"Obrázek videa"}})]),e._v(" "),video.slug?t("NuxtLink",{staticClass:"o-video-list__image-link",attrs:{to:"/videa/".concat(video.slug),"aria-label":"Koukni se na video ".concat(video.title)}}):e._e()],1),e._v(" "),t("div",{staticClass:"o-video-list__text"},[video.title?t("h3",{staticClass:"o-video-list__title"},[t("NuxtLink",{staticClass:"o-video-list__title-link",attrs:{to:"/videa/".concat(video.slug)}},[e._v(e._s(video.title))])],1):e._e()])])])})),0)])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);