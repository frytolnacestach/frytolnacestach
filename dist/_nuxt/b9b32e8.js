(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{389:function(t,e,n){"use strict";n.r(e);n(241),n(13),n(68),n(29),n(43);var r={name:"OrganismsoVideoListComponent",props:{videos:{type:Array,required:!0},images:{type:Array,required:!0},type:{type:String,required:!1},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1}},computed:{filteredVideos:function(){var t=this;return this.type?this.videos.filter((function(video){return video.type===t.type})):this.videos}}},c=n(2),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{class:"o-video-list"+(t.styleThema?t.styleThema:"")+(t.styleAlign?t.styleAlign:"")},[e("div",{staticClass:"o-video-list__outer"},[e("div",{staticClass:"o-video-list__items"},t._l(t.filteredVideos,(function(video){return e("div",{key:video.id,staticClass:"o-video-list__item print-section"},[e("div",{staticClass:"o-video-list__item-inner"},[e("div",{staticClass:"o-video-list__image loading-image -gray"},[t.images&&t.images.find((function(image){return image.id===video.id_image}))?e("div",{staticClass:"o-video-list__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-video-list__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 320px, (max-width: 374px) 340px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 360px, (max-width: 1019px) 320px, (max-width: 1219px) 384px, (max-width: 1399px) 442px, 620px","data-srcset":"\n                                    https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===video.id_image})).source+"h-"+t.images.find((function(image){return image.id===video.id_image})).name,"-320.webp 320w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+"h-"+t.images.find((function(image){return image.id===video.id_image})).name,"-340.webp 340w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+"h-"+t.images.find((function(image){return image.id===video.id_image})).name,"-360.webp 360w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+"h-"+t.images.find((function(image){return image.id===video.id_image})).name,"-384.webp 384w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+"h-"+t.images.find((function(image){return image.id===video.id_image})).name,"-420.webp 420w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+"h-"+t.images.find((function(image){return image.id===video.id_image})).name,"-536.webp 536w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+"h-"+t.images.find((function(image){return image.id===video.id_image})).name,"-620.webp 620w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+"h-"+t.images.find((function(image){return image.id===video.id_image})).name,"-640-2x.webp 640w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+"h-"+t.images.find((function(image){return image.id===video.id_image})).name,"-680-2x.webp 680w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+"h-"+t.images.find((function(image){return image.id===video.id_image})).name,"-720-2x.webp 720w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+"h-"+t.images.find((function(image){return image.id===video.id_image})).name,"-768-2x.webp 768w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+"h-"+t.images.find((function(image){return image.id===video.id_image})).name,"-840-2x.webp 840w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+"h-"+t.images.find((function(image){return image.id===video.id_image})).name,"-1072-2x.webp 1072w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+"h-"+t.images.find((function(image){return image.id===video.id_image})).name,"-1240-2x.webp 1240w\n                                    "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===video.id_image})).source+t.images.find((function(image){return image.id===video.id_image})).name,".webp"),alt:video.title?video.title:"Obrázek videa"}})]):e("div",{staticClass:"o-video-list__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-video-list__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 320px, (max-width: 374px) 340px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 360px, (max-width: 1019px) 320px, (max-width: 1219px) 384px, (max-width: 1399px) 442px, 620px","data-srcset":"\n                                    https://image.frytolnacestach.cz/storage/_default/h-hero-320.webp 320w,\n                                    https://image.frytolnacestach.cz/storage/_default/h-hero-340.webp 340w,\n                                    https://image.frytolnacestach.cz/storage/_default/h-hero-360.webp 360w,\n                                    https://image.frytolnacestach.cz/storage/_default/h-hero-384.webp 384w,\n                                    https://image.frytolnacestach.cz/storage/_default/h-hero-420.webp 420w,\n                                    https://image.frytolnacestach.cz/storage/_default/h-hero-536.webp 536w,\n                                    https://image.frytolnacestach.cz/storage/_default/h-hero-620.webp 620w,\n                                    https://image.frytolnacestach.cz/storage/_default/h-hero-640-2x.webp 640w,\n                                    https://image.frytolnacestach.cz/storage/_default/h-hero-680-2x.webp 680w,\n                                    https://image.frytolnacestach.cz/storage/_default/h-hero-720-2x.webp 720w,\n                                    https://image.frytolnacestach.cz/storage/_default/h-hero-768-2x.webp 768w,\n                                    https://image.frytolnacestach.cz/storage/_default/h-hero-840-2x.webp 840w,\n                                    https://image.frytolnacestach.cz/storage/_default/h-hero-1072-2x.webp 1072w,\n                                    https://image.frytolnacestach.cz/storage/_default/h-hero-1240-2x.webp 1240w\n                                    ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:video.title?video.title:"Obrázek videa"}})]),t._v(" "),video.slug?e("NuxtLink",{staticClass:"o-video-list__image-link",attrs:{to:"/videa/".concat(video.slug),"aria-label":"Koukni se na video ".concat(video.title)}}):t._e()],1),t._v(" "),e("div",{staticClass:"o-video-list__text"},[video.title?e("h3",{staticClass:"o-video-list__title"},[e("NuxtLink",{staticClass:"o-video-list__title-link",attrs:{to:"/videa/".concat(video.slug)}},[t._v(t._s(video.title))])],1):t._e()])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);